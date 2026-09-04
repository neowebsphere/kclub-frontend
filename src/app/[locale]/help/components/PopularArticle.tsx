'use client'
import help01 from '@/assets/img/help/v1/01.jpg'
import help02 from '@/assets/img/help/v1/02.jpg'
import help03 from '@/assets/img/help/v1/03.jpg'
import { ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { Link } from '@/i18n/navigation'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Article = {
  image: StaticImageData
  category: string
  title: string
  description: string
  href: string
}

const articleData: Article[] = [
  {
    image: help01,
    category: 'Accommodation',
    title: 'Renting out a condo',
    description: 'Maximize your investment by renting out your condo - unlock a steady income stream and build wealth over time...',
    href: '/help/article',
  },
  {
    image: help02,
    category: 'Insurances',
    title: "What is renters' insurance?",
    description: "Renters' insurance is a type of insurance policy that provides coverage for tenants renting a home or apartment...",
    href: '/help/article',
  },
  {
    image: help03,
    category: 'Booking',
    title: 'Tips and tricks for renters',
    description: 'Unlock your best renting experience with our essential tips and tricks, designed to help you save money and find the...',
    href: '/help/article',
  },
]

type Topic = {
  name: string
  slug: string
}

const topicData: Topic[] = [
  { name: 'Accommodation', slug: 'accommodation' },
  { name: 'Booking', slug: 'booking' },
  { name: 'Payment', slug: 'payment' },
  { name: 'Cancellation', slug: 'cancellation' },
  { name: 'Insurances', slug: 'insurances' },
]

const PopularArticle = () => {
  return (
    <>
      <section className="py-12 bg-default-100 dark:bg-white/3">
        <div className="container">
          <div className="lg:py-12 md:py-8">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold mb-4 pb-4">Popular articles</h2>
            <div className="flex justify-between gap-6 items-center">
              <ul className="flex md:gap-4 gap-2 mb-6 pb-4 overflow-x-auto whitespace-nowrap">
                <li>
                  <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-900 bg-default-100 dark:bg-white/3 text-sm font-semibold">
                    All
                  </Link>
                </li>
                {topicData.map((item, idx) => (
                  <li key={idx}>
                    <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mb-6 pb-4">
                <Link href="" className="hover:underline flex items-center text-nowrap text-sm font-semibold">
                  Browse all topics
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
              wrapperClass="mb-12"
            >
              {articleData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Link href={item.href}>
                    <div className="rounded-md overflow-hidden size-full">
                      <Image src={item.image} alt="Category image" className="size-full object-cover transition-transform duration-500 rounded-md hover:scale-110 z-0" />
                    </div>
                  </Link>
                  <div className="pt-6">
                    <Link href={item.href}>
                      <div className="text-secondary text-xs uppercase pb-2 mb-1">{item.category}</div>
                    </Link>
                    <h3 className="text-xl mb-2">
                      <Link href={item.href}></Link>
                      <Link
                        className="relative text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100"
                        href={item.href}
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination position-static mt-3 mt-md-4" />
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularArticle
