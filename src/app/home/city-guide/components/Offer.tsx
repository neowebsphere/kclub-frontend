'use client'
import offer1 from '@/assets/img/home/city-guide/offers/01.jpg'
import offer2 from '@/assets/img/home/city-guide/offers/02.jpg'
import offer3 from '@/assets/img/home/city-guide/offers/03.jpg'
import { ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type OfferType = {
  image: StaticImageData
  alt: string
}

const offerData: OfferType[] = [
  { image: offer1, alt: 'Offer 1' },
  { image: offer2, alt: 'Offer 2' },
  { image: offer3, alt: 'Offer 3' },
]

const Offer = () => {
  return (
    <>
      <section className="lg:pb-28 md:pb-14 pb-12 relative">
        <div className="container">
          <div className="flex items-center justify-between gap-6 mb-8">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Top offers</h2>
            <div className="inline-flex items-center gap-2">
              <Link href="/listings/top-filters-city" className="hover:underline flex items-center py-2 font-semibold">
                View all
                <ChevronRight className="size-4.5 ms-1" />
              </Link>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            autoHeight={true}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              500: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            wrapperClass="lg:mb-0 mb-12"
          >
            {offerData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link href="">
                  <div className="rounded-md size-full overflow-hidden">
                    <Image src={item.image} alt="Image" className="size-full object-cover transition-transform duration-500 hover:scale-105 z-0 rounded-md" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination static mt-3 mt-sm-4" />
          </Swiper>
        </div>
        <span className="absolute lg:block hidden bg-emerald-50 dark:bg-default-200 rounded-full -top-3.75 end-50 w-15 h-15" />
        <span className="absolute lg:block hidden bg-primary/10 rounded-full -top-10.25 end-47.5 w-6.75 h-6.75" />
      </section>
    </>
  )
}

export default Offer
