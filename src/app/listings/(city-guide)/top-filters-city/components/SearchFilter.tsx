'use client'
import Flatpickr from '@/components/wrappers/Flatpickr'
import { Icon } from '@iconify/react'
import { Calendar } from 'lucide-react'
import Link from 'next/link'

const SearchFilter = () => {
  return (
    <>
      <div className="grid md:grid-cols-12 grid-cols-2 lg:gap-6 gap-4 mb-4 items-center">
        <div className="lg:col-span-10 md:col-span-9 col-span-1">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 col-span-1 lg:gap-6 gap-4">
            <div className="relative ">
              <button type="button" onClick={() => document.getElementById('typeDropdown')?.classList.toggle('hidden')} className="flex items-center justify-between w-full px-4 py-2.5 border border-default-900 text-default-700 rounded-full bg-transparent">
                <div className="flex items-center">
                  <Icon icon="lucide:house" className="text-base me-2" />
                  <span className="text-sm">Type</span>
                  <span className="ms-1 text-sm" id="typeCount">
                    (4)
                  </span>
                </div>
                <Icon icon="lucide:chevron-down" />
              </button>

              <div id="typeDropdown" className="absolute z-20 mt-2 w-full bg-white border border-default-200 rounded-lg shadow-lg p-3 hidden">
                <div className="flex flex-col gap-2">
                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="apartments" defaultChecked className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                      <span className="ms-2">Apartments</span>
                    </div>
                    <span className="text-xs text-default-500">621</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="hotels" defaultChecked className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                      <span className="ms-2">Hotels</span>
                    </div>
                    <span className="text-xs text-default-500">57</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="hostels" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                      <span className="ms-2">Hostels</span>
                    </div>
                    <span className="text-xs text-default-500">83</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="bb" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                      <span className="ms-2">Bed and Breakfasts</span>
                    </div>
                    <span className="text-xs text-default-500">46</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="resorts" defaultChecked className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                      <span className="ms-2">Resorts</span>
                    </div>
                    <span className="text-xs text-default-500">19</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="motels" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                      <span className="ms-2">Motels</span>
                    </div>
                    <span className="text-xs text-default-500">10</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="cabins" defaultChecked className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                      <span className="ms-2">Cabins or Cottages</span>
                    </div>
                    <span className="text-xs text-default-500">24</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="villas" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                      <span className="ms-2">Villas</span>
                    </div>
                    <span className="text-xs text-default-500">98</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="relative md:block hidden">
              <Icon icon="lucide:map-pin" className="absolute start-4 top-1/2 -translate-y-1/2 text-default-500 z-10" />
              <select className="w-full rounded-full border border-default-900 dark:border-white/20 ps-10 pe-4 text-sm py-2.25 bg-transparent text-default-700" aria-label="Location select">
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
            <div className="relative md:block hidden">
              <Calendar className="absolute start-4 top-1/2 -translate-y-1/2 text-default-500 size-3.5" />
              <Flatpickr
                type="text"
                placeholder="Choose date"
                options={{ dateFormat: 'd M, Y', defaultDate: 'today' }}
                className="form-input w-full text-sm rounded-full border border-default-300  dark:border-white/20 ps-10 pe-4 py-2.25 text-default-700 bg-transparent"
                readOnly
              />
            </div>
            <div className="relative lg:block hidden">
              <button type="button" onClick={() => document.getElementById('priceDropdown')?.classList.toggle('hidden')} className="flex items-center justify-between w-full px-4 py-2.5 border border-default-300 text-default-700 rounded-full bg-transparent">
                <div className="flex items-center">
                  <Icon icon="lucide:dollar-sign" className="text-base me-2" />
                  <span className="text-sm">Price range</span>
                  <span className="ms-1 text-sm" id="priceCount" />
                </div>
                <svg className="w-4 h-4 text-default-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div id="priceDropdown" className="absolute z-20 mt-2 w-full bg-white border border-default-200 rounded-lg shadow-lg p-3 hidden">
                <div className="flex flex-col gap-2">
                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="price-1" className="w-4 h-4 checked:text-dark border-default-300 rounded" data-count-id="priceCount" />
                      <span className="ms-2">$0.00 - 99.99</span>
                    </div>
                    <span className="text-xs text-default-500">241</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="price-2" className="w-4 h-4 checked:text-dark border-default-300 rounded" data-count-id="priceCount" />
                      <span className="ms-2">$100.00 - 199.99</span>
                    </div>
                    <span className="text-xs text-default-500">398</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="price-3" className="w-4 h-4 checked:text-dark border-default-300 rounded" data-count-id="priceCount" />
                      <span className="ms-2">$200.00 - 299.99</span>
                    </div>
                    <span className="text-xs text-default-500">253</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="price-4" className="w-4 h-4 checked:text-dark border-default-300 rounded" data-count-id="priceCount" />
                      <span className="ms-2">$300.00 - 399.99</span>
                    </div>
                    <span className="text-xs text-default-500">197</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="price-5" className="w-4 h-4 checked:text-dark border-default-300 rounded" data-count-id="priceCount" />
                      <span className="ms-2">$400.00 - 499.99</span>
                    </div>
                    <span className="text-xs text-default-500">152</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="price-6" className="w-4 h-4 checked:text-dark border-default-300 rounded" data-count-id="priceCount" />
                      <span className="ms-2">$500.00 - 599.99</span>
                    </div>
                    <span className="text-xs text-default-500">138</span>
                  </label>

                  <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                    <div className="flex items-center">
                      <input type="checkbox" id="price-7" className="w-4 h-4 checked:text-dark border-default-300 rounded" data-count-id="priceCount" />
                      <span className="ms-2">$600.00+</span>
                    </div>
                    <span className="text-xs text-default-500">27</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-3 col-span-1">
          <button type="button" className="inline-flex items-center text-sm font-semibold text-default-800 w-full disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="filtersOffcanvas" data-hs-overlay="#filtersOffcanvas">
            <Icon icon="tabler:plus" className="size-4.5 me-2" />
            <Link href="" className="hover:underline">
              More filters
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchFilter
