import { genPageMetadata } from 'app/seo';
import { Twemoji } from '~/components/ui/twemoji';
import { allAuthors } from '~/data/author-registry';
import { AuthorLayout } from '~/layouts/author-layout';
import { HeroLink } from '~/components/home-page/hero-link';

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
        While playing the role of{' '}
        <HeroLink
          href="https://www.linkedin.com/in/mushfiqweb/"
          variant="linkedin"
          delay="200ms"
        >
          CTO
        </HeroLink>{' '}
        at{' '}
        <HeroLink
          href="https://allgentech.io/"
          variant="agt"
          delay="450ms"
        >
          AGT Software Partners
        </HeroLink>
        , I have been actively involved in full-stack development, bringing over 15 years of
        experience in delivering impactful solutions across diverse industries.
      </p>

      <h3>Current Roles &amp; Leadership</h3>
      <ul>
        <li>
          <HeroLink
            href="https://www.linkedin.com/in/mushfiqweb/"
            variant="linkedin"
            delay="200ms"
          >
            CTO
          </HeroLink>{' '}
          at{' '}
          <HeroLink
            href="https://allgentech.io/"
            variant="agt"
            delay="350ms"
          >
            AGT Software Partners
          </HeroLink>
        </li>
        <li>
          <strong>Co-Founder</strong> at{' '}
          <HeroLink
            href="https://kmsmarketplace.com/"
            variant="kms"
            delay="500ms"
          >
            KMS Marketplace
          </HeroLink>
        </li>
        <li>
          <strong>Co-Founder</strong> at{' '}
          <HeroLink
            href="https://kmstech.co"
            variant="kms"
            delay="650ms"
          >
            KMS Tech
          </HeroLink>
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
