import { Icon } from '@iconify/react'
import Link from 'next/link'

type FooterLink = {
  label: string
  href: string
}

type SocialLink = {
  icon: string
  label: string
  href: string
}

const quickLinks: FooterLink[] = [
  { label: 'Top cities', href: '' },
  { label: 'Accommodation', href: '' },
  { label: 'Cafes & restaurants', href: '' },
  { label: 'Night clubs', href: '' },
  { label: 'Events & meetups', href: '' },
  { label: 'Beauty salons', href: '' },
  { label: 'Pharmacies', href: '' },
]

const profileLinks: FooterLink[] = [
  { label: 'My account', href: '' },
  { label: 'My listings', href: '' },
  { label: 'Gift cards', href: '' },
  { label: 'Help center', href: '' },
  { label: 'Taxes & fees', href: '' },
  { label: 'Privacy policy', href: '' },
]

const socialLinks: SocialLink[] = [
  { icon: 'tabler:brand-instagram', label: 'Instagram', href: '' },
  { icon: 'tabler:brand-facebook-filled', label: 'Facebook', href: '' },
  { icon: 'tabler:brand-x', label: 'X (Twitter)', href: '' },
]

const FooterAccordion = ({ title, links }: { title: string; links: FooterLink[] }) => {
  return (
    <div className="hs-accordion-group md:hidden block">
      <div className="hs-accordion border-b border-white/20 py-3">
        <button className="hs-accordion-toggle inline-flex items-center justify-between w-full font-semibold text-start text-base text-white" aria-expanded="false">
          {title}

          <div className="flex items-center">
            <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-4" />
            <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-4" />
          </div>
        </button>

        <div className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300">
          <div className="pt-2">
            <ul className="gap-2 flex flex-col">
              {links.map((link) => (
                <li key={link.label} className="pt-1">
                  <Link href={link.href} className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const FooterLinkList = ({ title, links }: { title: string; links: FooterLink[] }) => {
  return (
    <div className="md:block hidden">
      <span className="mb-3 text-white font-semibold">{title}</span>

      <div className="pt-2">
        <ul className="gap-2 flex flex-col">
          {links.map((link) => (
            <li key={link.label} className="pt-1">
              <Link href={link.href} className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="bg-body-bg dark md:pt-18 pt-12">
      <div className="container">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 pb-12 lg:mb-6 md:mb-4 mb-0">
          <div>
            <Link className="inline-flex items-center text-dark-emphasis mb-6" href="/">
              <span className="shrink-0 text-primary rtl-flip me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={35} height={34}>
                  <path d="M34.5 16.894v10.731c0 3.506-2.869 6.375-6.375 6.375H17.5h-.85C7.725 33.575.5 26.138.5 17c0-9.35 7.65-17 17-17s17 7.544 17 16.894z" fill="currentColor" />
                  <g fillRule="evenodd">
                    <path
                      d="M17.5 13.258c-3.101 0-5.655 2.554-5.655 5.655s2.554 5.655 5.655 5.655 5.655-2.554 5.655-5.655-2.554-5.655-5.655-5.655zm-9.433 5.655c0-5.187 4.246-9.433 9.433-9.433s9.433 4.246 9.433 9.433a9.36 9.36 0 0 1-1.569 5.192l2.397 2.397a1.89 1.89 0 0 1 0 2.671 1.89 1.89 0 0 1-2.671 0l-2.397-2.397a9.36 9.36 0 0 1-5.192 1.569c-5.187 0-9.433-4.246-9.433-9.433z"
                      fill="#000"
                      fillOpacity=".05"
                    />
                    <g fill="#fff">
                      <path d="M17.394 10.153c-3.723 0-6.741 3.018-6.741 6.741s3.018 6.741 6.741 6.741 6.741-3.018 6.741-6.741-3.018-6.741-6.741-6.741zM7.347 16.894A10.05 10.05 0 0 1 17.394 6.847 10.05 10.05 0 0 1 27.44 16.894 10.05 10.05 0 0 1 17.394 26.94 10.05 10.05 0 0 1 7.347 16.894z" />
                      <path d="M23.025 22.525c.645-.645 1.692-.645 2.337 0l3.188 3.188c.645.645.645 1.692 0 2.337s-1.692.645-2.337 0l-3.187-3.187c-.645-.646-.645-1.692 0-2.337z" />
                    </g>
                  </g>
                  <path d="M23.662 14.663c2.112 0 3.825-1.713 3.825-3.825s-1.713-3.825-3.825-3.825-3.825 1.713-3.825 3.825 1.713 3.825 3.825 3.825z" fill="#fff" />
                  <path
                    fillRule="evenodd"
                    d="M23.663 8.429a2.41 2.41 0 0 0-2.408 2.408 2.41 2.41 0 0 0 2.408 2.408 2.41 2.41 0 0 0 2.408-2.408 2.41 2.41 0 0 0-2.408-2.408zm-5.242 2.408c0-2.895 2.347-5.242 5.242-5.242s5.242 2.347 5.242 5.242-2.347 5.242-5.242 5.242-5.242-2.347-5.242-5.242z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <span className="text-2xl font-semibold text-white">Finder</span>
            </Link>

            <div className="flex flex-col gap-4">
              <Link href="mailto:contact@example.com" className="hover:underline text-white flex items-center gap-2">
                <Icon icon="lucide:mail" className="size-4.5" />
                contact@example.com
              </Link>

              <Link href="tel:+15053753082" className="hover:underline text-white flex items-center gap-2">
                <Icon icon="lucide:phone-call" className="size-4.5" />
                +1 50 537 53 082
              </Link>
            </div>
          </div>

          <FooterLinkList title="Quick links" links={quickLinks} />
          <FooterAccordion title="Quick links" links={quickLinks} />

          <FooterLinkList title="Profile" links={profileLinks} />
          <FooterAccordion title="Profile" links={profileLinks} />

          <div className="lg:col-span-1 md:col-span-3 md:mt-0 mt-6 md:pt-12 pt-0 lg:pt-0">
            <span className="mb-6 block md:text-xl text-base text-white font-semibold">Subscribe to our newsletter</span>

            <div className="flex lg:gap-0 md:gap-4 lg:flex-wrap md:flex-nowrap flex-wrap">
              <div className="relative w-full flex items-center mb-4">
                <Icon icon="lucide:mail" className="absolute top-1/2 start-0 -translate-y-1/2 text-white/50 text-xl ms-3" />

                <input type="email" placeholder="your email" required className="w-full ps-11 pe-2 py-2 border bg-transparent border-default-300 dark:border-white/20 rounded-full text-sm text-white/70 focus:ring-0 focus:outline-none placeholder:text-white/70" />
              </div>

              <div className="lg:w-full md:w-auto w-full">
                <button type="button" className="lg:w-full md:w-auto w-full bg-primary rounded-full text-white py-2.5 px-6 text-sm font-semibold transition-all duration-300 hover:bg-primary-hover">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="py-6 lg:flex lg:justify-between justify-center gap-6 items-center lg:flex-nowrap flex-wrap">
            <div className="md:text-xl text-base font-semibold lg:text-start text-center">
              <span className="text-secondary font-normal me-4">Need help?</span>

              <Link className="text-white hover:underline" href="#!">
                Contact us
              </Link>
            </div>

            <div className="flex lg:justify-start justify-center md:order-2 order-1">
              {socialLinks.map((social) => (
                <div key={social.label} className="group flex justify-center items-center flex-col hs-tooltip [--placement:auto]">
                  <Link href={social.href} className="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2">
                    <Icon icon={social.icon} className="text-white" />

                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible text-white/70 inline-block absolute invisible text-xs -mt-4 -ms-5 z-10 py-1 px-2" role="tooltip">
                      {social.label}
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm text-center text-white/60 md:order-1 order-2">
                © All rights reserved. Made by
                <Link href="" className="text-white hover:underline font-semibold">
                  Coderthemes
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
