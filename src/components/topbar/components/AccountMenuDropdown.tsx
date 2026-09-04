'use client'
import Icon from '@/components/wrappers/Icon'
import { Link } from '@/i18n/navigation'
import { usePathname } from '@/i18n/navigation'

type AuthSubMenuItem = {
  label: string
  href: string
}

type MenuItem = {
  label: string
  href?: string
  children?: AuthSubMenuItem[]
}

const accountMenuItems: MenuItem[] = [
  {
    label: 'Auth pages',
    children: [
      { label: 'Sign In', href: '/account/auth/signin' },
      { label: 'Sign Up', href: '/account/auth/signup' },
      { label: 'Password Recovery', href: '/account/auth/pass-recovery' },
    ],
  },
  { label: 'My Profile', href: '/account/profile' },
  { label: 'My Listings', href: '/account/listings' },
  { label: 'Reviews', href: '/account/reviews' },
  { label: 'Favorites', href: '/account/favorites' },
  { label: 'Payment Details', href: '/account/payment' },
  { label: 'Account Settings', href: '/account/settings' },
]

const AccountMenuDropdown = () => {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  const isParentActive = (children?: AuthSubMenuItem[]) => children?.some((item) => pathname === item.href)

  const isAccountActive = accountMenuItems.some((item) => {
    if (item.href) return pathname === item.href

    return item.children?.some((child) => pathname === child.href)
  })

  return (
    <div className="hs-dropdown relative inline-flex py-2 transition-all duration-300 [--trigger:hover]">
      <button
        id="account-dropdown"
        type="button"
        className={`hs-dropdown-toggle cursor-pointer text-default-900 flex items-center py-2 px-4.5 gap-1 rounded-full font-medium ${isAccountActive ? 'active' : ''}`}
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Account Dropdown"
      >
        Account
        <Icon icon="chevron-down" className="size-4.5" />
      </button>

      <div className="hs-dropdown-menu z-20 hidden opacity-0 transition-[opacity,margin] duration-300 hs-dropdown-open:opacity-100" role="menu" aria-orientation="vertical" aria-labelledby="account-dropdown">
        <div
          className="min-w-45 origin-center rounded-xl border border-border bg-body-bg p-3 shadow-custom transition duration-200 ease-out after:absolute after:-bottom-4 after:start-0 after:h-4 after:w-full before:absolute before:-top-4 before:start-0 before:h-4 before:w-full hs-dropdown-open:scale-100 hs-dropdown-open:opacity-100"
          data-hs-transition
        >
          <ul className="flex flex-col">
            {accountMenuItems.map((item) => {
              if (item.children) {
                return (
                  <li key={item.label} className="group relative">
                    <button type="button" className={`flex items-center justify-between w-full py-2 px-3 hover:bg-default-300/25  dark:hover:bg-white/10 text-sm rounded-md ${isParentActive(item.children) ? 'active' : ''}`}>
                      {item.label}

                      <Icon icon="chevron-right" />
                    </button>

                    <ul className="absolute -top-3 start-full hidden group-hover:block p-3 border border-border rounded-xl shadow-lg bg-body-bg z-50 w-46 list-none">
                      <div className="flex flex-col">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} className={`text-sm py-2 px-3 hover:bg-default-300/25 dark:hover:bg-white/10 rounded-lg ${isActive(child.href) ? 'active' : ''}`}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </ul>
                  </li>
                )
              }

              return (
                <li key={item.href}>
                  <Link href={item.href!} className={`py-2 px-3 text-sm inline-flex hover:bg-default-300/25 dark:hover:bg-white/10 w-full rounded-md ${isActive(item.href!) ? 'active' : ''}`}>
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AccountMenuDropdown
