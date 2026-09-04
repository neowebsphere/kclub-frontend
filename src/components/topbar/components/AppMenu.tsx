'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import AccountMenuDropdown from './AccountMenuDropdown'
import ListingsMenuDropdown from './ListingsMenuDropdown'
import PagesMenuDropdown from './PagesMenuDropdown'

const AppMenu = () => {
  const pathname = usePathname()

  return (
    <>
      <div id="navbar" className="flex justify-start gap-1 items-center">
        <Link href="/" className={`cursor-pointer text-default-900 flex items-center py-2 px-4.5 font-medium ${pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <ListingsMenuDropdown />
        <AccountMenuDropdown />
        <PagesMenuDropdown />
      </div>
    </>
  )
}

export default AppMenu
