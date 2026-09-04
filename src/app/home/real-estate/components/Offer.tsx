'use client'
import image1 from '@/assets/img/listings/real-estate/01.jpg'
import image2 from '@/assets/img/listings/real-estate/02.jpg'
import image4 from '@/assets/img/listings/real-estate/04.jpg'
import image6 from '@/assets/img/listings/real-estate/06.jpg'
import image7 from '@/assets/img/listings/real-estate/07.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type offerType = {
  images: { src: StaticImageData }[]
  isVerified: boolean
  isNew: boolean
  type: string
  price: string
  address: string
  size: string
  beds: number
  baths: number
  garage: number
}

const offersData: offerType[] = [
  {
    images: [{ src: image1 }, { src: image1 }, { src: image1 }],
    isVerified: true,
    isNew: true,
    type: 'For rent',
    price: '$1,620',
    address: '40 S 9th St, Brooklyn, NY 11249',
    size: '65 sq.m',
    beds: 2,
    baths: 1,
    garage: 1,
  },
  {
    images: [{ src: image4 }, { src: image4 }, { src: image4 }],
    isVerified: false,
    isNew: true,
    type: 'For rent',
    price: '$1,170',
    address: '67-04 Myrtle Ave Glendale, NY 11385',
    size: '42 sq.m',
    beds: 1,
    baths: 1,
    garage: 0,
  },
  {
    images: [{ src: image6 }, { src: image6 }, { src: image6 }],
    isVerified: true,
    isNew: true,
    type: 'For sale',
    price: '$475,000',
    address: '929 Hart St, Brooklyn, NY 11237',
    size: '108 sq.m',
    beds: 3,
    baths: 2,
    garage: 1,
  },
  {
    images: [{ src: image7 }, { src: image7 }, { src: image7 }],
    isVerified: true,
    isNew: false,
    type: 'For rent',
    price: '$1,490',
    address: '123 Bedford Avenue, Brooklyn, NY 11211',
    size: '80 sq.m',
    beds: 2,
    baths: 1,
    garage: 1,
  },
  {
    images: [{ src: image2 }, { src: image2 }, { src: image2 }],
    isVerified: false,
    isNew: true,
    type: 'For rent',
    price: '$1,320',
    address: '517 82nd St, Brooklyn, NY 11209',
    size: '45 sq.m',
    beds: 1,
    baths: 1,
    garage: 0,
  },
]

const Offer = () => {
  return (
    <>
      <section className="lg:py-12 pt-6 pb-12">
        <div className="container">
          <div className="flex justify-between lg:mb-10 mb-8">
            <h2 className="lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold text-default-900">Top offers</h2>
            <div className="flex gap-2">
              <button type="button" className="size-10 flex items-center border border-default-300 rounded-full justify-center animate-slide-start bg-body rounded-circle me-1" id="offers-prev" aria-label="Prev">
                <Icon icon="lucide:chevron-left" className="animate-target size-4.5" />
              </button>
              <button type="button" className="size-10 flex items-center justify-center border border-default-300 rounded-full animate-slide-end bg-body rounded-circle" id="offers-next" aria-label="Next">
                <Icon icon="lucide:chevron-right" className="animate-target size-4.5" />
              </button>
            </div>
          </div>

          <Swiper
            className="pb-5"
            wrapperClass="mb-15"
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            navigation={{
              prevEl: '#offers-prev',
              nextEl: '#offers-next',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              460: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            modules={[Pagination, Navigation]}
          >
            {offersData.map((offer, index) => (
              <SwiperSlide className="h-auto group" key={index}>
                <article className="bg-body-bg rounded-lg border border-default-200 h-full transition">
                  <div className="relative bg-default-100 dark:bg-white/3 overflow-hidden rounded-t-lg">
                    <Swiper
                      className="z-20"
                      pagination={{ el: '.swiper-pagination' }}
                      navigation={{ prevEl: '.btn-prev', nextEl: '.btn-next' }}
                      breakpoints={{
                        991: { allowTouchMove: false },
                      }}
                      modules={[Pagination, Navigation]}
                    >
                      {offer.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div className="block relative pb-[calc(248/362*100%)]">
                            <Image src={image.src} alt="Image" className="absolute inset-0 size-full object-cover" />
                            <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                          </div>
                        </SwiperSlide>
                      ))}

                      <div className="absolute top-0 start-0 z-10 flex flex-col gap-2 pt-2 ps-2 mt-2 ms-2">
                        {offer.isVerified && (
                          <div className="bg-info text-white text-xs inline-flex item-center font-medium px-2 py-1 rounded items-center">
                            Verified <Icon icon="lucide:shield" className="ms-1" />
                          </div>
                        )}
                        <div>{offer.isNew && <p className="bg-primary inline-flex w-auto text-white text-xs px-2 py-1 rounded">New</p>}</div>
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
                    <div className="pb-1 mb-2">
                      <span className="bg-default-100 dark:bg-white/3 font-medium text-default-800 text-xs px-2 py-1 rounded">{offer.type}</span>
                    </div>
                    <div className="text-xl text-default-900 font-semibold mb-2">{offer.price}</div>
                    <h3 className="text-sm font-normal text-default-700 mb-2">
                      <Link href="/listings/single-entry-real-estate" className="text-body-color">
                        {offer.address}
                      </Link>
                    </h3>
                    <div className="text-sm text-default-900 font-semibold">{offer.size}</div>
                  </div>
                  <div className="flex gap-2.5 px-3 pb-3 text-sm text-default-700">
                    <div className="flex items-center gap-1">
                      {offer.beds}
                      <Icon icon="lucide:bed-single" className="text-default-500 size-5" />
                    </div>
                    <div className="flex items-center gap-1">
                      {offer.baths}
                      <Icon icon="lucide:shower-head" className="text-default-500 size-5" />
                    </div>
                    <div className="flex items-center gap-1">
                      {offer.garage}
                      <Icon icon="lucide:car" className="text-default-500 size-5" />
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination static pt-lg-1 mt-3 mt-sm-4" />
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Offer
