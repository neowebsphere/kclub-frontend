'use client'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

import real03 from '@/assets/img/listings/real-estate/03.jpg'
import real05 from '@/assets/img/listings/real-estate/05.jpg'
import real06 from '@/assets/img/listings/real-estate/06.jpg'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type FavoriteProperty = {
  id: number
  images: StaticImageData[]
  type: 'For rent' | 'For sale'
  price: string
  address: string
  area: string
  beds: number
  baths: number
  parking: number
  badges?: string[]
}

const favoriteProperties: FavoriteProperty[] = [
  {
    id: 1,
    images: [real06, real06, real06],
    type: 'For sale',
    price: '$375,000',
    address: '929 Hart St, Brooklyn, NY 11237',
    area: '108 sq.m',
    beds: 3,
    baths: 2,
    parking: 1,
    badges: ['New'],
  },
  {
    id: 2,
    images: [real03, real03, real03],
    type: 'For rent',
    price: '$1,890',
    address: '3811 Ditmars Blvd Astoria, NY 11105',
    area: '75 sq.m',
    beds: 2,
    baths: 1,
    parking: 1,
    badges: ['Featured', 'New'],
  },
  {
    id: 3,
    images: [real05, real05, real05],
    type: 'For rent',
    price: '$1,250',
    address: '444 Park Ave, Brooklyn, NY 11205',
    area: '54 sq.m',
    beds: 1,
    baths: 1,
    parking: 0,
    badges: ['Verified'],
  },
]

const Favorite = () => {
  return (
    <>
      <div className="pb-12 lg:mb-4">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 className="text-2xl font-semibold text-default-900 dark:text-white">Favorites</h2>
          <Link href="/account/favorites" className="flex items-center text-nowrap font-semibold hover:underline">
            View all
            <Icon icon="lucide:chevron-right" className="text-lg" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {favoriteProperties.map((property) => (
            <div key={property.id} className="group">
              <div className="h-full rounded-lg border border-default-200 bg-body-bg transition">
                <div className="relative overflow-hidden bg-default-100 dark:bg-white/5">
                  <Swiper
                    className="z-20"
                    pagination={{
                      el: '.swiper-pagination',
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
                    modules={[Pagination, Navigation]}
                  >
                    {property.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="block relative pb-[calc(248/362*100%)]">
                          <Image src={image} alt={property.address} className="absolute inset-0 size-full rounded-tl-md rounded-tr-md object-cover" />

                          <span className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/10" />
                        </div>
                      </SwiperSlide>
                    ))}

                    <div className="absolute start-0 top-0 z-10 mt-2 ms-2 flex flex-col gap-2 ps-2 pt-2">
                      {property.badges?.map((badge) => (
                        <div key={badge} className="inline-flex w-auto rounded bg-primary px-2 py-1 text-xs text-white">
                          {badge}
                        </div>
                      ))}
                    </div>

                    <div className="absolute end-0 top-0 z-10 mt-2 me-2 pe-2 pt-2">
                      <button type="button" className="flex size-8 items-center justify-center rounded-full bg-white text-default-700 shadow">
                        <Icon icon="tabler:heart-filled" className="text-primary" />
                      </button>
                    </div>

                    <div className="absolute start-0 top-1/2 z-10 ms-3 hidden -translate-y-1/2 opacity-0 group-hover:opacity-100 lg:block">
                      <button type="button" className="btn-prev size-8 bg-white rounded-full shadow flex items-center justify-center">
                        <Icon icon="lucide:chevron-left" className="text-lg" />
                      </button>
                    </div>

                    <div className="absolute end-0 top-1/2 z-10 me-3 hidden -translate-y-1/2 opacity-0 group-hover:opacity-100 lg:block">
                      <button type="button" className="btn-next size-8 bg-white rounded-full shadow flex items-center justify-center">
                        <Icon icon="lucide:chevron-right" className="text-lg" />
                      </button>
                    </div>

                    <div className="swiper-pagination bottom-0 mb-2" />
                  </Swiper>
                </div>

                <div className="p-4">
                  <div className="mb-2 pb-1">
                    <span className="rounded bg-default-100 px-2 py-1 text-xs font-medium text-default-800 dark:bg-white/5 dark:text-white">{property.type}</span>
                  </div>

                  <div className="mb-2 text-xl font-semibold text-default-900 dark:text-white">{property.price}</div>

                  <h3 className="mb-2 text-sm font-normal text-default-700 dark:text-default-300">
                    <Link href="#!" className="text-body-color">
                      {property.address}
                    </Link>
                  </h3>

                  <div className="text-sm font-semibold text-default-900 dark:text-white">{property.area}</div>
                </div>

                <div className="flex gap-2.5 px-3 pb-3 text-sm text-default-700 dark:text-default-300">
                  <div className="flex items-center gap-1">
                    {property.beds}

                    <Icon icon="lucide:bed-single" className="size-5 text-default-500" />
                  </div>

                  <div className="flex items-center gap-1">
                    {property.baths}

                    <Icon icon="lucide:shower-head" className="size-5 text-default-500" />
                  </div>

                  <div className="flex items-center gap-1">
                    {property.parking}

                    <Icon icon="lucide:car" className="size-5 text-default-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Favorite
