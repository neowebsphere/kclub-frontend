'use client'
import subscription from '@/assets/img/blog/v1/single/subscription.jpg'
import real01 from '@/assets/img/listings/real-estate/01.jpg'
import real04 from '@/assets/img/listings/real-estate/04.jpg'
import real06 from '@/assets/img/listings/real-estate/06.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type RelatedPost = {
  title: string
  href: string
}

type NewsletterOption = {
  id: string
  label: string
}

type Property = {
  id: number
  images: StaticImageData[]
  isNew?: boolean
  verified?: boolean
  liked?: boolean
  type: string
  price: string
  address: string
  area: string
  beds: number
  baths: number
  parking: number
  href: string
}

const relatedPosts: RelatedPost[] = [
  { title: 'Top tips for first-time home buyers', href: '' },
  { title: "Maximizing your home's value with effective selling strategies", href: '' },
  { title: '2024 real estate market trends every buyer and seller should know', href: '' },
  { title: 'Home improvement projects that increase property value', href: '' },
]

const newsletterOptions: NewsletterOption[] = [
  { id: 'daily', label: 'Daily summary (weekdays)' },
  { id: 'weekly', label: 'Weekly summary (Mondays)' },
  { id: 'alerts', label: 'Breaking news alerts (as needed)' },
]

const properties: Property[] = [
  {
    id: 1,
    images: [real06, real06, real06],
    isNew: true,
    liked: true,
    type: 'For sale',
    price: '$375,000',
    address: '929 Hart St, Brooklyn, NY 11237',
    area: '108 sq.m',
    beds: 3,
    baths: 2,
    parking: 1,
    href: '',
  },
  {
    id: 2,
    images: [real01, real01, real01],
    isNew: true,
    verified: true,
    type: 'For rent',
    price: '$1,620',
    address: '40 S 9th St, Brooklyn, NY 11249',
    area: '65 sq.m',
    beds: 2,
    baths: 1,
    parking: 1,
    href: '',
  },
  {
    id: 3,
    images: [real04, real04, real04],
    type: 'For rent',
    price: '$1,170',
    address: '67-04 Myrtle Ave Glendale, NY 11385',
    area: '42 sq.m',
    beds: 1,
    baths: 1,
    parking: 0,
    href: '',
  },
]

const SideBar = () => {
  return (
    <div className="lg:col-span-4">
      <div className="lg:ms-auto lg:w-75 w-full">
        <div className="lg:sticky lg:top-25">
          <div
            id="blogSidebar"
            className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-auto hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform fixed top-0 end-0 bottom-0 z-60 bg-body-bg lg:w-auto w-87"
            role="dialog"
            tabIndex={-1}
            aria-label="Sidebar"
          >
            <div className="flex flex-col lg:h-full h-screen lg:sticky lg:top-0">
              <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2 shrink-0">
                <h3 className="text-xl text-default-900 font-semibold lg:hidden block">Sidebar</h3>

                <div className="lg:hidden -me-2">
                  <button type="button" data-hs-overlay="#blogSidebar">
                    <Icon icon="lucide:x" className="size-5" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
              </header>

              <nav className="h-full overflow-y-auto flex-1" data-simplebar>
                <div className="w-full flex flex-col pt-2 px-6 lg:px-0 pb-4 lg:pb-0 lg:pt-6">
                  <h3 className="text-xl text-default-900 font-semibold mb-2">Related posts</h3>

                  {relatedPosts.map((post, index) => (
                    <Link key={index} href={post.href} className="py-4 inline-flex border-b border-border text-sm hover:underline text-default-700 hover:text-default-900 font-semibold">
                      {post.title}
                    </Link>
                  ))}

                  <div className="mt-6">
                    <div className="bg-default-100 dark:bg-white/3 rounded-md p-6">
                      <Image src={subscription} alt="Subscription" className="mb-4 rounded-md" />

                      <h4 className="mb-4 text-default-900 font-semibold">Subscribe to a free newsletter</h4>

                      <ul className="pb-1 mb-4 flex flex-col gap-2">
                        {newsletterOptions.map((option) => (
                          <li key={option.id}>
                            <label htmlFor={option.id} className="flex items-center text-default-700 text-sm cursor-pointer">
                              <input type="checkbox" id={option.id} className="w-4 h-4 bg-transparent border-default-300 dark:border-white/20 rounded me-2" />

                              {option.label}
                            </label>
                          </li>
                        ))}
                      </ul>

                      <button type="button" className="py-2.5 px-5 bg-primary hover:bg-primary-hover rounded-md text-white text-sm font-medium w-full transition-all">
                        Subscribe
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="my-4 pt-6 text-xl text-default-900 font-semibold">Top offers</h3>

                    <div className="flex flex-col gap-4">
                      {properties.map((property) => (
                        <div key={property.id} className="group">
                          <div className="bg-body-bg rounded-lg border border-default-200 h-full transition overflow-hidden">
                            <div className="relative bg-default-100 dark:bg-white/3 overflow-hidden">
                              <Swiper
                                className="z-20"
                                pagination={{
                                  el: '.swiper-pagination',
                                  clickable: true,
                                }}
                                navigation={{ prevEl: '.btn-prev', nextEl: '.btn-next' }}
                                breakpoints={{
                                  991: {
                                    allowTouchMove: false,
                                  },
                                }}
                                modules={[Pagination, Navigation]}
                              >
                                {property.images.map((image, idx) => (
                                  <SwiperSlide key={idx}>
                                    <Link href={property.href} className="block relative pb-[calc(248/362*100%)]">
                                      <Image src={image} alt={property.address} className="absolute inset-0 size-full object-cover rounded-tr-md rounded-tl-md" />
                                      <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                                    </Link>
                                  </SwiperSlide>
                                ))}

                                <div className="absolute top-0 start-0 z-10 flex flex-col gap-2 pt-2 ps-2 mt-2 ms-2">
                                  {property.verified && (
                                    <div className="bg-info text-white text-xs inline-flex items-center font-medium px-2 py-1 rounded">
                                      Verified
                                      <Icon icon="lucide:shield" className="ms-1" />
                                    </div>
                                  )}

                                  {property.isNew && <p className="bg-primary inline-flex w-auto text-white text-xs px-2 py-1 rounded">New</p>}
                                </div>

                                <div className="absolute top-0 end-0 z-10 transition pt-2 pe-2 mt-2 me-2 opacity-0 group-hover:opacity-100">
                                  <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center">
                                    {property.liked ? <Icon icon="tabler:heart-filled" className="text-primary" /> : <Icon icon="lucide:heart" />}
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
                              <div className="pb-1 mb-2">
                                <span className="bg-default-100 dark:bg-white/3 font-medium text-default-800 text-xs px-2 py-1 rounded">{property.type}</span>
                              </div>

                              <div className="text-xl text-default-900 font-semibold mb-2">{property.price}</div>

                              <h3 className="text-sm font-normal text-default-700 mb-2">
                                <Link href={property.href} className="text-body-color">
                                  {property.address}
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
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
