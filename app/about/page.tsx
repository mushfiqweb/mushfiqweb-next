import { genPageMetadata } from 'app/seo'
import { allAuthors } from '~/data/author-registry'
import { AuthorLayout } from '~/layouts/author-layout'
import { Twemoji } from '~/components/ui/twemoji'

export let metadata = genPageMetadata({ title: 'About' })

export default function AboutPage() {
  let author = allAuthors.find((p) => p.slug === 'default')!

  return (
    <AuthorLayout content={author}>
      <h2>
        Hi <Twemoji emoji="waving-hand" /> I'm Mushfiqur Rahman Shishir
      </h2>
      <p>
        I have a passion for all things <strong>JavaScript</strong>. I enjoy building eCommerce
        software and stuff related to web dev. I work mainly with <strong>TypeScript</strong>,{' '}
        <strong>React</strong>, <strong>Node</strong>, <strong>Remix</strong>, and{' '}
        <strong>Next.js</strong>.
      </p>

      <h2>Why have this blog?</h2>
      <blockquote>
        <p>Because sharing is learning</p>
      </blockquote>
      <p>
        I started this blog as a way to document and share the things I have learned and found
        useful in my journey as a software engineer.
      </p>
      <p>
        Writing and noting things down is a great way for me to solidify my understanding of new
        concepts and technologies, and I hope that my blog can be a helpful resource for others who
        are interested in web development, eCommerce, and related technologies.
      </p>
      <p>
        I would be highly appreciated if you could leave your comments and thoughts on what I have
        written <Twemoji emoji="clinking-beer-mugs" />.
      </p>

      <h2>Assets</h2>
      <p>
        Most of the images in my blog are from{' '}
        <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
          Unsplash
        </a>
        , gifs from{' '}
        <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">
          GIPHY
        </a>
        , and illustrations are from{' '}
        <a href="https://storyset.com/" target="_blank" rel="noopener noreferrer">
          Storyset
        </a>
        .
      </p>
      <p>
        Thanks for the free resources <Twemoji emoji="folded-hands" />.
      </p>
    </AuthorLayout>
  )
}
