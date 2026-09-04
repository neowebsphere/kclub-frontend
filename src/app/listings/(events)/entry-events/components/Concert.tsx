'use client'
import main from '@/assets/img/listings/events/single/main.png'
import participants01 from '@/assets/img/listings/events/single/participants/01.jpg'
import participants02 from '@/assets/img/listings/events/single/participants/02.jpg'
import participants03 from '@/assets/img/listings/events/single/participants/03.jpg'
import { Icon } from '@iconify/react'
import { Accessibility, Calendar, Camera, CigaretteOff, Circle, CircleParking, Map, MapPin, Share2, Wifi, Wine } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Concert = () => {
  return (
    <section className="lg:pt-25 pt-22 pb-14">
      <div className="container">
        <ol className="flex flex-wrap items-center whitespace-nowrap pb-4 md:mb-4 mb-2">
          <li className="inline-flex items-center">
            <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="/">
              Home
            </Link>
            <Icon icon="lucide:chevron-right" className="mx-2" />
          </li>
          <li className="inline-flex items-center">
            <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="/listings/events">
              Concerts
            </Link>
            <Icon icon="lucide:chevron-right" className="mx-2" />
          </li>
          <li className="inline-flex items-center text-sm font-medium text-default-400 truncate" aria-current="page">
            Summer Jazz Festival 2024
          </li>
        </ol>
        <div className="grid lg:grid-cols-3 md:grid-cols-12 grid-cols-1 gap-6 lg:pb-12">
          <div className="lg:col-span-1 md:col-span-5 col-span-1">
            <div>
              <Image src={main} alt="Image" className="rounded-md" />
            </div>
            <div className="pt-4 mt-4 flex flex-col gap-1">
              <div className="text-xs">120 tickets available</div>
              <div className="text-2xl text-info font-semibold">$49.00 - $199.00</div>
              <div className="flex gap-4 pt-2 mt-1">
                <div className="lg:w-70 w-auto">
                  <button type="button" className="w-full bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-md">
                    Buy ticket now
                  </button>
                </div>
                <div className="hs-dropdown relative inline-flex">
                  <button
                    type="button"
                    className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md border border-default-300 size-12 text-default-600 focus:outline-hidden hover:border-default-900 
                                  dark:text-white"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Share"
                  >
                    <Share2 className="size-3.5" />
                  </button>
                  <div
                    className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 
                                      min-w-40 bg-body-bg border border-border shadow-custom rounded-md mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <div className="p-2.5 space-y-0.5">
                      <Link
                        href=""
                        className="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                      >
                        <Icon icon="tabler:brand-facebook-filled" className="text-base" />
                        Facebook
                      </Link>
                      <Link
                        href=""
                        className="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                      >
                        <Icon icon="tabler:brand-instagram" className="text-base" />
                        Instagram
                      </Link>
                      <Link
                        href=""
                        className="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                      >
                        <Icon icon="tabler:brand-linkedin" className="text-base" />
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
                <button type="button" className="inline-flex items-center justify-center size-12 border border-default-300 text-default-600 dark:text-white rounded-md hover:border-default-900">
                  <Icon icon="lucide:heart" className="text-lg" />
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-7 col-span-1">
            <div className="lg:w-3xl w-full md:ps-6 lg:ps-0 lg:ms-auto">
              <div className="flex items-center gap-3 text-sm pb-2 mb-1">
                Festival
                <Circle className="size-0.75 fill-default-800 text-default-800" />
                Music
                <Circle className="size-0.75 fill-default-800 text-default-800" />
                Concert
                <Circle className="size-0.75 fill-default-800 text-default-800" />
                Dance
                <Circle className="size-0.75 fill-default-800 text-default-800" />
                Art
              </div>
              <h1 className="text-default-900 lg:text-4.8xl md:text-3.5xl text-2.5xl font-bold mb-6">Summer Jazz Festival 2024</h1>
              <ul className="flex flex-col gap-3 text-sm md:mb-12 mb-10">
                <li className="flex items-center">
                  <Calendar className="size-4 me-2" />
                  Aug 15 - Aug 17 19:00
                </li>
                <li className="flex flex-wrap lg:gap-3.5 gap-1">
                  <div className="flex items-center me-2">
                    <MapPin className="size-4 me-2" />
                    Royal Festival Hall, G. Washington str. 64, Chicago
                  </div>
                  <div>
                    <Link href="" className="flex items-center">
                      <Map className="size-4 me-2" />
                      <span className="inline-flex items-center font-medium text-default-800 hover:underline">Show on the map</span>
                    </Link>
                  </div>
                </li>
              </ul>
              <div className="p-6 rounded-md bg-default-100 dark:bg-white/3">
                <div className="flex flex-wrap lg:justify-between justify-center gap-4 items-center">
                  <div className="flex gap-2 items-center">
                    <svg className="text-info shrink-0" xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor">
                      <path d="M16 22.4a6.4 6.4 0 0 1 0-12.8 6.4 6.4 0 1 1 0 12.8zM3.653 18.586c-1.834.317-3.092 2.057-2.388 3.75a15.56 15.56 0 0 0 4.585 6.115c2.908 2.353 6.575 3.61 10.343 3.546s7.388-1.447 10.21-3.898a15.53 15.53 0 0 0 4.365-6.268c.644-1.716-.675-3.412-2.52-3.666s-3.501 1.064-4.412 2.659a8.94 8.94 0 0 1-1.903 2.316c-1.619 1.406-3.697 2.2-5.858 2.236s-4.266-.684-5.934-2.034a8.96 8.96 0 0 1-1.984-2.249c-.967-1.563-2.669-2.824-4.504-2.506zm28.223-.994A15.37 15.37 0 0 0 32 15.638C32 7.001 24.837 0 16 0S0 7.001 0 15.638a15.4 15.4 0 0 0 .203 2.495 5.01 5.01 0 0 1 3.121-1.899c1.34-.231 2.559.087 3.589.681-.061-.417-.092-.844-.092-1.277 0-4.955 4.11-8.972 9.18-8.972s9.18 4.017 9.18 8.972a8.83 8.83 0 0 1-.053.967c1.008-.629 2.215-.988 3.563-.803a5.02 5.02 0 0 1 3.186 1.79z" />
                    </svg>
                    <div className="flex items-center gap-2 ps-1">
                      <div className="font-semibold text-default-900">By Monte Fest</div>
                      <Circle className="size-0.75 fill-default-800 text-default-800" />
                      <div className="text-xs">1265 Followers</div>
                    </div>
                  </div>
                  <button type="button" className="text-sm bg-default-800 dark:bg-default-900 text-body-bg py-2.5 px-5 font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-default-950 hover:dark:bg-default-800">
                    Follow
                  </button>
                </div>
              </div>
              <h2 className="md:mt-12 mt-10 mb-4 text-xl text-default-900 font-semibold">Event Description</h2>
              <p className="text-sm mb-4">Summer Jaz Festival will immerse the audience in an unrivaled atmosphere, performing the best hits of legendary artists: Frank Sinatra, Tony Bennett, Nat King Cole, Louis Armstrong and many others.</p>
              <p className="text-sm mb-4">
                The vocalist of the quintet is the talented Adam Sparsky, whose voice transports listeners to the era of great jazz. He is complemented by skillful musicians: Rhythmic Resonance Group on saxophone, Nostalgic Jazzphonic Quartet on keys, Chromatic Odyssey Assembly
                on drums. We invite you to an evening of unsurpassed musical emotions and impressions.
              </p>
              <h2 className="md:mt-12 mt-10 mb-4 text-xl text-default-900 font-semibold">Participants</h2>
              <ul className="flex gap-2 pb-4 mb-2">
                <li>
                  <Link href="" className="border border-dark bg-default-50 inline-flex rounded-full dark:border-white text-default-900 py-2.5 px-5 text-sm font-medium">
                    Aug 15
                  </Link>
                </li>
                <li>
                  <Link href="" className="border border-default-200 inline-flex dark:border-white/20 transition-all duration-300 hover:border-dark rounded-full hover:dark:border-white text-default-900 py-2.5 px-5 text-sm font-medium">
                    Aug 16
                  </Link>
                </li>
                <li>
                  <Link href="" className="border border-default-200 inline-flex dark:border-white/20 transition-all duration-300 hover:border-dark rounded-full hover:dark:border-white text-default-900 py-2.5 px-5 text-sm font-medium">
                    Aug 17
                  </Link>
                </li>
              </ul>
              <Swiper
                slidesPerView={1}
                spaceBetween={24}
                autoHeight={true}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                breakpoints={{
                  450: { slidesPerView: 2 },
                  600: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                modules={[Pagination]}
                wrapperClass="lg:mb-0 mb-12"
              >
                <SwiperSlide className="h-auto group">
                  <Link href=""></Link>
                  <div className="bg-body-bg rounded-md">
                    <Link href="">
                      <div className="rounded-md size-full overflow-hidden">
                        <Image src={participants01} alt="Image" className="size-full object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-md" />
                      </div>
                      <div className="text-sm pt-2 mt-1">19:00</div>
                    </Link>
                    <h3 className="mt-1 text-default-900 font-semibold">
                      <Link href=""></Link>
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="">
                        Rhythmic Resonance Group
                      </Link>
                    </h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide h-auto group">
                  <Link href=""></Link>
                  <div className="bg-body-bg rounded-md">
                    <Link href="">
                      <div className="rounded-md size-full overflow-hidden">
                        <Image src={participants02} alt="Image" className="size-full object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-md" />
                      </div>
                      <div className="text-sm pt-2 mt-1">20:00</div>
                    </Link>
                    <h3 className="mt-1 text-default-900 font-semibold">
                      <Link href=""></Link>
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="">
                        Chromatic Odyssey Assembly
                      </Link>
                    </h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide h-auto group">
                  <Link href=""></Link>
                  <div className="bg-body-bg rounded-md">
                    <Link href="">
                      <div className="rounded-md size-full overflow-hidden">
                        <Image src={participants03} alt="Image" className="size-full object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-md" />
                      </div>
                      <div className="text-sm pt-2 mt-1">21:30</div>
                    </Link>
                    <h3 className="mt-1 text-default-900 font-semibold">
                      <Link href=""></Link>
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="">
                        Nostalgic Jazzphonic Quartet
                      </Link>
                    </h3>
                  </div>
                </SwiperSlide>

                <div className="swiper-pagination static mt-3" />
              </Swiper>
              <h2 className="md:mt-12 mt-10 mb-4 text-xl text-default-900 font-semibold">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <Accessibility className="size-5 me-1" />
                  Accessible ticket
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="size-5 me-1" />
                  Photo &amp; video
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="size-5 me-1" />
                  Free WiFi
                </div>
                <div className="flex items-center gap-2">
                  <CircleParking className="size-5 me-1" />
                  Free parking
                </div>
                <div className="flex items-center gap-2">
                  <CigaretteOff className="size-5 me-1" />
                  Non-smoking
                </div>
                <div className="flex items-center gap-2">
                  <Wine className="size-5 me-1" />
                  Bar area
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Concert
