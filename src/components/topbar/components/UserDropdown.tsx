import avatar from '@/assets/img/account/avatar-sm.jpg'
import { CreditCard, Heart, Layers, LogOut, Settings, Star, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const UserDropdown = () => {
  return (
    <>
      <div className="hs-dropdown .[--trigger:hover] [--placement:bottom-right]">
        <button type="button" className="hs-dropdown-toggle hs-dark-mode group flex items-center text-default-600 focus:outline-hidden font-medium overflow-hidden size-9.5 rounded-full" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          <Image src={avatar} className="hover:scale-105 transition-all duration-300" alt="Avatar" />
        </button>
        <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-4 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-body-bg shadow-custom border border-border rounded-lg p-3 space-y-0.5 w-50" role="menu">
          <ul className="space-y-0.5">
            <li className="py-2 px-3">
              <span className="text-sm text-default-800 font-semibold">Michael Williams</span>
            </li>
            <li className="py-2 px-3 hover:bg-default-100 hover:text-default-800 rounded-md transition-all">
              <Link className="flex items-center gap-2 text-sm" href="/account/profile">
                <UserRound className="size-3.5" />
                My profile
              </Link>
            </li>
            <li className="py-2 px-3 hover:bg-default-100 hover:text-default-800 rounded-md transition-all">
              <Link className="flex items-center gap-2 text-sm" href="/account/listings">
                <Layers className="size-3.5" />
                My listings
              </Link>
            </li>
            <li className="py-2 px-3 hover:bg-default-100 hover:text-default-800 rounded-md transition-all">
              <Link className="flex items-center gap-2 text-sm" href="/account/reviews">
                <Star className="size-3.5" />
                Reviews
              </Link>
            </li>
            <li className="py-2 px-3 hover:bg-default-100 hover:text-default-800 rounded-md transition-all">
              <Link className="flex items-center gap-2 text-sm" href="/account/favorites">
                <Heart className="size-3.5" />
                Favorites
              </Link>
            </li>
            <li className="py-2 px-3 hover:bg-default-100 hover:text-default-800 rounded-md transition-all">
              <Link className="flex items-center gap-2 text-sm" href="/account/payment">
                <CreditCard className="size-3.5" />
                Payment details
              </Link>
            </li>
            <li className="py-2 px-3 hover:bg-default-100 hover:text-default-800 rounded-md transition-all">
              <Link className="flex items-center gap-2 text-sm" href="/account/settings">
                <Settings className="size-3.5" />
                Account settings
              </Link>
            </li>
            <li className="py-2 px-3">
              <hr className="border-default-200" />
            </li>
            <li className="py-2 px-3 hover:bg-default-100 hover:text-default-800 rounded-md transition-all">
              <Link className="flex items-center gap-2 text-sm" href="/account/auth/signin">
                <LogOut className="size-3.5" />
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default UserDropdown
