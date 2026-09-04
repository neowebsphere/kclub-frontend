import applePay from '@/assets/img/payment-methods/apple-pay-dark-mode.svg'
import googlePay from '@/assets/img/payment-methods/google-pay-dark-mode.svg'
import mastercard from '@/assets/img/payment-methods/mastercard.svg'
import paypal from '@/assets/img/payment-methods/paypal-dark-mode.svg'
import visa from '@/assets/img/payment-methods/visa-dark-mode.svg'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type FooterLink = {
  label: string
  href: string
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

type PaymentMethod = {
  id: number
  image: StaticImageData
  alt: string
}

type SocialLink = {
  id: number
  icon: string
  href: string
  label: string
}

const popularCategories: FooterSection = {
  title: 'Popular categories',
  links: [
    { label: 'Air conditioning', href: '' },
    { label: 'Painting', href: '' },
    { label: 'Electrician', href: '' },
    { label: 'Concrete', href: '' },
    { label: 'Plumbing', href: '' },
    { label: 'Roofing', href: '' },
    { label: 'Cleaning', href: '' },
    { label: 'Heating & furnace', href: '' },
    { label: 'Carpentry', href: '' },
    { label: 'Flooring', href: '' },
    { label: 'Pest control', href: '' },
    { label: 'Landscaping', href: '' },
  ],
}

const companyLinks: FooterSection = {
  title: 'Company',
  links: [
    { label: 'About', href: '' },
    { label: 'Press & announcements', href: '' },
    { label: 'Careers at kclub', href: '' },
    { label: 'Contact us', href: '' },
    { label: 'Terms of use', href: '' },
    { label: 'Privacy', href: '' },
  ],
}

const topCities: string[] = ['New York', 'Chicago', 'Indianapolis', 'Boston', 'Atlanta', 'Cincinnati', 'Los Angeles', 'Dallas', 'Pittsburgh', 'Tampa']

const paymentMethods: PaymentMethod[] = [
  { id: 1, image: visa, alt: 'Visa' },
  { id: 2, image: mastercard, alt: 'Mastercard' },
  { id: 3, image: paypal, alt: 'PayPal' },
  { id: 4, image: googlePay, alt: 'Google Pay' },
  { id: 5, image: applePay, alt: 'Apple Pay' },
]

const socialLinks: SocialLink[] = [
  { id: 1, icon: 'tabler:brand-instagram', href: '', label: 'Instagram' },
  { id: 2, icon: 'tabler:brand-facebook-filled', href: '', label: 'Facebook' },
  { id: 3, icon: 'tabler:brand-x', href: '', label: 'Twitter' },
]

const Footer = () => {
  return (
    <footer className="bg-body-bg dark">
      <div className="container">
        <div className="md:py-12 pt-12 pb-6 border-b border-border flex items-center md:justify-between justify-center flex-wrap gap-4">
          <div className="flex md:gap-6 gap-3 items-center md:justify-start justify-center flex-wrap">
            <div className="flex items-center gap-3">
              <Icon icon="tabler:mail" className="md:text-2xl text-base text-white/70" />
              <h3 className="md:text-xl text-base font-semibold text-white">Subscribe to our newsletter</h3>
            </div>
            <button type="button" className="bg-primary rounded-md text-white transition-all duration-300 hover:bg-primary-hover py-2.5 px-5 text-sm font-semibold inline-flex">
              Subscribe
            </button>
          </div>

          <div className="md:text-xl text-base font-semibold">
            <span className="text-secondary font-normal me-4">Need help?</span>
            <Link href="#!" className="text-white hover:underline">
              Contact us
            </Link>
          </div>
        </div>

        <div className="md:pt-12 pt-8 grid md:grid-cols-12 grid-cols-1 md:gap-6">
          <div className="lg:col-span-5 md:col-span-3 col-span-1 mb-6">
            <div className="lg:w-70 w-full">
              <Link href="/" className="inline-flex items-center text-dark-emphasis mb-4">
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

                <span className="text-2xl font-semibold text-white">kclub</span>
              </Link>
              <p className="pt-1 mb-4 text-sm text-white/70">Connecting you with reliable local contractors for all your service needs.</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link key={social.id} href={social.href} aria-label={social.label} className="size-8 flex justify-center items-center bg-default-300 hover:bg-default-200 rounded-full transition-all duration-300">
                    <Icon icon={social.icon} className="size-3.5 text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 col-span-1 md:col-span-6 md:block hidden">
            <span className="mb-4 text-xl text-white font-semibold">{popularCategories.title}</span>

            <div className="grid grid-cols-2">
              {[0, 1].map((column) => (
                <div className="mt-2">
                  <ul key={column} className="gap-2 flex flex-col">
                    {popularCategories.links.slice(column * 6, column * 6 + 6).map((item) => (
                      <li key={item.label} className="pt-1">
                        <Link href={item.href} className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 col-span-1 lg:mx-auto md:block hidden">
            <span className="mb-4 text-xl text-white font-semibold">{companyLinks.title}</span>
            <div className="mt-2">
              <ul className="gap-2 flex flex-col">
                {companyLinks.links.map((item) => (
                  <li key={item.label} className="pt-1">
                    <Link href={item.href} className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:hidden block">
            {[popularCategories, companyLinks].map((section) => (
              <div key={section.title} className="hs-accordion-group">
                <div className="hs-accordion border-b border-white/20 py-3">
                  <button className="hs-accordion-toggle inline-flex items-center gap-x-3 w-full font-semibold text-start text-base text-white" aria-expanded="false">
                    {section.title}
                    <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-4" />
                    <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-4" />
                  </button>

                  <div className="hs-accordion-content hidden overflow-hidden transition-[height] duration-300">
                    <ul className="flex flex-col gap-2 pt-3">
                      {section.links.map((item) => (
                        <li key={item.label} className="pt-1">
                          <Link href={item.href} className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:pt-12 pt-6 flex md:text-nowrap flex-wrap md:gap-6 gap-3">
          <h6 className="md:text-xl text-base text-white font-semibold mt-1.5">Top cities</h6>

          <ul className="flex items-center md:gap-4 gap-2 flex-wrap">
            {topCities.map((city) => (
              <li key={city}>
                <Link href="#!" className="py-2.5 px-5 inline-flex rounded-full border border-default-300 dark:border-white/20 text-white/80 transition-all duration-300 hover:border-default-700 hover:text-white text-sm font-semibold">
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pt-12 pt-8 pb-6 flex items-center md:justify-between justify-center flex-wrap gap-4">
          <p className="text-sm text-center text-white/60 md:order-1 order-2">
            © All rights reserved. Made by
            <Link href="#!" className="text-white hover:underline font-semibold">
              kclub
            </Link>
          </p>

          <div className="flex gap-4 justify-center md:order-2 order-1">
            {paymentMethods.map((method) => (
              <div key={method.id}>
                <Image src={method.image} alt={method.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
