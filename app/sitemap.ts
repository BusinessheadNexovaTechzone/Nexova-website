import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexova.tech'

  // All main pages
  const pages = [
    '',
    '/about-us',
    '/about-us/mission-vision',
    '/about-us/leadership',
    '/about-us/culture',
    '/about-us/process',
    '/about-us/partnerships',
    '/about-us/success-stories',
    '/about-us/tech-stack',
    '/about-us/innovation',
    '/about-us/global-presence',
    '/about-us/why-choose',
    '/about-us/about-nexova',
    '/services',
    '/services/software-development',
    '/services/custom-software',
    '/services/website-development',
    '/services/customized-software',
    '/services/mobile-app-development',
    '/services/ai-machine-learning',
    '/services/cloud-computing',
    '/services/devops',
    '/services/cybersecurity',
    '/services/data-science',
    '/services/testing-qa',
    '/services/ui-ux-design',
    '/services/digital-marketing',
    '/services/networking-solutions',
    '/products',
    '/products/foodzo',
    '/products/foodzo-lite',
    '/products/ai-assistant',
    '/products/automation-bot',
    '/contact',
    '/careers',
    '/portfolio',
    '/testimonials',
    '/why-choose-us',
    '/industries',
    '/resources',
    '/privacy',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
