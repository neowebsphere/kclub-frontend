'use client'
import { Icon } from '@iconify/react'
import { CircleSmall, Leaf, Shield, Star, ThumbsUp } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import img01 from '@/assets/img/listings/contractors/01.jpg'
import img02 from '@/assets/img/listings/contractors/02.jpg'
import img03 from '@/assets/img/listings/contractors/03.jpg'
import img04 from '@/assets/img/listings/contractors/04.jpg'
import img05 from '@/assets/img/listings/contractors/05.jpg'

import ava01 from '@/assets/img/listings/contractors/ava01.jpg'
import ava02 from '@/assets/img/listings/contractors/ava02.jpg'
import ava03 from '@/assets/img/listings/contractors/ava03.jpg'
import ava04 from '@/assets/img/listings/contractors/ava04.jpg'
import ava05 from '@/assets/img/listings/contractors/ava05.jpg'

type Contractor = {
  id: number
  name: string
  avatar: StaticImageData
  images: StaticImageData[]
  services: string[]
  description: string
  rating: number
  reviews: number
  verified?: boolean
  top?: boolean
  eco?: boolean
  listingOfMonth?: boolean
}

const contractors: Contractor[] = [
  {
    id: 1,
    name: 'Samantha Donovan',
    avatar: ava01,
    images: [img01, img01, img01],
    services: ['Water softener installation', 'Water heater repair'],
    description: "I'm Samantha, your licensed, insured plumber in NYC. Specializing in servicing residential buildings, high rises, offices, and eateries.",
    rating: 4.7,
    reviews: 26,
    verified: true,
    eco: true,
    listingOfMonth: true,
  },
  {
    id: 2,
    name: 'Easy Handy Services',
    avatar: ava02,
    images: [img02, img02, img02],
    services: ['Appliance installation'],
    description: 'We offer reliable and professional appliance installation services, ensuring your home is equipped with expertly installed, ready-to-use appliances.',
    rating: 4.9,
    reviews: 38,
    top: true,
    listingOfMonth: true,
  },
  {
    id: 3,
    name: 'Alex Rodriguez',
    avatar: ava03,
    images: [img03, img03, img03],
    services: ['Carpentry', 'Custom kitchen cabinets'],
    description: 'With an unwavering commitment to excellence, I bring dreams to life with woodwork. Each stroke of skilled hands transforms timber into masterpieces.',
    rating: 5,
    reviews: 13,
    eco: true,
  },
  {
    id: 4,
    name: 'Roofing & Construction',
    avatar: ava04,
    images: [img04, img04, img04],
    services: ['Roof repair', 'Asphalt roofing', 'Flat foam roofing'],
    description: 'With extensive experience in roofing and construction, we focus on both residential and commercial roofing solutions.',
    rating: 4.6,
    reviews: 97,
    verified: true,
    eco: true,
  },
  {
    id: 5,
    name: 'Sam Jackson',
    avatar: ava05,
    images: [img05, img05, img05],
    services: ['Bathroom remodeling', 'Bathtub installation'],
    description: 'I provide all types of plumbing service work, repairs and installations. I offer full service remodeling.',
    rating: 5,
    reviews: 21,
    eco: true,
  },
]

const filters: string[] = ['New York', '50 mi', 'Heating & furnace', 'Roofing', '$$', 'Eco-friendly']

const ContractorListing: React.FC = () => {
  return (
    <div className="lg:col-span-9 col-span-1">
      <div className="flex justify-between gap-4 pb-2">
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex gap-2 pb-4">
            {filters.map((filter) => (
              <button key={filter} className="text-xs py-2 px-4 bg-default-100 font-semibold dark:bg-default-200 rounded-full inline-flex items-center transition-all duration-300 hover:bg-default-200 dark:hover:bg-default-300">
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="pb-4">
          <button className="text-xs underline hover:no-underline text-default-700 font-medium">Clear all</button>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 pb-4 mb-2">
        <div className="text-sm whitespace-nowrap">Showing {contractors.length} results</div>

        <div className="relative ms-auto w-32">
          <select className="w-full ps-3 pe-2 py-1.5 text-sm rounded border focus:outline-none bg-transparent">
            <option value="popular">Popular</option>
            <option value="newest">Newest</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {contractors.map((contractor) => (
          <div key={contractor.id} className="cursor-pointer h-auto group">
            <div className="rounded-lg border border-default-200 h-full transition grid md:grid-cols-3 grid-cols-1">
              <div className="col-span-1 relative overflow-hidden !h-full">
                <Swiper
                  className="z-20"
                  modules={[Pagination, Navigation]}
                  pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                  }}
                  navigation={{
                    prevEl: '.btn-prev',
                    nextEl: '.btn-next',
                  }}
                  breakpoints={{
                    991: {
                      allowTouchMove: false,
                    },
                  }}
                >
                  {contractor.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative block lg:h-67 md:h-87.5 h-55">
                        <Image src={image} alt={contractor.name} fill className="object-cover rounded-tl-md md:rounded-bl-md rounded-tr-md md:rounded-tr-none" />
                        <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="absolute top-0 start-0 z-10 flex flex-col gap-2 pt-2 ps-2 mt-2 ms-2">
                    {contractor.verified && (
                      <div className="bg-info text-white text-xs inline-flex items-center font-medium px-2 py-1 rounded">
                        Verified
                        <Icon icon="lucide:shield" className="ms-1" />
                      </div>
                    )}

                    {contractor.top && <div className="bg-primary text-white text-xs inline-flex items-center font-medium px-2 py-1 rounded">Top</div>}
                  </div>

                  <div className="absolute top-1/2 start-0 -translate-y-1/2 z-10 hidden lg:block opacity-0 group-hover:opacity-100 ms-3">
                    <button type="button" className={`btn-prev size-8 bg-white text-dark rounded-full shadow flex items-center justify-center`}>
                      <Icon icon="lucide:chevron-left" className="text-lg" />
                    </button>
                  </div>

                  <div className="absolute top-1/2 end-0 -translate-y-1/2 z-10 hidden lg:block opacity-0 group-hover:opacity-100 me-3">
                    <button type="button" className={`btn-next size-8 bg-white text-dark rounded-full shadow flex items-center justify-center`}>
                      <Icon icon="lucide:chevron-right" className="text-lg" />
                    </button>
                  </div>

                  <div className="swiper-pagination bottom-0 mb-2" />
                </Swiper>
              </div>

              <div className="md:col-span-2 col-span-1 md:p-6 p-4">
                <div className="grid lg:grid-cols-3 grid-cols-1">
                  <div className="lg:col-span-2 col-span-1">
                    <div className="lg:pe-6 lg:border-r border-border">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center pe-5 lg:pe-0 pb-2 mb-1">
                          <div className="me-4 w-12 h-12 relative">
                            <Image src={contractor.avatar} alt={contractor.name} fill className="bg-default-100 rounded-full object-cover" />
                          </div>

                          <h3 className="text-base font-semibold text-default-900">
                            <Link href="" className="group-hover:underline">
                              {contractor.name}
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
                        {contractor.services.map((service, index) => (
                          <React.Fragment key={service}>
                            <span className="font-medium text-default-900">{service}</span>

                            {index !== contractor.services.length - 1 && <CircleSmall className="size-1 fill-default-800 text-default-800" />}
                          </React.Fragment>
                        ))}
                      </div>

                      <p className="text-sm">{contractor.description}</p>
                    </div>
                  </div>

                  <div className="col-span-1 lg:ps-6 lg:pt-0 pt-4">
                    <ul className="flex flex-col gap-2 pb-2 lg:pb-6 mb-4">
                      <li className="flex items-center gap-1">
                        <Star className="fill-warning text-warning size-4" />
                        <span className="text-sm text-default-700">{contractor.rating}</span>
                        <span className="text-xs text-default-500">({contractor.reviews})</span>
                      </li>

                      {contractor.listingOfMonth && (
                        <li className="flex items-center gap-1 text-sm">
                          <ThumbsUp className="size-3.5" />
                          Listing of the month
                        </li>
                      )}

                      {contractor.eco && (
                        <li className="flex items-center gap-1 text-sm">
                          <Leaf className="size-3.5" />
                          Eco-friendly
                        </li>
                      )}

                      {contractor.verified && (
                        <li className="flex items-center gap-1 text-sm">
                          <Shield className="size-3.5" />
                          Verified hires
                        </li>
                      )}
                    </ul>

                    <button type="button" className="py-2.5 px-5 rounded-md bg-transparent text-default-900 border border-default-900 transition-all duration-300 hover:bg-default-900 hover:text-body-bg text-sm font-semibold inline-flex items-center justify-center w-full">
                      <Icon icon="lucide:mail" className="me-2" />
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="flex items-center gap-x-1 mt-8" aria-label="Pagination">
        {[1, 2, 3, 4, 5].map((page) => (
          <button key={page} className={`min-h-9.5 min-w-9.5 px-3 py-2 rounded-lg text-sm ${page === 1 ? 'bg-default-200' : 'hover:bg-default-100'}`}>
            {page}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default ContractorListing
