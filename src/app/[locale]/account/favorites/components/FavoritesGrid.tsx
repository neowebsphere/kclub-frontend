'use client'
import con01 from '@/assets/img/listings/partners/01.jpg'
import con02 from '@/assets/img/listings/partners/02.jpg'
import con03 from '@/assets/img/listings/partners/03.jpg'
import con04 from '@/assets/img/listings/partners/04.jpg'
import con05 from '@/assets/img/listings/partners/05.jpg'
import { Icon } from '@iconify/react'
import { Heart } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { Link } from '@/i18n/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Partner = {
  id: number
  category: string
  name: string
  rate: string
  rating: string
  projects: number
  years: number
  reviews: number
  featured?: boolean
  verified?: boolean
  isNew?: boolean
  images: StaticImageData[]
}

const favoritePartners: Partner[] = [
  {
    id: 1,
    category: 'Renovation',
    name: 'Hart Street Builders',
    rate: '$65/hr',
    rating: '4.9 (128 reviews)',
    projects: 48,
    years: 12,
    reviews: 128,
    isNew: true,
    images: [con05, con05, con05],
  },
  {
    id: 2,
    category: 'Plumbing',
    name: 'Ditmars Plumbing Co.',
    rate: '$50/hr',
    rating: '4.8 (94 reviews)',
    projects: 31,
    years: 8,
    reviews: 94,
    featured: true,
    isNew: true,
    images: [con02, con02, con02],
  },
  {
    id: 3,
    category: 'Electrical',
    name: 'Park Ave Electric',
    rate: '$70/hr',
    rating: '5.0 (61 reviews)',
    projects: 19,
    years: 6,
    reviews: 61,
    verified: true,
    images: [con04, con04, con04],
  },
  {
    id: 4,
    category: 'Roofing',
    name: 'South 9th Roofing',
    rate: '$58/hr',
    rating: '4.7 (73 reviews)',
    projects: 27,
    years: 9,
    reviews: 73,
    images: [con01, con01, con01],
  },
  {
    id: 5,
    category: 'Painting',
    name: 'Myrtle Ave Painters',
    rate: '$40/hr',
    rating: '4.6 (45 reviews)',
    projects: 12,
    years: 4,
    reviews: 45,
    images: [con03, con03, con03],
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
          {favoritePartners.map((partner) => (
            <div key={partner.id} className="group">
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
                    {partner.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="block relative pb-[calc(248/362*100%)]">
                          <Image src={image} alt={partner.name} fill className="absolute inset-0 size-full object-cover rounded-tr-md rounded-tl-md" />

                          <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                        </div>
                      </SwiperSlide>
                    ))}

                    <div className="absolute top-0 start-0 z-10 flex flex-col gap-2 pt-2 ps-2 mt-2 ms-2">
                      <div>
                        {partner.featured && <div className="bg-info text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">Features</div>}
                        {partner.isNew && (
                          <div>
                            <p className="bg-primary inline-flex w-auto text-white text-xs px-2 py-0.5 rounded">New</p>
                          </div>
                        )}
                        {partner.verified && (
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
                    <span className="bg-default-100 dark:bg-white/3 font-medium text-default-800 text-xs px-2 py-1 rounded">{partner.category}</span>
                  </div>

                  <div className="text-xl text-default-900 font-semibold mb-2">{partner.rate}</div>

                  <h3 className="text-sm font-normal text-default-700 mb-2">
                    <Link href="" className="text-body-color">
                      {partner.name}
                    </Link>
                  </h3>

                  <div className="text-sm text-default-900 font-semibold">{partner.rating}</div>
                </div>

                <div className="flex gap-2.5 px-3 pb-3 text-sm text-default-700">
                  <div className="flex items-center gap-1">
                    {partner.projects}
                    <Icon icon="lucide:hammer" className="text-default-500 size-5" />
                  </div>

                  <div className="flex items-center gap-1">
                    {partner.years}
                    <Icon icon="lucide:calendar-days" className="text-default-500 size-5" />
                  </div>

                  <div className="flex items-center gap-1">
                    {partner.reviews}
                    <Icon icon="lucide:message-square" className="text-default-500 size-5" />
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
