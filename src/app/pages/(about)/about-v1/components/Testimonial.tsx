'use client'
import tesv1 from '@/assets/img/about/v1/testimonials.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import avatar02 from '@/assets/img/about/v1/avatar/02.jpg'
import avatar03 from '@/assets/img/about/v1/avatar/03.jpg'

const Testimonial = () => {
  return (
    <>
      <section className="lg:py-12 md:pt-6 pt-4 pb-12 lg:my-4">
        <div className="container">
          <div className="flex justify-between items-center md:mb-12 mb-8 gap-4">
            <h2 className="text-default-900 font-semibold flex-wrap text-2.5xl md:text-3.5xl lg:text-4.5xl flex items-center">
              Customers
              <svg className="text-primary mx-2" xmlns="http://www.w3.org/2000/svg" width={36} height={31} fill="currentColor">
                <path d="M18.455 30.455L3.852 15.852a8.64 8.64 0 0 1-2.33-4.062c-.379-1.544-.374-3.078.014-4.602.388-1.534 1.16-2.869 2.315-4.006C5.036 2.017 6.385 1.245 7.901.866a9.07 9.07 0 0 1 4.56 0c1.525.388 2.879 1.16 4.063 2.315l1.932 1.875 1.932-1.875c1.193-1.155 2.547-1.927 4.063-2.315s3.03-.388 4.545 0c1.525.379 2.879 1.151 4.063 2.315 1.155 1.136 1.927 2.472 2.315 4.006a9.24 9.24 0 0 1 0 4.602c-.379 1.543-1.151 2.898-2.315 4.063L18.455 30.455z" />
              </svg>
              Finder
            </h2>
            <div className="flex gap-2">
              <button type="button" className="size-12 flex items-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full justify-center me-1" id="prevTestimonial" aria-label="Prev">
                <Icon icon="lucide:chevron-left" className="size-4.5" />
              </button>
              <button type="button" className="size-12 flex items-center justify-center border border-default-300 bg-body-bg dark:border-white/20 rounded-full" id="nextTestimonial" aria-label="Next">
                <Icon icon="lucide:chevron-right" className="size-4.5" />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 bg-default-100 dark:bg-white/3 rounded-md">
            <div className="rounded-tl-md rounded-bl-md md:block hidden">
              <Image src={tesv1} className="position-absolute top-0 start-0 w-full h-full object-cover rounded-tl-md rounded-bl-md" alt="Image" />
            </div>
            <div className="md:p-12 py-12 px-6">
              <div className="lg:p-12 lg:my-4">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={48}
                  loop
                  autoHeight
                  navigation={{
                    prevEl: '#prevTestimonial',
                    nextEl: '#nextTestimonial',
                  }}
                  modules={[Navigation]}
                >
                    <SwiperSlide>
                      <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width={72} height={72} fill="currentColor">
                        <path d="M14.1 53.1c-3-3.3-4.8-6.9-4.8-12.9 0-10.5 7.5-19.8 18-24.6l2.7 3.9c-9.9 5.4-12 12.3-12.6 16.8 1.5-.9 3.6-1.2 5.7-.9 5.4.6 9.6 4.8 9.6 10.5 0 2.7-1.2 5.4-3 7.5-2.1 2.1-4.5 3-7.5 3-3.3 0-6.3-1.5-8.1-3.3zm30 0c-3-3.3-4.8-6.9-4.8-12.9 0-10.5 7.5-19.8 18-24.6l2.7 3.9c-9.9 5.4-12 12.3-12.6 16.8 1.5-.9 3.6-1.2 5.7-.9 5.4.6 9.6 4.8 9.6 10.5 0 2.7-1.2 5.4-3 7.5s-4.5 3-7.5 3c-3.3 0-6.3-1.5-8.1-3.3z" />
                      </svg>
                      <blockquote className="text-lg text-default-900 pt-4 my-4">
                        <p>
                          I had <span className="font-semibold">an amazing experience using Finder</span> to search for my new home. The platform is incredibly user-friendly, with comprehensive listings and detailed descriptions that made it easy to find exactly what I was
                          looking for.
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center pt-4">
                        <div className="rounded-full overflow-hidden" style={{ width: 64 }}>
                          <Image src={avatar02} alt="Avatar" />
                        </div>
                        <div className="ps-4">
                          <div className="text-default-900 font-semibold mb-1">Michael Howard</div>
                          <div className="texrt-sm">Landlord</div>
                        </div>
                      </figcaption>
                    </SwiperSlide>
                    <SwiperSlide>
                      <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width={72} height={72} fill="currentColor">
                        <path d="M14.1 53.1c-3-3.3-4.8-6.9-4.8-12.9 0-10.5 7.5-19.8 18-24.6l2.7 3.9c-9.9 5.4-12 12.3-12.6 16.8 1.5-.9 3.6-1.2 5.7-.9 5.4.6 9.6 4.8 9.6 10.5 0 2.7-1.2 5.4-3 7.5-2.1 2.1-4.5 3-7.5 3-3.3 0-6.3-1.5-8.1-3.3zm30 0c-3-3.3-4.8-6.9-4.8-12.9 0-10.5 7.5-19.8 18-24.6l2.7 3.9c-9.9 5.4-12 12.3-12.6 16.8 1.5-.9 3.6-1.2 5.7-.9 5.4.6 9.6 4.8 9.6 10.5 0 2.7-1.2 5.4-3 7.5s-4.5 3-7.5 3c-3.3 0-6.3-1.5-8.1-3.3z" />
                      </svg>
                      <blockquote className="text-lg text-default-900 pt-4 my-4">
                        <p>
                          I was thoroughly <span className="font-semibold">impressed with Finder</span> when searching for my first rental property. The platform is intuitive and offers a wide range of listings, complete with high-quality images and all the details I needed to
                          make an informed decision.
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center pt-4">
                        <div className="rounded-full overflow-hidden" style={{ width: 64 }}>
                          <Image src={avatar03} alt="Avatar" />
                        </div>
                        <div className="ps-4">
                          <div className="text-default-900 font-semibold mb-1">Kristin Watson</div>
                          <div className="texrt-sm">Tenant</div>
                        </div>
                      </figcaption>
                    </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
