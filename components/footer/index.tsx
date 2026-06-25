import { FooterBottom } from './footer-bottom'
import { Container } from '~/components/ui/container'

export function Footer() {
  return (
    <Container as="footer" className="mb-12 mt-16 md:mt-24">
      <FooterBottom />
    </Container>
  )
}
