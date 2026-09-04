'use client'
import { Icon } from '@iconify/react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type FeatureType = {
  icon: string
  title: string
}

const featureData: FeatureType[] = [
  { icon: 'lucide:copy', title: 'Over 1 million listings' },
  { icon: 'lucide:file-search', title: 'Personalized search' },
  { icon: 'lucide:car', title: 'Online car appraisal' },
  { icon: 'lucide:lightbulb', title: 'Non-stop innovation' },
]

const Feature = () => {
  return (
    <>
      <section className="lg:py-16 pt-2 pb-12">
        <div className="container">
          <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900 md:mb-8 mb-6">What sets Finder apart?</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              460: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            modules={[Pagination]}
            wrapperClass="lg:mb-0 mb-12"
          >
            {featureData.map((item, idx) => (
              <SwiperSlide className="h-auto" key={idx}>
                <div className="p-8 bg-success/7 rounded-md">
                  <Icon icon={item.icon} className="text-2xl" />
                  <h3 className="mt-10 text-xl text-default-900 font-semibold">{item.title}</h3>
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

export default Feature
