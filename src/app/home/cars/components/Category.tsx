'use client'
import convertibleImage from '@/assets/img/home/cars/body-type/convertible.svg'
import coupeImage from '@/assets/img/home/cars/body-type/coupe.svg'
import mpvImage from '@/assets/img/home/cars/body-type/mpv.svg'
import pickupImage from '@/assets/img/home/cars/body-type/pickup.svg'
import sedanImage from '@/assets/img/home/cars/body-type/sedan.svg'
import suvImage from '@/assets/img/home/cars/body-type/suv.svg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Category = {
  name: string
  offerCount: number
  image: StaticImageData
}

const categoriesData: Category[] = [
  { name: 'Sedan', offerCount: 1765, image: sedanImage },
  { name: 'Coupe', offerCount: 923, image: coupeImage },
  { name: 'Convertible', offerCount: 120, image: convertibleImage },
  { name: 'SUV', offerCount: 2107, image: suvImage },
  { name: 'Family MPV', offerCount: 582, image: mpvImage },
  { name: 'Pickup', offerCount: 341, image: pickupImage },
]

const Category = () => {
  return (
    <>
      <section className="lg:pb-14 lg:pt-28 md:pt-14 pt-12 pb-12">
        <div className="container">
          <div className="flex items-start justify-between gap-4 lg:mb-10 md:mb-8 mb-6">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Popular car body types</h2>
            <div className="inline-flex items-center gap-2 ">
              <Link href="" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
                View all
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </Link>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={16}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              460: { slidesPerView: 2, spaceBetween: 24 },
              600: { slidesPerView: 3, spaceBetween: 24 },
              768: { slidesPerView: 4, spaceBetween: 24 },
              992: { slidesPerView: 5, spaceBetween: 24 },
              1200: { slidesPerView: 6, spaceBetween: 24 },
            }}
            modules={[Pagination]}
            wrapperClass="lg:mb-0 mb-12"
          >
            {categoriesData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link href="/listings/grid-cars" className="group"></Link>
                <div className="bg-default-100 dark:bg-white/3 px-4 py-6 group rounded-xl">
                  <Link href="/listings/grid-cars" className="group">
                    <Image src={item.image} alt="Image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0" />
                  </Link>
                  <h3 className="text-default-800 font-semibold text-center pt-4 mb-1">
                    <Link href="/listings/grid-cars" className="group"></Link>
                    <Link href="/listings/grid-cars" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                      {item.name}
                    </Link>
                  </h3>
                  <p className="text-sm mb-2 text-center">{item.offerCount} offers</p>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination static mt-3" />
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Category
