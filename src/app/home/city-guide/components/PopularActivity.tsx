'use client'
import activity01 from '@/assets/img/listings/city-guide/v1/01.jpg'
import activity02 from '@/assets/img/listings/city-guide/v1/02.jpg'
import activity03 from '@/assets/img/listings/city-guide/v1/03.jpg'
import activity04 from '@/assets/img/listings/city-guide/v1/04.jpg'
import { ChevronRight, Heart, MapPin, Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type ActivityType = {
  id: number
  title: string
  category: string
  image: StaticImageData
  description: string
  rating: number
  reviews: number
  distance: string
  price: number
  href: string
}

const activitiesData: ActivityType[] = [
  {
    id: 1,
    title: 'Barcelona National Zoo',
    category: 'Entertainment',
    image: activity01,
    description: 'Discover fascinating animals and a fun-filled adventure for the whole family.',
    rating: 4.8,
    reviews: 127,
    distance: '5.7 km from center',
    price: 20,
    href: '/listings/single-entry-real-estate',
  },
  {
    id: 2,
    title: 'Mountain Lake Tour',
    category: 'Entertainment',
    image: activity02,
    description: 'Enjoy breathtaking views, fresh air, and a peaceful escape into the wilderness.',
    rating: 4.5,
    reviews: 214,
    distance: '13 km from center',
    price: 60,
    href: '/listings/single-entry-real-estate',
  },
  {
    id: 3,
    title: 'Jeep Tour with 4x4 Club',
    category: 'Entertainment',
    image: activity03,
    description: 'Explore the wild side of Barcelona in our reliable off-road 4x4 vehicle!',
    rating: 4.7,
    reviews: 185,
    distance: '9.8 km from center',
    price: 130,
    href: '/listings/single-entry-real-estate',
  },
  {
    id: 4,
    title: 'Art & Design Museum',
    category: 'Entertainment',
    image: activity04,
    description: "Europe's most extensive collection of modern and contemporary art.",
    rating: 4.9,
    reviews: 2078,
    distance: '1.4 km from center',
    price: 130,
    href: '/listings/single-entry-real-estate',
  },
]

const PopularActivity = () => {
  return (
    <section className="relative">
      <div className="container">
        <div className="flex items-center justify-between md:mb-12 mb-6">
          <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Popular activities</h2>

          <div className="inline-flex items-center gap-2">
            <Link href="/listings/events" className="hover:underline flex items-center py-2 font-semibold">
              View all
              <ChevronRight className="size-4.5 ms-1" />
            </Link>
          </div>
        </div>

        <Swiper
          wrapperClass="lg:mb-0 mb-12"
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            500: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
        >
          {activitiesData.map((activity) => (
            <SwiperSlide key={activity.id} className="h-auto">
              <div className="group h-full">
                <div className="border-default-200 border dark:border-white/20 rounded-md h-full flex flex-col">
                  <Link href={activity.href}>
                    <div className="rounded-tl-md rounded-tr-md overflow-hidden relative">
                      <Image src={activity.image} alt={activity.title} className="w-full h-full object-cover transition-transform duration-500 rounded-tl-md rounded-tr-md group-hover:scale-105" />

                      <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                        <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center" aria-label="Add to wishlist">
                          <Heart className="size-4" />
                        </button>
                      </div>
                    </div>
                  </Link>

                  <div className="pt-4 pb-2 px-4 flex-grow">
                    <Link href={activity.href}>
                      <span className="rounded-md inline-block font-medium text-default-600 bg-default-100 dark:bg-white/3 text-xs px-2 py-1 mb-2">{activity.category}</span>
                    </Link>

                    <h3 className="text-xl font-semibold pt-1 mb-2">
                      <Link href={activity.href} className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                        {activity.title}
                      </Link>
                    </h3>

                    <p className="text-sm">{activity.description}</p>
                  </div>

                  <div className="pb-4 px-4 mt-auto">
                    <ul className="flex-nowrap flex gap-4 text-sm items-center">
                      <li className="flex items-center gap-1">
                        <Star className="fill-warning text-warning size-4" />
                        <span className="text-sm">{activity.rating}</span>
                        <span className="text-xs text-secondary">({activity.reviews})</span>
                      </li>

                      <li className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        <span>{activity.distance}</span>
                      </li>
                    </ul>

                    <div className="text-default-900 font-semibold pt-4">${activity.price}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination position-static mt-3 mt-sm-4" />
        </Swiper>
      </div>

      <span className="absolute lg:block hidden bg-emerald-50 dark:bg-default-200 rounded-full -top-9.75 start-40 w-24.5 h-24.5" />
      <span className="absolute lg:block hidden bg-emerald-50 dark:bg-default-200 rounded-full bottom-25.75 end-35 w-8.5 h-8.5" />
      <span className="absolute lg:block hidden bg-warning/10 rounded-full -bottom-3.25 end-37.5 w-24.5 h-24.5" />
    </section>
  )
}

export default PopularActivity
