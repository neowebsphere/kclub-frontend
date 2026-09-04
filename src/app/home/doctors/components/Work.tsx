'use client'
import Step1Img from '@/assets/img/home/doctors/steps/01.jpg'
import Step2Img from '@/assets/img/home/doctors/steps/02.jpg'
import Step3Img from '@/assets/img/home/doctors/steps/03.jpg'
import Image, { StaticImageData } from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type StepType = {
  title: string
  description: string
  image: StaticImageData
}

const stepData: StepType[] = [
  {
    title: 'Choose',
    description: 'Browse our directory to quickly find suitable healthcare professionals.',
    image: Step1Img,
  },
  {
    title: 'Review',
    description: 'Check profiles and patient feedback to choose the right provider.',
    image: Step2Img,
  },
  {
    title: 'Connect',
    description: 'Directly contact and book appointments with your chosen healthcare professional.',
    image: Step3Img,
  },
]

const Work = () => {
  return (
    <>
      <section className="lg:pb-28 md:pb-18 pb-12">
        <div className="container">
          <h2 className="text-default-900 lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold mb-4">How it works</h2>
          <p className="mb-8">Finder gives you the tools and information you need to:</p>
          <Swiper
            wrapperClass="md:mb-0 mb-12"
            className="pb-5"
            slidesPerView={1}
            spaceBetween={24}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              500: { slidesPerView: 2 },
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
          >
            {stepData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div>
                  <Image src={item.image} alt="Image" className="w-40.5 md:mx-0 mx-auto rounded-md" />
                </div>
                <h3 className="mt-1 pt-4 text-2xl text-default-900 font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination static mt-3" />
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Work
