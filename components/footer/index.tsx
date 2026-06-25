'use client'

import { usePathname } from 'next/navigation'
import { FooterBottom } from './footer-bottom'
import { Container } from '~/components/ui/container'

export function Footer() {
  const pathname = usePathname()
  if (pathname === '/new' || pathname.startsWith('/new/')) {
    return null
  }
  return (
    <Container as="footer" className="mb-12 mt-16 md:mt-24">
      <FooterBottom />
    </Container>
  )
}
