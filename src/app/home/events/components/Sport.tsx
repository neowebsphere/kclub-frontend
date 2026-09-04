'use client'
import img18 from '@/assets/img/listings/events/18.jpg'
import img19 from '@/assets/img/listings/events/19.jpg'
import img20 from '@/assets/img/listings/events/20.jpg'
import img21 from '@/assets/img/listings/events/21.jpg'
import img22 from '@/assets/img/listings/events/22.jpg'
import { Icon } from '@iconify/react'
import { ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type SportEvent = {
  date: string
  time: string
  location: string
  title: string
  image: StaticImageData
}

const eventData: SportEvent[] = [
  { date: 'Jul 8', time: '10:30', location: 'New York', title: 'Soccer Championship: Battle for the Cup', image: img18 },
  { date: 'Jun 29', time: '13:45', location: 'Boston', title: 'Boston Home Run Classic: Baseball', image: img19 },
  { date: 'May 17', time: '12:00', location: 'Chicago', title: 'Regional Motocross Championship', image: img20 },
  { date: 'Aug 23', time: '18:00', location: 'Houston', title: 'Boxing WBA Professional League 2024', image: img21 },
  { date: 'Jul 14', time: '16:00', location: 'Philadelphia', title: 'Philadelphia Open Tennis Tournament', image: img22 },
]

const Sport = () => {
  return (
    <>
      <section className="lg:py-24 md:pt-16 md:pb-14 pt-12 pb-8">
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
              loop={true}
              autoHeight={true}
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
              {eventData.map((item, idx) => (
                <SwiperSlide key={idx} className="h-auto group">
                  <Link href="/listings/entry-events"></Link>
                  <div className="bg-body-bg rounded-md">
                    <Link href="/listings/entry-events">
                      <div className="rounded-md size-full overflow-hidden relative">
                        <Image src={item.image} alt="Image" className="size-full object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-md" />
                        <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                          <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center">
                            <Icon icon="lucide:heart" />
                          </button>
                        </div>
                      </div>
                    </Link>
                    <div className="pt-4">
                      <Link href="/listings/entry-events">
                        <ul className="flex flex-wrap items-center gap-2 text-sm mb-3">
                          <li className="flex items-center">
                            <Icon icon="lucide:calendar" className="me-1" />
                            {item.date}
                          </li>
                          <li>{item.time}</li>
                          <li className="flex items-center">
                            <Icon icon="lucide:map-pin" className="me-1" />
                            {item.location}
                          </li>
                        </ul>
                      </Link>
                      <h3 className="text-xl font-semibold text-default-900 mb-3 pt-1">
                        <Link href="/listings/entry-events"></Link>
                        <Link className="group-hover:underline" href="/listings/entry-events">
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button type="button" className="size-10 flex items-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full justify-center me-1 absolute top-2/5 lg:start-0 start-9 -translate-x-1/2 z-10 -mt-5 end-full" id="sports-prev" aria-label="Prev">
              <Icon icon="lucide:chevron-left" className="size-4.5" />
            </button>
            <button type="button" className="size-10 flex items-center justify-center border border-default-300 bg-body-bg dark:border-white/20 rounded-full absolute top-2/5 lg:start-full end-0 -translate-x-1/2 z-10 -mt-5 " id="sports-next" aria-label="Next">
              <Icon icon="lucide:chevron-right" className="size-4.5" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sport
