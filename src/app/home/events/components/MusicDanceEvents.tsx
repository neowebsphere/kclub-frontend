'use client'
import event22 from '@/assets/img/listings/events/22.jpg'
import event23 from '@/assets/img/listings/events/23.jpg'
import event24 from '@/assets/img/listings/events/24.jpg'
import event25 from '@/assets/img/listings/events/25.jpg'
import event26 from '@/assets/img/listings/events/26.jpg'
import event27 from '@/assets/img/listings/events/27.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type MusicDanceEventType = {
  id: number
  title: string
  date: string
  time: string
  location: string
  image: StaticImageData
  href: string
}

const musicDanceEvents: MusicDanceEventType[] = [
  {
    id: 1,
    title: 'Parallax Ballet Show',
    date: 'Dec 19',
    time: '11:30',
    location: 'Los Angeles',
    image: event23,
    href: '/listings/entry-events',
  },
  {
    id: 2,
    title: 'Classic Music Evening',
    date: 'Nov 21',
    time: '14:00',
    location: 'New York',
    image: event24,
    href: '/listings/entry-events',
  },
  {
    id: 3,
    title: 'Singers on Stage',
    date: 'Nov 15',
    time: '20:00',
    location: 'Dallas',
    image: event25,
    href: '/listings/entry-events',
  },
  {
    id: 4,
    title: 'Street Dance Showdown',
    date: 'Oct 17',
    time: '18:30',
    location: 'Phoenix',
    image: event26,
    href: '/listings/entry-events',
  },
  {
    id: 5,
    title: 'Elegant Ballet Performance',
    date: 'Sep 28',
    time: '16:00',
    location: 'Chicago',
    image: event27,
    href: '/listings/entry-events',
  },
  {
    id: 6,
    title: 'Philadelphia Open Tennis Tournament',
    date: 'Jul 14',
    time: '16:00',
    location: 'Philadelphia',
    image: event22,
    href: '/listings/entry-events',
  },
]

const MusicDanceEvents = () => {
  return (
    <section className="lg:pb-24 md:pb-14 pb-8">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Music & Dance</h2>
          <div className="inline-flex items-center gap-2">
            <Link href="/listings/events" className="hover:underline flex items-center py-2 font-semibold">
              View all
              <Icon icon="lucide:chevron-right" className="size-4.5 ms-1" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            loop
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '#theater-prev',
              nextEl: '#theater-next',
            }}
            breakpoints={{
              500: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
              1100: { slidesPerView: 4 },
            }}
            className="music-dance-swiper"
          >
            {musicDanceEvents.map((event) => (
              <SwiperSlide key={event.id} className="h-auto">
                <div className="group h-full">
                  <Link href={event.href}>
                    <div className="bg-body-bg rounded-md">
                      <div className="rounded-md size-full overflow-hidden relative">
                        <Image src={event.image} alt={event.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-md" />

                        <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                          <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center">
                            <Icon icon="lucide:heart" />
                          </button>
                        </div>
                      </div>

                      <div className="pt-4">
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

                        <h3 className="text-xl font-semibold text-default-900 mb-3 pt-1">
                          <span className="group-hover:underline">{event.title}</span>
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" id="theater-prev" aria-label="Prev" className="size-10 flex items-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full justify-center absolute top-2/5 lg:start-0 start-9 -translate-x-1/2 z-10 -mt-5">
            <Icon icon="lucide:chevron-left" className="size-4.5" />
          </button>

          <button type="button" id="theater-next" aria-label="Next" className="size-10 flex items-center justify-center border border-default-300 bg-body-bg dark:border-white/20 rounded-full absolute top-2/5 lg:start-full end-0 -translate-x-1/2 z-10 -mt-5">
            <Icon icon="lucide:chevron-right" className="size-4.5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default MusicDanceEvents
