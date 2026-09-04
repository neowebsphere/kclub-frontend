'use client'
import real01 from '@/assets/img/listings/real-estate/01.jpg'
import real02 from '@/assets/img/listings/real-estate/02.jpg'
import real03 from '@/assets/img/listings/real-estate/03.jpg'
import real04 from '@/assets/img/listings/real-estate/04.jpg'
import real05 from '@/assets/img/listings/real-estate/05.jpg'
import real06 from '@/assets/img/listings/real-estate/06.jpg'
import real07 from '@/assets/img/listings/real-estate/07.jpg'
import real09 from '@/assets/img/listings/real-estate/09.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type FilterType = {
  id: string
  label: string
  count: number
  checked?: boolean
}

type Property = {
  id: number
  title: string
  price: string
  size: string
  bedrooms: number
  bathrooms: number
  parking: number
  type: 'For Rent' | 'For Sale'
  featured?: boolean
  verified?: boolean
  isNew?: boolean
  images: StaticImageData[]
}

const filters: FilterType[] = [
  { id: 'rent', label: 'For Rent', count: 8, checked: true },
  { id: 'sale', label: 'For Sale', count: 13 },
]

const properties: Property[] = [
  {
    id: 1,
    title: '929 Hart St, Brooklyn, NY 11237',
    price: '$2,750',
    size: '108 sq.m',
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    type: 'For Rent',
    isNew: true,
    images: [real06, real06, real06],
  },
  {
    id: 2,
    title: '3811 Ditmars Blvd Astoria, NY 11105',
    price: '$1,890',
    size: '75 sq.m',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    type: 'For Rent',
    featured: true,
    isNew: true,
    images: [real03, real03, real03],
  },
  {
    id: 3,
    title: '444 Park Ave, Brooklyn, NY 11205',
    price: '$1,250',
    size: '54 sq.m',
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    type: 'For Rent',
    verified: true,
    images: [real05, real05, real05],
  },
  {
    id: 4,
    title: '40 S 9th St, Brooklyn, NY 11249',
    price: '$1,620',
    size: '65 sq.m',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    type: 'For Rent',
    images: [real01, real01, real01],
  },
  {
    id: 5,
    title: '67-04 Myrtle Ave Glendale, NY 11385',
    price: '$1,170',
    size: '42 sq.m',
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    type: 'For Rent',
    images: [real04, real04, real04],
  },
  {
    id: 6,
    title: '517 82nd St, Brooklyn, NY 11209',
    price: '$1,320',
    size: '45 sq.m',
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    type: 'For Rent',
    images: [real02, real02, real02],
  },
  {
    id: 7,
    title: '123 Bedford Avenue, Brooklyn, NY 11211',
    price: '$1,490',
    size: '80 sq.m',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    type: 'For Rent',
    images: [real07, real07, real07],
  },
  {
    id: 8,
    title: '212 Harrison Street, Brooklyn, NY 11240',
    price: '$3,860',
    size: '130 sq.m',
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    type: 'For Sale',
    images: [real09, real09, real09],
  },
]

const Blog = () => {
  return (
    <section className="lg:mt-6 md:mt-4 mt-2 pt-12">
      <div className="container">
        <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold lg:mb-8 mb-6 text-default-900">Properties</h2>

        <div className="mb-4 overflow-x-auto">
          <div className="flex flex-nowrap gap-2 pb-2 mb-1">
            {filters.map((filter) => (
              <div key={filter.id}>
                <input type="radio" id={filter.id} name="property-filter" className="peer hidden" defaultChecked={filter.checked} />

                <label
                  htmlFor={filter.id}
                  className="inline-flex cursor-pointer rounded-full border border-default-300 px-5 py-2 text-sm font-medium hover:border-default-900 hover:bg-default-100 peer-checked:border-default-900 peer-checked:bg-default-100 peer-checked:text-default-800 dark:hover:bg-white/3 peer-checked:dark:border-white peer-checked:dark:bg-white/3"
                >
                  {filter.label} ({filter.count})
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {properties.map((property) => (
            <div key={property.id} className="group">
              <div className="h-full rounded-md border border-border bg-body-bg transition dark:border-white/20">
                <div className="relative overflow-hidden rounded-t-md bg-default-100 dark:bg-white/3">
                  <Swiper
                    className="z-20"
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
                    modules={[Navigation, Pagination]}
                  >
                    {property.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <Link href="/listings/single-entry-real-estate" className="block">
                          <div className="relative pb-[calc(248/362*100%)]">
                            <Image src={image} alt={property.title} className="absolute inset-0 size-full object-cover" />
                            <span className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/10" />
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}

                    <div className="absolute start-0 top-0 z-10 mt-2 ms-2 flex flex-col gap-2 pt-2 ps-2">
                      {property.featured && <div className="inline-flex items-center rounded bg-info px-2 py-1 text-xs font-medium text-white">Featured</div>}

                      {property.verified && (
                        <div className="inline-flex items-center rounded bg-info px-2 py-1 text-xs font-medium text-white">
                          Verified
                          <Icon icon="lucide:shield" className="ms-1" />
                        </div>
                      )}
                      {property.isNew && (
                        <div>
                          <span className="inline-flex rounded bg-primary px-2 py-1 text-xs text-white">New</span>
                        </div>
                      )}
                    </div>

                    <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                      <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center">
                        <Icon icon="lucide:heart" />
                      </button>
                    </div>

                    <div className="absolute top-1/2 start-0 -translate-y-1/2 z-10 hidden lg:block opacity-0 group-hover:opacity-100 ms-3">
                      <button type="button" className="btn-prev size-8 bg-white rounded-full shadow flex items-center justify-center">
                        <Icon icon="lucide:chevron-left" className="text-lg" />
                      </button>
                    </div>

                    <div className="absolute top-1/2 end-0 -translate-y-1/2 z-10 hidden lg:block opacity-0 group-hover:opacity-100 me-3">
                      <button type="button" className="btn-next size-8 bg-white rounded-full shadow flex items-center justify-center">
                        <Icon icon="lucide:chevron-right" className="text-lg" />
                      </button>
                    </div>

                    <div className="swiper-pagination bottom-0 mb-2" />
                  </Swiper>
                </div>

                <div className="p-4">
                  <div className="mb-2 pb-1">
                    <span className="rounded bg-default-100 px-2 py-1 text-xs font-medium text-default-800 dark:bg-white/3">{property.type}</span>
                  </div>

                  <div className="mb-2 text-xl font-semibold text-default-900">{property.price}</div>

                  <h3 className="mb-2 text-sm font-normal text-default-700">
                    <Link href="/listings/single-entry-real-estate" className="text-body-color">
                      {property.title}
                    </Link>
                  </h3>

                  <div className="text-sm font-semibold text-default-900">{property.size}</div>
                </div>

                <div className="flex gap-2.5 px-3 pb-3 text-sm text-default-700">
                  <div className="flex items-center gap-1">
                    {property.bedrooms}
                    <Icon icon="lucide:bed-single" className="size-5 text-default-500" />
                  </div>

                  <div className="flex items-center gap-1">
                    {property.bathrooms}
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
    </section>
  )
}

export default Blog
