'use client'
import hero01 from '@/assets/img/home/doctors/hero-slider/01.jpg'
import hero02 from '@/assets/img/home/doctors/hero-slider/02.jpg'
import hero03 from '@/assets/img/home/doctors/hero-slider/03.jpg'
import th01 from '@/assets/img/home/doctors/hero-slider/th01.jpg'
import th02 from '@/assets/img/home/doctors/hero-slider/th02.jpg'
import th03 from '@/assets/img/home/doctors/hero-slider/th03.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, EffectCreative, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Hero = () => {
  return (
    <>
      <section className="lg:mt-20 md:mt-17.5 mt-16 bg-[#30536b] lg:py-24 md:py-18 py-12 dark">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center md:gap-6 gap-12">
            <div className="md:col-span-7 col-span-1">
              <h1 className="lg:text-6xl md:text-5xl text-4xl md:text-start text-center font-bold text-white lg:mb-12 md:mb-10 mb-6 lg:pb-4">Trusted professionals, one click away</h1>
              <form className="bg-white border rounded-xl p-2">
                <div className="flex flex-col lg:flex-row gap-2 p-1">
                  <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-3">
                    <div className="relative w-full flex items-center">
                      <Icon icon="lucide:search" className="absolute top-1/2 start-0 -translate-y-1/2 text-default-500 text-xl ms-2" />
                      <input type="search" placeholder="Search Doctors, Conditions, or Procedures" required className="w-full ps-9 pe-2 py-3 text-base border-0 rounded-none focus:ring-0 focus:outline-none" />
                    </div>
                    <hr className="sm:hidden ms-0 border-default-400" />
                    <div className="hidden sm:flex items-center my-2 w-px bg-body-color" />
                    <div className="relative w-full max-w-47.5">
                      <Icon icon="lucide:map-pin" className="absolute top-1/2 start-0 -translate-y-1/2 z-10 text-default-500 text-xl ms-2" />
                      <select required className="w-full ps-9 pe-2 py-3 text-base border-0 focus:ring-0 focus:outline-none">
                        <option value="">Location</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Houston</option>
                        <option>Phoenix</option>
                        <option>Philadelphia</option>
                        <option>San Antonio</option>
                        <option>San Diego</option>
                        <option>Dallas</option>
                        <option>San Jose</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="px-6 py-3.5 font-semibold bg-primary text-white rounded-md inline-flex justify-center transition-all duration-300 hover:bg-primary-hover">
                    Search
                  </button>
                </div>
              </form>
              <div className="flex gap-2 text-sm pt-8 flex-wrap" data-bs-theme="dark">
                <span className="text-white/80 me-2">Popular searches:</span>
                <Link className="hover:underline text-white me-2" href="">
                  Pediatrics
                </Link>
                <Link className="hover:underline text-white me-2" href="">
                  Family medicine
                </Link>
                <Link className="hover:underline text-white me-2" href="">
                  Top hospitals
                </Link>
                <Link className="hover:underline text-white me-2" href="">
                  Best dentists
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 col-span-1">
              <div className="lg:w-104 w-full lg:ms-auto">
                <div className="relative">
                  <Swiper
                    effect="creative"
                    speed={450}
                    allowTouchMove={false}
                    autoplay={{
                      delay: 6500,
                      disableOnInteraction: false,
                    }}
                    creativeEffect={{
                      prev: { shadow: true, translate: ['-20%', 0, -1] },
                      next: { translate: ['100%', 0, 0] },
                    }}
                    thumbs={{
                      swiper: '#thumbs',
                    }}
                    modules={[Autoplay, EffectCreative, Thumbs]}
                    style={{ WebkitClipPath: 'url(#mask)', clipPath: 'url(#mask)' }}
                  >
                    <SwiperSlide>
                      <div>
                        <Image src={hero01} alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <Image src={hero02} alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <Image src={hero03} alt="Image" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width={0} height={0} viewBox="0 0 416 344" fill="none">
                    <defs>
                      <clipPath id="mask" clipPathUnits="objectBoundingBox" transform="scale(0.0024, 0.0029)">
                        <path d="M298.045 0.00804178C263.343 -0.177193 230.353 15.0453 208 41.558C185.786 14.8641 152.705 -0.40169 117.954 0.00804178C52.8095 0.00804178 0 52.7547 0 117.821C0 229.325 194.835 338.197 202.734 342.405C205.921 344.532 210.078 344.532 213.266 342.405C221.165 338.197 416 230.902 416 117.821C416 52.7547 363.19 0.00804178 298.045 0.00804178Z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="mx-auto" style={{ maxWidth: 382 }}>
                  <Swiper
                    className="swiper-load swiper-thumbs py-4 px-4 mt-2"
                    id="thumbs"
                    spaceBetween={24}
                    slidesPerView={3}
                    watchSlidesProgress={true}
                    breakpoints={{
                      500: {
                        spaceBetween: 32,
                      },
                    }}
                  >
                    <SwiperSlide className="swiper-thumb rounded-full p-2 relative">
                      <div className="aspect-square rounded-full overflow-hidden">
                        <Image src={th01} className="swiper-thumb-img" alt="Thumbnail" />
                      </div>
                      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 w-[150%] h-[150%]">
                        <svg className="animate-spin" width={144} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ animationDuration: '22s' }}>
                          <path id="circlePath" fill="none" d="M 10, 50a 40,40 0 1,1 80,0a 40,40 0 1,1 -80,0" />
                          <text fontSize="9.4" className="fill-white tracking-[-0.05em]">
                            <textPath href="#circlePath">More than 20,000 users received qualified medical care</textPath>
                          </text>
                        </svg>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-thumb rounded-full p-2">
                      <div className="aspect-square rounded-full overflow-hidden">
                        <Image src={th02} className="swiper-thumb-img" alt="Thumbnail" />
                      </div>
                      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 w-[150%] h-[150%]">
                        <svg className="animate-spin" width={144} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ animationDuration: '22s' }}>
                          <path id="circlePath" fill="none" d="M 10, 50a 40,40 0 1,1 80,0a 40,40 0 1,1 -80,0" />
                          <text id="text" fontSize="9.4" className="fill-white tracking-[-0.05em]">
                            <textPath id="textPath" href="#circlePath">
                              More than 20,000 users received qualified medical care
                            </textPath>
                          </text>
                        </svg>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-thumb rounded-full p-2">
                      <div className="aspect-square rounded-full overflow-hidden">
                        <Image src={th03} className="swiper-thumb-img" alt="Thumbnail" />
                      </div>
                      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 w-[150%] h-[150%]">
                        <svg className="animate-spin" width={144} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ animationDuration: '22s' }}>
                          <path id="circlePath" fill="none" d="M 10, 50a 40,40 0 1,1 80,0a 40,40 0 1,1 -80,0" />
                          <text id="text" fontSize="9.4" className="fill-white tracking-[-0.05em]">
                            <textPath id="textPath" href="#circlePath">
                              More than 20,000 users received qualified medical care
                            </textPath>
                          </text>
                        </svg>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
