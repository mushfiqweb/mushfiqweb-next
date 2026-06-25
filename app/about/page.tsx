import { genPageMetadata } from 'app/seo'
import type { Author } from 'contentlayer/generated'
import { allAuthors } from 'contentlayer/generated'
import { MDX_COMPONENTS } from '~/components/mdx'
import { MDXLayoutRenderer } from '~/components/mdx/layout-renderer'
import { AuthorLayout } from '~/layouts/author-layout'
import { coreContent } from '~/utils/contentlayer'

export let metadata = genPageMetadata({ title: 'About' })

export default function AboutPage() {
  let author = allAuthors.find((p) => p.slug === 'default') as Author
  let mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent}>
      <MDXLayoutRenderer code={author.body.code} components={MDX_COMPONENTS} />
    </AuthorLayout>
  )
}
