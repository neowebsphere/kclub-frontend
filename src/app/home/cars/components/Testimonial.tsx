'use client'
import grid02 from '@/assets/img/listings/cars/grid/02.jpg'
import grid03 from '@/assets/img/listings/cars/grid/03.jpg'
import grid05 from '@/assets/img/listings/cars/grid/05.jpg'
import grid07 from '@/assets/img/listings/cars/grid/07.jpg'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type CarBadge = {
  text: string
  color: 'info' | 'primary' | 'warning'
  icon?: string
}

type CarData = {
  id: number
  image: StaticImageData
  badges: CarBadge[]
  date: string
  title: string
  year: string
  price: string
  location: string
  mileage: string
  fuel: string
  transmission: string
}

const cars: CarData[] = [
  {
    id: 1,
    image: grid03,
    badges: [
      { text: 'Verified', color: 'info', icon: 'lucide:shield' },
      { text: 'New', color: 'primary' },
    ],
    date: '30/09/2024',
    title: 'Ford Truck Lifted',
    year: '2024',
    price: '$79,000',
    location: 'Boston',
    mileage: '0K mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    id: 2,
    image: grid05,
    badges: [{ text: 'Used', color: 'warning' }],
    date: '15/07/2024',
    title: 'Mercedes-Benz Coupe',
    year: '2021',
    price: '$115,400',
    location: 'New York',
    mileage: '15K mi',
    fuel: 'Gasoline',
    transmission: 'Manual',
  },
  {
    id: 3,
    image: grid02,
    badges: [
      { text: 'Verified', color: 'info', icon: 'lucide:shield' },
      { text: 'Used', color: 'warning' },
    ],
    date: '16/08/2024',
    title: 'Porsche 911 Turbo S',
    year: '2017',
    price: '$85,000',
    location: 'Chicago',
    mileage: '32K mi',
    fuel: 'Gasoline',
    transmission: 'Manual',
  },
  {
    id: 4,
    image: grid07,
    badges: [
      { text: 'Verified', color: 'info', icon: 'lucide:shield' },
      { text: 'New', color: 'primary' },
    ],
    date: '19/10/2024',
    title: 'Tesla Model 3',
    year: '2024',
    price: '$36,200',
    location: 'Los Angeles',
    mileage: 'OK mi',
    fuel: 'Electric',
    transmission: 'Automatic',
  },
]

const Testimonial = () => {
  return (
    <>
      <section className="lg:py-14 pt-2 pb-12">
        <div className="container">
          <div className="flex justify-between mb-6 md:mb-8 flex-wrap gap-4">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Latest cars</h2>
            <ul className="inline-flex gap-2 overflow-x-auto">
              <li>
                <Link href="" className="border border-dark bg-default-100 inline-flex rounded-full dark:border-white text-default-900 py-2.5 px-5 text-sm font-medium">
                  All
                </Link>
              </li>
              <li>
                <Link href="" className="border border-default-300 inline-flex dark:border-white/20 transition-all duration-300 hover:border-dark rounded-full hover:dark:border-white text-default-900 py-2.5 px-5 text-sm font-medium">
                  New cars
                </Link>
              </li>
              <li>
                <Link href="" className="border border-default-300 inline-flex dark:border-white/20 transition-all duration-300 hover:border-dark rounded-full hover:dark:border-white text-default-900 py-2.5 px-5 text-sm font-medium">
                  Used cars
                </Link>
              </li>
            </ul>
          </div>
          <Swiper
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
            modules={[Pagination]}
            wrapperClass="lg:mb-0 mb-12"
          >
            {cars.map((car, idx) => (
              <SwiperSlide key={idx} className="h-auto group">
                <Link href="/listings/entry-cars" className="group"></Link>
                <div className="border border-border rounded-md">
                  <Link href="/listings/entry-cars" className="group">
                    <div className="rounded-tl-md rounded-tr-md w-full h-full overflow-hidden relative">
                      <Image src={car.image} alt={car.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-tl-md rounded-tr-md" />
                      <div className="absolute top-0 start-0 z-10 flex flex-col gap-1 pt-2 ps-2 mt-2 ms-2">
                        {car.badges.map((badge, index) => (
                          <React.Fragment key={index}>
                            {badge.icon && (
                              <div className={`bg-${badge.color} text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center`}>
                                {badge.text}
                                <Icon icon={badge.icon} className="ms-1" />
                              </div>
                            )}
                            {idx === car.badges.length - 1 && (
                              <div>
                                <p className={clsx('inline-flex w-auto text-white text-xs px-2 py-0.5 rounded', badge.color && `bg-${badge.color}`)}>{badge.text}</p>
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </Link>
                  <div className="pb-4 pt-6 px-6">
                    <Link href="/listings/entry-cars" className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-secondary me-4">{car.date}</div>
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
            <div className="swiper-pagination static mt-3 mt-lg-4" />
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Testimonial
