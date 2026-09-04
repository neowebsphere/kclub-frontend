'use client'
import real01 from '@/assets/img/listings/real-estate/01.jpg'
import real03 from '@/assets/img/listings/real-estate/03.jpg'
import real04 from '@/assets/img/listings/real-estate/04.jpg'
import real05 from '@/assets/img/listings/real-estate/05.jpg'
import real06 from '@/assets/img/listings/real-estate/06.jpg'
import { Icon } from '@iconify/react'
import { Heart } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Property = {
  id: number
  type: 'sale' | 'rent'
  title: string
  price: string
  area: string
  beds: number
  baths: number
  parking: number
  featured?: boolean
  verified?: boolean
  isNew?: boolean
  images: StaticImageData[]
}

const favoriteProperties: Property[] = [
  {
    id: 1,
    type: 'sale',
    title: '929 Hart St, Brooklyn, NY 11237',
    price: '$375,000',
    area: '108 sq.m',
    beds: 3,
    baths: 2,
    parking: 1,
    isNew: true,
    images: [real06, real06, real06],
  },
  {
    id: 2,
    type: 'rent',
    title: '3811 Ditmars Blvd Astoria, NY 11105',
    price: '$1,890',
    area: '75 sq.m',
    beds: 2,
    baths: 1,
    parking: 1,
    featured: true,
    isNew: true,
    images: [real03, real03, real03],
  },
  {
    id: 3,
    type: 'rent',
    title: '444 Park Ave, Brooklyn, NY 11205',
    price: '$1,250',
    area: '54 sq.m',
    beds: 1,
    baths: 1,
    parking: 0,
    verified: true,
    images: [real05, real05, real05],
  },
  {
    id: 4,
    type: 'rent',
    title: '40 S 9th St, Brooklyn, NY 11249',
    price: '$1,620',
    area: '65 sq.m',
    beds: 2,
    baths: 1,
    parking: 1,
    images: [real01, real01, real01],
  },
  {
    id: 5,
    type: 'rent',
    title: '67-04 Myrtle Ave Glendale, NY 11385',
    price: '$1,170',
    area: '42 sq.m',
    beds: 1,
    baths: 1,
    parking: 0,
    images: [real04, real04, real04],
  },
]

const FavoritesGrid = () => {
  return (
    <>
      <div className="lg:col-span-9 col-span-1">
        <div className="mb-4 pb-4 flex items-center justify-between flex-wrap gap-4">
          <h1 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Favorites</h1>

          <div className="flex gap-6">
            <button type="button" className="text-default-800 py-2 flex items-center text-sm">
              <Icon icon="lucide:share-2" className="text-base me-2" />

              <span className="hover:underline flex font-medium">
                Share
                <span className="ms-1 md:block hidden">favorites</span>
              </span>
            </button>

            <button type="button" className="text-primary py-2 flex items-center text-sm">
              <Icon icon="lucide:trash-2" className="text-base me-2" />

              <span className="hover:underline flex font-semibold">Remove all</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {favoriteProperties.map((property) => (
            <div key={property.id} className="group">
              <div className="bg-body-bg rounded-lg border border-default-200 h-full transition">
                <div className="relative bg-default-100 dark:bg-white/3 overflow-hidden">
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
                          <Image src={image} alt={property.title} fill className="absolute inset-0 size-full object-cover rounded-tr-md rounded-tl-md" />

                          <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                        </div>
                      </SwiperSlide>
                    ))}

                    <div className="absolute top-0 start-0 z-10 flex flex-col gap-2 pt-2 ps-2 mt-2 ms-2">
                      <div>
                        {property.featured && <div className="bg-info text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">Features</div>}
                        {property.isNew && (
                          <div>
                            <p className="bg-primary inline-flex w-auto text-white text-xs px-2 py-0.5 rounded">New</p>
                          </div>
                        )}
                        {property.verified && (
                          <div className="bg-info text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">
                            Verified
                            <Icon icon="lucide:shield" className="ms-1" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="absolute top-0 end-0 z-10 transition pt-2 pe-2 mt-2 me-2">
                      <button type="button" className="size-8 bg-white rounded-full shadow flex items-center justify-center">
                        <Heart className="fill-primary text-primary size-3.5" />
                      </button>
                    </div>

                    <div className="absolute top-1/2 start-0 -translate-y-1/2 z-10 hidden lg:block opacity-0 group-hover:opacity-100 ms-3">
                      <button type="button" className="btn-prev size-8 bg-white text-dark rounded-full shadow flex items-center justify-center">
                        <Icon icon="lucide:chevron-left" className="text-lg" />
                      </button>
                    </div>

                    <div className="absolute top-1/2 end-0 -translate-y-1/2 z-10 hidden lg:block opacity-0 group-hover:opacity-100 me-3">
                      <button type="button" className="btn-next size-8 text-dark bg-white rounded-full shadow flex items-center justify-center">
                        <Icon icon="lucide:chevron-right" className="text-lg" />
                      </button>
                    </div>
                    <div className="swiper-pagination bottom-0 mb-2" />
                  </Swiper>
                </div>

                <div className="p-4">
                  <div className="pb-1 mb-2">
                    <span className="bg-default-100 dark:bg-white/3 font-medium text-default-800 text-xs px-2 py-1 rounded">{property.type === 'sale' ? 'For sale' : 'For rent'}</span>
                  </div>

                  <div className="text-xl text-default-900 font-semibold mb-2">{property.price}</div>

                  <h3 className="text-sm font-normal text-default-700 mb-2">
                    <Link href="" className="text-body-color">
                      {property.title}
                    </Link>
                  </h3>

                  <div className="text-sm text-default-900 font-semibold">{property.area}</div>
                </div>

                <div className="flex gap-2.5 px-3 pb-3 text-sm text-default-700">
                  <div className="flex items-center gap-1">
                    {property.beds}
                    <Icon icon="lucide:bed-single" className="text-default-500 size-5" />
                  </div>

                  <div className="flex items-center gap-1">
                    {property.baths}
                    <Icon icon="lucide:shower-head" className="text-default-500 size-5" />
                  </div>

                  <div className="flex items-center gap-1">
                    {property.parking}
                    <Icon icon="lucide:car" className="text-default-500 size-5" />
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

export default FavoritesGrid
