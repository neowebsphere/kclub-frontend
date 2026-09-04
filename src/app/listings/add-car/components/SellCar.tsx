import car01 from '@/assets/img/add-item/car/01.jpg'
import car02 from '@/assets/img/add-item/car/02.jpg'
import car03 from '@/assets/img/add-item/car/03.jpg'
import car04 from '@/assets/img/add-item/car/04.jpg'
import convertible from '@/assets/img/home/cars/body-type/convertible.svg'
import coupe from '@/assets/img/home/cars/body-type/coupe.svg'
import sedan from '@/assets/img/home/cars/body-type/sedan.svg'
import suv from '@/assets/img/home/cars/body-type/suv.svg'
import { Icon } from '@iconify/react'
import { Briefcase, CirclePlus, DollarSign, Info, Trash2, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const SellCar = () => {
  return (
    <>
      <div className="lg:col-span-9 col-span-1">
        <h1 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900 mb-4">Sell car</h1>
        <div className="bg-body-bg rounded-md mt-6 p-6">
          <div className="md:pb-2 md:px-2">
            <div className="flex items-center justify-between md:mb-6 mb-4 flex-wrap">
              <h2 className="text-xl font-semibold mb-2 md:mb-0 me-4 text-default-900">Photos / videos</h2>
              <div className="flex items-center group">
                <Info className="size-4 text-info me-2" />
                <Link href="" className="text-sm text-info font-medium relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-100 group-hover:after:opacity-0 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100">
                  How to photograph a car
                </Link>
              </div>
            </div>
            <p className="text-sm mb-4">The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.</p>
            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-2">
              <div className="relative group block rounded-md overflow-hidden">
                <Image src={car01} alt="" className="size-full bg-cover object-cover" />
                <div className="absolute inset-0 flex justify-center items-center text-default-900 opacity-0 group-hover:opacity-100 transition duration-300">
                  <Link href="" className="size-8 z-20 bg-body-bg text-default-800 rounded-md flex justify-center items-center hover:bg-default-100">
                    <Trash2 className="size-4 relative z-20" />
                  </Link>
                  <div className="absolute inset-0 bg-black opacity-20 z-10" />
                </div>
                <div className="absolute start-2 top-2 z-10 mb-3 me-3 bg-body-bg text-default-900 text-xs px-2 py-1 rounded pointer-events-none flex items-center font-semibold">Cover</div>
              </div>
              <div className="relative group block rounded-md overflow-hidden">
                <Image src={car02} alt="" className="size-full bg-cover object-cover" />
                <div className="absolute inset-0 flex justify-center items-center text-default-900 opacity-0 group-hover:opacity-100 transition duration-300">
                  <Link href="" className="size-8 z-20 bg-body-bg text-default-800 rounded-md flex justify-center items-center hover:bg-default-100">
                    <Trash2 className="size-4 relative z-20" />
                  </Link>
                  <div className="absolute inset-0 bg-black opacity-20 z-10" />
                </div>
              </div>
              <div className="relative group block rounded-md overflow-hidden">
                <Image src={car03} alt="" className="size-full bg-cover object-cover" />
                <div className="absolute inset-0 flex justify-center items-center text-default-900 opacity-0 group-hover:opacity-100 transition duration-300">
                  <Link href="" className="size-8 z-20 bg-body-bg text-default-800 rounded-md flex justify-center items-center hover:bg-default-100">
                    <Trash2 className="size-4 relative z-20" />
                  </Link>
                  <div className="absolute inset-0 bg-black opacity-20 z-10" />
                </div>
              </div>
              <div className="relative group block rounded-md overflow-hidden">
                <Image src={car04} alt="" className="size-full bg-cover object-cover" />
                <div className="absolute inset-0 flex justify-center items-center text-default-900 opacity-0 group-hover:opacity-100 transition duration-300">
                  <Link href="" className="size-8 z-20 bg-body-bg text-default-800 rounded-md flex justify-center items-center hover:bg-default-100">
                    <Trash2 className="size-4 relative z-20" />
                  </Link>
                  <div className="absolute inset-0 bg-black opacity-20 z-10" />
                </div>
              </div>
              <div className="w-full group">
                <div className="flex items-center justify-center relative h-full cursor-pointer bg-default-100 dark:bg-white/3 border border-dashed border-default-300 dark:border-white/20 rounded-md p-4">
                  <div className="text-center">
                    <CirclePlus className="size-6 text-default-900 mb-2 block mx-auto" />
                    <div className="relative text-sm font-medium text-default-700 group-hover:underline">Upload photos / videos</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-4">
              <label htmlFor="link" className="block text-sm font-medium text-default-900 mb-2">
                Link to the video tour
              </label>
              <div className="relative">
                <Icon icon="lucide:link" className="absolute start-4 top-1/2 -translate-y-1/2 text-default-600 size-4.5" />
                <input type="url" id="link" placeholder="www.youtube.com/..." className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent pe-4.5 py-2.75 ps-10" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md mt-6 p-6">
          <div className="md:pb-2 md:px-2">
            <h2 className="mb-6 text-default-900 font-semibold md:text-2xl text-xl">Basic information</h2>
            <div className="mb-6">
              <label className="block text-sm text-default-900 font-semibold mb-2 pb-1">Condition of the car *</label>
              <div className="flex gap-4">
                <div className="relative">
                  <input type="radio" name="property" id="newcar" className="hidden peer" defaultChecked />
                  <label
                    htmlFor="newcar"
                    className="cursor-pointer rounded-full font-medium px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/5 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
                  >
                    New car
                  </label>
                </div>
                <div className="relative">
                  <input type="radio" name="property" id="usedcar" className="hidden peer" />
                  <label
                    htmlFor="usedcar"
                    className="cursor-pointer rounded-full font-medium px-5 py-2 inline-flex text-sm border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/5 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
                  >
                    Used car
                  </label>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 md:mb-6 mb-4">
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Car brand *</label>
                <select required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75">
                  <option value="Toyota">Toyota</option>
                  <option value="Mercedes-Benz" defaultChecked>
                    Mercedes-Benz
                  </option>
                  <option value="BMW">BMW</option>
                  <option value="Honda">Honda</option>
                  <option value="Ford">Ford</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Audi">Audi</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Volkswagen">Volkswagen</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Car model *</label>
                <select required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75">
                  <option value="A-Class">A-Class</option>
                  <option value="C-Class">C-Class</option>
                  <option value="E-Class">E-Class</option>
                  <option value="S-Class">S-Class</option>
                  <option value="A205" defaultChecked>
                    A205
                  </option>
                  <option value="GLA">GLA</option>
                  <option value="GLC">GLC</option>
                  <option value="GLE">GLE</option>
                  <option value="GLS">GLS</option>
                  <option value="AMG GT">AMG GT</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Manufacturing year *</label>
                <select required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75">
                  <option value={2025}>2025</option>
                  <option value={2024}>2024</option>
                  <option value={2023}>2023</option>
                  <option value={2022}>2022</option>
                  <option value={2021} defaultChecked>
                    2021
                  </option>
                  <option value={2020}>2020</option>
                  <option value={2019}>2019</option>
                  <option value={2018}>2018</option>
                  <option value={2017}>2017</option>
                  <option value={2016}>2016</option>
                  <option value={2015}>2015</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Mileage *</label>
                <input type="text" placeholder="K miles" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm text-default-900 font-semibold mb-2">Body type *</label>
              <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
                <div className="relative">
                  <input type="radio" name="property" id="sedan" className="hidden peer" />
                  <label
                    htmlFor="sedan"
                    className="cursor-pointer rounded-md font-medium inline-flex text-sm p-4 border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/5 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
                  >
                    <span className="text-center flex flex-col gap-2">
                      <Image src={sedan} alt="Sedan" />
                      Sedan
                    </span>
                  </label>
                </div>
                <div className="relative">
                  <input type="radio" name="property" id="convertible" className="hidden peer" defaultChecked />
                  <label
                    htmlFor="convertible"
                    className="cursor-pointer rounded-md font-medium inline-flex text-sm p-4 border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/5  peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white  hover:border-default-900 peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
                  >
                    <span className="text-center flex flex-col gap-2">
                      <Image src={convertible} alt="convertible" />
                      Convertible
                    </span>
                  </label>
                </div>
                <div className="relative">
                  <input type="radio" name="property" id="suv" className="hidden peer" />
                  <label
                    htmlFor="suv"
                    className="cursor-pointer rounded-md font-medium inline-flex text-sm p-4 border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/5 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
                  >
                    <span className="text-center flex flex-col gap-2">
                      <Image src={suv} alt="suv" />
                      SUV
                    </span>
                  </label>
                </div>
                <div className="relative">
                  <input type="radio" name="property" id="coupe" className="hidden peer" />
                  <label
                    htmlFor="coupe"
                    className="cursor-pointer rounded-md font-medium inline-flex text-sm p-4 border border-default-300 peer-checked:bg-default-100 peer-checked:dark:bg-white/5 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900  peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
                  >
                    <span className="text-center flex flex-col gap-2">
                      <Image src={coupe} alt="suv" />
                      Coupe
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 mb-4 md:mb-6">
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Location *</label>
                <select required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75">
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago" defaultChecked>
                    Chicago
                  </option>
                  <option value="Houston">Houston</option>
                  <option value="Phoenix">Phoenix</option>
                  <option value="Philadelphia">Philadelphia</option>
                  <option value="San Antonio">San Antonio</option>
                  <option value="San Diego">San Diego</option>
                  <option value="Dallas">Dallas</option>
                  <option value="San Jose">San Jose</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Radius</label>
                <select required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75">
                  <option value="200 mi">200 mi</option>
                  <option value="150 mi">150 mi</option>
                  <option value="100 mi">100 mi</option>
                  <option value="50 mi" defaultChecked>
                    50 mi
                  </option>
                  <option value="25 mi">25 mi</option>
                </select>
              </div>
            </div>
            <div className="rounded-md bg-default-100 dark:bg-white/3 p-6">
              <h6 className="mb-2 text-default-900 font-semibold">Cars with a verified VIN code sell faster</h6>
              <p className="text-sm mb-4">We will check the car for free in the registers of the Ministry of Internal Affairs, the open data portal and dealer databases.</p>
              <div className="flex items-center gap-2">
                <input type="text" placeholder="VIN code" required className="md:w-78.5 w-50 rounded-lg border border-default-300 dark:border-white/20 bg-body-bg text-sm px-4.5 py-2" />
                <button type="button" className="size-10 flex justify-center items-center rounded-md bg-default-900 text-body-bg">
                  <Icon icon="lucide:camera" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md mt-6 p-6">
          <div className="md:pb-2 md:px-2">
            <h2 className="mb-4 md:mb-6 text-default-900 font-semibold text-xl md:text-2xl">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Drive type *</label>
                <select className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4 py-2.5">
                  <option>Front-Wheel Drive</option>
                  <option>Rear-Wheel Drive</option>
                  <option>All-Wheel Drive</option>
                  <option>Four-Wheel Drive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Engine *</label>
                <select className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4 py-2.5">
                  <option>Select engine</option>
                  <option>Inline-4</option>
                  <option>Inline-6</option>
                  <option>6-Cylinder Turbo</option>
                  <option>V6</option>
                  <option>V8</option>
                  <option>V10</option>
                  <option>V12</option>
                  <option>Electric</option>
                  <option>Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Transmission *</label>
                <select className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4 py-2.5">
                  <option>Manual</option>
                  <option>Automatic</option>
                  <option>CVT</option>
                  <option>Dual-Clutch</option>
                  <option>Semi-Automatic</option>
                  <option defaultChecked>7-Speed Shiftable Automatic</option>
                  <option>8-Speed Automatic</option>
                  <option>9-Speed Automatic</option>
                  <option>10-Speed Automatic</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Fuel type *</label>
                <select required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4 py-2.5">
                  <option defaultChecked>Gasoline</option>
                  <option>Diesel</option>
                  <option>Electric</option>
                  <option>Hybrid</option>
                  <option>Plug-in Hybrid</option>
                  <option>Hydrogen</option>
                  <option>Flex Fuel</option>
                  <option>Natural Gas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">City MPG *</label>
                <input type="number" placeholder="Miles per gallon" min={10} className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4 py-2.5" />
              </div>

              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2 items-center gap-1">
                  Highway MPG <Icon icon="lucide:info" className="text-default-600" />
                </label>
                <input type="number" placeholder="Miles per gallon" min={10} className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4 py-2.5" />
              </div>

              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Exterior color</label>
                <input type="text" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4 py-2.5" />
              </div>

              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Interior color</label>
                <input type="text" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4 py-2.5" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-default-900 font-semibold mb-2">Description *</label>
                <p className="text-sm mb-2">Here you can let your imagination run wild and describe the car in the best possible way!</p>
                <textarea rows={5} placeholder="Maximum 2000 characters" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4 py-2.5" defaultValue={''} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md mt-6 p-6">
          <div className="md:pb-2 md:px-2">
            <h2 className="mb-2 text-default-900 font-semibold md:text-2xl text-xl">Features</h2>
            <div className="hs-accordion-group">
              <div className="hs-accordion active hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingExteriror">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start font-semibold text-default-900 py-5" aria-expanded="true" aria-controls="exterior">
                  <Link href="" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-100 after:h-0.25 after:bg-current after:transition-all after:duration-300">
                    Exterior
                  </Link>
                  <Icon icon="lucide:plus" className="hs-accordion-active:hidden block size-4 text-default-800" />
                  <Icon icon="lucide:minus" className="hs-accordion-active:block hidden size-4 text-default-800" />
                </button>
                <div id="exterior" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 mb-4" role="region" aria-labelledby="headingExteriror">
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4 text-default-600">
                    <label htmlFor="led-headlights" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="led-headlights" defaultChecked className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      LED Headlights
                    </label>

                    <label htmlFor="fog-lights" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="fog-lights" defaultChecked className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Fog Lights
                    </label>

                    <label htmlFor="heated-mirrors" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="heated-mirrors" className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Heated Mirrors
                    </label>

                    <label htmlFor="power-mirrors" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="power-mirrors" defaultChecked className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Power Mirrors
                    </label>

                    <label htmlFor="rain-sensing-wipers" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="rain-sensing-wipers" className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Rain Sensing Wipers
                    </label>

                    <label htmlFor="rear-spoiler" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="rear-spoiler" defaultChecked className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Rear Spoiler
                    </label>

                    <label htmlFor="convertible-roof" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="convertible-roof" defaultChecked className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Convertible Roof
                    </label>

                    <label htmlFor="alloy-wheels" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="alloy-wheels" className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Alloy Wheels
                    </label>

                    <label htmlFor="keyless-entry" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="keyless-entry" defaultChecked className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Keyless Entry
                    </label>

                    <label htmlFor="power-windows" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="power-windows" defaultChecked className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Power Windows
                    </label>

                    <label htmlFor="daytime-running-lights" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="daytime-running-lights" defaultChecked className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Daytime Running Lights
                    </label>

                    <label htmlFor="tinted-glass" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="tinted-glass" className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Tinted Glass
                    </label>

                    <label htmlFor="parking-sensors" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="parking-sensors" className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Parking Sensors
                    </label>

                    <label htmlFor="dual-exhaust" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="dual-exhaust" className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Dual Exhaust
                    </label>

                    <label htmlFor="power-trunk" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="power-trunk" defaultChecked className="w-4 h-4 border border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Power Trunk
                    </label>
                  </div>
                </div>
              </div>
              <div className="hs-accordion hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingInterior">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start font-semibold text-default-900 py-5" aria-expanded="false" aria-controls="interior">
                  <Link href="" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                    Interior
                  </Link>
                  <Icon icon="lucide:plus" className="hs-accordion-active:hidden block size-4 text-default-800" />
                  <Icon icon="lucide:minus" className="hs-accordion-active:block hidden size-4 text-default-800" />
                </button>
                <div id="interior" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 mb-4" role="region" aria-labelledby="headingInterior">
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4 text-default-600">
                    <label htmlFor="ac" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="ac" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Multi-Zone A/C
                    </label>
                    <label htmlFor="heated-front" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="heated-front" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Heated Front Seats
                    </label>
                    <label htmlFor="steering-audio" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="steering-audio" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Steering Wheel Audio Controls
                    </label>
                    <label htmlFor="steering-adjustable" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="steering-adjustable" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Adjustable Steering Wheel
                    </label>
                    <label htmlFor="wipers" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="wipers" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Intermittent Wipers
                    </label>
                    <label htmlFor="door-locks" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="door-locks" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Power Door Locks
                    </label>
                    <label htmlFor="auto-dimming" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="auto-dimming" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Auto-Dimming Rearview Mirror
                    </label>
                    <label htmlFor="leather-seats" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="leather-seats" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Leather Seats
                    </label>
                    <label htmlFor="bank" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="bank" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Bank
                    </label>
                    <label htmlFor="cc" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="cc" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Climate Control
                    </label>
                    <label htmlFor="visor-mirror" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="visor-mirror" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Passenger Illuminated Visor Mirror
                    </label>
                    <label htmlFor="pass-through" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="pass-through" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Pass-Through Rear Seat
                    </label>
                    <label htmlFor="driver-lumbar" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="driver-lumbar" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Driver Adjustable Lumbar
                    </label>
                    <label htmlFor="passenger-lumbar" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="passenger-lumbar" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Passenger Adjustable Lumbar
                    </label>
                    <label htmlFor="garage-opener" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="garage-opener" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Universal Garage Door Opener
                    </label>
                  </div>
                </div>
              </div>
              <div className="hs-accordion hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingSafety">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start font-semibold text-default-900 py-5" aria-expanded="false" aria-controls="safety">
                  <Link href="" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                    Safety
                  </Link>
                  <Icon icon="lucide:plus" className="hs-accordion-active:hidden block size-4 text-default-800" />
                  <Icon icon="lucide:minus" className="hs-accordion-active:block hidden size-4 text-default-800" />
                </button>
                <div id="safety" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 mb-4" role="region" aria-labelledby="headingSafety">
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <label htmlFor="airbags" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="airbags" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Airbags
                    </label>

                    <label htmlFor="anti-lock-brakes" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="anti-lock-brakes" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Anti-lock Brakes (ABS)
                    </label>

                    <label htmlFor="traction-control" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="traction-control" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Traction Control
                    </label>

                    <label htmlFor="stability-control" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="stability-control" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Stability Control
                    </label>

                    <label htmlFor="rearview-camera" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="rearview-camera" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Rearview Camera
                    </label>

                    <label htmlFor="blind-spot-monitor" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="blind-spot-monitor" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Blind Spot Monitor
                    </label>

                    <label htmlFor="lane-departure-warning" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="lane-departure-warning" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Lane Departure Warning
                    </label>

                    <label htmlFor="forward-collision-warning" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="forward-collision-warning" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Forward Collision Warning
                    </label>

                    <label htmlFor="emergency-braking" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="emergency-braking" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Automatic Emergency Braking
                    </label>

                    <label htmlFor="adaptive-cruise" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="adaptive-cruise" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Adaptive Cruise Control
                    </label>

                    <label htmlFor="child-safety-locks" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="child-safety-locks" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Child Safety Locks
                    </label>

                    <label htmlFor="tire-pressure-monitor" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="tire-pressure-monitor" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Tire Pressure Monitoring System
                    </label>

                    <label htmlFor="drowsiness-monitor" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="drowsiness-monitor" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Driver Drowsiness Monitoring
                    </label>

                    <label htmlFor="night-vision" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="night-vision" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Night Vision Assist
                    </label>

                    <label htmlFor="pedestrian-detection" className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
                      <input type="checkbox" id="pedestrian-detection" defaultChecked className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />
                      Pedestrian Detection
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md mt-6 p-6">
          <div className="md:pb-2 md:px-2">
            <h2 className="md:mb-6 mb-4 text-default-900 font-semibold md:text-2xl text-xl">Price</h2>
            <label className="block text-sm text-default-900 font-semibold mb-2">Price *</label>
            <div className="relative md:w-97.5 w-full md:mb-6 mb-4">
              <DollarSign className="size-4.5 absolute top-1/2 -translate-y-1/2 start-0 ms-4" />
              <input type="number" id="price" min={1000} defaultValue={41900} placeholder="Set a fair price" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent ps-10 pe-4.5 py-2.75" />
            </div>
            <div className="flex items-center gap-2 md:mb-6 mb-4">
              <label htmlFor="negotiated-price" className="relative inline-block w-11 h-6 cursor-pointer">
                <input type="checkbox" id="negotiated-price" className="peer sr-only" />
                <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
              </label>
              <label htmlFor="negotiated-price" className="text-default-900 text-sm">
                Negotiated price
              </label>
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="no-credit" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                <input type="checkbox" id="no-credit" className="w-4 h-4 bg-transparent checked:text-dark border-default-300 dark:border-white/20 rounded me-2" defaultChecked />
                Payment in installments is possible
              </label>
              <label htmlFor="no-credit" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                <input type="checkbox" id="no-credit" className="w-4 h-4 bg-transparent checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                Exchange for a car is possible
              </label>
              <label htmlFor="no-credit" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                <input type="checkbox" id="no-credit" className="w-4 h-4 bg-transparent checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                Uncleared car
              </label>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md mt-6 p-6">
          <div className="pb-2 px-2">
            <h2 className="mb-6 text-default-900 font-semibold md:text-2xl text-xl">Price</h2>
            <div className="flex items-center flex-wrap md:gap-6 gap-4 mb-6">
              <div className="relative">
                <input type="radio" name="type" id="private" className="hidden peer" defaultChecked />
                <label
                  htmlFor="private"
                  className="cursor-pointer rounded-full font-medium py-2 px-5 border border-default-300 w-full inline-flex items-center peer-checked:bg-default-100 peer-checked:dark:bg-white/10 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 text-sm peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
                >
                  <User className="size-4 me-2" />
                  Private person
                </label>
              </div>
              <div className="relative">
                <input type="radio" name="type" id="agent" className="hidden peer" />
                <label
                  htmlFor="agent"
                  className="cursor-pointer rounded-full font-medium py-2 px-5 border border-default-300 w-full inline-flex items-center peer-checked:bg-default-100 peer-checked:dark:bg-white/10 peer-checked:text-default-800 peer-checked:border-default-900 peer-checked:dark:border-white hover:border-default-900 text-sm peer-focus:ring-2 peer-focus:ring-dark peer-focus:dark:ring-white transition"
                >
                  <Briefcase className="size-4 me-2" />
                  Real estate agent
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 md:pb-6 pb-4">
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">First name *</label>
                <input type="text" id="fn" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
              </div>
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Last name *</label>
                <input type="text" id="ln" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
              </div>
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Email *</label>
                <input type="email" id="email" required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
              </div>
              <div>
                <label className="block text-sm text-default-900 font-semibold mb-2">Phone number *</label>
                <input
                  type="tel"
                  id="phone"
                  data-input-format='{"numericOnly": true, "delimiters": ["(", ")", " ", "-", " "], "blocks": [0, 3, 0, 3, 4]}'
                  placeholder="(___) ___-____"
                  required
                  className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75"
                />
              </div>
            </div>
            <label htmlFor="dealer-ready" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
              <input type="checkbox" id="dealer-ready" className="w-4 h-4 bg-transparent checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
              Ready to cooperate with dealers
            </label>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-4 mt-6">
          <button type="button" className="md:w-auto w-full bg-body-bg rounded-md font-semibold py-3.5 px-6 leading-0 border border-default-100 dark:border-white/20 transition hover:border-default-900 inline-flex items-center justify-center">
            <Icon icon="lucide:eye" className="text-lg me-2" />
            Detailed preview
          </button>
          <button type="button" className="md:w-auto w-full bg-primary text-white rounded-md font-semibold py-3.5 leading-0 px-6  transition hover:bg-primary-hover inline-flex items-center justify-center">
            <Icon icon="lucide:upload" className="text-lg me-2" />
            Save and publish
          </button>
        </div>
      </div>
    </>
  )
}

export default SellCar
