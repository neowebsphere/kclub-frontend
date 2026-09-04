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
      title: 'Contractors',
      links: [
        { label: 'Browse Catalog', href: '/contractors' },
        { label: 'Contractor Profile', href: '/contractors/entry' },
      ],
    },
  ],
  [
    {
      title: 'List Your Business',
      links: [
        { label: 'Profile Details', href: '/add-listing/profile' },
        { label: 'Choose Services', href: '/add-listing/services' },
        { label: 'Business Location', href: '/add-listing/location' },
        { label: 'Price and Hours', href: '/add-listing/price-hours' },
        { label: 'First Project', href: '/add-listing/project' },
      ],
    },
  ],
]

const ListingsMenuDropdown = () => {
  const pathname = usePathname()

  const isListingsActive = pathname.startsWith('/contractors') || pathname.startsWith('/add-listing')

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
          <div className="grid grid-cols-2 justify-between gap-6">
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
