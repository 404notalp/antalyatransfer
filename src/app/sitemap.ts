import type { MetadataRoute } from 'next'

// Replace with your actual domain
const URL = 'https://antalyagreenwaytransfer.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Assuming a single page application for now
  // If you add more pages (e.g., /services, /contact), add them here
  return [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly', // How often the content changes
      priority: 1, // Priority relative to other URLs on your site (0.0 to 1.0)
    },
    // Example for additional pages:
    // {
    //   url: `${URL}/services`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${URL}/contact`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
  ]
}
