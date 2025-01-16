'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { HeaderContainer } from '~/components/ui/header-container'
import { Link } from '~/components/ui/link'
import { HEADER_NAV_LINKS } from '~/data/navigation'
import { SITE_METADATA } from '~/data/site-metadata'
import { KbarSearchTrigger } from '../search/kbar-trigger'
import { MobileNav } from './mobile-nav'
import { ThemeSwitcher } from './theme-switcher'

//'bg-white/75 py-2 backdrop-blur dark:bg-dark/75',

const SiteTitle = () => {
  return (
    <div className="header-title text-3xl">
      <span className="bg-gray-800 pl-2 pt-2 font-bold text-white transition-all dark:bg-white dark:text-black">
        MUSHFIQUR'S {'  '}
      </span>{' '}
      BLOG
    </div>
  )
}

export function Header() {
  let pathname = usePathname()
  return (
    <HeaderContainer
      as="header"
      className={clsx(
        // 'py-2 backdrop-blur',
        'bg-white/25 py-2 backdrop-blur dark:bg-dark/25',
        'shadow-lg saturate-100',
        SITE_METADATA.stickyNav && 'sticky top-0 z-50 lg:top-0'
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-3 md:pl-11 md:pr-11">
          <div className="flex items-center gap-2">
            <Link href="/" aria-label={SITE_METADATA.headerTitle}>
              {/* <h2 className="text-2xl">Mushfiqur's BLOG</h2> */}
              <SiteTitle />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden gap-1.5 sm:flex">
              {HEADER_NAV_LINKS.map(({ title, href }) => {
                let isActive = pathname === href || pathname.startsWith(href)
                return (
                  <Link key={title} href={href} className="px-3 py-1 font-medium">
                    <GrowingUnderline className={clsx(isActive && 'link--metis-hover')}>
                      {title}
                    </GrowingUnderline>
                  </Link>
                )
              })}
            </div>
            <div
              data-orientation="vertical"
              role="separator"
              className="hidden h-4 w-px shrink-0 bg-gray-200 dark:bg-gray-600 md:block"
            />
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <KbarSearchTrigger />
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}
