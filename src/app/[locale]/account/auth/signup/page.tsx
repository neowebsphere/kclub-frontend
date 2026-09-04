import { Icon } from "@iconify/react"
import { ChevronRight } from "lucide-react"
import { Link } from '@/i18n/navigation'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  // Enables static rendering and keeps <Link> on the current locale
  setRequestLocale(locale)

  return (
    <>
      <div className="lg:ps-12 lg:pe-6 px-4 flex">
        <div className="w-104 py-6 lg:me-auto mx-auto flex flex-col justify-between">
          <header>
            <Link className="inline-flex items-center lg:mb-6 mb-4 md:pb-10 pb-5 pt-2.5" href="/">
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
              <span className="text-2xl font-semibold text-default-900">kclub</span>
            </Link>
          </header>
          <div>
            <h1 className="mb-4 text-default-900 font-semibold lg:text-3.5xl md:text-2.5xl text-2xl">Create an account</h1>
            <div className="flex text-sm lg:mb-6 mb-4">
              I already have an account
              <Link className="underline hover:no-underline font-semibold text-body-color ms-2" href="/account/auth/signin">
                Sign in
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 text-sm lg:mb-6 mb-4 lg:hidden">
              Uncertain about creating an account?
              <Link aria-haspopup="dialog" aria-expanded="false" aria-controls="benefits" data-hs-overlay="#benefits" className="underline hover:no-underline font-semibold text-body-color" href="#!">
                Explore the Benefits
              </Link>
            </div>
            <div className="mb-6">
              <label htmlFor="register-email" className="block mb-2 text-sm font-semibold text-default-800">
                Email
              </label>
              <input type="text" placeholder="Email" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
            </div>
            <div className="mb-6 relative">
              <label htmlFor="register-password" className="block mb-2 text-sm font-semibold text-default-800">
                Password
              </label>
              <input type="password" id="password" placeholder="Minimum 8 characters" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
              <button
                type="button"
                data-hs-toggle-password='{
                          "target": "#password"
                          }'
                className="absolute inset-y-0 end-0 top-7 flex items-center z-20 px-3 cursor-pointer"
              >
                <Icon icon="lucide:eye-off" className="size-4 hs-password-active:hidden block" />
                <Icon icon="lucide:eye" className="size-4 hs-password-active:block hidden" />
              </button>
            </div>
            <div className="mb-6 flex flex-col gap-2">
              <label htmlFor="save-pass" className="flex items-center me-2 mb-1 text-default-600 text-sm cursor-pointer checked:text-default-800">
                <input type="checkbox" id="save-pass" className="size-4 checked:text-dark border-default-300 dark:bg-body-bg rounded me-2" />
                Save the password
              </label>
              <label htmlFor="privacy" className="flex items-center me-2 mb-1 text-default-600 text-sm cursor-pointer checked:text-default-800">
                <input type="checkbox" id="privacy" className="w-4 h-4 checked:text-dark border-default-300 dark:bg-body-bg rounded me-2" />I have read and accept the
                <Link href="#!" className="ms-2 underline hover:no-underline font-semibold text-body-color">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <div>
              <button type="submit" className="py-3.5 px-6 text-white bg-primary inline-flex justify-center items-center font-semibold w-full rounded-md transition hover:bg-primary-hover">
                Create an account
                <ChevronRight className="size-4.5 ms-1" />
              </button>
            </div>
            <div className="flex items-center my-6">
              <hr className="w-full text-default-200 dark:text-white/20" />
              <span className="text-default-900 font-medium text-nowrap mx-6">or continue with</span>
              <hr className="w-full text-default-200 dark:text-white/20" />
            </div>
            <div className="lg:mb-6 mb-4 pb-6 gap-4 flex md:flex-nowrap flex-wrap">
              <button type="button" className="py-3.5 px-2 w-full text-default-600 rounded-md border border-default-300 transition hover:border-default-900 inline-flex items-center justify-center font-semibold">
                <Icon icon="tabler:brand-google-filled" className="ms-1 me-1" />
                Google
              </button>
              <button type="button" className="py-3.5 px-2 w-full text-default-600 rounded-md border border-default-300 transition hover:border-default-900 inline-flex items-center justify-center font-semibold">
                <Icon icon="tabler:brand-facebook-filled" className="ms-1 me-1" />
                Facebook
              </button>
              <button type="button" className="py-3.5 px-2 w-full text-default-600 rounded-md border border-default-300 transition hover:border-default-900 inline-flex items-center justify-center font-semibold">
                <Icon icon="tabler:brand-apple-filled" className="ms-1 me-1" />
                Apple
              </button>
            </div>
          </div>
          <footer>
            <Link className="mb-6 block underline hover:no-underline text-sm font-medium hover:text-default-900" href="/help">
              Need help?
            </Link>
            <p className="text-xs">
              © All rights reserved. Made by
              <Link className="hover:underline text-default-900" href="#!" target="_blank" rel="noreferrer">
                kclub
              </Link>
            </p>
          </footer>
        </div>
        <div className="w-258.5 py-6 lg:block hidden">
          <div className="flex flex-col justify-end rounded-2xl bg-default-100 py-36.25 px-12 dark:bg-white/3">
            <h2 className="mb-4 text-2xl font-semibold text-center text-default-900 pb-4">kclub account benefits</h2>
            <div className="grid grid-cols-2 gap-6 w-197.5 mx-auto">
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:mail" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Subscribe to your favorite listings</h3>
              </div>
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:settings" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Manage your bookings and wishlist</h3>
              </div>
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:gift" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Earn rewards for future purchases</h3>
              </div>
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:percent" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Receive exclusive offers and discounts</h3>
              </div>
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:heart" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Create multiple wishlists</h3>
              </div>
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:pie-chart" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Pay for purchases by installments</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="benefits" className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0  transition-all duration-300 transform h-full w-full z-80 bg-default-100" role="dialog" tabIndex={-1} aria-labelledby="benefitslabel">
        <div className="flex justify-end items-center p-4">
          <button
            type="button"
            className="size-10 inline-flex justify-center items-center gap-x-2 rounded-full border border-default-900 text-default-800 hover:bg-default-200 focus:outline-hidden focus:bg-default-200 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Close"
            data-hs-overlay="#benefits"
          >
            <span className="sr-only">Close</span>
            <Icon icon="lucide:x" className="text-base" />
          </button>
        </div>
        <div className="px-6 pt-2 pb-5">
          <div className="flex flex-col justify-end h-full bg-info-subtle rounded-2xl bg-default-100 dark:bg-white/3">
            <h2 className="mb-4 text-2xl font-semibold text-default-900 pb-4 text-center">kclub account benefits</h2>
            <div className="grid grid-cols-2 gap-6 mx-auto">
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:mail" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Subscribe to your favorite listings</h3>
              </div>
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:settings" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Manage your bookings and wishlist</h3>
              </div>
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:gift" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Earn rewards for future purchases</h3>
              </div>
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:percent" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Receive exclusive offers and discounts</h3>
              </div>
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:heart" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Create multiple wishlists</h3>
              </div>
              <div className="border border-default-200 rounded-md p-6 bg-body-bg/30">
                <div className="size-16 bg-body-bg flex justify-center items-center mx-auto rounded-full">
                  <Icon icon="lucide:pie-chart" className="text-2xl text-info" />
                </div>
                <h3 className="text-default-900 text-center font-semibold pt-2 my-2">Pay for purchases by installments</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
