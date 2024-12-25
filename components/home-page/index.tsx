import type { Blog, Snippet } from '~/.contentlayer/generated'
import { Container } from '~/components/ui/container'
import type { CoreContent } from '~/types/data'
import { LatestPosts } from './latest-posts'

export function Home({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      {/* <TiltedGridBackground className="inset-x-0 top-0 z-[-1] h-[50vh]" /> */}
      <div className="h-80 w-full">
        {/* <div className='flex items-center justify-center'>
          <TypedBios />
        </div> */}
        {/* <Greeting /> */}
        <p className="pt-32 text-center text-xl">
          A full-stack developer with a decade of experience in delivering impactful solutions for
          diverse industries
        </p>
      </div>
      <LatestPosts posts={posts} snippets={snippets} />
      {/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
    </Container>
  )
}
