'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { clsx } from 'clsx'
import { ArrowUpRight, ChevronRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { HEADER_NAV_LINKS, MORE_NAV_LINKS } from '~/data/navigation'
import { SITE_METADATA } from '~/data/site-metadata'
import XIcon from '~/icons/x.svg'
import { Logo } from './logo'

export function MobileNav() {
  let [navShow, setNavShow] = useState(false)
  let navRef = useRef<HTMLElement | null>(null)
  let pathname = usePathname()

  let onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        if (navRef.current) enableBodyScroll(navRef.current)
      } else {
        if (navRef.current) disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <>
      <div
        className={clsx([
          'rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700',
          'flex items-center justify-center sm:hidden',
        ])}
        data-umami-event="mobile-nav-toggle"
      >
        <button aria-label="Toggle Menu" onClick={onToggleNav}>
          <Menu size={22} />
        </button>
      </div>
      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm" />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <DialogPanel className="fixed left-0 top-0 z-70 h-full w-full flex flex-col bg-white/95 backdrop-blur-xl duration-300 dark:bg-gray-950/95">
              {/* Header bar with Logo, Title, and Close Button */}
              <div className="flex items-center justify-between gap-3 px-6 pt-5 pb-4 border-b border-gray-200/50 dark:border-neutral-800/60 shrink-0">
                <div className="flex min-w-0 items-center gap-3">
                  <div onClick={onToggleNav} className="shrink-0 cursor-pointer">
                    <Logo />
                  </div>
                  <span className="font-medium text-xs sm:text-sm text-gray-900 dark:text-gray-100 line-clamp-2">
                    {SITE_METADATA.headerTitle}
                  </span>
                </div>
                <button
                  className="shrink-0 -mr-2 rounded-xl p-2 text-gray-700 hover:bg-gray-100 hover:text-primary-500 focus:outline-none dark:text-gray-300 dark:hover:bg-neutral-800/80 dark:hover:text-primary-400 transition-colors"
                  aria-label="Toggle Menu"
                  onClick={onToggleNav}
                >
                  <X className="h-6 w-6" strokeWidth={1.5} />
                </button>
              </div>

              {/* Navigation links */}
              <nav
                ref={navRef}
                className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-2.5"
              >
                <div className="mb-2 px-2 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Menu
                </div>
                {[...HEADER_NAV_LINKS, ...MORE_NAV_LINKS].map((link) => {
                  let isExternal = link.href.startsWith('http')
                  let isActive =
                    !isExternal &&
                    (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)))

                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={clsx(
                        'group flex w-full items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-200',
                        'active:scale-[0.98]',
                        isActive
                          ? 'bg-primary-500/10 text-primary-600 dark:bg-primary-500/15 dark:text-primary-400 font-semibold ring-1 ring-primary-500/30'
                          : 'text-gray-800 hover:bg-gray-100/80 hover:text-primary-500 dark:text-gray-200 dark:hover:bg-neutral-900/80 dark:hover:text-primary-400'
                      )}
                      onClick={onToggleNav}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={clsx(
                            'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg transition-colors',
                            isActive
                              ? 'bg-primary-500/20 text-primary-600 dark:bg-primary-500/30 dark:text-primary-300'
                              : 'bg-gray-100/90 text-gray-700 group-hover:bg-primary-500/10 dark:bg-neutral-900 dark:text-gray-200 dark:group-hover:bg-neutral-850'
                          )}
                        >
                          <Twemoji emoji={link.emoji} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-base sm:text-lg font-semibold tracking-wide">
                            {link.title}
                          </span>
                          {isExternal && (
                            <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                              photos.mushfiqweb.com
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        {isExternal ? (
                          <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-xs text-gray-400 group-hover:text-primary-500 dark:text-gray-500 transition-colors">
                            <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </div>
                        ) : isActive ? (
                          <span className="flex items-center gap-1.5 rounded-full bg-primary-500/20 px-2.5 py-1 text-xs font-semibold text-primary-600 dark:bg-primary-500/30 dark:text-primary-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse" />
                            Active
                          </span>
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 dark:text-gray-500" />
                        )}
                      </div>
                    </Link>
                  )
                })}
              </nav>

              {/* Footer bar with social links & author */}
              <div className="shrink-0 border-t border-gray-200/50 px-6 py-4 dark:border-neutral-800/60 bg-gray-50/60 dark:bg-neutral-900/40">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-900 dark:text-gray-200">
                      {SITE_METADATA.author}
                    </span>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">
                      Full Stack Developer
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {SITE_METADATA.github && (
                      <a
                        href={SITE_METADATA.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="rounded-lg p-2 text-gray-500 hover:bg-gray-200/70 hover:text-black dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-white transition-all"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {SITE_METADATA.linkedin && (
                      <a
                        href={SITE_METADATA.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="rounded-lg p-2 text-gray-500 hover:bg-gray-200/70 hover:text-[#0077B5] dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-[#0077B5] transition-all"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {SITE_METADATA.x && (
                      <a
                        href={SITE_METADATA.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                        className="rounded-lg p-2 text-gray-500 hover:bg-gray-200/70 hover:text-black dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-white transition-all"
                      >
                        <XIcon className="h-4 w-4" fill="currentColor" viewBox="0 0 1200 1227" />
                      </a>
                    )}
                    {SITE_METADATA.email && (
                      <a
                        href={`mailto:${SITE_METADATA.email}`}
                        aria-label="Email"
                        className="rounded-lg p-2 text-gray-500 hover:bg-gray-200/70 hover:text-primary-500 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-primary-400 transition-all"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
