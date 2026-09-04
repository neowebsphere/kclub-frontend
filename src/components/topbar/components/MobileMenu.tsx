import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { X } from 'lucide-react'
import Link from 'next/link'

type MenuLink = {
  label: string
  href: string
  description?: string
}

type MenuSection = {
  title: string
  links: MenuLink[]
}

const homeLinks: MenuLink[] = [
  { label: 'Real Estate', href: '/home/real-estate', description: 'Property listings directory' },
  { label: 'Cars', href: '/home/cars', description: 'Vehicle sales listings' },
  { label: 'Contractors', href: '/home/contractors', description: 'Professional services directory' },
  { label: 'Doctors', href: '/home/doctors', description: 'Medical professionals listings' },
  { label: 'Events', href: '/home/events', description: 'Upcoming events listings' },
  { label: 'City Guide', href: '/home/city-guide', description: 'Local places directory' },
]

const listingSections: MenuSection[] = [
  {
    title: 'Real Estate',
    links: [
      { label: 'Map/Listings Split View', href: '/listings/real-estate' },
      { label: 'Property Details Page', href: '/listings/single-entry-real-estate' },
      { label: 'Vendor Page', href: '/listings/vendor-real-estate' },
    ],
  },
  {
    title: 'Cars',
    links: [
      { label: 'Listings Grid View', href: '/listings/grid-cars' },
      { label: 'Listings List View', href: '/listings/list-cars' },
      { label: 'Car Details Page', href: '/listings/entry-cars' },
    ],
  },
  {
    title: 'Contractors',
    links: [
      { label: 'Listings with Side Filters', href: '/listings/contractors' },
      { label: 'Contractor Details Page', href: '/listings/entry-contractors' },
    ],
  },
  {
    title: 'Doctors',
    links: [
      { label: 'Listings List View', href: '/listings/list-doctors' },
      { label: 'Listings Grid View', href: '/listings/grid-doctors' },
      { label: 'Doctor Details Page', href: '/listings/entry-doctors' },
    ],
  },
  {
    title: 'Events',
    links: [
      { label: 'Listings with Top Filters', href: '/listings/events' },
      { label: 'Event Details Page', href: '/listings/entry-events' },
    ],
  },
  {
    title: 'City Guide',
    links: [
      { label: 'Listings with Side Filters', href: '/listings/side-filters-city' },
      { label: 'Listings with Top Filters', href: '/listings/top-filters-city' },
      { label: 'Place Details Page', href: '/listings/entry-city-guide' },
    ],
  },
  {
    title: 'Add Property',
    links: [
      { label: 'Property Type', href: '/listings/property-type' },
      { label: 'Location', href: '/listings/property-location' },
      { label: 'Photos and Videos', href: '/listings/property-photos' },
      { label: 'Property Details', href: '/listings/property-details' },
      { label: 'Price', href: '/listings/property-price' },
      { label: 'Contact Info', href: '/listings/property-contact-info' },
      { label: 'Ad Promotion', href: '/listings/property-promotion' },
    ],
  },
  {
    title: 'Add Contractor',
    links: [
      { label: 'Business Location', href: '/listings/contractor-location' },
      { label: 'Choose Services', href: '/listings/contractor-services' },
      { label: 'Profile Details', href: '/listings/contractor-profile' },
      { label: 'Price and Hours', href: '/listings/contractor-price-hours' },
      { label: 'Create First Project', href: '/listings/contractor-project' },
    ],
  },
  {
    title: 'Add (Sell) Car',
    links: [{ label: 'Add (Sell) Car Page', href: '/listings/add-car' }],
  },
]

const accountLinks: MenuLink[] = [
  { label: 'My Profile', href: '/account/profile' },
  { label: 'My Listings', href: '/account/listings' },
  { label: 'Reviews', href: '/account/reviews' },
  { label: 'Favorites', href: '/account/favorites' },
  { label: 'Payment Details', href: '/account/payment' },
  { label: 'Account Settings', href: '/account/settings' },
]

const authLinks: MenuLink[] = [
  { label: 'Sign In', href: '/account/auth/signin' },
  { label: 'Sign Up', href: '/account/auth/signup' },
  { label: 'Password Recovery', href: '/account/auth/pass-recovery' },
]

const pageSections: MenuSection[] = [
  {
    title: 'About',
    links: [
      { label: 'About v.1', href: '/pages/about-v1' },
      { label: 'About v.2', href: '/pages/about-v2' },
    ],
  },
  {
    title: 'Blog',
    links: [
      { label: 'Blog Layout v.1', href: '/pages/blog/layout-v1' },
      { label: 'Blog Layout v.2', href: '/pages/blog/layout-v2' },
      { label: 'Blog Layout v.3', href: '/pages/blog/layout-v3' },
      { label: 'Blog Layout v.4', href: '/pages/blog/layout-v4' },
      { label: 'Single Post v.1', href: '/pages/blog/single-v1' },
      { label: 'Single Post v.2', href: '/pages/blog/single-v2' },
      { label: 'Single Post v.3', href: '/pages/blog/single-v3' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Contact v.1', href: '/pages/contact-v1' },
      { label: 'Contact v.2', href: '/pages/contact-v2' },
      { label: 'Contact v.3', href: '/pages/contact-v3' },
    ],
  },
  {
    title: 'Help Center',
    links: [
      { label: 'Help Topics v.1', href: '/pages/help/topics-v1' },
      { label: 'Help Topics v.2', href: '/pages/help/topics-v2' },
      { label: 'Help Topics v.3', href: '/pages/help/topics-v3' },
      { label: 'Help Single Article v.1', href: '/pages/help/single-article-v1' },
      { label: 'Help Single Article v.2', href: '/pages/help/single-article-v2' },
      { label: 'Help Single Article v.3', href: '/pages/help/single-article-v3' },
    ],
  },
  {
    title: '404 Error',
    links: [
      { label: 'Background Image (Real Estate)', href: '/pages/error/bg-image' },
      { label: 'Icon Image (Cars)', href: '/pages/error/icon' },
      { label: 'Split Screen (Contractors)', href: '/pages/error/split-screen' },
      { label: 'Illustration (City Guide)', href: '/pages/error/illustration' },
    ],
  },
]

const MobileMenu = () => {
  return (
    <div
      id="topbar"
      className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-80 bg-body-bg border-s border-border"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="topbarlabel"
    >
      <div className="flex h-full flex-col">
        <div className="py-4 px-6 flex items-center justify-between">
          <h3 id="topbarlabel" className="text-xl font-medium text-default-900">
            Browser Finder
          </h3>

          <X className="size-4.5" aria-label="Close" data-hs-overlay="#topbar" />

        </div>

        <div className="flex-1 pt-2 pb-6 px-6 h-full overflow-y-auto">
          <div className="hs-accordion-group">
            {/* Home */}
            <div className="hs-accordion" id="hs-basic-heading-one">
              <button className="hs-accordion-toggle text-default-900 w-full flex items-center justify-between gap-2 py-2 px-4.5 rounded-md font-medium hs-accordion-active:bg-default-100" aria-expanded="true" aria-controls="hs-basic-collapse-one">
                Home
                <Icon icon="tabler:chevron-down" className="size-4" />
              </button>

              <div id="mobile-home-content" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 my-1 border p-3 rounded-md border-default-100 dark:border-white/20 relative z-40" role="region" aria-labelledby="mobile-home">
                <div className="flex flex-col">
                  {homeLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-semibold text-default-900 hover:bg-default-100 hover:dark:bg-white/5 dark:text-white">
                      <span className="font-medium">{item.label}</span>

                      {item.description && <span className="block text-xs font-normal text-body-color">{item.description}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Listings */}
            <div className="hs-accordion" id="mobile-listings">
              <button className="hs-accordion-toggle text-default-900 w-full flex items-center justify-between gap-2 py-2 px-4.5 rounded-md font-medium hs-accordion-active:bg-default-100" aria-expanded="false" aria-controls="mobile-listings-content">
                Listings
                <Icon icon="tabler:chevron-down" className="size-4" />
              </button>

              <div id="mobile-listings-content" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 my-1 border p-6 rounded-md border-default-100 dark:border-white/20 relative z-40" role="region" aria-labelledby="mobile-listings">
                <div className="flex flex-col">
                  {listingSections.map((section, idx) => (
                    <div key={idx}>
                      <div className={clsx('text-default-900 font-semibold mb-2 ', idx === 0 ? 'pt-0' : 'pt-6')}>{section.title}</div>

                      <ul className="flex flex-col gap-2">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <Link href={link.href} className="inline font-normal text-sm">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Account */}
            <div className="hs-accordion" id="mobile-account">
              <button className="hs-accordion-toggle text-default-900 w-full flex items-center justify-between gap-2 py-2 px-4.5 rounded-md font-medium hs-accordion-active:bg-default-100" aria-expanded="false" aria-controls="mobile-account-content">
                Account
                <Icon icon="tabler:chevron-down" className="size-4" />
              </button>

              <div id="mobile-account-content" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 my-1 border p-3 rounded-md border-default-100 dark:border-white/20" role="region" aria-labelledby="mobile-account">
                <div className="flex flex-col">
                  <div className="hs-accordion-group">
                    <div className="hs-accordion border-b border-white/20" id="mobile-auth">
                      <button className="hs-accordion-toggle w-full flex items-center justify-between gap-2 py-2 px-3 rounded-md font-normal text-sm hs-accordion-active:bg-default-100" aria-expanded="false" aria-controls="mobile-auth-content">
                        Auth Pages
                        <Icon icon="lucide:chevron-down" className="size-4" />
                      </button>

                      <div id="mobile-auth-content" className="hs-accordion-content hidden w-full overflow-hidden  transition-[height] duration-300">
                        <div className="border border-border rounded-md p-3 my-1">
                          <ul className="gap-2 flex flex-col">
                            {authLinks.map((item) => (
                              <li key={item.href}>
                                <Link href={item.href} className="inline font-normal text-sm">
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {accountLinks.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="inline font-normal text-sm py-2 px-3">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="hs-accordion" id="mobile-pages">
              <button className="hs-accordion-toggle text-default-900 w-full flex items-center justify-between gap-2 py-2 px-4.5 rounded-md font-medium hs-accordion-active:bg-default-100" aria-expanded="false" aria-controls="mobile-pages-content">
                Pages
                <Icon icon="tabler:chevron-down" className="size-4" />
              </button>

              <div id="mobile-pages-content" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 my-1 border p-3 rounded-md border-default-100 dark:border-white/20" role="region" aria-labelledby="mobile-pages">
                <div className="flex flex-col">
                  <div className="hs-accordion-group">
                    {pageSections.map((section, index) => (
                      <div key={section.title} className="hs-accordion border-b border-white/20" id={`page-section-${index}`}>
                        <button className="hs-accordion-toggle w-full flex items-center justify-between gap-2 py-2 px-3 rounded-md font-normal text-sm hs-accordion-active:bg-default-100" aria-expanded="false" aria-controls={`page-section-content-${index}`}>
                          {section.title}

                          <Icon icon="lucide:chevron-down" className="size-4" />
                        </button>

                        <div id={`page-section-content-${index}`} className="hs-accordion-content hidden w-full overflow-hidden  transition-[height] duration-300">
                          <div className="border border-border rounded-md p-3 my-1">
                            <ul className="gap-2 flex flex-col">
                              {section.links.map((link) => (
                                <li key={link.href}>
                                  <Link href={link.href} className="inline font-normal text-sm">
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Link href="/pages/terms-and-conditions" className="text-sm py-2 px-3">
                      Terms &amp; Conditions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
