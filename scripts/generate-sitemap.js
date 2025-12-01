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

console.log('Generating sitemap for:', siteUrl);

// Define routes with their priorities and change frequencies
const routes = [
  // Main pages
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.9 },
  
  // Services
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/design', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/graphic-design', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/development', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/brand-identity', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/print-design', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/digital-design', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/social-media', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/illustration', changefreq: 'weekly', priority: 0.7 },
  { url: '/services/ai-bot', changefreq: 'weekly', priority: 0.9 },
  
  // Portfolio & Work
  { url: '/portfolio', changefreq: 'weekly', priority: 0.9 },
  
  // Company
  { url: '/team', changefreq: 'monthly', priority: 0.7 },
  { url: '/testimonials', changefreq: 'monthly', priority: 0.6 },
  { url: '/careers', changefreq: 'monthly', priority: 0.5 },
  { url: '/mission', changefreq: 'yearly', priority: 0.5 },
  
  // Other pages
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'daily', priority: 0.8 },
  { url: '/events', changefreq: 'weekly', priority: 0.7 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
];

// Generate sitemap
async function generateSitemap() {
  try {
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
    
    // Write to file
    const sitemapPath = resolve('./public/sitemap.xml');
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
