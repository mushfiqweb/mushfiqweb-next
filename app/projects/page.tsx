import { genPageMetadata } from 'app/seo';
import type { Metadata } from 'next';
import { ProjectCard } from '~/components/cards/project';
import { Container } from '~/components/ui/container';
import { PageHeader } from '~/components/ui/page-header';
import { PROJECTS } from '~/data/projects';
import { SITE_METADATA } from '~/data/site-metadata';
import { fetchRepoData } from '~/utils/github';

export let metadata: Metadata = genPageMetadata({
  title: 'Projects',
  description:
    'Explore production platforms, enterprise software architectures, and digital ventures built and co-founded by Mushfiqur Rahman Shishir, including KMS Marketplace, KMS Tech, AGT Software Partners, and JAP Studios.',
  keywords: [
    'Mushfiqur Rahman Shishir Projects',
    'KMS Marketplace',
    'KMS Tech',
    'AGT Software Partners',
    'mrpeal',
    'JAP Studios',
    'Enterprise Software Architecture',
    'eCommerce Platforms',
    'Next.js Projects',
    'Shopify Development',
    'React',
    'TypeScript',
    'Full Stack Portfolio',
  ],
  alternates: {
    canonical: `${SITE_METADATA.siteUrl}/projects`,
  },
})

export const dynamic = 'force-dynamic'

export default async function Projects() {
  await Promise.all(
    PROJECTS.map(async (p) => {
      if (p.repo && typeof p.repo === 'string') {
        p.repo = await fetchRepoData({ repo: p.repo })
      }
    })
  )

  const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "Mushfiqur Rahman's Featured Projects & Ventures",
    description:
      'Curated showcase of production platforms, enterprise software architectures, and digital ventures built and co-founded by Mushfiqur Rahman Shishir.',
    url: `${SITE_METADATA.siteUrl}/projects`,
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((project, index) => {
      let href = (project.repo as any)?.url || project.url || `${SITE_METADATA.siteUrl}/projects`
      let imageUrl = project.imgSrc.startsWith('http')
        ? project.imgSrc
        : `${SITE_METADATA.siteUrl}${project.imgSrc}`

      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: project.title,
          description: project.description,
          url: href,
          image: imageUrl,
          applicationCategory: project.category || 'BusinessApplication',
          operatingSystem: 'Web',
          author: {
            '@type': 'Person',
            name: 'Mushfiqur Rahman Shishir',
            url: SITE_METADATA.siteUrl,
            jobTitle: project.role,
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          keywords: project.builtWith.join(', '),
        },
      }
    }),
  }

  return (
    <Container className="pt-4 lg:pt-12 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <PageHeader
        title="Projects"
        className="border-b-0 pb-2"
        description="The Projects I am invloved right now, as of 2026"
      />
      <div className="pt-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {PROJECTS.map((pro) => (
            <ProjectCard key={pro.title} project={pro} />
          ))}
        </div>
      </div>
    </Container>
  )
}
