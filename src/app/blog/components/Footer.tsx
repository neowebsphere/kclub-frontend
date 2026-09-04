import { Icon } from '@iconify/react'
import Link from 'next/link'

type FooterLink = {
  label: string
  href: string
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'For patients',
    links: [
      { label: 'Family medicine', href: '' },
      { label: 'Pediatrics', href: '' },
      { label: 'Top hospitals', href: '' },
      { label: 'Telehealth', href: '' },
      { label: 'Dentistry', href: '' },
    ],
  },
  {
    title: 'For providers',
    links: [
      { label: 'Provider log in', href: '' },
      { label: 'Promote your practice', href: '' },
      { label: 'Claim your free profile', href: '' },
      { label: 'News and features', href: '' },
      { label: 'Help center', href: '' },
    ],
  },
  {
    title: 'Our company',
    links: [
      { label: 'Contact us', href: '' },
      { label: 'About us', href: '' },
      { label: 'Healthgrades methodologies', href: '' },
      { label: 'Privacy preferences', href: '' },
    ],
  },
]

type SocialLink = {
  label: string
  icon: string
  href: string
}

const socialLinks: SocialLink[] = [
  { label: 'Instagram', icon: 'tabler:brand-instagram', href: '' },
  { label: 'Facebook', icon: 'tabler:brand-facebook-filled', href: '' },
  { label: 'X (Twitter)', icon: 'tabler:brand-x', href: '' },
]

const FooterAccordion = ({ section }: { section: FooterSection }) => {
  return (
    <div className="hs-accordion border-b border-white/20 py-3">
      <button className="hs-accordion-toggle inline-flex items-center gap-x-3 w-full font-semibold text-start text-base text-white" aria-expanded="false">
        {section.title}

        <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-4" />

        <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-4" />
      </button>

      <div className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300" role="region">
        <div className="pt-2">
          <ul className="flex flex-col gap-2">
            {section.links.map((link) => (
              <li key={link.href} className="pt-1">
                <Link href={link.href} className="text-sm text-white/70 transition-all duration-300 hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="bg-body-bg dark">
      <div className="container">
        <div className="pt-12 pb-2">
          <div className="grid lg:grid-cols-4 md:grid-cols-12 md:gap-6 md:mb-12 mb-4">
            {footerSections.map((section, index) => (
              <div key={section.title} className={`lg:col-span-1 ${index === 0 ? 'md:col-span-2' : index === 1 ? 'md:col-span-3' : 'md:col-span-3'} col-span-1`}>
                {/* Desktop */}
                <div className="md:block hidden">
                  <span className="mb-3 text-white font-semibold">{section.title}</span>

                  <div className="pt-2">
                    <ul className="flex flex-col gap-2">
                      {section.links.map((link) => (
                        <li key={link.href} className="pt-1">
                          <Link href={link.href} className="text-sm text-white/70 transition-all duration-300 hover:text-white hover:underline">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mobile */}
                <div className="hs-accordion-group md:hidden block">
                  <FooterAccordion section={section} />
                </div>
              </div>
            ))}

            {/* Newsletter */}
            <div className="lg:col-span-1 md:col-span-4 md:mt-0 mt-6">
              <span className="mb-6 block text-white font-semibold">Subscribe to our newsletter</span>

              <div className="relative mb-4 flex w-full items-center">
                <Icon icon="lucide:mail" className="absolute top-1/2 start-0 ms-3 -translate-y-1/2 text-xl text-white/50" />

                <input type="email" placeholder="your email" required className="w-full rounded-md border border-default-300 bg-transparent py-2 ps-11 pe-2 text-sm text-white/70 placeholder:text-white/70 focus:outline-none focus:ring-0 dark:border-white/20" />
              </div>

              <button type="button" className="w-full rounded-md border border-white/70 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/70 hover:text-dark">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 pb-6 lg:py-6 md:justify-between">
            <p className="order-2 text-center text-sm text-white/60 md:order-1">
              © All rights reserved. Made by
              <Link href="/" className="font-semibold text-white hover:underline">
                kclub
              </Link>
            </p>

            <div className="order-1 flex md:order-2">
              {socialLinks.map((social) => (
                <div key={social.label} className="group hs-tooltip [--placement:auto] flex flex-col items-center justify-center">
                  <Link href={social.href} target="_blank" rel="noreferrer" className="hs-tooltip-toggle inline-flex size-10 items-center justify-center gap-2">
                    <Icon icon={social.icon} className="text-white" />

                    <span className="hs-tooltip-content hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 invisible absolute z-10 -ms-5 -mt-4 inline-block px-2 py-1 text-xs text-white/70" role="tooltip">
                      {social.label}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
