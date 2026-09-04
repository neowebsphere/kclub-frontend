'use client'
import grid02 from '@/assets/img/listings/cars/grid/02.jpg'
import grid03 from '@/assets/img/listings/cars/grid/03.jpg'
import grid05 from '@/assets/img/listings/cars/grid/05.jpg'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type CarItem = {
  id: number
  image: StaticImageData
  title: string
  year: number
  price: string
  date: string
  location: string
  mileage: string
  fuel: string
  transmission: string
  verified?: boolean
  condition: 'Used' | 'New'
}

const carData: CarItem[] = [
  {
    id: 1,
    image: grid03,
    title: 'Ford Truck Lifted',
    year: 2017,
    price: '$63,000',
    date: '30/09/2024',
    location: 'Boston',
    mileage: '17K mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
    condition: 'Used',
  },
  {
    id: 2,
    image: grid05,
    title: 'Mercedes-Benz Coupe',
    year: 2021,
    price: '$115,400',
    date: '23/04/2024',
    location: 'New York',
    mileage: '15K mi',
    fuel: 'Gasoline',
    transmission: 'Manual',
    verified: true,
    condition: 'Used',
  },
  {
    id: 3,
    image: grid02,
    title: 'Porsche 911 Turbo S',
    year: 2017,
    price: '$85,000',
    date: '16/08/2024',
    location: 'Chicago',
    mileage: '32K mi',
    fuel: 'Gasoline',
    transmission: 'Manual',
    condition: 'Used',
  },
  {
    id: 4,
    image: grid02,
    title: 'Tesla Model 3',
    year: 2024,
    price: '$36,200',
    date: '19/10/2024',
    location: 'Los Angeles',
    mileage: '13K mi',
    fuel: 'Electric',
    transmission: 'Automatic',
    condition: 'Used',
  },
]

const Blog = () => {
  return (
    <section className="md:py-12 py-6 my-4">
      <div className="container">
        <div className="flex md:items-center items-start justify-between gap-4 md:mb-8 mb-6">
          <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">You may be interested in</h2>

          <Link href="/listings/grid-cars" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
            View all
            <Icon icon="lucide:chevron-right" className="text-lg ms-1" />
          </Link>
        </div>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            550: { slidesPerView: 2 },
            850: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          wrapperClass="lg:mb-0 mb-12"
        >
          {carData.map((car) => (
            <SwiperSlide key={car.id} className="h-auto">
              <div className="bg-default-100/70 dark:bg-white/3 rounded-md h-full">
                <Link href="/listings/entry-events" className="group block">
                  <div className="rounded-tl-md rounded-tr-md overflow-hidden relative">
                    <Image src={car.image} alt={car.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-tl-md rounded-tr-md" />

                    <div className="absolute top-0 start-0 z-10 flex flex-col gap-1 pt-2 ps-2 mt-2 ms-2">
                      {car.verified && (
                        <div className="bg-info text-white text-xs inline-flex items-center font-medium px-2 py-0.5 rounded">
                          Verified
                          <Icon icon="lucide:shield" className="ms-1 text-xs" />
                        </div>
                      )}

                      <div>
                        <span className="bg-warning inline-flex text-white text-xs px-2 py-0.5 rounded">{car.condition}</span>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="pb-4 pt-6 px-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs text-secondary me-4">{car.date}</div>

                    <div className="flex gap-2">
                      {[
                        { icon: 'lucide:heart', label: 'Wishlist' },
                        { icon: 'lucide:bell', label: 'Notify' },
                        { icon: 'lucide:repeat', label: 'Compare' },
                      ].map((action) => (
                        <div key={action.label} className="hs-tooltip [--placement:top] inline-block">
                          <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-8 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
                            <Icon icon={action.icon} className="size-3.5 text-body-color" />

                            <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md" role="tooltip">
                              {action.label}
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="mb-2 text-default-900 font-semibold">
                    <Link href="/listings/entry-events" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300 me-1">
                      {car.title}
                    </Link>

                    <span className="text-xs font-normal text-secondary">({car.year})</span>
                  </h3>

                  <div className="text-default-900 font-semibold">{car.price}</div>
                </div>

                <div className="pb-6 px-6">
                  <div className="pt-4 border-t border-border">
                    <div className="grid grid-cols-2 gap-2">
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
            </SwiperSlide>
          ))}

          <div className="swiper-pagination static mt-3 lg:mt-4" />
        </Swiper>
      </div>
    </section>
  )
}

export default Blog
