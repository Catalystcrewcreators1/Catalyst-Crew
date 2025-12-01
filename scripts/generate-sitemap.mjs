import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: resolve(__dirname, '../.env') });

// Website URL from environment or default
const siteUrl = process.env.VITE_SITE_URL || 'https://catalyst-crew-alpha.vercel.app';

// Define routes with their priorities and change frequencies
const routes = [
  // Main pages
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.9 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'daily', priority: 0.8 },
  
  // Services subpages
  { url: '/services/web-development', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/mobile-apps', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/ui-ux-design', changefreq: 'weekly', priority: 0.7 },
  
  // Blog posts (example - add your actual blog posts here)
  { url: '/blog/first-post', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/second-post', changefreq: 'monthly', priority: 0.6 },
];

// Create sitemap
async function generateSitemap() {
  try {
    console.log('Generating sitemap for:', siteUrl);
    
    // Create a stream to write to
    const sitemapStream = new SitemapStream({
      hostname: siteUrl,
      lastmodDateOnly: true,
      xmlns: {
        // XML namespaces
        news: false,
        xhtml: true,
        image: true,
        video: false
      }
    });

    // Add all routes to sitemap
    routes.forEach(route => {
      sitemapStream.write({
        url: route.url,
        changefreq: route.changefreq,
        priority: route.priority,
        lastmod: new Date().toISOString()
      });
    });

    // End the stream
    sitemapStream.end();

    // Generate XML
    const sitemap = await streamToPromise(sitemapStream.pipe(createGzip()));
    
    // Create public directory if it doesn't exist
    const publicDir = resolve(__dirname, '../public');
    if (!existsSync(publicDir)) {
      mkdirSync(publicDir, { recursive: true });
    }
    
    // Write to file
    const sitemapPath = resolve(publicDir, 'sitemap.xml');
    writeFileSync(sitemapPath, sitemap);
    
    console.log(`✅ Sitemap generated at: ${sitemapPath}`);
    return true;
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the sitemap generator
generateSitemap();
