import { Icon } from '@iconify/react'
import { MapPin, Navigation, Search, Star } from 'lucide-react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <>
      <div className="col-span-3 pe-6">
        <div>
          <div
            id="filterSidebar"
            className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-auto hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform  hidden fixed top-0 start-0 bottom-0 z-60 bg-body-bg lg:w-auto w-87"
            role="dialog"
            tabIndex={-1}
            aria-label="Sidebar"
          >
            <div className="flex flex-col lg:sticky lg:h-full h-screen top-0">
              <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2 lg:border-none border-b border-default-200 shrink-0">
                <Link className="focus:outline-hidden focus:opacity-80 " href="#" aria-label="Brand">
                  <h3 className="text-xl font-semibold text-default-900 lg:hidden block">Filters</h3>
                </Link>
                <div className="lg:hidden -me-2">
                  <button type="button" data-hs-overlay="#filterSidebar">
                    <Icon icon="lucide:x" className="size-5" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
              </header>
              <nav className="h-full overflow-y-auto flex-1" data-simplebar>
                <div className="w-full flex flex-col flex-wrap lg:pt-0 px-6 lg:px-0 pb-4 lg:pb-0 pt-6">
                  <div className="pb-6 mb-4">
                    <h4 className="text-default-900 font-semibold mb-4">Location and radius</h4>
                    <div className="flex flex-col gap-3 mt-2">
                      <div className="relative">
                        <MapPin className="absolute start-4 top-1/2 -translate-y-1/2 text-default-500 size-4" />
                        <select id="location" className="w-full ps-10 pe-3 py-2 text-sm border border-border rounded-md bg-transparent focus:border-indigo-500">
                          <option value="">Any location</option>
                          <option value="New York" defaultChecked>
                            New York
                          </option>
                          <option value="Los Angeles">Los Angeles</option>
                          <option value="Chicago">Chicago</option>
                          <option value="Houston">Houston</option>
                          <option value="Phoenix">Phoenix</option>
                          <option value="Philadelphia">Philadelphia</option>
                          <option value="San Antonio">San Antonio</option>
                          <option value="San Diego">San Diego</option>
                          <option value="Dallas">Dallas</option>
                          <option value="San Jose">San Jose</option>
                        </select>
                      </div>
                      <div className="relative">
                        <Navigation className="absolute start-4 top-1/2 -translate-y-1/2 text-default-500 size-4" />
                        <select id="radius" className="w-full ps-10 pe-3 py-2 text-sm border border-border rounded-md bg-transparent focus:border-indigo-500">
                          <option value="">Any radius</option>
                          <option value="10 mi">10 mi</option>
                          <option value="20 mi">20 mi</option>
                          <option value="30 mi">30 mi</option>
                          <option value="40 mi">40 mi</option>
                          <option value="50 mi" defaultChecked>
                            50 mi
                          </option>
                          <option value="60 mi">60 mi</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Project type</h4>
                    <div className="relative mb-4">
                      <Search className="absolute start-4 top-1/2 -translate-y-1/2 text-default-500 size-4" />
                      <input type="search" placeholder="Search" className="w-full rounded-md border border-border bg-transparent -300 ps-10 pe-10 py-2 text-sm " />
                    </div>
                    <div
                      className="overflow-x-auto h-55
                                          [&::-webkit-scrollbar]:w-0.75
                                          [&::-webkit-scrollbar-track]:bg-default-100
                                        [&::-webkit-scrollbar-thumb]:bg-default-300
                                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                    >
                      <div className="flex flex-col gap-3">
                        <label htmlFor="appliance-installation" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="appliance-installation" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" defaultChecked />
                          Appliance installation
                        </label>
                        <label htmlFor="bathtub-repair" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="bathtub-repair" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Bathtub repair
                        </label>
                        <label htmlFor="door-repair" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="door-repair" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Door repair
                        </label>
                        <label htmlFor="heating" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="heating" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" defaultChecked />
                          Heating &amp; furnace
                        </label>
                        <label htmlFor="locksmith" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="locksmith" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Locksmith
                        </label>
                        <label htmlFor="small-appliance-repair" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="small-appliance-repair" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Small appliance repair
                        </label>
                        <label htmlFor="smoke-detector-installation" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="smoke-detector-installation" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Smoke detector installation
                        </label>
                        <label htmlFor="electrical-work" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="electrical-work" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Electrical work
                        </label>
                        <label htmlFor="plumbing" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="plumbing" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Plumbing
                        </label>
                        <label htmlFor="hvac-maintenance" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="hvac-maintenance" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          HVAC maintenance
                        </label>
                        <label htmlFor="painting" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="painting" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Painting
                        </label>
                        <label htmlFor="roofing" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="roofing" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" defaultChecked />
                          Roofing
                        </label>
                        <label htmlFor="flooring-installation" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="flooring-installation" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Flooring installation
                        </label>
                        <label htmlFor="carpentry" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="carpentry" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" defaultChecked />
                          Carpentry
                        </label>
                        <label htmlFor="landscaping" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="landscaping" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Landscaping
                        </label>
                        <label htmlFor="window-installation" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="window-installation" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Window installation
                        </label>
                        <label htmlFor="home-security-systems" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="home-security-systems" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Home security systems
                        </label>
                        <label htmlFor="drywall-repair" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="drywall-repair" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Drywall repair
                        </label>
                        <label htmlFor="gutter-cleaning" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="gutter-cleaning" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Gutter cleaning
                        </label>
                        <label htmlFor="insulation-installation" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="insulation-installation" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Insulation installation
                        </label>
                        <label htmlFor="kitchen-remodeling" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="kitchen-remodeling" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Kitchen remodeling
                        </label>
                        <label htmlFor="bathroom-remodeling" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="bathroom-remodeling" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Bathroom remodeling
                        </label>
                        <label htmlFor="pest-control" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="pest-control" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Pest control
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pb-6 mb-4">
                    <h4 className="text-default-900 font-semibold mb-4">Budget</h4>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="budget-4" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="budget-4" className="w-4 h-4 bg-transparent border-default-300 rounded checked:bg-black checked:border-black" />
                        $$$$
                      </label>
                      <label htmlFor="budget-3" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="budget-3" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        $$$
                      </label>
                      <label htmlFor="budget-2" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="budget-2" defaultChecked className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        $$
                      </label>
                      <label htmlFor="budget-1" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="budget-1" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />$
                      </label>
                    </div>
                  </div>
                  <div className="pb-6 mb-4">
                    <h4 className="text-default-900 font-semibold mb-4">Features</h4>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="eco-friendly" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="eco-friendly" defaultChecked className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        Eco-friendly
                      </label>
                      <label htmlFor="free-consultation" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="free-consultation" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        Free consultation
                      </label>
                      <label htmlFor="online-consultation" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="online-consultation" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        Online consultation
                      </label>
                      <label htmlFor="free-estimate" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="free-estimate" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        Free estimate
                      </label>
                      <label htmlFor="verified-hires" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="verified-hires" defaultChecked className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        Verified hires
                      </label>
                      <label htmlFor="weekend-consultations" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="weekend-consultations" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        Weekend consultations
                      </label>
                    </div>
                  </div>
                  <div className="pb-6 mb-4">
                    <h4 className="text-default-900 font-semibold mb-4">Availability</h4>
                    <div>
                      <label htmlFor="now" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="now" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        Available now
                      </label>
                    </div>
                  </div>
                  <div className="pb-6 mb-4">
                    <h4 className="text-default-900 font-semibold mb-4">Average rating</h4>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="star-5" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="star-5" defaultChecked className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        5
                        <Star className="fill-warning text-warning size-3.5" />
                      </label>
                      <label htmlFor="star-4" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="star-4" defaultChecked className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        4 <Star className="fill-warning text-warning size-3.5" />
                      </label>
                      <label htmlFor="star-3" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="star-3" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        3 <Star className="fill-warning text-warning size-3.5" />
                      </label>
                      <label htmlFor="star-2" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="star-2" className="w-4 h-4 bg-transparent border-default-300 rounded text-black focus:ring-black" />
                        2-1 <Star className="fill-warning text-warning size-3.5" />
                      </label>
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
