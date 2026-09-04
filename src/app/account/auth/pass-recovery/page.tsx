import cover from '@/assets/img/account/account-cover.png'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div className="max-w-480 lg:ps-12 lg:pe-6 px-4 flex md:h-full h-screen">
        <div className="w-104 py-6 lg:me-12 lg:ms-auto mx-auto flex flex-col justify-between">
          <header>
            <div className="flex justify-between items-center lg:mb-6 mb-4 pb-6">
              <Link className="inline-flex items-center text-dark-emphasis pt-2.5" href="/">
                <span className="shrink-0 text-primary rtl-flip me-2">
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
                <span className="text-2xl font-semibold text-default-900">Finder</span>
              </Link>
              <Link className="flex items-center text-base font-semibold" href="/account/auth/signin">
                <Icon icon="lucide:chevron-left" className="text-lg me-1" />
                <span className="hover:text-default-900">Back to Sign In</span>
              </Link>
            </div>
          </header>
          <div>
            <h1 className="mb-4 text-default-900 font-semibold lg:text-3.5xl md:text-2.5xl text-2xl">Forgot password?</h1>
            <p className="mb-4 pb-4">Enter the email address you used when you joined and we'll send you instructions to reset your password</p>
            <div className="mb-6 relative">
              <Icon icon="lucide:mail" className="absolute top-1/2 start-4 -translate-y-1/2 text-default-600" />
              <input type="password" placeholder="Email address" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent ps-10 pe-4.5 py-2.75" />
            </div>
            <button type="submit" className="py-3.5 px-6 text-white bg-primary inline-flex justify-center font-semibold w-full rounded-md transition hover:bg-primary-hover">
              Reset password
            </button>
          </div>
          <footer>
            <Link className="mb-6 block underline hover:no-underline text-sm font-medium hover:text-default-900" href="/pages/help/topics-v1">
              Need help?
            </Link>
            <p className="text-xs">
              © All rights reserved. Made by
              <Link className="hover:underline text-default-900" href="" target="_blank" rel="noreferrer">
                Coderthemes
              </Link>
            </p>
          </footer>
        </div>
        <div className="max-w-258.5 ms-auto py-6 lg:block hidden">
          <div className="flex flex-col justify-end h-full bg-info-subtle rounded-2xl bg-default-100 dark:bg-white/3">
            <div>
              <Image src={cover} alt="Girl" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
