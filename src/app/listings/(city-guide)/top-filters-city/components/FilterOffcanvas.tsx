import { Icon } from '@iconify/react'
import { BedSingle, Calendar, Star, X } from 'lucide-react'

const FilterOffcanvas = () => {
  return (
    <>
      <div id="filtersOffcanvas" className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0  transition-all duration-300 transform h-full max-w-87.5 w-full z-80 bg-body-bg" role="dialog" tabIndex={-1} aria-labelledby="filtersOffcanvaslabel">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center pt-4 pb-6 px-6">
            <h3 id="filtersOffcanvaslabel" className="font-bold text-xl text-default-800">
              Filters
            </h3>
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-default-100 text-default-800 hover:bg-default-200 focus:outline-hidden focus:bg-default-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close"
              data-hs-overlay="#filtersOffcanvas"
            >
              <span className="sr-only">Close</span>
              <X className="size-4" />
            </button>
          </div>
          <div className="flex-1 px-6 h-full overflow-y-auto">
            <div className="hs-accordion-group">
              <div className="relative md:hidden block border-b border-default-200">
                <Icon icon="lucide:map-pin" className="absolute start-0 top-1/2 -translate-y-1/2 text-default-500 z-10" />
                <select className="w-full rounded-full border-0 border-default-900 dark:border-white/20 ps-6 py-4 bg-transparent text-default-700 pe-0" aria-label="Location select">
                  <option value="">Any location</option>
                  <option value="Paris">Paris</option>
                  <option value="Rome">Rome</option>
                  <option value="Barcelona" defaultChecked>
                    Barcelona
                  </option>
                  <option value="London">London</option>
                  <option value="Amsterdam">Amsterdam</option>
                  <option value="Berlin">Berlin</option>
                  <option value="Prague">Prague</option>
                  <option value="Venice">Venice</option>
                  <option value="Vienna">Vienna</option>
                  <option value="Florence">Florence</option>
                </select>
              </div>
              <div className="relative md:hidden block border-b border-default-200">
                <Calendar className="absolute start-0 top-1/2 -translate-y-1/2 text-default-500 size-3.5" />
                <input id="datepicker" type="" placeholder="Choose date" className="w-full rounded-full border-0 border-default-900 dark:border-white/20 ps-6 py-4 bg-transparent text-default-700 pe-0" />
              </div>
              <div className="hs-accordion lg:hidden block hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingprice">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start font-semibold text-default-900 py-5" aria-expanded="false" aria-controls="collapseprice">
                  <span className="flex items-end">
                    Price
                    <span id="priceCount1" className="ms-1 text-sm font-normal text-default-500" />
                  </span>
                  <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-5 text-default-800" />
                  <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-5 text-default-800" />
                </button>

                <div id="collapseprice" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 text-sm" role="region" aria-labelledby="headingprice">
                  <div className="flex flex-col gap-2 px-1 pb-4">
                    <label className="flex items-center justify-between text-default-700 cursor-pointer">
                      <div className="flex items-center">
                        <input type="checkbox" id="price-1" className="w-4 h-4 checked:text-dark border-default-300 rounded me-2" data-count-id="priceCount1" />
                        <span>$0.00 - 99.99</span>
                      </div>
                      <span className="text-xs text-default-500">241</span>
                    </label>

                    <label className="flex items-center justify-between text-default-700 cursor-pointer">
                      <div className="flex items-center">
                        <input type="checkbox" id="price-2" className="w-4 h-4 checked:text-dark border-default-300 rounded me-2" data-count-id="priceCount1" />
                        <span>$100.00 - 199.99</span>
                      </div>
                      <span className="text-xs text-default-500">398</span>
                    </label>

                    <label className="flex items-center justify-between text-default-700 cursor-pointer">
                      <div className="flex items-center">
                        <input type="checkbox" id="price-3" className="w-4 h-4 checked:text-dark border-default-300 rounded me-2" data-count-id="priceCount1" />
                        <span>$200.00 - 299.99</span>
                      </div>
                      <span className="text-xs text-default-500">253</span>
                    </label>

                    <label className="flex items-center justify-between text-default-700 cursor-pointer">
                      <div className="flex items-center">
                        <input type="checkbox" id="price-4" className="w-4 h-4 checked:text-dark border-default-300 rounded me-2" data-count-id="priceCount1" />
                        <span>$300.00 - 399.99</span>
                      </div>
                      <span className="text-xs text-default-500">197</span>
                    </label>

                    <label className="flex items-center justify-between text-default-700 cursor-pointer">
                      <div className="flex items-center">
                        <input type="checkbox" id="price-5" className="w-4 h-4 checked:text-dark border-default-300 rounded me-2" data-count-id="priceCount1" />
                        <span>$400.00 - 499.99</span>
                      </div>
                      <span className="text-xs text-default-500">152</span>
                    </label>

                    <label className="flex items-center justify-between text-default-700 cursor-pointer">
                      <div className="flex items-center">
                        <input type="checkbox" id="price-6" className="w-4 h-4 checked:text-dark border-default-300 rounded me-2" data-count-id="priceCount1" />
                        <span>$500.00 - 599.99</span>
                      </div>
                      <span className="text-xs text-default-500">138</span>
                    </label>

                    <label className="flex items-center justify-between text-default-700 cursor-pointer">
                      <div className="flex items-center">
                        <input type="checkbox" id="price-7" className="w-4 h-4 checked:text-dark border-default-300 rounded me-2" data-count-id="priceCount1" />
                        <span>$600.00+</span>
                      </div>
                      <span className="text-xs text-default-500">27</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="relative">
                <BedSingle className="absolute start-0 top-1/2 -translate-y-1/2 size-4" />
                <input type="number" min={1} placeholder="Number of rooms" className="w-full border-b border-0 border-default-300  py-4 ps-6 pe-0 text-default-800 font-medium placeholder:text-default-400" />
              </div>
              <div className="hs-accordion hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingfacilities">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start font-semibold text-default-900 py-5" aria-expanded="false" aria-controls="collapsefacilities">
                  <span className="flex items-center">
                    Room facilities
                    <span id="facilitiesCount" className="ms-1 text-sm font-normal text-default-500" />
                  </span>
                  <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-5 text-default-800" />
                  <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-5 text-default-800" />
                </button>

                <div id="collapsefacilities" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 text-sm" role="region" aria-labelledby="headingfacilities">
                  <div className="flex flex-col gap-2.5 px-1 pb-4">
                    <label htmlFor="kitchen" className="flex items-center text-default-700 cursor-pointer">
                      <input type="checkbox" id="kitchen" data-count-id="facilitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Kitchen
                      <span className="ms-auto text-xs text-default-500">27</span>
                    </label>

                    <label htmlFor="terrace" className="flex items-center text-default-700 cursor-pointer">
                      <input type="checkbox" id="terrace" data-count-id="facilitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Terrace
                      <span className="ms-auto text-xs text-default-500">89</span>
                    </label>

                    <label htmlFor="ac" className="flex items-center text-default-700 cursor-pointer">
                      <input type="checkbox" id="ac" data-count-id="facilitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Air Conditioning
                      <span className="ms-auto text-xs text-default-500">145</span>
                    </label>

                    <label htmlFor="heating" className="flex items-center text-default-700 cursor-pointer">
                      <input type="checkbox" id="heating" data-count-id="facilitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Heating
                      <span className="ms-auto text-xs text-default-500">106</span>
                    </label>

                    <label htmlFor="desk" className="flex items-center text-default-700 cursor-pointer">
                      <input type="checkbox" id="desk" data-count-id="facilitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Desk
                      <span className="ms-auto text-xs text-default-500">73</span>
                    </label>

                    <label htmlFor="washing-machine" className="flex items-center text-default-700 cursor-pointer">
                      <input type="checkbox" id="washing-machine" data-count-id="facilitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Washing Machine
                      <span className="ms-auto text-xs text-default-500">67</span>
                    </label>

                    <label htmlFor="private-bathroom" className="flex items-center text-default-700 cursor-pointer">
                      <input type="checkbox" id="private-bathroom" data-count-id="facilitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Private Bathroom
                      <span className="ms-auto text-xs text-default-500">210</span>
                    </label>

                    <label htmlFor="laundry" className="flex items-center text-default-700 cursor-pointer">
                      <input type="checkbox" id="laundry" data-count-id="facilitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Laundry Service
                      <span className="ms-auto text-xs text-default-500">132</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="hs-accordion hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingamenities">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start font-semibold text-default-900 py-5" aria-expanded="false" aria-controls="collapseamenities">
                  <span className="flex items-center">
                    Amenities
                    <span id="amenitiesCount" className="ms-1 text-sm font-normal text-default-500" />
                  </span>
                  <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-5 text-default-800" />
                  <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-5 text-default-800" />
                </button>
                <div id="collapseamenities" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 text-sm" role="region" aria-labelledby="headingamenities">
                  <div className="flex flex-col gap-2.5 px-1 pb-4">
                    <label htmlFor="room-service" className="flex items-center text-default-700">
                      <input type="checkbox" id="room-service" data-count-id="amenitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Room Service
                      <span className="ms-auto text-xs text-default-500">482</span>
                    </label>
                    <label htmlFor="wifi" className="flex items-center text-default-700">
                      <input type="checkbox" id="wifi" data-count-id="amenitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Free WiFi
                      <span className="ms-auto text-xs text-default-500">537</span>
                    </label>
                    <label htmlFor="restaurant" className="flex items-center text-default-700">
                      <input type="checkbox" id="restaurant" data-count-id="amenitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Restaurant
                      <span className="ms-auto text-xs text-default-500">209</span>
                    </label>
                    <label htmlFor="bar" className="flex items-center text-default-700">
                      <input type="checkbox" id="bar" data-count-id="amenitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Bar
                      <span className="ms-auto text-xs text-default-500">182</span>
                    </label>
                    <label htmlFor="fitness" className="flex items-center text-default-700">
                      <input type="checkbox" id="fitness" data-count-id="amenitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Fitness Center
                      <span className="ms-auto text-xs text-default-500">156</span>
                    </label>
                    <label htmlFor="swimming" className="flex items-center text-default-700">
                      <input type="checkbox" id="swimming" data-count-id="amenitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Swimming Pool
                      <span className="ms-auto text-xs text-default-500">75</span>
                    </label>
                    <label htmlFor="parking" className="flex items-center text-default-700">
                      <input type="checkbox" id="parking" data-count-id="amenitiesCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      Parking
                      <span className="ms-auto text-xs text-default-500">279</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="hs-accordion hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingrating">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start font-semibold text-default-900 py-5" aria-expanded="false" aria-controls="collapserating">
                  <span className="flex items-end">
                    Average rating
                    <span id="ratingCount" className="ms-1 text-sm font-normal text-default-500">
                      (2)
                    </span>
                  </span>
                  <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-5 text-default-800" />
                  <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-5 text-default-800" />
                </button>
                <div id="collapserating" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 text-sm" role="region" aria-labelledby="headingrating">
                  <div className="flex flex-col gap-2 px-1 pb-4">
                    <label htmlFor="rating-5" className="flex items-center text-default-700">
                      <input type="checkbox" id="rating-5" data-count-id="ratingCount" defaultChecked className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      <span className="flex items-center gap-1">
                        5 <Star className="fill-warning text-warning size-4" />
                      </span>
                      <span className="ms-auto text-xs text-default-500">282</span>
                    </label>

                    <label htmlFor="rating-4" className="flex items-center text-default-700">
                      <input type="checkbox" id="rating-4" data-count-id="ratingCount" defaultChecked className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      <span className="flex items-center gap-1">
                        4 <Star className="fill-warning text-warning size-4" />
                      </span>
                      <span className="ms-auto text-xs text-default-500">437</span>
                    </label>

                    <label htmlFor="rating-3" className="flex items-center text-default-700">
                      <input type="checkbox" id="rating-3" data-count-id="ratingCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      <span className="flex items-center gap-1">
                        3 <Star className="fill-warning text-warning size-4" />
                      </span>
                      <span className="ms-auto text-xs text-default-500">319</span>
                    </label>

                    <label htmlFor="rating-2-1" className="flex items-center text-default-700">
                      <input type="checkbox" id="rating-2-1" data-count-id="ratingCount" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                      <span className="flex items-center gap-1">
                        2–1 <Star className="fill-warning text-warning size-4" />
                      </span>
                      <span className="ms-auto text-xs text-default-500">82</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterOffcanvas
