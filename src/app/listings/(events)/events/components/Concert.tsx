import events01 from '@/assets/img/listings/events/01.jpg'
import events02 from '@/assets/img/listings/events/02.jpg'
import events03 from '@/assets/img/listings/events/03.jpg'
import events04 from '@/assets/img/listings/events/04.jpg'
import events05 from '@/assets/img/listings/events/05.jpg'
import events06 from '@/assets/img/listings/events/06.jpg'
import events07 from '@/assets/img/listings/events/07.jpg'
import events08 from '@/assets/img/listings/events/08.jpg'
import events09 from '@/assets/img/listings/events/09.jpg'
import events10 from '@/assets/img/listings/events/10.jpg'
import events11 from '@/assets/img/listings/events/11.jpg'
import events12 from '@/assets/img/listings/events/12.jpg'
import Flatpickr from '@/components/wrappers/Flatpickr'
import { Icon } from '@iconify/react'
import { ArrowUpDown } from 'lucide-react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type EventType = {
  id: number
  image: StaticImageData
  date: string
  time: string
  category: string
  title: string
  location: string
  price: number
}

const eventsData: EventType[] = [
  {
    id: 1,
    image: events01,
    date: 'Dec 5',
    time: '20:30',
    category: 'Concert',
    title: 'Paradox Band',
    location: 'Chicago',
    price: 32,
  },
  {
    id: 2,
    image: events02,
    date: 'Nov 19',
    time: '15:00',
    category: 'Concert',
    title: 'Laura Sparski - Cello',
    location: 'Chicago',
    price: 27,
  },
  {
    id: 3,
    image: events03,
    date: 'Oct 16',
    time: '22:00',
    category: 'Concert',
    title: 'Sunset Disco Party',
    location: 'Chicago',
    price: 45,
  },
  {
    id: 4,
    image: events04,
    date: 'Oct 9',
    time: '21:00',
    category: 'Concert',
    title: 'Nostalgic Jazzphonic Quartet',
    location: 'Chicago',
    price: 68,
  },
  {
    id: 5,
    image: events05,
    date: 'Dec 14',
    time: '18:00',
    category: 'Concert',
    title: 'Music Festival',
    location: 'Chicago',
    price: 50,
  },
  {
    id: 6,
    image: events06,
    date: 'Sep 23',
    time: '21:00',
    category: 'Concert',
    title: 'Jazz Night Event',
    location: 'Chicago',
    price: 42,
  },
  {
    id: 7,
    image: events07,
    date: 'Sep 17',
    time: '20:00',
    category: 'Concert',
    title: 'Local Rock Band',
    location: 'Chicago',
    price: 29,
  },
  {
    id: 8,
    image: events08,
    date: 'Oct 10',
    time: '21:00',
    category: 'Concert',
    title: 'John Horrison - Guitar Solo',
    location: 'Chicago',
    price: 60,
  },
  {
    id: 9,
    image: events09,
    date: 'Sep 24',
    time: '19:00',
    category: 'Concert',
    title: 'Melisa Martin in Chicago',
    location: 'Chicago',
    price: 75,
  },
  {
    id: 10,
    image: events10,
    date: 'Aug 18',
    time: '21:00',
    category: 'Concert',
    title: 'Summer Music Festival 2024',
    location: 'Chicago',
    price: 53,
  },
  {
    id: 11,
    image: events11,
    date: 'Dec 12',
    time: '17:00',
    category: 'Concert',
    title: 'Winter Fest',
    location: 'Chicago',
    price: 36,
  },
  {
    id: 12,
    image: events12,
    date: 'Aug 25',
    time: '21:30',
    category: 'Concert',
    title: 'DJ Hardwall - Disco Party',
    location: 'Chicago',
    price: 49,
  },
]

const categories = ['All', 'Pop', 'Dance', 'Jazz', 'Blues', 'Disco', 'Techno', 'Hiphop']

const Concert = () => {
  return (
    <section className="lg:pt-25 pt-22 md:pb-14">
      <div className="container">
        <ol className="flex flex-wrap items-center whitespace-nowrap pb-2 lg:mb-4 mb-2">
          <li className="inline-flex items-center">
            <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900" href="/">
              Home
            </Link>

            <Icon icon="lucide:chevron-right" className="mx-2" />
          </li>

          <li className="inline-flex items-center text-sm font-medium text-default-500/80 truncate" aria-current="page">
            Concerts
          </li>
        </ol>

        <div>
          <h1 className="mb-6 lg:text-4.5xl md:text-26 text-2xl font-semibold text-default-900">Concerts</h1>

          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="relative">
              <Icon icon="lucide:menu" className="absolute top-1/2 start-0 -translate-y-1/2 ms-3" />

              <select aria-label="Concert category" className="w-full bg-transparent ps-10 border text-sm border-default-300 dark:border-white/20 rounded-md text-default-400">
                <option>Concerts</option>
                <option>Sports</option>
                <option>Hobbies</option>
                <option>Disco</option>
                <option>Conference</option>
                <option>Cinema</option>
              </select>
            </div>

            <div className="relative">
              <Icon icon="lucide:map-pin" className="absolute top-1/2 start-0 -translate-y-1/2 ms-3" />

              <select aria-label="Location" className="w-full bg-transparent ps-10 border text-sm border-default-300 dark:border-white/20 rounded-md text-default-400">
                <option>Location</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
            </div>

            <div className="relative">
              <Icon icon="lucide:calendar" className="absolute top-1/2 start-0 -translate-y-1/2 ms-3" />

              <Flatpickr type="text" placeholder="Choose date" options={{ dateFormat: 'd M, Y', defaultDate: 'today' }} className="w-full bg-transparent ps-10 border border-default-300 text-sm dark:border-white/20 rounded-md text-default-400 placeholder-default-400" readOnly />
            </div>

            <div className="relative">
              <Icon icon="lucide:credit-card" className="absolute top-1/2 start-0 -translate-y-1/2 ms-3" />

              <select aria-label="Price" className="w-full bg-transparent text-sm ps-10 border border-default-300 dark:border-white/20 rounded-md text-default-400">
                <option>Price</option>
                <option>Free</option>
                <option>Up to $25</option>
                <option>$25 - $50</option>
                <option>$50 - $100</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="overflow-x-auto lg:w-full md:w-110 w-40 pb-2">
            <ul className="flex gap-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className={`inline-flex rounded-full py-2.5 px-5 text-sm font-medium transition-all duration-300 ${
                      index === 0 ? 'border border-dark bg-default-50 text-default-900 dark:border-white' : 'border border-default-200 dark:border-white/20 hover:border-dark hover:dark:border-white text-default-900'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-6 items-center pb-2">
            <div className="text-sm text-nowrap md:flex hidden">
              <span className="lg:block hidden me-1">Showing</span>
              {eventsData.length} results
            </div>

            <div className="relative w-40">
              <ArrowUpDown className="absolute top-1/2 start-0 -translate-y-1/2 z-10 size-4" />

              <select className="bg-transparent border-0 rounded-none text-sm ps-6 pe-1 w-full text-default-600">
                <option>Most popular</option>
                <option>Best rated</option>
                <option>Most recent</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {eventsData.map((event) => (
            <div key={event.id} className="group">
              <div className="bg-default-100 dark:bg-white/3 rounded-md">
                <Link href="/listings/entry-events">
                  <div className="rounded-md overflow-hidden relative">
                    <Image src={event.image} alt={event.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-md" />

                    <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                      <button type="button" className="size-8 bg-white text-dark rounded-full shadow flex items-center justify-center">
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
                    <li className="flex mx-n1">
                      <Icon icon="lucide:dot" className="text-base" />
                    </li>
                    <li>{event.category}</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-default-900 mb-3 pt-1">
                    <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/entry-events">
                      {event.title}
                    </Link>
                  </h3>

                  <div className="flex items-center text-sm">
                    <Icon icon="lucide:map-pin" className="me-1" />
                    {event.location}
                  </div>
                </div>

                <div className="pb-6 px-6 flex items-center justify-between">
                  <div className="text-info text-xl font-semibold">${event.price.toFixed(2)}</div>

                  <button type="button" className="rounded-md border border-default-900 dark:border-white text-default-900 dark:text-white py-2.5 px-5 text-sm font-medium inline-flex transition-all duration-300 hover:bg-default-900 hover:text-white">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav className="flex items-center gap-x-1 mt-8 pb-12" aria-label="Pagination">
          <div className="flex items-center gap-x-1">
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-default-200 text-default-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
              aria-current="page"
            >
              1
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              2
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              3
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              4
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              5
            </button>
            <div className="hs-tooltip inline-block">
              <button
                type="button"
                className="hs-tooltip-toggle group min-h-9.5 min-w-9.5 flex justify-center items-center text-default-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
              >
                <Icon icon="lucide:ellipsis" className="text-lg" />
              </button>
            </div>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              8
            </button>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Concert
