'use client'
import cars01 from '@/assets/img/home/cars/accessories/01.png'
import cars02 from '@/assets/img/home/cars/accessories/02.png'
import cars03 from '@/assets/img/home/cars/accessories/03.png'
import cars04 from '@/assets/img/home/cars/accessories/04.png'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type accessoriesType = {
  id: number
  title: string
  image: StaticImageData
}

const accessoriesData: accessoriesType[] = [
  { id: 1, title: 'Tires', image: cars01 },
  { id: 2, title: 'Disks', image: cars02 },
  { id: 3, title: 'Tuning', image: cars03 },
  { id: 4, title: 'Child seat', image: cars04 },
]

const CTA = () => {
  return (
    <>
      <section className="lg:py-14 pt-2 pb-12">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-8 bg-default-100 dark:bg-white/3 lg:px-24 lg:py-18 md:py-14.5 md:px-12 py-12 px-8 rounded-lg">
            <div className="col-span-1">
              <div className="md:text-start text-center">
                <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900 mb-3">Auto market</h2>
                <p className="lg:mb-8 mb-6">Choose the best for your car!</p>
                <Link href="/listings/grid-cars" className="rounded-md bg-primary transition-all duration-300 hover:bg-primary-hover py-3.5 px-6 font-semibold inline-flex justify-center items-center text-white">
                  Go to shop
                  <Icon icon="lucide:chevron-right" className="ms-2 size-4.5" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 col-span-1">
              <Swiper
                slidesPerView={2}
                spaceBetween={24}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                breakpoints={{
                  500: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
                modules={[Pagination]}
                wrapperClass="lg:mb-0 mb-12"
              >
                {accessoriesData.map((item, idx) => (
                  <SwiperSlide className="group" key={idx}>
                    <Link href="">
                      <Image src={item.image} alt="Image" className="mb-4" />
                    </Link>
                    <h3 className="text-center font-medium">
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="">
                        {item.title}
                      </Link>
                    </h3>
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination static mt-3 mt-lg-4" />
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
