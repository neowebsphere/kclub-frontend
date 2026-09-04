import list01 from '@/assets/img/listings/cars/list/01.jpg'
import list05 from '@/assets/img/listings/cars/list/05.jpg'
import list06 from '@/assets/img/listings/cars/list/06.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Offer = () => {
  return (
    <>
      <section className="lg:py-14 md:pt-6 pt-2 pb-12">
        <div className="container">
          <div className="flex items-start justify-between gap-4 md:mb-8 mb-6">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Top offers</h2>
            <div className="inline-flex items-center gap-2 ">
              <Link href="" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
                View all
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-5 col-span-1">
              <Link href="/listings/entry-cars" className="group"></Link>
              <div className="border border-border rounded-md group lg:block md:flex block">
                <Link href="/listings/entry-cars" className="group">
                  <div className="rounded-tl-md lg:rounded-tr-md lg:rounded-bl-none md:rounded-bl-md rounded-bl-none md:rounded-tr-none rounded-tr-md w-full h-65 overflow-hidden relative">
                    <Image src={list06} alt="Image" className="w-full h-65 object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-tl-md lg:rounded-tr-md lg:rounded-bl-none md:rounded-bl-md rounded-bl-none md:rounded-tr-none rounded-tr-md" />
                    <div className="absolute top-0 start-0 z-10 flex flex-col gap-1 pt-2 ps-2 mt-2 ms-2">
                      <div className="bg-info text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">
                        Verified <Icon icon="lucide:shield" className="ms-1" />
                      </div>
                      <div>
                        <p className="bg-warning inline-flex w-auto text-white text-xs px-2 py-0.5 rounded">Used</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div>
                  <Link href="/listings/entry-cars" className="group"></Link>
                  <div className="pb-4 pt-6 px-6 md:my-2">
                    <Link href="/listings/entry-cars" className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-secondary me-4">30/09/2024</div>
                        <div className="flex gap-2">
                          <div className="hs-tooltip [--placement:top] inline-block">
                            <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                              <Icon icon="lucide:heart" className="size-3.5 text-body-color" />
                              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md " role="tooltip">
                                Wishlist
                              </span>
                            </button>
                          </div>
                          <div className="hs-tooltip [--placement:top] inline-block">
                            <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                              <Icon icon="lucide:bell" className="size-3.5 text-body-color" />
                              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md " role="tooltip">
                                Notify
                              </span>
                            </button>
                          </div>
                          <div className="hs-tooltip [--placement:top] inline-block">
                            <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                              <Icon icon="lucide:repeat" className="size-3.5 text-body-color" />
                              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md " role="tooltip">
                                Compare
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="mb-2 text-xl text-default-900 font-semibold">
                      <Link href="/listings/entry-cars" className="group"></Link>
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300 me-1" href="/listings/entry-cars">
                        Maserati Granturismo
                      </Link>
                      <span className="text-xs font-normal text-secondary">(2024)</span>
                    </h3>
                    <div className="text-default-900 font-semibold">$73,000</div>
                  </div>
                  <div className="pb-6 px-6">
                    <div className="pt-6 border-t border-border">
                      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 flex-wrap">
                        <div className="flex gap-2 items-center text-sm">
                          <Icon icon="lucide:map-pin" className="text-body-color" />
                          Los Angeles
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                          <Icon icon="lucide:gauge" className="text-body-color" />
                          69K mi
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                          <Icon icon="lucide:fuel" className="text-body-color" />
                          Gasoline
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                          <Icon icon="tabler:manual-gearbox" className="text-body-color" />
                          Automatic
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 col-span-1">
              <div className="mb-6">
                <Link href="/listings/entry-cars" className="group"></Link>
                <div className="border border-border rounded-md group md:flex block">
                  <Link href="/listings/entry-cars" className="group">
                    <div className="rounded-tl-md md:rounded-bl-md rounded-bl-none md:rounded-tr-none rounded-tr-md w-full h-57 overflow-hidden relative">
                      <Image src={list01} alt="Image" className="w-full h-57 object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-tl-md md:rounded-bl-md rounded-bl-none md:rounded-tr-none rounded-tr-md" />
                      <div className="absolute top-0 start-0 z-10 flex flex-col gap-1 pt-2 ps-2 mt-2 ms-2">
                        <p className="bg-primary inline-flex w-auto text-white text-xs px-2 py-0.5 rounded">New</p>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <Link href="/listings/entry-cars" className="group"></Link>
                    <div className="pb-4 pt-6 px-6 md:my-2">
                      <Link href="/listings/entry-cars" className="group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-xs text-secondary me-4">23/10/2024</div>
                          <div className="flex gap-2">
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                                <Icon icon="lucide:heart" className="size-3.5 text-body-color" />
                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md " role="tooltip">
                                  Wishlist
                                </span>
                              </button>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                                <Icon icon="lucide:bell" className="size-3.5 text-body-color" />
                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md " role="tooltip">
                                  Notify
                                </span>
                              </button>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                                <Icon icon="lucide:repeat" className="size-3.5 text-body-color" />
                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md " role="tooltip">
                                  Compare
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <h3 className="mb-2 text-xl text-default-900 font-semibold">
                        <Link href="/listings/entry-cars" className="group"></Link>
                        <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300 me-1" href="/listings/entry-cars">
                          Volvo XC90 Sport 4WD
                        </Link>
                        <span className="text-xs font-normal text-secondary">(2024)</span>
                      </h3>
                      <div className="text-default-900 font-semibold">$92,500</div>
                    </div>
                    <div className="pb-6 px-6">
                      <div className="pt-6 border-t border-border">
                        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                          <div className="flex gap-2 items-center text-sm">
                            <Icon icon="lucide:map-pin" className="text-body-color" />
                            Chicago
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <Icon icon="lucide:gauge" className="text-body-color" />
                            0K mi
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <Icon icon="lucide:fuel" className="text-body-color" />
                            Hybrid
                          </div>
                          <div className="flex gap-2 items-center text-sm">
                            <Icon icon="tabler:manual-gearbox" className="text-body-color" />
                            Automatic
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/listings/entry-cars" className="group"></Link>
              <div className="border border-border rounded-md group md:flex block">
                <Link href="/listings/entry-cars" className="group">
                  <div className="rounded-tl-md md:rounded-bl-md rounded-bl-none md:rounded-tr-none rounded-tr-md w-full h-57 overflow-hidden relative">
                    <Image src={list05} alt="Image" className="w-full h-57 object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-tl-md md:rounded-bl-md rounded-bl-none md:rounded-tr-none rounded-tr-md" />
                    <div className="absolute top-0 start-0 z-10 flex flex-col gap-1 pt-2 ps-2 mt-2 ms-2">
                      <p className="bg-warning inline-flex w-auto text-white text-xs px-2 py-0.5 rounded">User</p>
                    </div>
                  </div>
                </Link>
                <div>
                  <Link href="/listings/entry-cars" className="group"></Link>
                  <div className="pb-4 pt-6 px-6 my-2">
                    <Link href="/listings/entry-cars" className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-secondary me-4">15/07/2024</div>
                        <div className="flex gap-2">
                          <div className="hs-tooltip [--placement:top] inline-block">
                            <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                              <Icon icon="lucide:heart" className="size-3.5 text-body-color" />
                              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md " role="tooltip">
                                Wishlist
                              </span>
                            </button>
                          </div>
                          <div className="hs-tooltip [--placement:top] inline-block">
                            <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                              <Icon icon="lucide:bell" className="size-3.5 text-body-color" />
                              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md " role="tooltip">
                                Notify
                              </span>
                            </button>
                          </div>
                          <div className="hs-tooltip [--placement:top] inline-block">
                            <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                              <Icon icon="lucide:repeat" className="size-3.5 text-body-color" />
                              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md " role="tooltip">
                                Compare
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="mb-2 text-xl text-default-900 font-semibold">
                      <Link href="/listings/entry-cars" className="group"></Link>
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300 me-1" href="/listings/entry-cars">
                        Mercedes-Benz Coupe
                      </Link>
                      <span className="text-xs font-normal text-secondary">(2024)</span>
                    </h3>
                    <div className="text-default-900 font-semibold">$92,500</div>
                  </div>
                  <div className="pb-6 px-6">
                    <div className="pt-6 border-t border-border">
                      <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                        <div className="flex gap-2 items-center text-sm">
                          <Icon icon="lucide:map-pin" className="text-body-color" />
                          New York
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                          <Icon icon="lucide:gauge" className="text-body-color" />
                          15K mi
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                          <Icon icon="lucide:fuel" className="text-body-color" />
                          Diesel
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                          <Icon icon="tabler:manual-gearbox" className="text-body-color" />
                          Automatic
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Offer
