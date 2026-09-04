'use client'
import event18 from '@/assets/img/listings/events/18.jpg'
import event19 from '@/assets/img/listings/events/19.jpg'
import event21 from '@/assets/img/listings/events/21.jpg'
import event22 from '@/assets/img/listings/events/22.jpg'
import { Icon } from '@iconify/react'
import { ChevronRight } from 'lucide-react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type SportEventType = {
  id: number
  image: StaticImageData
  date: string
  time: string
  location: string
  title: string
  href: string
}

const sportsEvents: SportEventType[] = [
  {
    id: 1,
    image: event18,
    date: 'Jul 8',
    time: '10:30',
    location: 'New York',
    title: 'Soccer Championship: Battle for the Cup',
    href: '/listings/entry-events',
  },
  {
    id: 2,
    image: event19,
    date: 'Jun 29',
    time: '13:45',
    location: 'Boston',
    title: 'Boston Home Run Classic: Baseball',
    href: '/listings/entry-events',
  },
  {
    id: 3,
    image: event18,
    date: 'May 17',
    time: '12:00',
    location: 'Chicago',
    title: 'Regional Motocross Championship',
    href: '/listings/entry-events',
  },
  {
    id: 4,
    image: event21,
    date: 'Aug 23',
    time: '18:00',
    location: 'Houston',
    title: 'Boxing WBA Professional League 2024',
    href: '/listings/entry-events',
  },
  {
    id: 5,
    image: event22,
    date: 'Jul 14',
    time: '16:00',
    location: 'Philadelphia',
    title: 'Philadelphia Open Tennis Tournament',
    href: '/listings/entry-events',
  },
]

const SportEvent = () => {
  return (
    <section className="pb-12 my-4">
      <div className="container">
        <div className="flex items-center justify-between md:mb-8 mb-6">
          <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Sports</h2>

          <div className="inline-flex items-center gap-2">
            <Link href="/listings/events" className="hover:underline flex items-center py-2 font-semibold">
              View all
              <ChevronRight className="size-4.5 ms-1" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoHeight
            navigation={{
              prevEl: '#sports-prev',
              nextEl: '#sports-next',
            }}
            breakpoints={{
              500: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
              1100: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
          >
            {sportsEvents.map((event) => (
              <SwiperSlide key={event.id} className="h-auto group">
                <div className="bg-body-bg rounded-md">
                  <Link href={event.href}>
                    <div className="rounded-md overflow-hidden relative">
                      <Image src={event.image} alt={event.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-md" />
                      <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                        <button type="button" className="size-8 bg-white text-dark rounded-full shadow flex items-center justify-center">
                          <Icon icon="lucide:heart" />
                        </button>
                      </div>
                    </div>
                  </Link>

                  <div className="pt-4">
                    <Link href={event.href}>
                      <ul className="flex flex-wrap items-center gap-2 text-sm mb-3">
                        <li className="flex items-center">
                          <Icon icon="lucide:calendar" className="me-1" />
                          {event.date}
                        </li>
                        <li>{event.time}</li>
                        <li className="flex items-center">
                          <Icon icon="lucide:map-pin" className="me-1" />
                          {event.location}
                        </li>
                      </ul>
                    </Link>

                    <h3 className="text-xl font-semibold text-default-900 mb-3 pt-1">
                      <Link href={event.href} className="group-hover:underline">
                        {event.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" id="sports-prev" aria-label="Previous" className="size-10 flex items-center justify-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full absolute top-2/5 lg:start-0 start-10 -translate-x-1/2 z-10 -mt-5">
            <Icon icon="lucide:chevron-left" className="size-4.5" />
          </button>

          <button type="button" id="sports-next" aria-label="Next" className="size-10 flex items-center justify-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full absolute top-2/5 lg:start-full end-0 -translate-x-1/2 z-10 -mt-5">
            <Icon icon="lucide:chevron-right" className="size-4.5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SportEvent
