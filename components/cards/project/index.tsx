import clsx from 'clsx'
import { ArrowUpRight, Github } from 'lucide-react'
import NextImage from 'next/image'
import type { BrandsMap } from '~/components/ui/brand'
import { Brand } from '~/components/ui/brand'
import { GradientBorder } from '~/components/ui/gradient-border'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { TiltedGridBackground } from '~/components/ui/tilted-grid-background'
import type { PROJECTS } from '~/data/projects'
import type { GithubRepository } from '~/types/data'
import { KmsTechLogo } from '~/components/footer/footer-bottom'

export function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  let { title, description, imgSrc, url, repo, builtWith, role, category, badgeVariant } = project
  let repository = repo as GithubRepository | undefined
  let href = repository?.url || url

  let isKmsMarketplace = title.includes('KMS Marketplace')
  let isKmsTech = title === 'KMS Tech'
  let isMrPeal = title.includes('mrpeal') || title.includes('Jobayar')
  let isAgt = title.includes('AGT') || title.includes('All Gen')
  let isMushfiqweb = title.includes('mushfiqweb')

  let seoAlt = isKmsMarketplace
    ? 'KMS Marketplace - Ethical E-Commerce Platform by KMS Tech'
    : isKmsTech
      ? 'KMS Tech - Technology Innovation Company'
      : isMrPeal
        ? 'Jobayar Abir Peal (mrpeal) - JAP Studios Official Logo'
        : isAgt
          ? 'AGT Software Partners - Enterprise Technology Solutions'
          : `${title} - Full Stack Web Development Project`

  return (
    <GradientBorder
      offset={28}
      className={clsx(
        'group flex flex-col rounded-3xl overflow-hidden',
        'bg-white/80 dark:bg-neutral-900/60 backdrop-blur-sm',
        'shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]',
        'hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]',
        'transition-all duration-300 hover:-translate-y-1'
      )}
    >
      <TiltedGridBackground className="inset-0 z-[-1] rounded-3xl opacity-40 group-hover:opacity-60 transition-opacity" />

      {/* Semantic Schema.org Container */}
      <article
        itemScope
        itemType="https://schema.org/SoftwareApplication"
        className="flex flex-col h-full w-full"
      >
        <meta itemProp="operatingSystem" content="Web" />
        <meta itemProp="applicationCategory" content={category || 'BusinessApplication'} />
        <meta itemProp="author" content="Mushfiqur Rahman Shishir" />

        {/* Visual Showcase Preview Area */}
        <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-neutral-950 border-b border-gray-100 dark:border-neutral-800">
          {/* Floating Badges */}
          <div className="absolute top-3.5 inset-x-3.5 z-20 flex items-center justify-between gap-2 pointer-events-none">
            {role && (
              <span
                className={clsx(
                  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-xs',
                  badgeVariant === 'kms' && 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
                  badgeVariant === 'agt' && 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40',
                  badgeVariant === 'gold' && 'bg-amber-500/20 text-amber-300 border border-amber-500/40',
                  (!badgeVariant || badgeVariant === 'default') && 'bg-spotify/20 text-emerald-300 border border-spotify/40'
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                {role}
              </span>
            )}
            {category && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-gray-200 border border-white/10 backdrop-blur-md">
                {category}
              </span>
            )}
          </div>

          {/* Project Thumbnail / Branded Canvas */}
          {isKmsMarketplace ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/40">
              <div className="relative w-56 h-16 group-hover:scale-105 transition-transform duration-500">
                <NextImage
                  itemProp="image"
                  src="/static/images/projects/kms-mp-white.png"
                  alt={seoAlt}
                  fill
                  sizes="250px"
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-xs font-medium tracking-wide text-emerald-400/80">
                Shop with Blessing, Find Peace Within!
              </span>
            </div>
          ) : isKmsTech ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900">
              <div className="group-hover:scale-105 transition-transform duration-500" aria-label={seoAlt}>
                <KmsTechLogo forceWhite className="h-10 sm:h-12 w-auto" />
              </div>
              <span className="mt-3 text-xs font-medium tracking-wider text-zinc-400">
                Sacred Intention Leads to Perfection
              </span>
            </div>
          ) : isMrPeal ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-amber-950/20">
              <div className="relative w-32 sm:w-36 h-20 sm:h-24 group-hover:scale-105 transition-transform duration-500">
                <NextImage
                  itemProp="image"
                  src="/static/images/projects/jap-logo.png"
                  alt={seoAlt}
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-xs font-medium tracking-wide text-amber-300/80">
                JAP Studios • Film Director & Editor
              </span>
            </div>
          ) : isAgt ? (
            <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900">
              <NextImage
                itemProp="image"
                src="/static/images/projects/allgentech.png"
                alt={seoAlt}
                width={320}
                height={64}
                className="object-contain max-h-16 w-auto group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ) : isMushfiqweb ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900">
              <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-500">
                <div className="header-title whitespace-nowrap text-xl sm:text-2xl font-bold text-white tracking-wide">
                  <span className="bg-white text-black px-2 py-1 rounded mr-2 font-black">
                    MUSHFIQUR'S
                  </span>
                  BLOG
                </div>
              </div>
              <span className="mt-3 text-xs font-mono text-spotify">
                Personal Portfolio & Digital Garden
              </span>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <NextImage
                itemProp="image"
                src={imgSrc}
                alt={seoAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          )}

          {/* Vignette Overlay for non-custom cards */}
          {!isKmsMarketplace && !isKmsTech && !isAgt && !isMushfiqweb && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          )}
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-1 p-6 sm:p-7">
          {/* Title & Arrow */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3
              itemProp="name"
              className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors"
            >
              {href ? (
                <Link
                  itemProp="url"
                  href={href}
                  aria-label={`Visit ${title} website (opens in a new tab)`}
                  title={`Visit ${title}`}
                >
                  <GrowingUnderline data-umami-event="project-title-link">
                    {title}
                  </GrowingUnderline>
                </Link>
              ) : (
                title
              )}
            </h3>
            {href && (
              <Link
                href={href}
                aria-label={`Open ${title} in a new tab`}
                title={`Open ${title}`}
                className="shrink-0 p-2 rounded-xl bg-gray-100 text-gray-500 group-hover:bg-primary-500 group-hover:text-white dark:bg-neutral-800 dark:text-gray-400 dark:group-hover:bg-primary-500 dark:group-hover:text-white transition-all duration-300"
              >
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </div>

          {/* Description */}
          <p
            itemProp="description"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-6"
          >
            {repository?.description || description}
          </p>

          {/* Tech Stack & Action Footer */}
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-neutral-800/80 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-1.5" aria-label="Technologies used">
              {builtWith?.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100/90 text-gray-700 dark:bg-neutral-800 dark:text-gray-300"
                >
                  <Brand
                    name={tool as keyof typeof BrandsMap}
                    as="icon"
                    className="h-3.5 w-3.5 shrink-0"
                  />
                  <span>{tool}</span>
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              {repository ? (
                <Link
                  href={repository.url}
                  aria-label={`View ${title} source code on GitHub`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Github size={15} />
                  <span>{repository.stargazerCount} stars</span>
                </Link>
              ) : (
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                  Live Production
                </span>
              )}

              {href && (
                <Link
                  href={href}
                  aria-label={`Visit live site of ${title}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-xl bg-gray-900 text-white hover:bg-primary-600 dark:bg-white dark:text-black dark:hover:bg-primary-400 transition-colors ml-auto"
                >
                  <span>Visit Site</span>
                  <ArrowUpRight size={14} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </GradientBorder>
  )
}
