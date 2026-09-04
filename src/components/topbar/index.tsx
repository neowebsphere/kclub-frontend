'use client'
import useScrollEvent from '@/hooks/useScrollEvent'
import clsx from 'clsx'
import { LogIn, Menu, UserRound } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import React from 'react'
import AppMenu from './components/AppMenu'
import MobileMenu from './components/MobileMenu'
import LocaleSwitcher from './components/LocaleSwitcher'
import ThemeMode from './components/ThemeMode'
import UserDropdown from './components/UserDropdown'

export type Props = {
  className: string
  showLogIn?: boolean
  showSignIn?: boolean
  ButtonIcon?: React.ReactNode
  ButtonText?: React.ReactNode
  ButtonClassName?: string
  showSignInButton?: boolean
  ShowUser?: boolean
  appMenuClass?: string
}

const Topbar = ({ className, showSignIn, ButtonIcon, ButtonText, showLogIn, ButtonClassName, showSignInButton, ShowUser, appMenuClass }: Props) => {
  const { scrollY } = useScrollEvent()

  return (
    <>
      <header>
        <div className={clsx('navbar bg-transparent fixed transition-all top-0 inset-x-0 w-screen z-20 duration-300', scrollY > 100 && className)}>
          <div className="container">
            <div className="md:grid lg:grid-cols-5 grid-cols-3 flex items-center justify-between py-3 lg:py-3.5">
              <div className="flex items-center lg:hidden md:me-0 me-6">
                <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="topbar" data-hs-overlay="#topbar">
                  <Menu className="text-default-950 size-7" />
                </button>
              </div>
              <div className="py-1">
                <Link className="inline-flex items-center text-default-900" href="/">
                  <span className="shrink-0 text-primary rtl-flip me-2 md:block hidden">
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
                  <span className="text-2xl font-semibold text-default-900 dark:text-white">kclub</span>
                </Link>
              </div>
              <div className={clsx(appMenuClass ? appMenuClass : 'lg:block hidden lg:col-span-3')}>
                <AppMenu />
              </div>
              <div>
                <div className="flex justify-end items-center gap-4">
                  <LocaleSwitcher />

                  <ThemeMode />

                  {ShowUser && <UserDropdown />}

                  {showLogIn && (
                    <Link href="/account/auth/signin" className="border border-default-300 hover:border-default-800 text-default-800 inline-flex items-center justify-center text-sm font-medium rounded-md lg:px-5 lg:py-2.5 p-2.5 transition-all duration-300 text-nowrap">
                      <LogIn className="size-4 lg:me-2" />
                      <span className="lg:block hidden">Log in</span>
                    </Link>
                  )}

                  {showSignIn && (
                    <div>
                      <Link href="/account/auth/signin" aria-label="Sign in to account" className="size-10">
                        <UserRound className="size-4.5" />
                      </Link>
                    </div>
                  )}

                  {showSignInButton && (
                    <div className="flex items-center gap-2.5">
                      <Link
                        href="/account/auth/signin"
                        className="border border-default-800 hover:bg-default-800 text-default-800 hover:text-default-50 inline-flex items-center gap-2 justify-center text-sm font-medium rounded-lg px-5 py-2.5 transition-all duration-300 text-nowrap"
                      >
                        <UserRound className="size-4" />
                        Sign in
                      </Link>
                    </div>
                  )}

                  {ButtonText && (
                    <div>
                      <Link href="" className={clsx('bg-primary text-white inline-flex items-center text-sm font-medium px-5 py-2.5 transition-all duration-300 hover:bg-primary-hover', ButtonClassName)}>
                        {ButtonIcon}
                        {ButtonText}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu />
      </header>
    </>
  )
}

export default Topbar
