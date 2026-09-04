import event15 from '@/assets/img/listings/events/15.jpg'
import event16 from '@/assets/img/listings/events/16.jpg'
import event17 from '@/assets/img/listings/events/17.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Category = {
  id: number
  name: string
  active?: boolean
}

type EventItem = {
  id: number
  title: string
  date: string
  time: string
  category: string
  location: string
  price: string
  image: StaticImageData
  href: string
}

const categories: Category[] = [
  { id: 1, name: 'All', active: true },
  { id: 2, name: 'Theater & Cinema' },
  { id: 3, name: 'Sports' },
  { id: 4, name: 'Concert' },
]

const events: EventItem[] = [
  {
    id: 2,
    title: 'Winter Fest',
    date: 'Dec 26',
    time: '19:00',
    category: 'Concert',
    location: 'Chicago',
    price: '$32.00',
    image: event16,
    href: '/listings/entry-events',
  },
  {
    id: 3,
    title: 'Parallax Show Ballet',
    date: 'Oct 15',
    time: '19:00',
    category: 'Theater & Cinema',
    location: 'Chicago',
    price: '$56.00',
    image: event17,
    href: '/listings/entry-events',
  },
]

const Event = () => {
  return (
    <section className="lg:py-12 md:py-8 pb-8 my-4">
      <div className="container">
        <div className="flex md:items-center items-baseline-last justify-between gap-4 text-nowrap mb-8 md:flex-nowrap flex-wrap">
          <div className="md:flex items-center md:gap-12 gap-4 md:flex-nowrap flex-wrap">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900 md:mb-0 mb-6">Popular Near You</h2>

            <div className="overflow-x-auto lg:w-full md:w-xs w-58 md:pb-0 pb-4">
              <ul className="flex gap-2">
                {categories.map((item) => (
                  <li key={item.id}>
                    <Link
                      href=""
                      className={`inline-flex rounded-full py-2.5 px-5 text-sm font-medium transition-all duration-300 ${
                        item.active ? 'border border-dark bg-default-50 dark:border-white text-default-900' : 'border border-default-300 dark:border-white/20 hover:border-dark hover:dark:border-white text-default-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="inline-flex items-center gap-2">
            <Link href="" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
              View all
              <Icon icon="lucide:chevron-right" className="text-lg ms-1" />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="!h-full">
            <Link href="/listings/entry-cars" className="group"></Link>
            <div className="bg-default-100 dark:bg-white/3 rounded-md group lg:block md:flex block justify-between">
              <Link href="/listings/entry-cars" className="group">
                <div className="lg:order-1 order-2 rounded-md lg:w-full lg:h-full md:h-60.5 md:w-76.5 overflow-hidden relative">
                  <Image src={event15} alt="Image" className="lg:w-full lg:h-full md:h-60.5 md:w-76.5 object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-md" />
                  <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                    <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center">
                      <Icon icon="lucide:heart" />
                    </button>
                  </div>
                </div>
              </Link>
              <div className="lg:order-2 order-1">
                <Link href="/listings/entry-cars" className="group"></Link>
                <div className="md:p-6 p-4">
                  <Link href="/listings/entry-cars" className="group">
                    <ul className="flex flex-wrap items-center gap-2 text-sm mb-3">
                      <li className="flex items-center">
                        <Icon icon="lucide:calendar" className="me-1" />
                        Nov 7
                      </li>
                      <li>10:00</li>
                      <li className="flex mx-n1">
                        <Icon icon="lucide:dot" className="text-base" />
                      </li>
                      <li>Sports</li>
                    </ul>
                  </Link>
                  <h3 className="text-xl font-semibold text-default-900 mb-3 pt-1">
                    <Link href="/listings/entry-cars" className="group"></Link>
                    <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/entry-events">
                      Workout with Fitness Stars
                    </Link>
                  </h3>
                  <div className="flex items-center text-sm lg:mb-6">
                    <Icon icon="lucide:map-pin" className="me-1" />
                    Chicago
                  </div>
                </div>
                <div className="md:p-6 p-4 pt-0 flex items-center justify-between">
                  <div className="text-info text-xl font-semibold">$25.00</div>
                  <button
                    type="button"
                    className="rounded-md border border-default-900 dark:border-white text-default-900 dark:text-white py-2.5 px-5 text-sm font-semibold inline-flex relative z-2 ms-auto transition-all duration-300 ease-in-out hover:bg-default-900 hover:text-white"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            {events.map((event, index) => (
              <div key={event.id} className={`${index !== events.length - 1 ? 'mb-6' : ''} group`}>
                <div className="bg-default-100 dark:bg-white/3 rounded-md gap-10 md:flex block justify-between">
                  <div className="flex flex-col justify-between">
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
                        <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href={event.href}>
                          {event.title}
                        </Link>
                      </h3>

                      <div className="flex items-center text-sm">
                        <Icon icon="lucide:map-pin" className="me-1" />
                        {event.location}
                      </div>
                    </div>

                    <div className="md:p-6 p-4 pt-0 flex items-center justify-between">
                      <div className="text-info text-xl font-semibold">{event.price}</div>

                      <button
                        type="button"
                        className="rounded-md border border-default-900 dark:border-white text-default-900 dark:text-white py-2.5 px-5 text-sm font-semibold inline-flex relative z-2 ms-auto transition-all duration-300 ease-in-out hover:bg-default-900 hover:text-white"
                      >
                        Book now
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="rounded-md md:h-60.5 md:w-76.5 overflow-hidden relative">
                      <Image src={event.image} alt={event.title} className="md:h-60.5 md:w-76.5 object-cover transition-transform duration-500 group-hover:scale-110 rounded-md" />

                      <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                        <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center">
                          <Icon icon="lucide:heart" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Event
