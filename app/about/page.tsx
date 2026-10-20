import { genPageMetadata } from 'app/seo';
import { Twemoji } from '~/components/ui/twemoji';
import { allAuthors } from '~/data/author-registry';
import { AuthorLayout } from '~/layouts/author-layout';

export let metadata = genPageMetadata({
  title: 'About',
  description:
    'About Mushfiqur Rahman Shishir - CTO at AGT Software Partners, Co-Founder at KMS Marketplace & KMS Tech. Bringing over 15 years of experience in delivering impactful full-stack solutions.',
})

export default function AboutPage() {
  let author = allAuthors.find((p) => p.slug === 'default')!

  return (
    <AuthorLayout content={author}>
      <h2>
        Hi <Twemoji emoji="waving-hand" /> I'm Mushfiqur Rahman Shishir
      </h2>
      <p>
        While playing the role of CTO at{' '}
        <a href="https://allgentech.io/" target="_blank" rel="noopener noreferrer">
          AGT Software Partners
        </a>
        , I have been actively involved in full-stack development, bringing over 15 years of
        experience in delivering impactful solutions across diverse industries.
      </p>

      <h3>Current Roles &amp; Leadership</h3>
      <ul>
        <li>
          <strong>CTO</strong> at{' '}
          <a href="https://allgentech.io/" target="_blank" rel="noopener noreferrer">
            AGT Software Partners
          </a>
        </li>
        <li>
          <strong>Co-Founder</strong> at{' '}
          <a href="https://kmstech.co" target="_blank" rel="noopener noreferrer">
            KMS Marketplace
          </a>
        </li>
        <li>
          <strong>Co-Founder</strong> at{' '}
          <a href="https://kmstech.co" target="_blank" rel="noopener noreferrer">
            KMS Tech
          </a>
        </li>
      </ul>

      <p>
        I have a passion for all things <strong>JavaScript</strong> and modern web ecosystems. I
        enjoy building scalable eCommerce platforms, high-performance distributed web applications,
        and cutting-edge software solutions. I work mainly with <strong>TypeScript</strong>,{' '}
        <strong>React</strong>, <strong>Node.js</strong>, <strong>Remix</strong>, and{' '}
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
      

    </AuthorLayout>
  )
}
