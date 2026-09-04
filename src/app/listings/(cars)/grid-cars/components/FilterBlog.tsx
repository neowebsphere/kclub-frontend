import grid01 from '@/assets/img/listings/cars/grid/01.jpg'
import grid02 from '@/assets/img/listings/cars/grid/02.jpg'
import grid03 from '@/assets/img/listings/cars/grid/03.jpg'
import grid04 from '@/assets/img/listings/cars/grid/04.jpg'
import grid05 from '@/assets/img/listings/cars/grid/05.jpg'
import grid08 from '@/assets/img/listings/cars/grid/08.jpg'
import grid09 from '@/assets/img/listings/cars/grid/09.jpg'
import grid10 from '@/assets/img/listings/cars/grid/10.jpg'
import grid11 from '@/assets/img/listings/cars/grid/11.jpg'
import grid12 from '@/assets/img/listings/cars/grid/12.jpg'
import grid13 from '@/assets/img/listings/cars/grid/13.jpg'
import grid14 from '@/assets/img/listings/cars/grid/14.jpg'
import grid15 from '@/assets/img/listings/cars/grid/15.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type FilterBlog = {
  badge?: string
  image: StaticImageData
  date: string
  name: string
  modelYear: number
  price: string
  location: string
  mileage: string
  fuel: string
  transmission: string
}

const carData: FilterBlog[] = [
  {
    badge: 'Verified',
    image: grid01,
    date: '27/05/2024',
    name: 'Volvo XC90 Sport 4WD',
    modelYear: 2019,
    price: '$43,500',
    location: 'Houston',
    mileage: '78K mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: grid02,
    date: '16/08/2024',
    name: 'Porsche 911 Turbo S',
    modelYear: 2017,
    price: '$85,000',
    location: 'Chicago',
    mileage: '32K mi',
    fuel: 'Gasoline',
    transmission: 'Manual',
  },
  {
    image: grid03,
    date: '30/09/2024',
    name: 'Ford Truck Lifted',
    modelYear: 2017,
    price: '$63,000',
    location: 'Boston',
    mileage: '17K mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: grid04,
    date: '15/07/2024',
    name: 'Mercedes-Benz A205',
    modelYear: 2021,
    price: '$41,900',
    location: 'Chicago',
    mileage: '60K mi',
    fuel: 'Gasoline',
    transmission: 'Automatic',
  },
  {
    image: grid05,
    badge: 'Verified',
    date: '23/04/2024',
    name: 'Mercedes-Benz Coupe',
    modelYear: 2021,
    price: '$115,400',
    location: 'New York',
    mileage: '15K mi',
    fuel: 'Gasoline',
    transmission: 'Manual',
  },
  {
    image: grid05,
    badge: 'Verified',
    date: '28/06/2024',
    name: 'Maserati Granturismo',
    modelYear: 2020,
    price: '$73,000',
    location: 'Dallas',
    mileage: '56K mi',
    fuel: 'Gasoline',
    transmission: 'Automatic',
  },
  {
    image: grid02,
    date: '19/10/2024',
    name: 'Tesla Model 3',
    modelYear: 2024,
    price: '$36,200',
    location: 'Los Angeles',
    mileage: '13K mi',
    fuel: 'Electric',
    transmission: 'Automatic',
  },
  {
    image: grid08,
    date: '02/08/2024',
    name: 'Toyota Yaris GR Sport',
    modelYear: 2021,
    price: '$28,600',
    location: 'San Jose',
    mileage: '21K mi',
    fuel: 'Hybrid',
    transmission: 'Automatic',
  },
  {
    image: grid09,
    badge: 'Verified',
    date: '13/07/2024',
    name: 'Mitsubishi Padjero Sport',
    modelYear: 2029,
    price: '$33,500',
    location: 'Phoenix',
    mileage: '57K mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: grid10,
    badge: 'Verified',
    date: '25/04/2024',
    name: 'Smart Fortwo Cabrio',
    modelYear: 2018,
    price: '$17,600',
    location: 'New York',
    mileage: '46K mi',
    fuel: 'Gasoline',
    transmission: 'Automatic',
  },
  {
    image: grid11,
    date: '05/09/2024',
    name: 'Land Rover Defender',
    modelYear: 2003,
    price: '$25,900',
    location: 'Dallas',
    mileage: '138K mi',
    fuel: 'Diesel',
    transmission: 'Manual',
  },
  {
    image: grid12,
    badge: 'Verified',
    date: '11/06/2024',
    name: 'Audi R8 Spyder',
    modelYear: 2022,
    price: '$97,500',
    location: 'Philadelphia',
    mileage: '29K mi',
    fuel: 'Gasoline',
    transmission: 'Automatic',
  },
  {
    image: grid13,
    date: '16/08/2024',
    name: 'BMW 3 Series',
    modelYear: 2021,
    price: '$42,000',
    location: 'Orlando',
    mileage: '31K mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: grid14,
    badge: 'Verified',
    date: '29/05/2024',
    name: 'GMC Sierra 1500',
    modelYear: 2020,
    price: '$69,300',
    location: 'Boston',
    mileage: '54K mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: grid15,
    date: '03/07/2024',
    name: 'Porsche 911 Carrera',
    modelYear: 2019,
    price: '$108,500',
    location: 'New York',
    mileage: '47K mi',
    fuel: 'Gasoline',
    transmission: 'Automatic',
  },
]

type BlogProps = {
  priceRange: number[]
}

const FilterBlog = ({ priceRange }: BlogProps) => {
  const filteredData = carData.filter((item) => parseInt(item.price.replace('$', '').replace(',', '')) >= priceRange[0] && parseInt(item.price.replace('$', '').replace(',', '')) <= priceRange[1])

  return (
    <>
      <div className="lg:col-span-9 col-span-1">
        <div className="flex items-center justify-between gap-4 pb-4 mb-2">
          <div className="relative w-31.25">
            <Icon icon="lucide:arrow-up-down" className="absolute start-0 top-1/2 -translate-y-1/2 z-10 size-4" />
            <select className="w-full ps-6 pe-2 py-1 border-0 rounded-none text-sm text-default-700 focus:outline-none focus:ring-0 bg-transparent">
              <option defaultChecked>Popular</option>
              <option>Newest</option>
            </select>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <div className="ms-auto">
              <Link href="" className="flex items-center text-default-700 text-sm font-normal">
                <Icon icon="lucide:repeat" className="text-base me-2" />
                Compare (1)
              </Link>
            </div>
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {filteredData.map((item, idx) => (
            <div className="h-auto group" key={idx}>
              <Link href="/listings/entry-cars" className="group"></Link>
              <div className="bg-default-100/70 dark:bg-white/3 rounded-md">
                <Link href="/listings/entry-cars" className="group">
                  <div className=" rounded-tl-md rounded-tr-md w-full h-full overflow-hidden relative">
                    <Image src={item.image} alt="Image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-tl-md rounded-tr-md" />
                    <div className="absolute top-0 start-0 z-10 flex flex-col gap-1 pt-2 ps-2 mt-2 ms-2">
                      {item.badge && (
                        <div className="bg-info text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">
                          {item.badge} <Icon icon="lucide:shield" className="ms-1" />
                        </div>
                      )}
                      <div>
                        <p className="bg-warning inline-flex w-auto text-white text-xs px-2 py-0.5 rounded">Used</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="pb-4 pt-6 px-6">
                  <Link href="/listings/entry-cars" className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs text-secondary me-4">{item.date}</div>
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
                    <Link href="/listings/entry-cars" className="group"></Link>
                    <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300 me-1" href="/listings/entry-cars">
                      {item.name}
                    </Link>
                    <span className="text-xs font-normal text-secondary">({item.modelYear})</span>
                  </h3>
                  <div className="text-default-900 font-semibold">{item.price}</div>
                </div>
                <div className="pb-6 px-6">
                  <div className="pt-4 border-t border-border">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex gap-2 items-center text-sm">
                        <Icon icon="lucide:map-pin" className="text-body-color" />
                        {item.location}
                      </div>
                      <div className="flex gap-2 items-center text-sm">
                        <Icon icon="lucide:gauge" className="text-body-color" />
                        {item.mileage} mi
                      </div>
                      <div className="flex gap-2 items-center text-sm">
                        <Icon icon="lucide:fuel" className="text-body-color" />
                        {item.fuel}
                      </div>
                      <div className="flex gap-2 items-center text-sm">
                        <Icon icon="tabler:manual-gearbox" className="text-body-color" />
                        {item.transmission}
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
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-default-200 text-default-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
              aria-current="page"
            >
              1
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              2
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              3
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              4
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              5
            </button>
            <div className="hs-tooltip inline-block">
              <button
                type="button"
                className="hs-tooltip-toggle group min-h-9.5 min-w-9.5 flex justify-center items-center text-default-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
              >
                <Icon icon="lucide:ellipsis" className="text-lg" />
              </button>
            </div>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              10
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default FilterBlog
