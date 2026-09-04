import { Icon } from '@iconify/react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="bg-body-bg dark">
        <div className="container">
          <div className="pt-12 pb-2">
            <div className="grid lg:grid-cols-4 md:grid-cols-12 md:gap-6 md:mb-12 mb-4">
              <div className="lg:col-span-1 md:col-span-2 col-span-1 md:block hidden">
                <span className="mb-3 text-white font-semibold">For patients</span>
                <div className="pt-2">
                  <ul className="gap-2 flex flex-col">
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Family medicine
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Pediatrics
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Top hospitals
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Telehealth
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Dentistry
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hs-accordion-group md:hidden block">
                <div className="hs-accordion border-b border-white/20 py-3">
                  <button className="hs-accordion-toggle  inline-flex items-center gap-x-3 w-full font-semibold text-start text-base text-white" aria-expanded="false">
                    For patients
                    <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-4" />
                    <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-4" />
                  </button>
                  <div className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-three">
                    <div className="pt-2">
                      <ul className="gap-2 flex flex-col">
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Family medicine
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Pediatrics
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Top hospitals
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Telehealth
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Dentistry
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 md:col-span-3 col-span-1 md:block hidden">
                <span className="mb-3 text-white font-semibold">For providers</span>
                <div className="pt-2">
                  <ul className="gap-2 flex flex-col">
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Provider log in
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Promote your practice
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Claim your free profile
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        News and features
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Help center
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hs-accordion-group md:hidden block">
                <div className="hs-accordion border-b border-white/20 py-3">
                  <button className="hs-accordion-toggle  inline-flex items-center gap-x-3 w-full font-semibold text-start text-base text-white" aria-expanded="false">
                    For providers
                    <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-4" />
                    <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-4" />
                  </button>
                  <div className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-three">
                    <div className="pt-2">
                      <ul className="gap-2 flex flex-col">
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Provider log in
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Promote your practice
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Claim your free profile
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            News and features
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Help center
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 md:col-span-3 col-span-1 md:block hidden">
                <span className="mb-3 text-white font-semibold">Our company</span>
                <div className="pt-2">
                  <ul className="gap-2 flex flex-col">
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Contact us
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        About us
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Healthgrades methodologies
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                        Privacy preferences
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hs-accordion-group md:hidden block">
                <div className="hs-accordion border-b border-white/20 py-3">
                  <button className="hs-accordion-toggle  inline-flex items-center gap-x-3 w-full font-semibold text-start text-base text-white" aria-expanded="false">
                    Our company
                    <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-4" />
                    <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-4" />
                  </button>
                  <div className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-three">
                    <div className="pt-2">
                      <ul className="gap-2 flex flex-col">
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Contact us
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            About us
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Healthgrades methodologies
                          </Link>
                        </li>
                        <li className="pt-1">
                          <Link href="" className="text-sm text-white/70 transition-all duration-300 hover:underline hover:text-white">
                            Privacy preferences
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 md:col-span-4 md:mt-0 mt-6">
                <span className="mb-6 block text-white font-semibold">Subscribe to our newsletter</span>
                <div className="relative w-full flex items-center mb-4">
                  <Icon icon="lucide:mail" className="absolute top-1/2 start-0 -translate-y-1/2 text-white/50 text-xl ms-3" />
                  <input type="search" placeholder="your email" required className="w-full ps-11 pe-2 py-2 border bg-transparent border-default-300 dark:border-white/20 rounded-md text-sm text-white/70 focus:ring-0 focus:outline-none placeholder:text-white/70" />
                </div>
                <button type="button" className="w-full border border-white/70 bg-transparent rounded-md text-white py-2.5 px-6 text-sm font-semibold transition-all duration-300 hover:bg-white/70 hover:text-dark">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-4 flex-wrap lg:py-6 pt-4 pb-6">
              <p className="text-sm text-center text-white/60 md:order-1 order-2">
                © All rights reserved. Made by
                <Link href="" className="text-white hover:underline font-semibold">
                  Coderthemes
                </Link>
              </p>
              <div className="flex md:order-2 order-1">
                <div className="group flex justify-center items-center flex-col hs-tooltip [--placement:auto]">
                  <button type="button" className="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2 ">
                    <Icon icon="tabler:brand-instagram" className="text-white" />
                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible text-white/70 inline-block absolute invisible text-xs -mt-4 -ms-5 z-10 py-1 px-2 " role="tooltip">
                      instagram
                    </span>
                  </button>
                </div>
                <div className="group flex justify-center items-center flex-col hs-tooltip [--placement:auto]">
                  <button type="button" className="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2 ">
                    <Icon icon="tabler:brand-facebook-filled" className="text-white" />
                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible text-white/70 inline-block absolute invisible text-xs -mt-4 -ms-5 z-10 py-1 px-2 " role="tooltip">
                      Facebook
                    </span>
                  </button>
                </div>
                <div className="group flex justify-center items-center flex-col hs-tooltip [--placement:auto]">
                  <button type="button" className="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2 ">
                    <Icon icon="tabler:brand-x" className="text-white" />
                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible text-white/70 inline-block absolute invisible text-xs -mt-4 -ms-5 z-10 py-1 px-2 " role="tooltip">
                      X (Twitter)
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
