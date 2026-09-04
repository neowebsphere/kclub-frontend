'use client'
import avatar01 from '@/assets/img/about/v2/avatars/01.jpg'
import avatar02 from '@/assets/img/about/v2/avatars/02.jpg'
import avatar03 from '@/assets/img/about/v2/avatars/03.jpg'
import avatar04 from '@/assets/img/about/v2/avatars/04.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonial = () => {
  return (
    <>
      <section className="bg-info py-12">
        <div className="container">
          <div className="lg:py-12 md:py-6 mb-4">
            <div className="flex justify-between items-center lg:mb-12 md:mb-10 mb-7">
              <h2 className="text-white font-semibold lg:text-4.5xl md:text-3.5xl text-2.5xl">Users about Finder</h2>
              <div className="flex gap-2">
                <button type="button" className="size-12 flex items-center border border-white rounded-full justify-center me-1" id="prevTestimonial" aria-label="Prev">
                  <Icon icon="lucide:chevron-left" className="text-white size-4.5" />
                </button>
                <button type="button" className="size-12 flex items-center justify-center border border-white rounded-full" id="nextTestimonial" aria-label="Next">
                  <Icon icon="lucide:chevron-right" className="text-white size-4.5" />
                </button>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              navigation={{
                prevEl: '#prevTestimonial',
                nextEl: '#nextTestimonial',
              }}
              breakpoints={{
                680: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              modules={[Navigation]}
            >
              <SwiperSlide className="!h-full">
                <div className="md:p-2 bg-body-bg rounded-xl">
                  <div className="p-6">
                    <div className="relative" style={{ width: 96 }}>
                      <svg className="top-0 z-10 absolute end-0 -me-3.25" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
                        <circle cx={18} cy={18} r={18} fill="#d85151" />
                        <path
                          d="M13.946 10.5l3.797 2.247c-1.403 2.772-2.131 5.365-2.181 7.781V25.5H9.25v-4.635c.017-1.703.48-3.535 1.386-5.492s2.009-3.581 3.31-4.873zm9.006 0l3.797 2.247c-1.402 2.772-2.13 5.365-2.181 7.781V25.5h-6.312v-4.635c.016-1.703.479-3.535 1.385-5.492s2.011-3.581 3.31-4.873z"
                          fill="#fff"
                        />
                      </svg>
                      <div className="rounded-full overflow-hidden">
                        <Image src={avatar01} alt="Avatar" />
                      </div>
                    </div>
                    <p className="text-lg text-default-900 pt-6">
                      I had a <span className="font-semibold">fantastic experience using Finder for my office remodel.</span> The platform is very user-friendly, with an intuitive interface that makes searching and comparing contractors a breeze. I particularly appreciated the
                      seamless project management tools.
                    </p>
                  </div>
                  <div className="pb-6 px-6">
                    <div className="text-default-900 mb-1 font-semibold">Liza Rogers</div>
                    <div className="text-sm">One-time cleaning service</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!h-full">
                <div className="md:p-2 bg-body-bg rounded-xl">
                  <div className="p-6">
                    <div className="relative" style={{ width: 96 }}>
                      <svg className="top-0 z-10 absolute end-0 -me-3.25" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
                        <circle cx={18} cy={18} r={18} fill="#d85151" />
                        <path
                          d="M13.946 10.5l3.797 2.247c-1.403 2.772-2.131 5.365-2.181 7.781V25.5H9.25v-4.635c.017-1.703.48-3.535 1.386-5.492s2.009-3.581 3.31-4.873zm9.006 0l3.797 2.247c-1.402 2.772-2.13 5.365-2.181 7.781V25.5h-6.312v-4.635c.016-1.703.479-3.535 1.385-5.492s2.011-3.581 3.31-4.873z"
                          fill="#fff"
                        />
                      </svg>
                      <div className="rounded-full overflow-hidden">
                        <Image src={avatar02} alt="Avatar" />
                      </div>
                    </div>
                    <p className="text-lg text-default-900 pt-6">
                      Finder has become my go-to platform for all my contracting needs. As a property manager, I often need reliable contractors for various maintenance and renovation projects.
                      <span className="font-semibold">Finder Contractor provides a comprehensive list of professionals.</span>
                    </p>
                  </div>
                  <div className="pb-6 px-6">
                    <div className="text-default-900 mb-1 font-semibold">Michael Howard</div>
                    <div className="text-sm">Fence installation &amp; repair</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!h-full">
                <div className="md:p-2 bg-body-bg rounded-xl">
                  <div className="p-6">
                    <div className="relative" style={{ width: 96 }}>
                      <svg className="top-0 z-10 absolute end-0 -me-3.25" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
                        <circle cx={18} cy={18} r={18} fill="#d85151" />
                        <path
                          d="M13.946 10.5l3.797 2.247c-1.403 2.772-2.131 5.365-2.181 7.781V25.5H9.25v-4.635c.017-1.703.48-3.535 1.386-5.492s2.009-3.581 3.31-4.873zm9.006 0l3.797 2.247c-1.402 2.772-2.13 5.365-2.181 7.781V25.5h-6.312v-4.635c.016-1.703.479-3.535 1.385-5.492s2.011-3.581 3.31-4.873z"
                          fill="#fff"
                        />
                      </svg>
                      <div className="rounded-full overflow-hidden">
                        <Image src={avatar03} alt="Avatar" />
                      </div>
                    </div>
                    <p className="text-lg text-default-900 pt-6">
                      <span className="font-semibold">The detailed profiles and client reviews</span> made it easy to choose the right professional for the job. The advanced search filters allowed me to narrow down my options based on my specific needs and budget.
                    </p>
                  </div>
                  <div className="pb-6 px-6">
                    <div className="text-default-900 mb-1 font-semibold">Kristin Watson</div>
                    <div className="text-sm">Gutter service</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!h-full">
                <div className="md:p-2 bg-body-bg rounded-xl">
                  <div className="p-6">
                    <div className="relative" style={{ width: 96 }}>
                      <svg className="top-0 z-10 absolute end-0 -me-3.25" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
                        <circle cx={18} cy={18} r={18} fill="#d85151" />
                        <path
                          d="M13.946 10.5l3.797 2.247c-1.403 2.772-2.131 5.365-2.181 7.781V25.5H9.25v-4.635c.017-1.703.48-3.535 1.386-5.492s2.009-3.581 3.31-4.873zm9.006 0l3.797 2.247c-1.402 2.772-2.13 5.365-2.181 7.781V25.5h-6.312v-4.635c.016-1.703.479-3.535 1.385-5.492s2.011-3.581 3.31-4.873z"
                          fill="#fff"
                        />
                      </svg>
                      <div className="rounded-full overflow-hidden">
                        <Image src={avatar04} alt="Avatar" />
                      </div>
                    </div>
                    <p className="text-lg text-default-900 pt-6">
                      Using this site to find a local contractor <span className="font-semibold">was a game-changer for my home renovation.</span> The listings were clear and detailed, making it easy to compare services and read reviews. I found a reliable contractor quickly, and
                      the entire process was smooth and hassle-free.
                    </p>
                  </div>
                  <div className="pb-6 px-6">
                    <div className="text-default-900 mb-1 font-semibold">Kristin Watson</div>
                    <div className="text-sm">Website user</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
