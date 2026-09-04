'use client'
import avatar from '@/assets/img/account/avatar.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideBar = () => {
  const pathname = usePathname()

  const getLinkClass = (href: string) => {
    const isActive = pathname === href
    return isActive
      ? 'py-2.5 px-3 rounded-md text-default-700 bg-default-100 dark:bg-white/10 text-sm font-medium inline-flex items-center gap-2'
      : 'py-2.5 px-3 rounded-md text-default-600 bg-transparent text-sm font-medium inline-flex items-center gap-2 hover:bg-default-100/70 hover:text-default-700 hover:dark:bg-white/8'
  }
  return (
    <>
      <div className="lg:sticky lg:top-25">
        <div
          id="accountSidebar"
          className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-auto hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform  hidden fixed top-0 start-0 bottom-0 z-60 bg-body-bg lg:w-auto w-87"
          role="dialog"
          tabIndex={-1}
          aria-label="Sidebar"
        >
          <div className="flex flex-col sticky top-0">
            <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2">
              <Link className="focus:outline-hidden focus:opacity-80 " href="" aria-label="Brand">
                <div className="lg:block flex items-center gap-4">
                  <div className="border border-border rounded-full size-16">
                    <Image src={avatar} alt="Avatar" className="rounded-full size-16" />
                  </div>
                  <div className="lg:pt-4">
                    <h6 className="mb-1 text-default-900 font-semibold">Michael Williams</h6>
                    <p className="text-sm">m.williams@example.com</p>
                  </div>
                </div>
              </Link>
              <div className="lg:hidden -me-2">
                <button type="button" data-hs-overlay="#accountSidebar">
                  <Icon icon="lucide:x" className="size-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
            </header>
            <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full">
              <div className="w-full flex flex-col flex-wrap pt-2 px-6 lg:px-0 pb-4 lg:pb-0 lg:pt-6">
                <div className="flex flex-col gap-1">
                  <Link href="/account/profile" className={getLinkClass('/account/profile')}>
                    <Icon icon="lucide:user" className="size-4" /> My profile
                  </Link>
                  <Link href="/account/listings" className={getLinkClass('/account/listings')}>
                    <Icon icon="lucide:layers" className="size-4" /> My listings
                  </Link>
                  <Link href="/account/reviews" className={getLinkClass('/account/reviews')}>
                    <Icon icon="lucide:star" className="size-4" /> Reviews
                  </Link>
                  <Link href="/account/favorites" className={getLinkClass('/account/favorites')}>
                    <Icon icon="lucide:heart" className="size-4" /> Favorites
                  </Link>
                  <Link href="/account/payment" className={getLinkClass('/account/payment')}>
                    <Icon icon="lucide:credit-card" className="size-4" /> Payments details
                  </Link>
                  <Link href="/account/settings" className={getLinkClass('/account/settings')}>
                    <Icon icon="lucide:settings" className="size-4" /> Account settings
                  </Link>
                  <Link href="/pages/help/topics-v1" className={getLinkClass('/pages/help/topics-v1')}>
                    <Icon icon="lucide:help-circle" className="size-4" /> Help center
                  </Link>
                  <div className="pt-4 w-full">
                    <Link href="/account/auth/signin" className="py-2.5 px-3 w-full rounded-md text-default-600 bg-transparent text-sm font-medium inline-flex items-center gap-2 hover:bg-default-100/70 hover:text-default-700 hover:dark:bg-white/8">
                      <Icon icon="lucide:log-out" className="size-4" /> Sign out
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
