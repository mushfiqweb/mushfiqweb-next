import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'KMS Marketplace',
    role: 'Co-Founder',
    category: 'E-Commerce',
    description:
      'An ethical e-commerce marketplace platform rooted in spiritual legacy and social responsibility, curating premium lifestyle and wellness products with seamless checkout.',
    imgSrc: '/static/images/projects/kms-mp-white.png',
    url: 'https://kmsmarketplace.com/',
    builtWith: ['Shopify', 'Liquid', 'JavaScript', 'TailwindCSS'],
    badgeVariant: 'kms',
  },
  {
    type: 'work',
    title: 'KMS Tech',
    role: 'Co-Founder',
    category: 'Digital Innovation',
    description:
      'Technology innovation company building modern web infrastructure, digital tools, and scalable platforms with sacred intention and uncompromising engineering craft.',
    imgSrc: '/static/images/projects/kmstech.png',
    url: 'https://www.kmstech.co/',
    builtWith: ['NextJS', 'React', 'TypeScript', 'TailwindCSS'],
    badgeVariant: 'kms',
  },
  {
    type: 'work',
    title: 'Jobayar Abir Peal (mrpeal)',
    role: 'Lead Architect',
    category: 'Cinematic Portfolio',
    description:
      'Official portfolio and cinematic showcase for award-nominated Film Director & Lead Editor Jobayar Abir Peal (Chief Editor behind blockbuster films Toofan, Surongo, and Mohanagar 2).',
    imgSrc: '/static/images/projects/jap-logo.png',
    url: 'https://www.mrpeal.com/',
    builtWith: ['NextJS', 'React', 'TypeScript', 'TailwindCSS'],
    badgeVariant: 'gold',
  },
  {
    type: 'work',
    title: 'AGT Software Partners',
    role: 'CTO',
    category: 'Enterprise Solutions',
    description:
      'Global enterprise technology partner delivering scalable full-stack applications, AI/ML integrations, and dedicated engineering teams to US venture-backed and high-growth companies.',
    imgSrc: '/static/images/projects/allgentech.png',
    url: 'https://allgentech.io/',
    builtWith: ['NextJS', 'React', 'TypeScript', 'TailwindCSS', 'Node'],
    badgeVariant: 'agt',
  },
  {
    type: 'self',
    title: 'mushfiqweb.com',
    role: 'Creator',
    category: 'Open Source',
    description:
      'Personal digital garden, technical blog, and developer portfolio crafted with Next.js App Router, Tailwind CSS, Contentlayer, and interactive micro-animations.',
    imgSrc: '/static/images/logo.png',
    url: 'https://www.mushfiqweb.com',
    repo: 'mushfiqweb/mushfiqweb-next',
    builtWith: ['NextJS', 'TailwindCSS', 'TypeScript', 'Drizzle', 'Umami'],
    badgeVariant: 'default',
  },
]
