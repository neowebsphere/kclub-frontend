import { Icon } from '@iconify/react'
import { House, MapPin, Minus, X } from 'lucide-react'
import Link from 'next/link'

const MobileModel = () => {
  return (
    <>
      <div id="filters" className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-205 w-full z-80 bg-body-bg" role="dialog" tabIndex={-1} aria-labelledby="filterslabel">
        <div className="flex justify-between items-center py-6 px-12">
          <h3 id="filterslabel" className="text-xl text-default-900 font-semibold">
            All filters
          </h3>
          <button type="button" aria-label="Close" data-hs-overlay="#filters">
            <span className="sr-only">Close</span>
            <X className="size-4.5" />
          </button>
        </div>
        <div className="md:h-200 lg:h-full h-full overflow-y-auto">
          <div className="md:px-12 px-6 pt-2 pb-4">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
              <div>
                <h6 className="mb-4 font-semibold">Choose your location</h6>
                <div className="relative">
                  <input type="email" className="peer bg-transparent pe-4 py-2.25 rounded-md border border-border ps-10 block w-full text-sm" placeholder="Search for location" defaultValue="New York, Brooklyn" />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <MapPin className="size-3.5" />
                  </div>
                </div>
              </div>
              <div>
                <h6 className="mb-4 font-semibold">Home type</h6>
                <div className="grid grid-cols-5 gap-3">
                  <div className="col-span-2">
                    <select aria-label="Rent or sale select" className="w-full border border-default-200 bg-transparent dark:border-white/20 rounded-md px-3 py-2 text-sm">
                      <option value="For rent" defaultChecked>
                        For rent
                      </option>
                      <option value="For sale">For sale</option>
                    </select>
                  </div>
                  <div className="col-span-3">
                    <div className="relative w-full">
                      <button onClick={() => document.getElementById('homeTypeDropdown')?.classList.toggle('hidden')} type="button" className="flex items-center justify-between w-full px-3 py-2 border border-default-300 rounded-md text-default-700 font-normal bg-transparent hover:bg-default-50">
                        <div className="flex items-center text-sm">
                          <House className="size-3.5 me-2" />
                          Home type
                          <span className="ms-1" id="typeCountOffcanvas">
                            (1)
                          </span>
                        </div>
                        <svg className="w-4 h-4 ms-2 text-default-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div id="homeTypeDropdown" className="absolute z-20 mt-2 w-full bg-white border border-default-200 rounded-lg shadow-lg p-3 hidden">
                        <div className="flex flex-col gap-2">
                          <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                            <div className="flex items-center">
                              <input type="checkbox" id="apartments-offcanvas" defaultChecked className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" />
                              <span className="ms-2">Apartments</span>
                            </div>
                            <span className="text-xs text-default-500">621</span>
                          </label>

                          <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                            <div className="flex items-center">
                              <input type="checkbox" id="houses-offcanvas" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" />
                              <span className="ms-2">Houses</span>
                            </div>
                            <span className="text-xs text-default-500">157</span>
                          </label>

                          <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                            <div className="flex items-center">
                              <input type="checkbox" id="condos-offcanvas" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" />
                              <span className="ms-2">Condos</span>
                            </div>
                            <span className="text-xs text-default-500">283</span>
                          </label>

                          <label className="flex items-center justify-between text-sm text-default-700 cursor-pointer">
                            <div className="flex items-center">
                              <input type="checkbox" id="townhomes-offcanvas" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded" />
                              <span className="ms-2">Townhomes</span>
                            </div>
                            <span className="text-xs text-default-500">346</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
              <div>
                <h6 className="mb-4 font-semibold">Price per month, $</h6>
                <div className="flex items-center">
                  <input type="number" min={0} step={50} placeholder="Min" className="w-1/2 border border-default-300 dark:border-white/20 rounded-md px-3 py-2 text-sm focus:outline-none bg-transparent focus:ring-2 focus:ring-default-300" />
                  <Icon icon="lucide:minus" className="mx-2 text-default-500" />
                  <input type="number" step={50} placeholder="Max" className="w-1/2 border border-default-300 dark:border-white/20 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 bg-transparent focus:ring-default-300" />
                </div>
              </div>
              <div>
                <h6 className="mb-4 font-semibold">Square metres</h6>
                <div className="flex items-center">
                  <input type="number" min={0} step={10} placeholder="Min" className="w-1/2 border border-default-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 bg-transparent focus:ring-default-300" />
                  <Minus className="mx-2 text-default-500" />
                  <input type="number" step={10} placeholder="Max" className="w-1/2 border border-default-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 bg-transparent focus:ring-default-300" />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
              <div>
                <h6 className="mb-4 font-semibold">Bedrooms</h6>
                <div className="flex gap-2">
                  <div>
                    <input type="radio" id="bedrooms-any" name="bedrooms" className="hidden peer" defaultChecked />
                    <label
                      htmlFor="bedrooms-any"
                      className="cursor-pointer rounded px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3"
                    >
                      Any
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="bedrooms-1" name="bedrooms" className="hidden peer" />
                    <label
                      htmlFor="bedrooms-1"
                      className="cursor-pointer rounded px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3"
                    >
                      1
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="bedrooms-2" name="bedrooms" className="hidden peer" />
                    <label
                      htmlFor="bedrooms-2"
                      className="cursor-pointer rounded px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3"
                    >
                      2
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="bedrooms-3" name="bedrooms" className="hidden peer" />
                    <label
                      htmlFor="bedrooms-3"
                      className="cursor-pointer rounded px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3"
                    >
                      3
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="bedrooms-4" name="bedrooms" className="hidden peer" />
                    <label
                      htmlFor="bedrooms-4"
                      className="cursor-pointer rounded px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3"
                    >
                      4+
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="mb-4 font-semibold">Bathrooms</h6>
                <div className="flex gap-2">
                  <div>
                    <input type="radio" id="bathrooms-any" name="bathrooms" className="hidden peer" defaultChecked />
                    <label
                      htmlFor="bathrooms-any"
                      className="cursor-pointer rounded px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3"
                    >
                      Any
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="bathrooms-1" name="bathrooms" className="hidden peer" />
                    <label
                      htmlFor="bathrooms-1"
                      className="cursor-pointer rounded px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3"
                    >
                      1
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="bathrooms-2" name="bathrooms" className="hidden peer" />
                    <label
                      htmlFor="bathrooms-2"
                      className="cursor-pointer rounded px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3"
                    >
                      2
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="bathrooms-3" name="bathrooms" className="hidden peer" />
                    <label
                      htmlFor="bathrooms-3"
                      className="cursor-pointer rounded px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3"
                    >
                      3
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="bathrooms-4" name="bathrooms" className="hidden peer" />
                    <label
                      htmlFor="bathrooms-4"
                      className="cursor-pointer rounded px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3"
                    >
                      4+
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
              <div>
                <h6 className="mb-4 font-semibold">Year built</h6>
                <div className="flex items-center">
                  <div className="w-1/2">
                    <select
                      aria-label="Min year built select"
                      className="w-full border border-border rounded-md px-3 py-2 text-sm bg-transparent dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-
                      default-400"
                    >
                      <option defaultChecked>Min</option>
                      <option value={2024}>2024</option>
                      <option value={2023}>2023</option>
                      <option value={2022}>2022</option>
                      <option value={2021}>2021</option>
                      <option value={2020}>2020</option>
                      <option value={2019}>2019</option>
                      <option value={2018}>2018</option>
                      <option value={2017}>2017</option>
                      <option value={2016}>2016</option>
                      <option value={2015}>2015</option>
                      <option value={2014}>2014</option>
                      <option value={2013}>2013</option>
                      <option value={2012}>2012</option>
                      <option value={2011}>2011</option>
                      <option value={2010}>2010</option>
                    </select>
                  </div>
                  <Icon icon="lucide:minus" className="mx-2 text-default-500" />
                  <div className="w-1/2">
                    <select
                      aria-label="Max year built select"
                      className="w-full border border-border rounded-md px-3 py-2 text-sm bg-transparent dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-
                      default-400"
                    >
                      <option defaultChecked>Max</option>
                      <option value={2024}>2024</option>
                      <option value={2023}>2023</option>
                      <option value={2022}>2022</option>
                      <option value={2021}>2021</option>
                      <option value={2020}>2020</option>
                      <option value={2019}>2019</option>
                      <option value={2018}>2018</option>
                      <option value={2017}>2017</option>
                      <option value={2016}>2016</option>
                      <option value={2015}>2015</option>
                      <option value={2014}>2014</option>
                      <option value={2013}>2013</option>
                      <option value={2012}>2012</option>
                      <option value={2011}>2011</option>
                      <option value={2010}>2010</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-4 font-semibold">Year built</h6>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
                <div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ac" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="ac" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" defaultChecked />
                      Air conditioning
                    </label>

                    <label htmlFor="balcony" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="balcony" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Balcony
                    </label>

                    <label htmlFor="garage" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="garage" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Garage
                    </label>

                    <label htmlFor="gym" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="gym" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Gym
                    </label>

                    <label htmlFor="parking" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="parking" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" defaultChecked />
                      Parking
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pool" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input
                        type="checkbox"
                        id="pool"
                        className="w-4 h-4 border-
                          default-300 rounded bg-transparent checked:bg-black checked:border-black"
                      />
                      Pool
                    </label>

                    <label htmlFor="cctv" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input
                        type="checkbox"
                        id="cctv"
                        className="w-4 h-4 border-
                          default-300 rounded bg-transparent checked:bg-black checked:border-black"
                      />
                      Security cameras
                    </label>

                    <label htmlFor="wifi" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input
                        type="checkbox"
                        id="wifi"
                        className="w-4 h-4 border-
                          default-300 rounded bg-transparent checked:bg-black checked:border-black"
                        defaultChecked
                      />
                      WiFi
                    </label>

                    <label htmlFor="laundry" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input
                        type="checkbox"
                        id="laundry"
                        className="w-4 h-4 border-
                          default-300 rounded bg-transparent checked:bg-black checked:border-black"
                      />
                      Laundry
                    </label>

                    <label htmlFor="dishwasher" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input
                        type="checkbox"
                        id="dishwasher"
                        className="w-4 h-4 border-
                          default-300 rounded bg-transparent checked:bg-black checked:border-black"
                      />
                      Dishwasher
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
              <div>
                <h6 className="mb-4 font-semibold">Pets</h6>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cats" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                    <input
                      type="checkbox"
                      id="cats"
                      className="w-4 h-4 border-
                          default-300 rounded bg-transparent checked:bg-black checked:border-black"
                      defaultChecked
                    />
                    Cats allowed
                  </label>

                  <label htmlFor="dogs" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                    <input
                      type="checkbox"
                      id="dogs"
                      className="w-4 h-4 border-
                          default-300 rounded bg-transparent checked:bg-black checked:border-black"
                    />
                    Dogs allowed
                  </label>
                </div>
              </div>
              <div>
                <h6 className="mb-4 font-semibold">Additional options</h6>
                <div className="flex flex-col gap-2">
                  <label htmlFor="verified" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                    <input
                      type="checkbox"
                      id="verified"
                      className="w-4 h-4 border-
                          default-300 rounded bg-transparent checked:bg-black checked:border-black"
                    />
                    Verified
                  </label>

                  <label htmlFor="featured" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                    <input
                      type="checkbox"
                      id="featured"
                      className="w-4 h-4 border-
                          default-300 rounded bg-transparent checked:bg-black checked:border-black"
                    />
                    Featured
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 md:px-12 px-6 flex justify-between items-center gap-6">
            <Link className="text-xs underline hover:no-underline" href="">
              Clear all
            </Link>
            <button type="button" className="py-2.5 px-5 rounded-md text-white bg-primary hover:bg-primary transition-all duration-300 ease-in-out text-sm" aria-label="Close" data-hs-overlay="#filters">
              See 156 properties
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileModel
