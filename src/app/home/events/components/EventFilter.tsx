'use client'
import event03 from '@/assets/img/listings/events/03.jpg'
import event13 from '@/assets/img/listings/events/13.jpg'
import event14 from '@/assets/img/listings/events/14.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type FilterOption = {
  label: string
  value: string
}

type EventItem = {
  id: number
  image: StaticImageData
  date: string
  time: string
  category: string
  title: string
  location: string
  price: string
  url: string
}

const categoryOptions: FilterOption[] = [
  { label: 'Concerts', value: 'Concerts' },
  { label: 'Sports', value: 'Sports' },
  { label: 'Hobbies', value: 'Hobbies' },
  { label: 'Disco', value: 'Disco' },
  { label: 'Conference', value: 'Conference' },
  { label: 'Cinema', value: 'Cinema' },
]

const locationOptions: FilterOption[] = [
  { label: 'New York', value: 'New York' },
  { label: 'Los Angeles', value: 'Los Angeles' },
  { label: 'Chicago', value: 'Chicago' },
  { label: 'Houston', value: 'Houston' },
  { label: 'Phoenix', value: 'Phoenix' },
  { label: 'Philadelphia', value: 'Philadelphia' },
  { label: 'San Antonio', value: 'San Antonio' },
  { label: 'San Diego', value: 'San Diego' },
  { label: 'Dallas', value: 'Dallas' },
  { label: 'San Jose', value: 'San Jose' },
]

const priceOptions: FilterOption[] = [
  { label: 'Free', value: 'Free' },
  { label: 'Up to $25', value: 'Up to $25' },
  { label: '$25 - $50', value: '$25 - $50' },
  { label: '$50 - $100', value: '$50 - $100' },
  { label: '$100 - $200', value: '$100 - $200' },
  { label: 'Over $200', value: 'Over $200' },
]

const sortOptions: FilterOption[] = [
  { label: 'Most popular', value: 'Most popular' },
  { label: 'Best rated', value: 'Best rated' },
  { label: 'Most recent', value: 'Most recent' },
]

const events: EventItem[] = [
  {
    id: 1,
    image: event13,
    date: 'Sep 23',
    time: '18:00',
    category: 'Conference',
    title: 'Chicago Business Conference',
    location: 'Chicago',
    price: '$75.00',
    url: '/listings/entry-events',
  },
  {
    id: 2,
    image: event14,
    date: 'Nov 8',
    time: '17:30',
    category: 'Concert',
    title: 'Classic Music Evening',
    location: 'Boston',
    price: '$60.00',
    url: '/listings/entry-events',
  },
  {
    id: 3,
    image: event03,
    date: 'Oct 16',
    time: '22:00',
    category: 'Disco',
    title: 'Sunset Disco Party',
    location: 'San Francisco',
    price: '$60.00',
    url: '/listings/entry-events',
  },
]

const EventFilter = () => {
  return (
    <section className="lg:py-28 md:py-18 py-12 bg-default-100 dark:bg-white/3">
      <div className="container">
        <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900 mb-8">Choose Your Event</h2>

        <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 mb-8">
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Icon icon="lucide:menu" className="absolute top-1/2 start-0 -translate-y-1/2 ms-3 text-default-500" />

                <select aria-label="Category select" className="w-full bg-transparent ps-10 border border-default-300 dark:border-white/20 rounded-md text-default-400">
                  <option value="">Category</option>

                  {categoryOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Icon icon="lucide:map-pin" className="absolute top-1/2 start-0 -translate-y-1/2 ms-3 text-default-500" />

                <select aria-label="Location select" className="w-full bg-transparent ps-10 border border-default-300 dark:border-white/20 rounded-md text-default-400">
                  <option value="">Location</option>

                  {locationOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Icon icon="lucide:calendar" className="absolute top-1/2 start-0 -translate-y-1/2 ms-3 text-default-500" />

                <input type="date" className="w-full bg-transparent ps-10 border border-default-300 text-sm dark:border-white/20 rounded-md text-default-400" />
              </div>

              <div className="relative">
                <Icon icon="lucide:credit-card" className="absolute top-1/2 start-0 -translate-y-1/2 ms-3 text-default-500" />

                <select aria-label="Price select" className="w-full bg-transparent ps-10 border border-default-300 dark:border-white/20 rounded-md text-default-400">
                  <option value="">Price</option>

                  {priceOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="flex items-center lg:justify-end gap-4">
              <span className="text-sm font-semibold text-default-900 hidden sm:inline">Sort by :</span>

              <div className="relative w-40">
                <Icon icon="lucide:arrow-up-down" className="absolute top-1/2 start-0 -translate-y-1/2 text-default-500" />

                <select className="bg-transparent border-0 rounded-none text-sm ps-6 pe-1 w-full text-default-600">
                  {sortOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="px-2 pb-12"
          wrapperClass="lg:mb-0 mb-12"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} className="h-auto group">
              <div className="bg-body-bg rounded-md h-full">
                <Link href={event.url}>
                  <div className="rounded-md overflow-hidden relative">
                    <Image src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-md" />
                    <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                      <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center">
                        <Icon icon="lucide:heart" />
                      </button>
                    </div>
                  </div>
                </Link>

                <div className="md:p-6 p-4">
                  <ul className="flex flex-wrap items-center gap-2 text-sm mb-3">
                    <li className="flex items-center">
                      <Icon icon="lucide:calendar" className="me-1" />
                      {event.date}
                    </li>
                    <li>{event.time}</li>
                    <li>
                      <Icon icon="lucide:dot" className="text-base" />
                    </li>
                    <li>{event.category}</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-default-900 mb-3 pt-1">
                    <Link href={event.url} className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300">
                      {event.title}
                    </Link>
                  </h3>
                  <div className="flex items-center text-sm">
                    <Icon icon="lucide:map-pin" className="me-1" />
                    {event.location}
                  </div>
                </div>

                <div className="pb-6 px-6 flex items-center justify-between">
                  <div className="text-info text-xl font-semibold">{event.price}</div>
                  <button type="button" className="rounded-md border border-default-900 dark:border-white text-default-900 dark:text-white py-2.5 px-5 text-sm font-medium inline-flex transition-all duration-300 ease-in-out hover:bg-default-900 hover:text-white">
                    Book now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center lg:mt-10 md:mt-8 mt-6">
          <Link href="/listings/events" className="py-3.5 px-6 rounded-md bg-primary text-white text-sm font-semibold inline-flex items-center transition-all duration-300 ease-in-out hover:bg-primary-hover">
            View all 32 events
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EventFilter
