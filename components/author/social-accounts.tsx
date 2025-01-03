import { clsx } from 'clsx'
import { Facebook, Github, InstagramIcon, Linkedin, PianoIcon } from 'lucide-react'
import { SITE_METADATA } from '~/data/site-metadata'
import X from '~/icons/x.svg'

export function SocialAccounts({ className }: { className?: string }) {
  return (
    <div className={clsx('flex justify-center space-x-4 pt-7', className)}>
      <a
        href={SITE_METADATA.github}
        target="_blank"
        className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <span className="sr-only">Github</span>
        <Github strokeWidth={1.5} />
      </a>
      <a
        href={SITE_METADATA.x}
        target="_blank"
        className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        rel="noopener noreferrer"
        title="X"
      >
        <span className="sr-only">X</span>
        <X className="h-5 w-5" fill="#fff" viewBox="0 0 1200 1227" />
      </a>
      <a
        href={SITE_METADATA.linkedin}
        target="_blank"
        className="font-bold text-gray-900 transition-all hover:text-primary-500 dark:text-gray-100 dark:hover:text-gray-950"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <span className="sr-only">Linkedin</span>
        <Linkedin strokeWidth={1.5} />
      </a>
      <a
        href={SITE_METADATA.facebook}
        target="_blank"
        className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <span className="sr-only">Facebook</span>
        <Facebook strokeWidth={1.5} />
      </a>
      <a
        href={SITE_METADATA.instagram}
        target="_blank"
        className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <span className="sr-only">Instagram</span>
        <InstagramIcon strokeWidth={1.5} />
      </a>
      <a
        href={SITE_METADATA.lastfm}
        target="_blank"
        className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        rel="noopener noreferrer"
        title="LastFM"
      >
        <span className="sr-only">LastFM</span>
        <PianoIcon strokeWidth={1.5} />
      </a>
    </div>
  )
}
