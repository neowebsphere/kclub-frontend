'use client'
import events01 from '@/assets/img/home/city-guide/events/01.jpg'
import events02 from '@/assets/img/home/city-guide/events/02.jpg'
import events03 from '@/assets/img/home/city-guide/events/03.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type EventType = {
  image: StaticImageData
  date: string
  time: string
  title: string
  price: string
}

const events: EventType[] = [
  { image: events01, date: 'Nov 15', time: '19:00', title: 'Simon Blues Concert', price: '$60' },
  { image: events02, date: 'Oct 28', time: '21:00', title: 'The Concert in Palau Sant Jordi', price: '$45' },
  { image: events03, date: 'Sep 7', time: '18:30', title: 'Dance About Passion: Tango Show', price: '$50' },
]

const UpcomingEvent = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between gap-6 mb-10">
          <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Upcoming events in Barcelona</h2>

          <div className="flex gap-2">
            <button type="button" id="events-prev" aria-label="Prev" className="size-10 flex items-center justify-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full">
              <Icon icon="lucide:chevron-left" className="size-4.5" />
            </button>

            <button type="button" id="events-next" aria-label="Next" className="size-10 flex items-center justify-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full">
              <Icon icon="lucide:chevron-right" className="size-4.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative py-3 lg:ms-77 ms-4">
        <div className="relative my-3">
          <Swiper
            spaceBetween={24}
            loop
            modules={[Navigation]}
            navigation={{
              prevEl: '#events-prev',
              nextEl: '#events-next',
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 'auto' },
            }}
          >
            {events.map((event, idx) => (
              <SwiperSlide key={idx} className="max-w-241.5">
                <div className="relative w-full rounded overflow-hidden">
                  <div className="bg-default-100 dark:bg-white/3">
                    <Image src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="absolute inset-0 flex items-end lg:p-12">
                    <div className="lg:p-3 lg:m-3 md:m-4 md:p-6 p-2 m-4">
                      <ul className="text-sm mb-2 text-white/70 flex items-center gap-3">
                        <li className="flex items-center gap-1.5">
                          <Icon icon="lucide:calendar" className="size-4" />
                          {event.date}
                        </li>

                        <li className="flex items-center gap-1.5">
                          <Icon icon="lucide:clock" className="size-4" />
                          {event.time}
                        </li>
                      </ul>

                      <h3 className="lg:mb-8 md:mb-6 mb-4 lg:text-2.5xl md:text-2xl text-xl text-white font-semibold">{event.title}</h3>

                      <Link href="" className="inline-flex items-center gap-1 bg-primary text-white md:px-6 md:py-3.5 py-2.5 px-5 rounded-full font-semibold md:text-base text-sm transition-all duration-300 hover:bg-primary-hover">
                        Tickets from {event.price}
                        <Icon icon="lucide:chevron-right" className="text-xl -me-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="container absolute top-0 h-[calc(100%+64px)] -mt-8">
            <div className="relative h-full mx-3">
              <div className="absolute top-0 start-0 w-full h-full border border-default-300 dark:border-white/20 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvent
