import { Icon } from '@iconify/react'
import { SquarePen, Trash2 } from 'lucide-react'
import Link from 'next/link'

const Payment = () => {
  return (
    <>
      <div className="lg:col-span-9 col-span-1">
        <h1 className="mb-4 lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Payment details</h1>
        <p className="md:pb-4 pb-2 mb-4">Add and manage payment methods with our secure payment system.</p>
        <div className="lg:w-200 w-full grid md:grid-cols-2 grid-cols-1 mb-4 gap-6 md:pb-4 pb-2">
          <div className="relative w-full border-0 rounded-xl overflow-hidden">
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between md:mb-4 mb-2 pb-6">
                <div className="flex items-center">
                  <svg className="shrink-0 text-default-900" xmlns="http://www.w3.org/2000/svg" width={52} height={32} fill="currentColor">
                    <path d="M20.224 8.524L13.94 23.516h-4.1L6.748 11.55c-.188-.736-.35-1.006-.922-1.316-.932-.506-2.472-.98-3.826-1.276l.092-.434h6.6a1.81 1.81 0 0 1 1.788 1.528l1.634 8.676L16.15 8.524h4.074zM36.29 18.622c.016-3.958-5.472-4.176-5.434-5.944.012-.538.524-1.11 1.644-1.256a7.32 7.32 0 0 1 3.826.672l.68-3.18c-1.16-.436-2.389-.662-3.628-.666-3.834 0-6.532 2.04-6.556 4.958-.024 2.158 1.926 3.36 3.396 4.08 1.512.734 2.02 1.206 2.012 1.862-.01 1.008-1.204 1.45-2.32 1.468-1.95.03-3.08-.526-3.984-.946l-.702 3.284c.906.416 2.578.78 4.312.796 4.074 0 6.74-2.012 6.754-5.128zm10.122 4.894H50L46.87 8.524h-3.312c-.354-.003-.701.1-.995.296s-.523.476-.657.804l-5.818 13.892h4.072l.81-2.24h4.976l.466 2.24zm-4.326-5.312l2.04-5.63 1.176 5.63h-3.216zm-16.32-9.68L22.56 23.516h-3.88l3.21-14.992h3.876z" />
                  </svg>
                  <span className="ms-4 px-2 py-0.5 text-xs font-medium rounded bg-body-bg text-default-900">Primary</span>
                </div>
                <div className="hs-dropdown relative inline-flex">
                  <button
                    type="button"
                    className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md size-10 text-default-600  focus:outline-hidden 
                                          dark:text-white"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Share"
                  >
                    <Icon icon="lucide:more-vertical" className="text-xl" />
                  </button>
                  <div
                    className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute z-20 min-w-30 bg-body-bg shadow-custom rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <div className="p-2.5 space-y-0.5">
                      <Link
                        href=""
                        className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                      >
                        <SquarePen className="size-4" />
                        Edit
                      </Link>
                      <Link
                        href=""
                        className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-primary hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                      >
                        <Trash2 className="size-4" />
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-xl text-default-900 tracking-[1.25px] font-semibold pt-1 mb-4 md:pb-4 pb-2">1245 **** **** 0730</div>
              <div className="flex justify-between">
                <div className="me-3">
                  <div className="text-xs text-default-500 mb-1">Name</div>
                  <div className="text-sm font-semibold text-default-900">Michael Williams</div>
                </div>
                <div>
                  <div className="text-xs text-default-500 mb-1">Expiry date</div>
                  <div className="text-sm font-semibold text-default-900">12/26</div>
                </div>
              </div>
            </div>

            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#accbee] to-[#dbeafe] dark:hidden" />

            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1b273a] to-[#1f2632] hidden dark:block" />
          </div>
          <div className="relative w-full border-0 rounded-xl overflow-hidden">
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between md:mb-4 mb-2 pb-6">
                <div className="flex items-center">
                  <svg className="shrink-0 text-default-900" xmlns="http://www.w3.org/2000/svg" width={52} height={32} fill="currentColor">
                    <path d="M20.224 8.524L13.94 23.516h-4.1L6.748 11.55c-.188-.736-.35-1.006-.922-1.316-.932-.506-2.472-.98-3.826-1.276l.092-.434h6.6a1.81 1.81 0 0 1 1.788 1.528l1.634 8.676L16.15 8.524h4.074zM36.29 18.622c.016-3.958-5.472-4.176-5.434-5.944.012-.538.524-1.11 1.644-1.256a7.32 7.32 0 0 1 3.826.672l.68-3.18c-1.16-.436-2.389-.662-3.628-.666-3.834 0-6.532 2.04-6.556 4.958-.024 2.158 1.926 3.36 3.396 4.08 1.512.734 2.02 1.206 2.012 1.862-.01 1.008-1.204 1.45-2.32 1.468-1.95.03-3.08-.526-3.984-.946l-.702 3.284c.906.416 2.578.78 4.312.796 4.074 0 6.74-2.012 6.754-5.128zm10.122 4.894H50L46.87 8.524h-3.312c-.354-.003-.701.1-.995.296s-.523.476-.657.804l-5.818 13.892h4.072l.81-2.24h4.976l.466 2.24zm-4.326-5.312l2.04-5.63 1.176 5.63h-3.216zm-16.32-9.68L22.56 23.516h-3.88l3.21-14.992h3.876z" />
                  </svg>
                </div>
                <div className="hs-dropdown relative inline-flex">
                  <button type="button" className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md size-10 text-default-600  focus:outline-hidden dark:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Share">
                    <Icon icon="lucide:more-vertical" className="text-xl" />
                  </button>
                  <div
                    className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute z-10 min-w-30 bg-body-bg shadow-custom rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <div className="p-2.5 space-y-0.5">
                      <Link
                        href=""
                        className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                      >
                        <SquarePen className="size-4" />
                        Edit
                      </Link>
                      <Link href="" className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-primary hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                        <Trash2 className="size-4" />
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-xl text-default-900 tracking-[1.25px] font-semibold pt-1 mb-4 md:pb-4 pb-2">4460 **** **** 7821</div>
              <div className="flex justify-between">
                <div className="me-3">
                  <div className="text-xs text-default-500 mb-1">Name</div>
                  <div className="text-sm font-semibold text-default-900">Michael Williams</div>
                </div>
                <div>
                  <span className="px-2 py-0.5 text-xs font-medium rounded bg-primary-hover text-white">Expired</span>
                  <div className="text-sm mt-1 font-semibold text-default-900">10/23</div>
                </div>
              </div>
            </div>

            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fcb69f] to-[#ffe8c9] dark:hidden" />

            <span className="absolute inset-0 rounded-2xl hidden dark:block bg-gradient-to-l from-[#2f2c3a] to-[#372e2f]" />
          </div>
        </div>
        <Link
          href="#addCard"
          className="border md:w-auto w-full border-default-900 bg-transparent text-default-900 transition-all duration-300 hover:bg-default-900 hover:text-body-bg py-3.5 px-6 rounded-md justify-center items-center inline-flex font-semibold"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="addPayment"
          data-hs-overlay="#addPayment"
        >
          <Icon icon="lucide:plus" className="text-lg me-2" />
          Add payment method
        </Link>
      </div>
    </>
  )
}

export default Payment
