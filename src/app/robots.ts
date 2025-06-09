export const dynamic = 'force-static'

import type { MetadataRoute } from 'next'

// Replace with your actual domain
const URL = 'https://algultransfer.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Apply rules to all crawlers
      allow: '/', // Allow crawling of the entire site
      // disallow: '/private/', // Example: disallow specific directories
    },
    sitemap: `${URL}/sitemap.xml`, // Location of your sitemap
  }
}
