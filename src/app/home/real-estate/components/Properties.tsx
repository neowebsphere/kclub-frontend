'use client'
import NewYorkImage from '@/assets/img/home/real-estate/cities/01.jpg'
import DallasImage from '@/assets/img/home/real-estate/cities/02.jpg'
import SanFranciscoImage from '@/assets/img/home/real-estate/cities/03.jpg'
import LosAngelesImage from '@/assets/img/home/real-estate/cities/04.jpg'
import ChicagoImage from '@/assets/img/home/real-estate/cities/05.jpg'
import PhiladelphiaImage from '@/assets/img/home/real-estate/cities/06.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type CityType = {
  id: number
  name: string
  image: StaticImageData
  forSale: number
  forRent: number
}

const cities: CityType[] = [
  { id: 1, name: 'New York', image: NewYorkImage, forSale: 1739, forRent: 3845 },
  { id: 2, name: 'Dallas', image: DallasImage, forSale: 986, forRent: 2903 },
  { id: 3, name: 'San Francisco', image: SanFranciscoImage, forSale: 2134, forRent: 4561 },
  { id: 4, name: 'Los Angeles', image: LosAngelesImage, forSale: 1875, forRent: 3262 },
  { id: 5, name: 'Chicago', image: ChicagoImage, forSale: 1549, forRent: 2806 },
  { id: 6, name: 'Philadelphia', image: PhiladelphiaImage, forSale: 874, forRent: 1625 },
]

const Properties = () => {
  return (
    <>
      <section className="md:py-16 py-12 lg:mb-10">
        <div className="container">
          <div className="flex justify-between lg:mb-10 md:mb-8 mb-6">
            <h2 className="lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold text-default-900">Search by city</h2>
            <div className="flex gap-2">
              <button type="button" className="size-10 flex items-center border border-default-300 rounded-full justify-center animate-slide-start bg-body rounded-circle me-1" id="city-prev" aria-label="Prev">
                <Icon icon="lucide:chevron-left" className="size-4.5" />
              </button>
              <button type="button" className="size-10 flex items-center justify-center border border-default-300 rounded-full animate-slide-end bg-body rounded-circle" id="city-next" aria-label="Next">
                <Icon icon="lucide:chevron-right" className="size-4.5" />
              </button>
            </div>
          </div>
          <Swiper
            className="pb-5"
            slidesPerView={1}
            spaceBetween={24}
            loop
            navigation={{ prevEl: '#city-prev', nextEl: '#city-next' }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            breakpoints={{
              460: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              860: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            modules={[Pagination, Navigation]}
            wrapperClass="mb-15"
          >
            {cities.map((item, idx) => (
              <SwiperSlide className="h-auto" key={idx}>
                <Link href="/listings/real-estate"></Link>
                <div className="border border-default-300 group rounded-md">
                  <Link href="/listings/real-estate">
                    <div className="rounded-tr-md rounded-tl-md overflow-hidden group">
                      <Image src={item.image} alt="Category image" className="w-full h-full object-cover transition-transform duration-500 rounded-tr-md rounded-tl-md group-hover:scale-110 z-0" />
                    </div>
                  </Link>
                  <div className="p-4 text-center">
                    <Link href="/listings/real-estate"></Link>
                    <Link
                      href="/listings/real-estate"
                      className="text-xl text-default-900 text-center font-semibold relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <div className="pb-4 px-4">
                    <div className="flex justify-between">
                      <div className="pe-1 text-center w-1/2">
                        <Icon icon="lucide:zap" className="size-4 mb-1 text-default-500" />
                        <div className="text-sm">
                          for sale <span className="font-semibold text-body-color">{item.forSale}</span>
                        </div>
                      </div>
                      <div className="mx-2 block bg-default-200 h-auto w-0.25" />
                      <div className="pe-1 text-center w-1/2">
                        <Icon icon="lucide:tag" className="size-4 mb-1 text-default-500" />
                        <div className="text-sm">
                          for rent <span className="font-semibold text-body-color">{item.forRent}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination static pt-lg-1 mt-3 mt-sm-4" />
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Properties
