'use client'
import hero01 from '@/assets/img/home/events/hero-slider/01.jpg'
import hero02 from '@/assets/img/home/events/hero-slider/02.jpg'
import hero03 from '@/assets/img/home/events/hero-slider/03.jpg'
import ticket from '@/assets/img/home/events/hero-slider/ticket.png'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Slide = {
  image: StaticImageData
  price: string
  link: string
}

const slides: Slide[] = [
  { image: hero01, price: '$56', link: '/listings/entry-events' },
  { image: hero02, price: '$40', link: '/listings/entry-events' },
  { image: hero03, price: 'Free', link: '/listings/entry-events' },
]

const Hero = () => {
  return (
    <>
      <section className="relative lg:pt-30 md:pt-25 pt-20 overflow-hidden">
        <div className="container">
          <form className="relative z-10 bg-body-bg border border-border rounded-md shadow p-2 lg:mb-8 mb-4">
            <div className="flex flex-col md:flex-row gap-2 p-1">
              <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-3">
                <div className="relative w-full">
                  <Icon icon="lucide:search" className="absolute top-1/2 start-2 -translate-y-1/2 text-xl text-default-400" />
                  <input type="search" placeholder="Search by Artist, Events" required className="w-full ps-10 pe-0 py-3 border-0 rounded-none focus:ring-0 text-base bg-transparent" />
                </div>
                <hr className="sm:hidden border-t border-default-300 dark:border-default-600" />
                <div className="hidden sm:block my-2 w-px bg-default-300 dark:bg-default-600" />
                <div className="relative w-full max-w-[200px]">
                  <Icon icon="lucide:map-pin" className="absolute top-1/2 start-2 -translate-y-1/2 z-10 text-xl text-default-500" />
                  <select required className="w-full ps-8 py-3 border-0 bg-transparent text-base focus:ring-0">
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
              <button type="submit" className="px-6 py-3.5 text-white bg-primary hover:bg-primary-hover rounded-md text-base">
                Search
              </button>
            </div>
          </form>
          <div className="relative z-10 grid md:grid-cols-3 grid-cols-1 items-center gap-6">
            <div className="col-span-1">
              <div className="lg:mt-12 lg:pt-12 pt-6 mb-6">
                <h1 className="md:text-start text-center lg:text-5xl md:text-4.5xl text-3xl font-bold text-default-900 lg:mt-4 lg:mb-6 mb-4">Discover Events Near You</h1>
                <p className="md:text-start text-center">Tickets for all events in one place</p>
              </div>
              <div className="flex gap-2 lg:mt-25 md:mt-15 lg:mb-8 md:justify-start justify-center">
                <button type="button" className="size-10 flex items-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full justify-center me-1" id="hero-prev" aria-label="Prev">
                  <Icon icon="lucide:chevron-left" className="size-4.5" />
                </button>
                <button type="button" className="size-10 flex items-center justify-center border border-default-300 bg-body-bg dark:border-white/20 rounded-full" id="hero-next" aria-label="Next">
                  <Icon icon="lucide:chevron-right" className="size-4.5" />
                </button>
              </div>
            </div>
            <div className="md:col-span-2 col-span-1">
              <Swiper
                effect="creative"
                loop={true}
                speed={450}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                creativeEffect={{
                  prev: { translate: [0, 0, -800], rotate: [180, 0, 0] },
                  next: { translate: [0, 0, -800], rotate: [-180, 0, 0] },
                }}
                navigation={{ prevEl: '#hero-prev', nextEl: '#hero-next' }}
                modules={[Navigation, EffectCreative , Autoplay]}
              >
                {slides.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <Link href={item.link} className="block overflow-hidden bg-default-400 rounded-2xl aspect-[856/463]">
                      <Image src={item.image} alt="Image" className="w-full h-full object-cover" />
                    </Link>
                    <div className="absolute shadow" style={{ bottom: '9%', left: '7%', width: 160, height: 86 }}>
                      <div className="absolute flex flex-col text-white z-20" style={{ top: 19, left: 75 }}>
                        <div className="text-2xs leading-[10px]">From</div>
                        <div className="text-2xl font-semibold">{item.price}</div>
                      </div>
                      <svg className="relative z-10 ms-2 mt-1" xmlns="http://www.w3.org/2000/svg" width={142} height={69}>
                        <path className="text-primary" d="M8 0h31.189c.666 2.588 3.015 4.5 5.811 4.5s5.145-1.912 5.811-4.5H134a8 8 0 0 1 8 8v53a8 8 0 0 1-8 8H50.659c-.824-2.33-3.046-4-5.659-4s-4.835 1.67-5.659 4H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z" fill="currentColor" />
                        <path d="M45 65V4.5c2.796 0 5.145-1.912 5.811-4.5H134a8 8 0 0 1 8 8v53a8 8 0 0 1-8 8H50.659c-.824-2.33-3.046-4-5.659-4z" fill="url(#A)" />
                        <path d="M45 4v61" stroke="#1d2735" strokeWidth="1.5" strokeDasharray="4 2" />
                        <path d="M23.5 25l.008 8.919a1 1 0 0 0 .499.865l7.72 4.466-7.728-4.453a1 1 0 0 0-.998 0l-7.728 4.453 7.72-4.466a1 1 0 0 0 .499-.865L23.5 25z" stroke="currentColor" strokeWidth={2} style={{ color: '#c92d2d' }} />
                        <defs>
                          <linearGradient id="A" x1={46} y1="35.5" x2="66.5" y2="35.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="rgba(0,0,0,.15)" />
                            <stop className="text-primary" offset={1} stopColor="currentColor" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <Image src={ticket} className="absolute top-0 start-0 w-full h-full object-cover" alt="Ticket" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="hidden lg:block">
            <span className="absolute z-1 font-bold top-10 -start-5 text-9xl text-[#f5f7fa] dark:text-[#1a1a1a] [text-shadow:1px_1px_0_#e0e5eb,-1px_1px_0_#e0e5eb,-1px_-1px_0_#e0e5eb,1px_-1px_0_#e0e5eb] dark:[text-shadow:1px_1px_0_#444,-1px_1px_0_#444,-1px_-1px_0_#444,1px_-1px_0_#444]">
              Hobbies
            </span>
            <span className="absolute z-1 font-bold top-[140px] start-15 text-9xl text-[#f5f7fa] dark:text-[#1a1a1a] [text-shadow:1px_1px_0_#e0e5eb,-1px_1px_0_#e0e5eb,-1px_-1px_0_#e0e5eb,1px_-1px_0_#e0e5eb] dark:[text-shadow:1px_1px_0_#444,-1px_1px_0_#444,-1px_-1px_0_#444,1px_-1px_0_#444]">
              Concerts
            </span>
            <span className="absolute z-10 font-bold top-[190px] -end-50 text-9xl text-[#f5f7fa] dark:text-[#1a1a1a] [text-shadow:1px_1px_0_#e0e5eb,-1px_1px_0_#e0e5eb,-1px_-1px_0_#e0e5eb,1px_-1px_0_#e0e5eb] dark:[text-shadow:1px_1px_0_#444,-1px_1px_0_#444,-1px_-1px_0_#444,1px_-1px_0_#444]">
              Sports
            </span>
            <span className="absolute z-10 font-bold top-[285px] -end-62 text-9xl text-[#f5f7fa] dark:text-[#1a1a1a] [text-shadow:1px_1px_0_#e0e5eb,-1px_1px_0_#e0e5eb,-1px_-1px_0_#e0e5eb,1px_-1px_0_#e0e5eb] dark:[text-shadow:1px_1px_0_#444,-1px_1px_0_#444,-1px_-1px_0_#444,1px_-1px_0_#444]">
              Theaters
            </span>
          </div>
          <span className="absolute top-0 start-0 w-full bg-default-100 dark:bg-white/3 lg:hidden" style={{ height: 'calc(100% - 20px)' }} />
          <span className="absolute top-0 start-0 w-full bg-default-100 dark:bg-white/3 hidden lg:block" style={{ height: 'calc(100% - 52px)' }} />
        </div>
      </section>
    </>
  )
}

export default Hero
