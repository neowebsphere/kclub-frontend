'use client'
import project01 from '@/assets/img/home/contractors/projects/01.jpg'
import project02 from '@/assets/img/home/contractors/projects/02.jpg'
import project03 from '@/assets/img/home/contractors/projects/03.jpg'
import { Icon } from '@iconify/react'
import { Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type ProjectType = {
  title: string
  image: StaticImageData
  rating: number
  reviews: number
  price: string
}

const projectData: ProjectType[] = [
  { title: 'One time cleaning service', image: project01, rating: 4.9, reviews: 256, price: '$80' },
  { title: 'Handyperson for small projects', image: project02, rating: 4.7, reviews: 63, price: '$250' },
  { title: 'Fence installation & repair', image: project03, rating: 4.8, reviews: 29, price: '$310' },
]

const HomeProject = () => {
  return (
    <>
      <section className="lg:py-24 md:py-18 py-14">
        <div className="container">
          <div className="flex md:items-center items-start justify-between gap-4 lg:mb-10 md:mb-8 mb-6">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Popular home projects</h2>
            <div className="inline-flex items-center gap-2 ">
              <Link href="" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
                View all
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </Link>
            </div>
          </div>
          <Swiper
            className="pb-5"
            wrapperClass="lg:mb-0 mb-15"
            slidesPerView={1}
            spaceBetween={24}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              650: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
          >
            {projectData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="group">
                  <Link href="/contractors" className="group"></Link>
                  <div className="border border-default-300 dark:border-white/20 group rounded-md">
                    <Link href="/contractors" className="group">
                      <div className="rounded-tr-md rounded-tl-md overflow-hidden group relative">
                        <Image src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-500 rounded-tr-md rounded-tl-md group-hover:scale-105 z-0" />
                        <div className="absolute bottom-0 start-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                          <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center">
                            <Icon icon="lucide:heart" />
                          </button>
                        </div>
                        <h3 className="absolute bottom-0 start-0 w-full text-white text-xl font-medium p-3">{item.title}</h3>
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link href="/contractors" className="group"></Link>
                      <div className="flex items-center lg:gap-4 gap-1">
                        <Link href="/contractors" className="group">
                          <div className="flex items-center gap-1">
                            <Star className="fill-warning text-warning size-4" />
                            <span className="text-sm text-body-color">{item.rating}</span>
                            <span className="text-xs text-secondary">({item.reviews})</span>
                          </div>
                        </Link>
                        <Link className="text-sm text-default-900" href="/contractors">
                          From {item.price}
                        </Link>
                        <button
                          type="button"
                          className="rounded-md border border-default-900 dark:border-white text-default-900 dark:text-white py-2.5 px-5 text-sm font-semibold inline-flex relative z-2 ms-auto transition-all duration-300 ease-in-out hover:bg-default-900 hover:text-white"
                        >
                          Book now
                        </button>
                      </div>
                    </div>
                  </div>
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

export default HomeProject
