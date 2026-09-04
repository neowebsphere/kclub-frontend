'use client'
import help01 from '@/assets/img/help/v3/01.jpg'
import help02 from '@/assets/img/help/v3/02.jpg'
import help03 from '@/assets/img/help/v3/03.jpg'
import help04 from '@/assets/img/help/v3/04.jpg'
import help05 from '@/assets/img/help/v3/05.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type GuideType = {
  image: StaticImageData
  title: string
}

const guideData: GuideType[] = [
  {
    image: help01,
    title: 'Herbal medicines: advantages and disadvantages',
  },
  {
    image: help02,
    title: 'Prepare questions for your doctor: A pre-appointment checklist',
  },
  {
    image: help03,
    title: 'A guide to interpreting medical advice and instructions',
  },
  {
    image: help04,
    title: 'Communicating your symptoms clearly to your doctor',
  },
  {
    image: help05,
    title: 'How to discuss medication instructions and manage your pills',
  },
]

const Guides = () => {
  return (
    <>
      <section className="lg:py-12 md:pt-6 pt-2 pb-12 lg:my-4">
        <div className="container">
          <div className="flex justify-between items-center md:mb-4 mb-2 pb-4">
            <h2 className="text-default-900 font-semibold lg:text-3.5xl md:text-2.5xl text-2xl">Guides for getting started</h2>
            <div className="flex gap-2">
              <button type="button" className="size-10 flex items-center border border-border rounded-full justify-center me-1" id="prev" aria-label="Prev">
                <Icon icon="lucide:chevron-left" className="text-default-900 size-4.5" />
              </button>
              <button type="button" className="size-10 flex items-center justify-center border border-border rounded-full" id="next" aria-label="Next">
                <Icon icon="lucide:chevron-right" className="text-default-900 size-4.5" />
              </button>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoHeight
            navigation={{
              prevEl: '#prev',
              nextEl: '#next',
            }}
            breakpoints={{
              500: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
          >
            {guideData.map((item, idx) => (
              <SwiperSlide className="group" key={idx}>
                <Link href="">
                  <div className="rounded-md overflow-hidden mb-6">
                    <Image src={item.image} alt="Category image" className="w-full h-full object-cover transition-transform duration-500 rounded-md group-hover:scale-110 z-0" />
                  </div>
                </Link>
                <h3 className="text-default-900 font-semibold">
                  <Link href="" />
                  <Link className="group-hover:underline" href="">
                    {item.title}
                  </Link>
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Guides
