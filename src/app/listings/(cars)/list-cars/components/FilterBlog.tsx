'use client'
import list01 from '@/assets/img/listings/cars/list/01.jpg'
import list02 from '@/assets/img/listings/cars/list/02.jpg'
import list03 from '@/assets/img/listings/cars/list/03.jpg'
import list04 from '@/assets/img/listings/cars/list/04.jpg'
import list05 from '@/assets/img/listings/cars/list/05.jpg'
import list06 from '@/assets/img/listings/cars/list/06.jpg'
import list07 from '@/assets/img/listings/cars/list/07.jpg'
import list08 from '@/assets/img/listings/cars/list/08.jpg'
import { Icon } from '@iconify/react'
import { ArrowUpDown, X } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import SideBar from '../../components/SideBar'
import Link from 'next/link'

type CarType = {
  id: number
  badge?: string
  verified?: boolean
  image: StaticImageData
  date: string
  name: string
  modelYear: number
  price: string
  description: string
  location: string
  mileage: string
  fuel: string
  transmission: string
}

const carData: CarType[] = [
  {
    id: 1,
    badge: 'Used',
    verified: true,
    image: list01,
    date: '27/05/2024',
    name: 'Volvo XC90 Sport 4WD',
    modelYear: 2019,
    price: '$92,500',
    description: 'This SUV combines robust power with sophisticated design, offering advanced safety features and all-terrain capability.',
    location: 'Houston',
    mileage: '78K mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    id: 2,
    badge: 'Used',
    image: list02,
    date: '16/08/2024',
    name: 'Porsche 911 Turbo S',
    modelYear: 2017,
    price: '$85,000',
    description: 'This pristine sports car, free of damages, features a powerful turbocharged engine, iconic design, and a meticulously crafted interior.',
    location: 'Chicago',
    mileage: '32K mi',
    fuel: 'Gasoline',
    transmission: 'Manual',
  },
  {
    id: 3,
    badge: 'Used',
    image: list03,
    date: '30/09/2024',
    name: 'Ford Truck Lifted',
    modelYear: 2022,
    price: '$63,000',
    description: 'A rugged, commanding presence on and off the road, the lifted Ford Truck delivers enhanced performance and superior ground clearance.',
    location: 'Boston',
    mileage: '17K mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    id: 4,
    badge: 'Used',
    image: list04,
    date: '05/09/2024',
    name: 'Land Rover Defender',
    modelYear: 2003,
    price: '$25,900',
    description: 'An iconic off-road legend, known for its rugged durability, timeless design, and unmatched capability. Built to conquer any terrain.',
    location: 'Dallas',
    mileage: '138K mi',
    fuel: 'Diesel',
    transmission: 'Manual',
  },
  {
    id: 5,
    badge: 'Used',
    verified: true,
    image: list05,
    date: '23/04/2024',
    name: 'Mercedes-Benz Coupe',
    modelYear: 2021,
    price: '$115,400',
    description: 'A sleek, luxurious vehicle featuring powerful performance, advanced technology, and elegant design for a premium driving experience.',
    location: 'New York',
    mileage: '15K mi',
    fuel: 'Diesel',
    transmission: 'Manual',
  },
  {
    id: 6,
    badge: 'Used',
    verified: true,
    image: list06,
    date: '28/06/2024',
    name: 'Maserati Granturismo',
    modelYear: 2021,
    price: '$73,400',
    description: 'A sleek, luxurious vehicle featuring powerful performance, advanced technology, and elegant design for a premium driving experience.',
    location: 'Dallas',
    mileage: '56K mi',
    fuel: 'Gasoline',
    transmission: 'Automatic',
  },
  {
    id: 7,
    badge: 'Used',
    image: list07,
    date: '16/08/2024',
    name: 'BMW Series 3',
    modelYear: 2021,
    price: '$42,000',
    description: 'Blending cutting-edge technology with sporty handling, it offers a thrilling driving experience wrapped in a sleek, modern design.',
    location: 'Orlando',
    mileage: '31K mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    id: 8,
    badge: 'Used',
    verified: true,
    image: list08,
    date: '11/06/2024',
    name: 'Audi R8 Spyder',
    modelYear: 2022,
    price: '$97,500',
    description: 'Experience the thrill of a V10 engine, precision handling, and the luxury of top-down driving in an iconic, head-turning package.',
    location: 'Philadelphia',
    mileage: '29K mi',
    fuel: 'Gasoline',
    transmission: 'Automatic',
  },
]

const FilterBlog = () => {
  const [priceRange, setPriceRange] = useState([10000, 2000000])
  return (
    <>
      <div className="flex justify-between gap-4 pb-2 lg:mb-6 mb-2 border-b border-border">
        <div className="flex gap-4 items-center">
          <div className="text-sm text-nowrap pb-4">
            <span className="md:block hidden">Showing</span> {carData.length} results
          </div>

          <div className="overflow-x-auto whitespace-nowrap lg:w-full md:w-130 w-50">
            <div className="flex gap-2 pb-4">
              {['Sedan', 'SUV', 'Coupe', 'Under 2023', '$17,000 - $120,000'].map((item, idx) => (
                <button key={idx} className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-default-200 dark:hover:bg-default-300">
                  <X className="size-3.5 me-1" />
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-4">
          <Link className="text-xs underline hover:no-underline text-default-700 font-medium" href="">
            Clear all
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 md:pt-4 pt-0 pb-12">
        <SideBar priceRange={[10000, 2000000]} setPriceRange={() => {}} />

        <div className="lg:col-span-9 col-span-1">
          <div className="flex items-center justify-between gap-4 pb-4 mb-2">
            <div className="relative w-31.25">
              <ArrowUpDown className="absolute start-0 top-1/2 -translate-y-1/2 z-10 size-3.5" />

              <select className="w-full ps-6 pe-2 py-1 border-0 rounded-none text-sm text-default-700 focus:outline-none focus:ring-0 bg-transparent">
                <option>Popular</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="flex items-center gap-4 justify-end">
              <Link href="" className="flex items-center text-default-700 text-sm font-normal">
                <Icon icon="lucide:repeat" className="text-base me-2" />
                Compare (1)
              </Link>

              <div className="flex">
                <Link href="/listings/grid-cars" className="text-xl text-default-900 px-2 py-0 pointer-events-none">
                  <Icon icon="lucide:layout-grid" />
                </Link>

                <Link href="/listings/list-cars" className="text-xl text-default-500 px-2 py-0">
                  <Icon icon="lucide:list" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            {carData.map((car) => (
              <div key={car.id} className="mb-6">
                <div className="bg-default-100/80 dark:bg-white/3 rounded-md group md:grid grid-cols-12">
                  <div className="col-span-5 relative">
                    <div className="rounded-tl-md md:rounded-bl-md rounded-bl-none md:rounded-tr-none rounded-tr-md size-full overflow-hidden relative">
                      <Image src={car.image} alt={car.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-tl-md md:rounded-bl-md rounded-bl-none md:rounded-tr-none rounded-tr-md" />

                      <div className="absolute top-0 start-0 z-10 flex flex-col gap-1 pt-2 ps-2 mt-2 ms-2">
                        {car.verified && (
                          <div className="bg-info text-white text-xs inline-flex items-center font-medium px-2 py-0.5 rounded">
                            Verified
                            <Icon icon="lucide:shield" className="ms-1" />
                          </div>
                        )}

                        {car.badge && <p className="bg-warning inline-flex w-auto text-white text-xs px-2 py-0.5 rounded">{car.badge}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-7">
                    <div className="pb-4 pt-6 px-6 md:my-2">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-secondary me-4">{car.date}</div>

                        <div className="flex gap-2">
                          {['heart', 'bell', 'repeat'].map((icon, idx) => (
                            <button key={idx} type="button" className="flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                              <Icon icon={`lucide:${icon}`} className={`size-3.5 text-body-color`} />
                            </button>
                          ))}
                        </div>
                      </div>

                      <h3 className="mb-2 text-xl text-default-900 font-semibold">
                        <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300 me-1" href="/listings/entry-cars">
                          {car.name}
                        </Link>

                        <span className="text-xs font-normal text-secondary">({car.modelYear})</span>
                      </h3>

                      <div className="text-default-900 font-semibold">{car.price}</div>

                      <p className="text-sm pt-2 mt-1">{car.description}</p>
                    </div>

                    <div className="pb-6 px-6">
                      <div className="pt-6 border-t border-border">
                        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                          <div className="flex gap-2 items-center text-sm">
                            <Icon icon="lucide:map-pin" className="text-body-color" />
                            {car.location}
                          </div>

                          <div className="flex gap-2 items-center text-sm">
                            <Icon icon="lucide:gauge" className="text-body-color" />
                            {car.mileage}
                          </div>

                          <div className="flex gap-2 items-center text-sm">
                            <Icon icon="lucide:fuel" className="text-body-color" />
                            {car.fuel}
                          </div>

                          <div className="flex gap-2 items-center text-sm">
                            <Icon icon="tabler:manual-gearbox" className="text-body-color" />
                            {car.transmission}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <nav className="flex items-center gap-x-1 mt-8" aria-label="Pagination">
            <div className="flex items-center gap-x-1">
              {[1, 2, 3, 4, 5].map((page) => (
                <button key={page} type="button" className={`min-h-9.5 min-w-9.5 flex justify-center items-center py-2 px-3 text-sm rounded-lg ${page === 1 ? 'bg-default-200 text-default-800' : 'text-default-800 hover:bg-default-100'}`}>
                  {page}
                </button>
              ))}

              <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-400 p-2 text-sm rounded-lg">
                <Icon icon="lucide:ellipsis" className="text-lg" />
              </button>

              <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg">
                18
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default FilterBlog
