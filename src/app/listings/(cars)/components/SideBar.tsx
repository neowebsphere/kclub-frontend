'use client'
import { Icon } from '@iconify/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Nouislider = dynamic(() => import('nouislider-react'), { ssr: false })

type ColorType = {
  id: string
  label: string
}

const colorData: ColorType[] = [
  { id: 'about', label: 'Amber' },
  { id: 'azure', label: 'Azure' },
  { id: 'beige', label: 'Beige' },
  { id: 'black', label: 'Black' },
  { id: 'be', label: 'Blue' },
  { id: 'brown', label: 'Brown' },
  { id: 'camouflage', label: 'Camouflage green' },
  { id: 'charcoal', label: 'Charcoal' },
  { id: 'gray', label: 'Gray' },
  { id: 'green', label: 'Green' },
  { id: 'gold', label: 'Gold' },
  { id: 'purple', label: 'Purple' },
  { id: 'red', label: 'Red' },
  { id: 'white', label: 'White' },
  { id: 'yellow', label: 'Yellow' },
]

type FilterCityProps = {
  priceRange: number[]
  setPriceRange: (value: number[]) => void
}

const SideBar = ({ priceRange, setPriceRange }: FilterCityProps) => {
  return (
    <>
      <div className="lg:col-span-3 pe-6">
        <div>
          <div
            id="filterSidebar"
            className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-auto hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-60 bg-body-bg lg:w-auto w-87"
            role="dialog"
            tabIndex={-1}
            aria-label="Sidebar"
          >
            <div className="flex flex-col lg:sticky top-0 lg:h-full h-screen">
              <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2 lg:border-none border-b border-default-200 shrink-0">
                <Link className="focus:outline-hidden focus:opacity-80" href="" aria-label="Brand">
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
                  <div className="flex flex-nowrap gap-2 pb-6 mb-4">
                    <div>
                      <input type="radio" className="hidden peer" />
                      <label className="cursor-pointer rounded-full font-medium px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3">
                        New cars
                      </label>
                    </div>
                    <div>
                      <input type="radio" className="hidden peer" defaultChecked />
                      <label className="cursor-pointer rounded-full font-medium px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/3 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 hover:bg-default-100 dark:hover:bg-white/3">
                        Used cars
                      </label>
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Location and radius</h4>
                    <div className="relative w-full mb-4">
                      <select aria-label="Car location select" className="w-full rounded-md border border-default-300 bg-transparent dark:border-white/20 ps-10 pe-8 py-2 text-sm text-default-500">
                        <option value="" defaultChecked>
                          Any location
                        </option>
                        <option value="New York">New York</option>
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
                      <Icon icon="lucide:map-pin" className="absolute start-3 top-1/2 -translate-y-1/2 text-default-700 size-4" />
                      <Icon icon="lucide:chevron-down" className="absolute end-3 top-1/2 -translate-y-1/2 h-4 w-4" />
                    </div>
                    <div className="relative w-full">
                      <select aria-label="Car location select" className="w-full rounded-md border border-default-300 bg-transparent dark:border-white/20 ps-10 pe-8 py-2 text-sm text-default-500">
                        <option value="">Any radius</option>
                        <option value="10 mi">10 mi</option>
                        <option value="20 mi">20 mi</option>
                        <option value="30 mi">30 mi</option>
                        <option value="40 mi">40 mi</option>
                        <option value="50 mi">50 mi</option>
                        <option value="60 mi">60 mi</option>
                      </select>
                      <Icon icon="lucide:navigation" className="absolute start-3 top-1/2 -translate-y-1/2 text-default-700 size-4" />
                      <Icon icon="lucide:chevron-down" className="absolute end-3 top-1/2 -translate-y-1/2 h-4 w-4" />
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Body type</h4>
                    <div
                      className="overflow-x-auto h-45
                                          [&::-webkit-scrollbar]:w-0.75
                                          [&::-webkit-scrollbar-track]:bg-default-100
                                          [&::-webkit-scrollbar-thumb]:bg-default-300
                                          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                    >
                      <div className="flex flex-col gap-3">
                        <label htmlFor="sedan" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="sedan" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" defaultChecked />
                          Sedan
                        </label>
                        <label htmlFor="suv" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="suv" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" defaultChecked />
                          SUV
                        </label>
                        <label htmlFor="wagon" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="wagon" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Wagon
                        </label>
                        <label htmlFor="crossover" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="crossover" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Crossover
                        </label>
                        <label htmlFor="coupe" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="coupe" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" defaultChecked />
                          Coupe
                        </label>
                        <label htmlFor="pickup" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="pickup" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Pickup
                        </label>
                        <label htmlFor="sport" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="sport" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Sport Coupe
                        </label>
                        <label htmlFor="compact" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="compact" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Compact
                        </label>
                        <label htmlFor="convertible" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="convertible" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Convertible
                        </label>
                        <label htmlFor="family" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                          <input type="checkbox" id="family" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                          Family MPV
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Year</h4>
                    <div className="flex items-center">
                      <div className="w-1/2">
                        <select className="w-full rounded-md border border-default-300 dark:border-white/20 bg-transparent px-3 py-2 text-sm text-default-700">
                          <option value="">From</option>
                          <option value={2025}>2025</option>
                          <option value={2024}>2024</option>
                          <option value={2023}>2023</option>
                          <option value={2021}>2021</option>
                          <option value={2020}>2020</option>
                          <option value={2019}>2019</option>
                          <option value={2018}>2018</option>
                          <option value={2017}>2017</option>
                          <option value={2016}>2016</option>
                          <option value={2015}>2015</option>
                        </select>
                      </div>

                      <span className="mx-3 text-default-500">−</span>

                      <div className="w-1/2">
                        <select className="w-full rounded-md border border-default-300 dark:border-white/20 bg-transparent px-3 py-2 text-sm text-default-700">
                          <option value="">To</option>
                          <option value={2025}>2025</option>
                          <option value={2024}>2024</option>
                          <option value={2023} defaultChecked>
                            2023
                          </option>
                          <option value={2021}>2021</option>
                          <option value={2020}>2020</option>
                          <option value={2019}>2019</option>
                          <option value={2018}>2018</option>
                          <option value={2017}>2017</option>
                          <option value={2016}>2016</option>
                          <option value={2015}>2015</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Make and model</h4>
                    <div className="flex flex-col gap-3">
                      <select className="w-full rounded-md border border-default-300 text-sm dark:border-white/20 bg-transparent px-3 py-2 text-default-500">
                        <option value="" defaultChecked>
                          Any make
                        </option>
                        <option value="Toyota">Toyota</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="BMW">BMW</option>
                        <option value="Honda">Honda</option>
                        <option value="Ford">Ford</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Audi">Audi</option>
                        <option value="Tesla">Tesla</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Volkswagen">Volkswagen</option>
                      </select>
                      <select className="w-full rounded-md border border-default-300 text-sm dark:border-white/20 bg-transparent px-3 py-2 text-default-500">
                        <option value="" defaultChecked>
                          Any model
                        </option>
                        <option value="A-Class">A-Class</option>
                        <option value="C-Class">C-Class</option>
                        <option value="E-Class">E-Class</option>
                        <option value="S-Class">S-Class</option>
                        <option value="A205">A205</option>
                        <option value="GLA">GLA</option>
                        <option value="GLC">GLC</option>
                        <option value="GLE">GLE</option>
                        <option value="GLS">GLS</option>
                        <option value="AMG GT">AMG GT</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-sm font-semibold mb-4 pb-2">Price</h4>
                    <Nouislider range={{ min: 10000, max: 2000000 }} start={priceRange} connect tooltips onSlide={(values) => setPriceRange(values.map(Number))} className="slider mt-10" id="slider-merging-tooltips" />
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Drivetrain</h4>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="awd" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="awd" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        AWD/4WD
                      </label>
                      <label htmlFor="fwd" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="fwd" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Front Wheel Drive
                      </label>
                      <label htmlFor="rwd" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="rwd" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Rear Wheel Drive
                      </label>
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Fuel type</h4>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="gasoline" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="gasoline" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Gasoline
                      </label>
                      <label htmlFor="diesel" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="diesel" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Diesel
                      </label>
                      <label htmlFor="electric" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="electric" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Electric
                      </label>
                      <label htmlFor="hybrid" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="hybrid" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Hybrid
                      </label>
                      <label htmlFor="plug" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="plug" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Plug-in Hybrid
                      </label>
                      <label htmlFor="hydrogen" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="hydrogen" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Hydrogen
                      </label>
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Transmission</h4>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="automatic" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="automatic" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Automatic
                      </label>
                      <label htmlFor="manual" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="manual" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Manual
                      </label>
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Mileage</h4>
                    <div className="flex items-center">
                      <input type="number" step={500} placeholder="From" className="w-1/2 px-3 py-2 border border-default-300 dark:border-white/20 rounded-md bg-transparent" />
                      <Icon icon="lucide:minus" className="mx-3 sm:mx-1 lg:mx-2 xl:mx-3" />
                      <input type="number" step={500} placeholder="To" className="w-1/2 px-3 py-2 border border-default-300 dark:border-white/20 rounded-mdbg-transparent" />
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Color</h4>
                    <div
                      className="overflow-x-auto h-45
                                          [&::-webkit-scrollbar]:w-0.75
                                          [&::-webkit-scrollbar-track]:bg-default-100
                                          [&::-webkit-scrollbar-thumb]:bg-default-300
                                          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                    >
                      <div className="flex flex-col gap-3">
                        {colorData.map((item, idx) => (
                          <label htmlFor={item.id} key={idx} className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                            <input type="checkbox" id="amber" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                            {item.label}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 pb-6">
                    <h4 className="text-default-900 font-semibold mb-4">Sellers</h4>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="dealers" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="dealers" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Dealers Only
                      </label>
                      <label htmlFor="sellers" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                        <input type="checkbox" id="sellers" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                        Private Sellers Only
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
