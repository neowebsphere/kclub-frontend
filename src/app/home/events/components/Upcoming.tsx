'use client'
import event01 from '@/assets/img/home/events/events/01.jpg'
import event02 from '@/assets/img/home/events/events/02.jpg'
import event03 from '@/assets/img/home/events/events/03.jpg'
import event04 from '@/assets/img/home/events/events/04.jpg'
import event06 from '@/assets/img/home/events/events/06.jpg'
import event07 from '@/assets/img/home/events/events/07.jpg'
import event08 from '@/assets/img/home/events/events/08.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Controller, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type EventItemType = {
  id: number
  title: string
  image: StaticImageData
  date: string
  time: string
  type: string
  price: string
  href: string
}

type EventGroupType = {
  id: number
  day: string
  month: string
  year: string
  events: EventItemType[]
}

const upcomingEvents: EventGroupType[] = [
  {
    id: 1,
    day: '28',
    month: 'November',
    year: '2024',
    events: [
      {
        id: 1,
        title: 'Christian in Chicago',
        image: event01,
        date: 'Nov 28',
        time: '15:00',
        type: 'Online event',
        price: 'Free',
        href: '/listings/entry-events',
      },
      {
        id: 2,
        title: 'Motivational Podcast',
        image: event02,
        date: 'Nov 28',
        time: '17:00',
        type: 'Online event',
        price: '$15.00',
        href: '/listings/entry-events',
      },
      {
        id: 3,
        title: 'Sunday Online Meditation',
        image: event03,
        date: 'Nov 28',
        time: '08:30',
        type: 'Online event',
        price: '$23.00',
        href: '/listings/entry-events',
      },
      {
        id: 4,
        title: 'Morning Stretching & Exercise',
        image: event04,
        date: 'Nov 28',
        time: '10:00',
        type: 'Online event',
        price: '$12.00',
        href: '/listings/entry-events',
      },
    ],
  },
  {
    id: 2,
    day: '29',
    month: 'November',
    year: '2024',
    events: [
      {
        id: 5,
        title: 'Virtual Taste of Chicago',
        image: event01,
        date: 'Nov 29',
        time: '13:45',
        type: 'Online event',
        price: '$10.00',
        href: '/listings/entry-events',
      },
      {
        id: 6,
        title: 'Digital Business Summit',
        image: event06,
        date: 'Nov 29',
        time: '16:00',
        type: 'Online event',
        price: '$40.00',
        href: '/listings/entry-events',
      },
      {
        id: 7,
        title: 'Virtual City Art Expo',
        image: event07,
        date: 'Nov 29',
        time: '12:00',
        type: 'Online event',
        price: 'Free',
        href: '/listings/entry-events',
      },
      {
        id: 8,
        title: 'Fitness Fest Online',
        image: event08,
        date: 'Nov 29',
        time: '15:30',
        type: 'Online event',
        price: '$25.00',
        href: '/listings/entry-events',
      },
    ],
  },
]

const Upcoming = () => {
  return (
    <section className="lg:pt-16 pb-12 pt-0 mb-4">
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-6 gap-2">
          <div className="lg:col-span-3 col-span-1">
            <div className="lg:block flex justify-between">
              <Swiper
                modules={[Navigation, Controller]}
                spaceBetween={32}
                grabCursor={true}
                navigation={{
                  prevEl: '#online-prev',
                  nextEl: '#online-next',
                }}
                className="w-full"
              >
                {upcomingEvents.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="lg:text-6xl md:text-5xl text-4xl font-bold text-body-bg [text-shadow:1px_1px_0_#333d4c,-1px_1px_0_#333d4c,-1px_-1px_0_#333d4c,1px_-1px_0_#333d4c] dark:[text-shadow:1px_1px_0_#e0e5eb,-1px_1px_0_#e0e5eb,-1px_-1px_0_#e0e5eb,1px_-1px_0_#e0e5eb]">
                      {item.day}
                    </div>
                    <div className="text-secondary">
                      {item.month}, {item.year}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex gap-2 mt-6 md:justify-start justify-center">
                <button type="button" id="online-prev" aria-label="Previous" className="size-10 flex items-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full justify-center">
                  <Icon icon="lucide:chevron-left" className="size-4.5" />
                </button>

                <button type="button" id="online-next" aria-label="Next" className="size-10 flex items-center justify-center border border-default-300 bg-body-bg dark:border-white/20 rounded-full">
                  <Icon icon="lucide:chevron-right" className="size-4.5" />
                </button>
              </div>
            </div>

            <div className="lg:mt-12 mt-4 lg:pt-12 lg:block flex justify-between">
              <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold mb-4">Upcoming Online Events</h2>

              <div className="inline-flex items-center gap-2">
                <Link href="/listings/events" className="hover:underline flex items-center py-2 font-semibold">
                  View all
                  <Icon icon="lucide:chevron-right" className="size-4.5 ms-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:block hidden">
            <div className="h-full bg-default-200 w-0.25 dark:bg-white/20" />
          </div>

          <div className="lg:col-span-8 col-span-1">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '#online-prev',
                nextEl: '#online-next',
              }}
              spaceBetween={24}
              className="w-full"
            >
              {upcomingEvents.map((group) => (
                <SwiperSlide key={group.id}>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    {group.events.map((event) => (
                      <div key={event.id} className="group">
                        <div className="bg-default-100 dark:bg-white/3 rounded-md overflow-hidden">
                          <Link href={event.href}>
                            <div className="rounded-md overflow-hidden relative">
                              <Image src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                              <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                                <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center">
                                  <Icon icon="lucide:heart" />
                                </button>
                              </div>
                            </div>
                          </Link>

                          <div className="pt-6 px-6 pb-4">
                            <ul className="flex flex-wrap items-center gap-2 text-sm mb-3">
                              <li className="flex items-center">
                                <Icon icon="lucide:calendar" className="me-1" />
                                {event.date}
                              </li>
                              <li>{event.time}</li>
                              <li className="flex mx-n1">
                                <Icon icon="lucide:dot" className="text-base" />
                              </li>
                              <li>{event.type}</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-default-900">
                              <Link href={event.href} className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                                {event.title}
                              </Link>
                            </h3>
                          </div>
                          <div className="pt-1 px-6 pb-4">
                            <div className="text-info text-xl font-semibold">{event.price}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upcoming
