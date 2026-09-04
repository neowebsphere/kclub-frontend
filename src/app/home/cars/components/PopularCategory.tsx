'use client'
import category01 from '@/assets/img/home/cars/categories/01.jpg'
import category02 from '@/assets/img/home/cars/categories/02.jpg'
import category03 from '@/assets/img/home/cars/categories/03.jpg'
import category04 from '@/assets/img/home/cars/categories/04.jpg'
import category05 from '@/assets/img/home/cars/categories/05.jpg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type CategoryType = {
  title: string
  image: StaticImageData
}

const categoryData: CategoryType[] = [
  { title: 'Electric cars', image: category01 },
  { title: 'New cars', image: category02 },
  { title: 'City cars', image: category03 },
  { title: 'Off-road cars', image: category04 },
  { title: 'Family cars', image: category05 },
]

const PopularCategory = () => {
  return (
    <>
      <section className="lg:py-16 md:pt-6 pt-2 pb-10">
        <div className="container">
          <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-center text-default-900 lg:mb-12 md:mb-8 mb-6">Currently in demand</h2>
          <Swiper
            wrapperClass="lg:mb-0 mb-12"
            spaceBetween={24}
            slidesPerView={2}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            breakpoints={{
              500: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
            }}
            modules={[Pagination]}
          >
            {categoryData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="group">
                  <Link href="/listings/grid-cars" className="group">
                    <div className="rounded-full w-33 mx-auto h-auto overflow-hidden">
                      <Image src={item.image} alt="Category image" className="w-33 h-auto object-cover transition-transform duration-500 group-hover:scale-110 rounded-full z-0" />
                    </div>
                  </Link>
                  <h3 className="text-default-900 font-semibold pt-4 text-center">
                    <Link href="/listings/grid-cars" className="group"></Link>
                    <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/grid-cars">
                      {item.title}
                    </Link>
                  </h3>
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

export default PopularCategory
