'use client'
import Icon from '@/components/wrappers/Icon'
import clsx from 'clsx'
import { Link } from '@/i18n/navigation'
import { usePathname } from '@/i18n/navigation'

type MenuItem = {
  label: string
  href?: string
  className?: string
  children?: {
    label: string
    href: string
  }[]
}

const menuItems: MenuItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Help Center', href: '/help' },
  { label: 'Terms & Conditions', href: '/terms' },
]

const PagesMenuDropdown = () => {
  const pathname = usePathname()

  const isChildActive = (children: MenuItem['children']) => {
    if (!children) return false
    return children.some((child) => pathname === child.href || pathname.startsWith(child.href))
  }

  const isMenuActive = (item: MenuItem) => {
    if (item.href) return pathname === item.href
    if (item.children) return isChildActive(item.children)
    return false
  }

  const isAnyMenuActive = menuItems.some((item) => isMenuActive(item))

  return (
    <div className="hs-dropdown [--trigger:hover] relative inline-flex transition-all duration-300 py-2">
      <button
        id="hs-dropdown-hover-event"
        type="button"
        className={clsx('hs-dropdown-toggle cursor-pointer text-default-900 flex items-center py-2 px-4.5 gap-1 rounded-full font-medium', isAnyMenuActive ? 'active' : '')}
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        Pages
        <Icon icon="chevron-down" className="size-4.5" />
      </button>
      <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-20" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
        <div
          className="p-3 border border-border hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out opacity-0 scale-90 duration-200 origin-center min-w-45 bg-body-bg shadow-custom rounded-xl after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
          data-hs-transition
        >
          <ul className="dropdown-menu">
            {menuItems.map((item, index) => (
              <li key={index} className={clsx('dropend', item.children && 'relative group')}>
                {item.children ? (
                  <>
                    <Link href="" className={clsx('flex items-center justify-between w-full py-2 px-3 hover:bg-default-300/25 dark:hover:bg-white/10 text-sm rounded-md', isMenuActive(item) && 'bg-default-300/25 dark:bg-white/10')}>
                      {item.label}
                      <Icon icon="chevron-right" />
                    </Link>
                    <ul className={clsx('absolute -top-3 start-full hidden group-hover:block p-3 border border-border rounded-xl shadow-lg bg-body-bg z-50 list-none', item.className)}>
                      <div className="flex flex-col gap-y-0.5">
                        {item.children.map((child, childIndex) => (
                          <Link key={childIndex} href={child.href} className={clsx('text-sm py-2 px-3 hover:bg-default-300/25 dark:hover:bg-white/10 rounded-lg', pathname === child.href && 'active')}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </ul>
                  </>
                ) : (
                  <Link href={item.href!} className={clsx('inline-flex text-sm py-2 px-3 hover:bg-default-300/25 dark:hover:bg-white/10 rounded-lg', pathname === item.href && 'active')}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PagesMenuDropdown
