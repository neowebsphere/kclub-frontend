'use client'
import Icon from '@/components/wrappers/Icon'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type ListingLink = {
  label: string
  href: string
}

type ListingSection = {
  title: string
  className?: string
  links: ListingLink[]
}

const listingSections: ListingSection[][] = [
  [
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
      className: 'pt-4',
      links: [
        { label: 'Listings Grid View', href: '/listings/grid-cars' },
        { label: 'Listings List View', href: '/listings/list-cars' },
        { label: 'Car Details Page', href: '/listings/entry-cars' },
      ],
    },
    {
      title: 'Contractors',
      className: 'pt-4',
      links: [
        { label: 'Listings with Side Filters', href: '/listings/contractors' },
        { label: 'Contractor Details Page', href: '/listings/entry-contractors' },
      ],
    },
    {
      title: 'Doctors',
      className: 'pt-4',
      links: [
        { label: 'Listings List View', href: '/listings/list-doctors' },
        { label: 'Listings Grid View', href: '/listings/grid-doctors' },
        { label: 'Doctor Details Page', href: '/listings/entry-doctors' },
      ],
    },
  ],
  [
    {
      title: 'Events',
      links: [
        { label: 'Listings with Top Filters', href: '/listings/events' },
        { label: 'Event Details Page', href: '/listings/entry-events' },
      ],
    },
    {
      title: 'City Guide',
      className: 'pt-4',
      links: [
        { label: 'Listings with Side Filters', href: '/listings/side-filters-city' },
        { label: 'Listings with Top Filters', href: '/listings/top-filters-city' },
        { label: 'Place Details Page', href: '/listings/entry-city-guide' },
      ],
    },
    {
      title: 'Add Property',
      className: 'pt-4',
      links: [
        { label: 'Property Type', href: '/listings/property-type' },
        { label: 'Location', href: '/listings/property-location' },
        { label: 'Photos and Videos', href: '/listings/property-photos' },
        { label: 'Property Details', href: '/listings/property-details' },
        { label: 'Price', href: '/listings/property-price' },
        { label: 'Contact Info', href: '/listings/property-contact' },
        { label: 'Ad Promotion', href: '/listings/property-promotion' },
      ],
    },
  ],
  [
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
      className: 'pt-4',
      links: [{ label: 'Add (Sell) Car Page', href: '/listings/add-car' }],
    },
  ],
]

const ListingsMenuDropdown = () => {
  const pathname = usePathname()

  const isListingsActive = pathname.startsWith('/listings')

  return (
    <div className="hs-dropdown [--trigger:hover] relative inline-flex transition-all duration-300 py-2">
      <button
        id="hs-dropdown-hover-event"
        type="button"
        className={`hs-dropdown-toggle cursor-pointer text-default-900 flex items-center py-2 px-4.5 gap-1 rounded-full font-medium ${isListingsActive ? 'active' : ''}`}
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        Listings
        <Icon icon="chevron-down" className="size-4.5" />
      </button>

      <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-20" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
        <div
          className="p-6 border border-border hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out opacity-0 scale-90 duration-200 origin-center min-w-60 bg-body-bg shadow-custom rounded-xl after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
          data-hs-transition
        >
          <div className="grid grid-cols-3 justify-between gap-6">
            {listingSections.map((column, columnIndex) => (
              <div key={columnIndex} className="col-span-1 w-47.5">
                {column.map((section) => (
                  <div key={section.title}>
                    <div className={clsx('mb-2 text-default-900 font-semibold', section.className)}>{section.title}</div>

                    <ul className="flex flex-col gap-1">
                      {section.links.map((link) => {
                        const isActive = pathname === link.href

                        return (
                          <li key={link.href}>
                            <Link href={link.href} className={`hover:underline text-sm ${isActive ? 'active' : ''}`}>
                              {link.label}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingsMenuDropdown
