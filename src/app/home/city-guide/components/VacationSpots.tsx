'use client'
import img2 from '@/assets/img/listings/city-guide/v2/02.jpg'
import img1 from '@/assets/img/listings/city-guide/v2/10.jpg'
import img3 from '@/assets/img/listings/city-guide/v2/12.jpg'
import { Icon } from '@iconify/react'
import { ChevronRight, CreditCard, MapPin, Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type AccomodationItem = {
  image: StaticImageData
  title: string
  rating: number
  reviews: number
  priceLevel: string
  distance: string
}

const accomodationData: AccomodationItem[] = [
  {
    image: img1,
    title: 'Pine Cottage',
    rating: 4.9,
    reviews: 135,
    priceLevel: '$$$',
    distance: '0.8 km from center',
  },
  {
    image: img2,
    title: 'Big Tree Cottage',
    rating: 4.5,
    reviews: 73,
    priceLevel: '$$',
    distance: '2.4 km from center',
  },
  {
    image: img3,
    title: 'Crystal Studio Apartment',
    rating: 4.7,
    reviews: 26,
    priceLevel: '$$',
    distance: '1.3 km from center',
  },
]

const VacationSpots = () => {
  return (
    <>
      <section className="lg:py-28 md:py-14 pb-12 pt-0 relative">
        <div className="container">
          <div className="flex md:items-center items-start justify-between gap-6 mb-8">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Popular vacation spots</h2>
            <div className="inline-flex items-center gap-2">
              <Link href="/listings/top-filters-city" className="hover:underline flex items-center py-2 font-semibold">
                View all
                <ChevronRight className="size-4.5 ms-1" />
              </Link>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            autoHeight={true}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              500: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            wrapperClass="lg:mb-0 mb-12"
          >
            {accomodationData.map((item, idx) => (
              <SwiperSlide className="group" key={idx}>
                <Link href="/listings/entry-city-guide">
                  <div className="rounded-md size-full overflow-hidden relative">
                    <Image src={item.image} alt="Image" className="size-full object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-md" />
                    <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                      <button type="button" className="size-8 bg-white text-default-700 rounded-full shadow flex items-center justify-center">
                        <Icon icon="lucide:heart" />
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="pt-4 pb-2">
                  <Link href="/listings/entry-city-guide"></Link>
                  <h3 className="text-xl font-semibold text-default-900">
                    <Link href="/listings/entry-city-guide"></Link>
                    <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/entry-city-guide">
                      {item.title}
                    </Link>
                  </h3>
                </div>
                <div className="flex items-center gap-3 bg-transparent">
                  <div className="flex items-center gap-1">
                    <Star className="fill-warning text-warning size-4" />
                    <span className="text-sm text-default-500">{item.rating}</span>
                    <span className="text-xs text-default-400 self-end">({item.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <CreditCard className="size-3.5" />
                    {item.priceLevel}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="size-3.5" />
                    <span className="text-truncate">{item.distance}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination static mt-3 mt-sm-4" />
          </Swiper>
        </div>
        <span className="absolute lg:block hidden bg-emerald-50 dark:bg-default-200 rounded-full top-13.75 start-50 w-15 h-15" />
        <span className="absolute lg:block hidden bg-primary/10 rounded-full top-6.25 start-47.5 w-6.75 h-6.75" />
      </section>
    </>
  )
}

export default VacationSpots
