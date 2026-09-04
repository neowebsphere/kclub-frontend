'use client'
import vlog01 from '@/assets/img/blog/v2/vlog/01.jpg'
import vlog02 from '@/assets/img/blog/v2/vlog/02.jpg'
import vlog03 from '@/assets/img/blog/v2/vlog/03.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type videoType = {
  title: string
  img: StaticImageData
  likes: string
  duration: string
}

const videosData: videoType[] = [
  {
    title: 'Electric Mercedes sedan car reportedly debuting in 2025',
    img: vlog01,
    likes: '100%',
    duration: '36:12',
  },
  {
    title: 'Budget vs Premium tyres: which are better value this year?',
    img: vlog02,
    likes: '99%',
    duration: '24:30',
  },
  {
    title: 'Tesla fixes common recall with over-the-air update',
    img: vlog03,
    likes: '100%',
    duration: '17:25',
  },
]

const PopularVideo = () => {
  return (
    <>
      <section className="lg:py-14 md:pt-8 pt-2 pb-10">
        <div className="container">
          <div className="flex items-start justify-between gap-4 lg:mb-10 md:mb-8 mb-6">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Popular videos</h2>
            <div className="inline-flex items-center gap-2 ">
              <Link href="" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
                More video
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </Link>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            className="pb-5"
            modules={[Pagination]}
            wrapperClass="lg:mb-0 mb-12"
          >
            {videosData.map((item, idx) => (
              <SwiperSlide className="group" key={idx}>
                <Link href="/pages/blog/single-v2">
                  <div className=" rounded-md w-full h-full overflow-hidden relative">
                    <Image src={item.img} alt="Image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-md" />
                    <div className="absolute top-0 start-0 z-10 flex flex-col gap-1 pt-2 ps-2 mt-2 ms-2">
                      <div className="bg-black/70 size-8 text-white inline-flex items-center justify-center rounded-md">
                        <Icon icon="lucide:video" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 start-0 flex items-center justify-between w-full bg-black/30 text-white z-10 py-1 px-3 backdrop-blur-sm" data-bs-theme="dark">
                      <div className="flex items-center text-sm">
                        <Icon icon="lucide:thumbs-up" className="text-base me-2" />
                        {item.likes}
                      </div>
                      <div className="text-sm">{item.duration}</div>
                    </div>
                  </div>
                </Link>
                <h3 className="pt-6 text-xl font-semibold text-default-900">
                  <Link href="/pages/blog/single-v2"></Link>
                  <Link className="group-hover:underline" href="/pages/blog/single-v2">
                    {item.title}
                  </Link>
                </h3>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination static mt-3 mt-sm-4" />
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default PopularVideo
