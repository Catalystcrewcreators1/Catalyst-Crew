/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://catalyst-crew-alpha.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/private'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot'],
        allow: '/',
        disallow: ['/admin', '/api', '/private'],
        crawlDelay: 10,
      },
    ],
    additionalSitemaps: [
      'https://catalyst-crew-alpha.vercel.app/sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml', '/admin/*', '/api/*'],
  generateIndexSitemap: true,
  outDir: 'public',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
}
