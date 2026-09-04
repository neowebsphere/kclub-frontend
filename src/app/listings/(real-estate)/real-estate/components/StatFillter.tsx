'use client'
import { Icon } from '@iconify/react'
import { ArrowUpDown, House, MapPin } from 'lucide-react'
import Footer from './Footer'
import Pagination from './Pagination'
import PropertyGrid from './PropertyGrid'

const StatFillter = () => {
  return (
    <>
      <div className="lg:ps-6 lg:pe-6 px-4">
        <div className="flex lg:gap-4 w-full gap-2 py-4">
          <div>
            <div className="relative">
              <input type="email" className="peer bg-transparent pe-4 py-2.25 rounded-md border border-border ps-10 block md:w-83.5 lg:w-80 w-full text-sm" placeholder="Search for location" defaultValue="New York, Brooklyn" />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <MapPin className="size-3.5" />
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 w-full flex gap-3">
            <div className="md:col-span-1 md:block hidden">
              <select aria-label="Rent or sale select" className="w-full border border-default-200 bg-transparent dark:border-white/20 rounded-md px-3 py-2 text-sm">
                <option value="For rent" defaultChecked>
                  For rent
                </option>
                <option value="For sale">For sale</option>
              </select>
            </div>
            <div className="md:col-span-1 lg:block hidden whitespace-nowrap">
              <div className="relative">
                <button type="button" onClick={() => document.getElementById('typeDropdown')?.classList.toggle('hidden')} className="flex items-center justify-between w-full px-3 py-2 border border-default-300 text-default-700 rounded-md bg-transparent">
                  <div className="flex items-center">
                    <House className="size-3.5 me-2" />
                    <span className="text-sm">Home Type</span>
                    <span className="ms-1 text-sm" id="typeCount">
                      (4)
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-default-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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
                        <input type="checkbox" id="hostels" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                        <span className="ms-2">Hostels</span>
                      </div>
                      <span className="text-xs text-default-500">83</span>
                    </label>

                    <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                      <div className="flex items-center">
                        <input type="checkbox" id="cabins" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                        <span className="ms-2">Condos</span>
                      </div>
                      <span className="text-xs text-default-500">283</span>
                    </label>

                    <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                      <div className="flex items-center">
                        <input type="checkbox" id="villas" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" data-count-id="typeCount" />
                        <span className="ms-2">Townhomes</span>
                      </div>
                      <span className="text-xs text-default-500">346</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:hidden block">
              <button type="button" className="border text-sm border-default-800 text-default-800 px-5 py-2.5 rounded-md lg:hidden flex items-center">
                <Icon icon="lucide:map" className="text-base me-2 -ms-1" />
                <span className="hidden sm:inline">Show on map</span>
                <span className="sm:hidden">Map</span>
              </button>
            </div>
          </div>
          <div className="relative">
            <span className="absolute -top-2.5 -end-2.5 mt-1 -ms-1 bg-primary text-white text-xs font-medium px-2 py-0.5 rounded-full">3</span>
            <button
              type="button"
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md bg-default-900 text-body-bg disabled:opacity-50 disabled:pointer-events-none"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="filters"
              data-hs-overlay="#filters"
            >
              <Icon icon="lucide:sliders-horizontal" className="size-4.5" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6 mb-3 mt-2">
          <div className="text-sm whitespace-nowrap">Showing 156 results</div>

          <div className="relative ms-auto w-37.5">
            <ArrowUpDown className="absolute start-0 top-1/2 -translate-y-1/2 z-10 size-3.5" />
            <select className="w-full border-0 rounded-none ps-6 p-2 text-sm bg-transparent focus:outline-none focus:ring-0">
              <option value="Price Asc" defaultChecked>
                Price Asc
              </option>
              <option value="Price Desc">Price Desc</option>
              <option value="Updated">Updated</option>
              <option value="Video">Video</option>
              <option value="3D Tour">3D Tour</option>
            </select>
          </div>
        </div>

        <PropertyGrid />
        <Pagination />
        <Footer />
      </div>
    </>
  )
}

export default StatFillter
