import { Icon } from "@iconify/react"
import grid04 from '@/assets/img/listings/cars/grid/04.jpg'
import Image from "next/image"
import Link from "next/link"

const SideBar = () => {
  return (
    <>
      <div className="lg:col-span-3">
        <div className="lg:sticky lg:top-15">
          <div
            id="quickPreview"
            className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:strat-auto lg:bottom-auto hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform  hidden fixed top-0 end-0 bottom-0 z-60 bg-body-bg lg:bg-transparent lg:w-auto w-87"
            role="dialog"
            tabIndex={-1}
            aria-label="Sidebar"
          >
            <div className="flex flex-col sticky top-0">
              <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2">
                <Link className="focus:outline-hidden focus:opacity-80 " href="" aria-label="Brand">
                  <h3 className="text-base font-semibold text-default-900 lg:pt-12 pt-0">Quick preview</h3>
                </Link>
                <div className="lg:hidden -me-2">
                  <button type="button" data-hs-overlay="#quickPreview">
                    <Icon icon="lucide:x" className="size-5" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
              </header>
              <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="w-full flex flex-col flex-wrap pt-2 px-6 lg:px-0 pb-4 lg:pb-0">
                  <div className="h-auto group mb-4">
                    <Link href="" className="group"></Link>
                    <div className="bg-body-bg rounded-md">
                      <Link href="" className="group">
                        <div className=" rounded-tl-md rounded-tr-md w-full h-full overflow-hidden relative">
                          <Image src={grid04} alt="Image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-tl-md rounded-tr-md" />
                          <div className="absolute top-0 start-0 z-10 flex flex-col gap-1 pt-2 ps-2 mt-2 ms-2">
                            <div>
                              <p className="bg-warning inline-flex w-auto text-white text-xs px-2 py-0.5 rounded">Used</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="pb-4 lg:px-6 px-0 pt-6">
                        <Link href="" className="group">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-xs text-secondary me-4">28/06/2024</div>
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
                        <h3 className="mb-2 text-default-900 font-semibold">
                          <Link href="" className="group"></Link>
                          <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300 me-1" href="">
                            Mercedes-Benz A205
                          </Link>
                          <span className="text-xs font-normal text-secondary">(2021)</span>
                        </h3>
                        <div className="text-default-900 font-semibold">$41,900</div>
                      </div>
                      <div>
                        <div className="pt-4 lg:px-6 px-0 pb-6 border-t border-border">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex gap-2 items-center text-sm">
                              <Icon icon="lucide:map-pin" className="text-body-color" />
                              Chicago
                            </div>
                            <div className="flex gap-2 items-center text-sm">
                              <Icon icon="lucide:gauge" className="text-body-color" />
                              ---
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
                  <hr className="text-default-200 dark:text-white/20 my-6 lg:hidden block" />
                  <div className="bg-body-bg rounded-md lg:p-4 p-0">
                    <h3 className="text-default-900 font-semibold mb-1">The quality of content</h3>
                    <div className="text-sm text-end mb-2">75%</div>
                    <div className="w-full bg-default-200 rounded-full h-1" role="progressbar" aria-label="Warning example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                      <div className="bg-warning h-1 rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
