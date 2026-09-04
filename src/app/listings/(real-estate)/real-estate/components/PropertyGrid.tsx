'use client'
import image01 from '@/assets/img/listings/real-estate/01.jpg'
import image02 from '@/assets/img/listings/real-estate/02.jpg'
import image03 from '@/assets/img/listings/real-estate/03.jpg'
import image04 from '@/assets/img/listings/real-estate/04.jpg'
import image05 from '@/assets/img/listings/real-estate/05.jpg'
import image06 from '@/assets/img/listings/real-estate/06.jpg'
import image07 from '@/assets/img/listings/real-estate/07.jpg'
import image08 from '@/assets/img/listings/real-estate/08.jpg'
import image09 from '@/assets/img/listings/real-estate/09.jpg'
import image10 from '@/assets/img/listings/real-estate/10.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type PropertyType = {
  id: number
  price: string
  address: string
  area: string
  beds: number
  baths: number
  parking: number
  verified?: boolean
  isNew?: boolean
  images: StaticImageData[]
}

const properties: PropertyType[] = [
  {
    id: 1,
    price: '$1,620',
    address: '40 S 9th St, Brooklyn, NY 11249',
    area: '65 sq.m',
    beds: 2,
    baths: 1,
    parking: 1,
    verified: true,
    isNew: true,
    images: [image01, image01, image01],
  },
  {
    id: 2,
    price: '$1,320',
    address: '517 82nd St, Brooklyn, NY 11209',
    area: '45 sq.m',
    beds: 1,
    baths: 1,
    parking: 0,
    isNew: true,
    images: [image02, image02, image02],
  },
  {
    id: 3,
    price: '$1,890',
    address: '3811 Ditmars Blvd Astoria, NY 11105',
    area: '75 sq.m',
    beds: 2,
    baths: 1,
    parking: 1,
    verified: true,
    isNew: true,
    images: [image03, image03, image03],
  },
  {
    id: 4,
    price: '$1,170',
    address: '67-04 Myrtle Ave Glendale, NY 11385',
    area: '42 sq.m',
    beds: 1,
    baths: 1,
    parking: 0,
    images: [image04, image04, image04],
  },
  {
    id: 5,
    price: '$1,250',
    address: '444 Park Ave, Brooklyn, NY 11205',
    area: '54 sq.m',
    beds: 1,
    baths: 1,
    parking: 0,
    verified: true,
    images: [image05, image05, image05],
  },
  {
    id: 6,
    price: '$2,750',
    address: '929 Hart St, Brooklyn, NY 11237',
    area: '108 sq.m',
    beds: 3,
    baths: 2,
    parking: 1,
    isNew: true,
    images: [image06, image06, image06],
  },
  {
    id: 7,
    price: '$1,490',
    address: '123 Bedford Avenue, Brooklyn, NY 11211',
    area: '80 sq.m',
    beds: 2,
    baths: 1,
    parking: 1,
    images: [image07, image07, image07],
  },
  {
    id: 8,
    price: '$1,560',
    address: '124 Maple Street, Brooklyn, NY 11211',
    area: '50 sq.m',
    beds: 1,
    baths: 1,
    parking: 1,
    verified: true,
    isNew: true,
    images: [image08, image08, image08],
  },
  {
    id: 9,
    price: '$3,860',
    address: '212 Harrison Street, Brooklyn, NY 11240',
    area: '130 sq.m',
    beds: 3,
    baths: 2,
    parking: 2,
    images: [image09, image09, image09],
  },
  {
    id: 10,
    price: '$2,950',
    address: '456 Court Street, Brooklyn, NY 11231',
    area: '96 sq.m',
    beds: 3,
    baths: 1,
    parking: 1,
    images: [image10, image10, image10],
  },
]

const PropertyGrid = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      {properties.map((property) => (
        <div key={property.id} className="group" data-map-bind-to-marker={property.id}>
          <div className="bg-body-bg rounded-lg border border-default-200 h-full transition group-hover:border-default-900">
            <div className="relative overflow-hidden bg-default-100 dark:bg-white/3">
              <Swiper
                className="z-20"
                modules={[Pagination, Navigation]}
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
              >
                {property.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Link href="/listings/single-entry-real-estate" className="block relative pb-[calc(248/362*100%)]">
                      <Image src={image} alt={property.address} className="absolute inset-0 size-full object-cover rounded-tr-md rounded-tl-md" />

                      <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                    </Link>
                  </SwiperSlide>
                ))}

                <div className="absolute top-0 start-0 z-10 flex flex-col gap-2 pt-2 ps-2 mt-2 ms-2">
                  {property.verified && (
                    <div className="bg-info text-white text-xs inline-flex item-center font-medium px-2 py-1 rounded items-center">
                      Verified
                      <Icon icon="lucide:shield" className="ms-1" />
                    </div>
                  )}

                  {property.isNew && (
                    <div>
                      <p className="bg-primary inline-flex w-auto text-white text-xs px-2 py-1 rounded">New</p>
                    </div>
                  )}
                </div>

                <div className="absolute top-0 end-0 z-10 opacity-0 transition group-hover:opacity-100 pt-2 pe-2 mt-2 me-2">
                  <button type="button" className="size-8 rounded-full bg-white text-dark shadow flex items-center justify-center">
                    <Icon icon="lucide:heart" />
                  </button>
                </div>

                <div className="absolute top-1/2 start-0 -translate-y-1/2 z-10 hidden lg:block opacity-0 transition group-hover:opacity-100 ms-3">
                  <button type="button" className="btn-prev size-8 bg-white rounded-full shadow flex items-center justify-center">
                    <Icon icon="lucide:chevron-left" className="text-lg" />
                  </button>
                </div>

                <div className="absolute top-1/2 end-0 -translate-y-1/2 z-10 hidden lg:block opacity-0 transition group-hover:opacity-100 me-3">
                  <button type="button" className="btn-next size-8 bg-white rounded-full shadow flex items-center justify-center">
                    <Icon icon="lucide:chevron-right" className="text-lg" />
                  </button>
                </div>

                <div className="swiper-pagination bottom-0 mb-2" />
              </Swiper>
            </div>

            <div className="p-4">
              <div className="text-xl text-default-900 font-semibold mb-2">{property.price}</div>

              <h3 className="text-sm font-normal text-default-700 mb-2">
                <Link href="/listings/single-entry-real-estate" className="text-body-color">
                  {property.address}
                </Link>
              </h3>

              <div className="text-sm font-semibold text-default-900">{property.area}</div>
            </div>

            <div className="flex gap-2.5 px-3 pb-3 text-sm text-default-700">
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
  )
}

export default PropertyGrid
