'use client'
import clsx from 'clsx'
import { Circle, CircleArrowDown, CircleArrowRight, CircleCheckBig } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SidebarItemType = {
  label: string
  href: string
}

const sidebarItems: SidebarItemType[] = [
  { label: 'Property type', href: '/listings/property-type' },
  { label: 'Location', href: '/listings/property-location' },
  { label: 'Photos and videos', href: '/listings/property-photos' },
  { label: 'Property details', href: '/listings/property-details' },
  { label: 'Price', href: '/listings/property-price' },
  { label: 'Contact info', href: '/listings/property-contact' },
  { label: 'Ad promotion', href: '/listings/property-promotion' },
]

const SideBar = () => {
  const pathname = usePathname()

  const currentIndex = sidebarItems.findIndex((item) => item.href === pathname)

  return (
    <div>
      <ul className="flex flex-nowrap gap-6 overflow-x-auto whitespace-nowrap pb-2 lg:flex-col lg:gap-y-2 lg:pb-0">
        {sidebarItems.map((item, index) => {
          const isActive = pathname === item.href
          const isCompleted = index < currentIndex

          return (
            <li key={item.href}>
              <Link href={item.href} className={clsx('inline-flex items-center text-sm transition-all duration-200 lg:px-4', isActive ? 'py-1 font-medium text-default-900' : isCompleted ? 'py-0.5 text-default-900' : 'py-0.5 text-default-400 hover:text-default-900')}>
                {isActive ? (
                  <>
                    <CircleArrowRight className="me-2 hidden size-4.5 lg:inline-flex" />
                    <CircleArrowDown className="me-2 size-4.5 lg:hidden" />
                  </>
                ) : isCompleted ? (
                  <CircleCheckBig className="me-2 size-4.5" />
                ) : (
                  <Circle className="me-2 size-4.5" />
                )}

                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideBar
