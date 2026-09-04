'use client'
import new01 from '@/assets/img/home/events/news/01.jpg'
import new02 from '@/assets/img/home/events/news/02.jpg'
import new03 from '@/assets/img/home/events/news/03.jpg'
import { ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type FeaturedNewsType = {
  title: string
  description: string
  category: string
  readTime: string
  image: StaticImageData
  href: string
}

const featuredNews: FeaturedNewsType[] = [
  {
    title: 'Tools to Sell Tickets Online and Manage Your Concerts',
    description: 'Easily create and manage concerts on our platform to give unforgettable experiences to your audience.',
    category: 'Concert',
    readTime: '10 mins read',
    image: new01,
    href: '/listings/entry-events',
  },
  {
    title: 'Event Ideas that Celebrate Culture, Community, and Your Brand',
    description: 'Embracing your community and celebrating culture together also makes business sense for growing brands.',
    category: 'Planning',
    readTime: '15 mins read',
    image: new02,
    href: '/listings/entry-events',
  },
  {
    title: '20 Creative Event Activity Ideas to Help Create Positive Change',
    description: 'The type of event you choose depends on your goals. Here are creative ideas to inspire your next event.',
    category: 'Concert',
    readTime: '8 mins read',
    image: new03,
    href: '/listings/entry-events',
  },
]

const Feature = () => {
  return (
    <section className="mt-4 lg:pb-24 md:pb-14 pb-8">
      <div className="container">
        <div className="lg:pt-12 pt-0 border-t border-default-300">
          <div className="flex items-center justify-between md:mb-8 mb-4 pt-12">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Featured News</h2>

            <div className="inline-flex items-center gap-2">
              <Link href="/listings/events" className="hover:underline flex items-center py-2 font-semibold">
                View all
                <ChevronRight className="size-4.5 ms-1" />
              </Link>
            </div>
          </div>
        </div>

        <Swiper
          className="pb-5"
          slidesPerView={1}
          spaceBetween={48}
          autoHeight
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.featured-news-pagination',
          }}
          breakpoints={{
            500: { slidesPerView: 2, spaceBetween: 24 },
            850: { slidesPerView: 3, spaceBetween: 32 },
            992: { slidesPerView: 3, spaceBetween: 48 },
            1200: { slidesPerView: 3, spaceBetween: 80 },
          }}
          modules={[Pagination, Autoplay]}
        >
          {featuredNews.map((news, idx) => (
            <SwiperSlide key={idx} className="group h-auto">
              <div className="cursor-pointer h-full">
                <div className="flex gap-4 mb-6">
                  <div className="rounded-md w-35 h-full overflow-hidden">
                    <Image src={news.image} alt={news.title} className="w-35 h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-md" />
                  </div>

                  <div className="text-sm text-secondary uppercase transform mt-10 -rotate-90">{news.category}</div>
                </div>

                <h3 className="text-xl text-default-900 font-semibold mb-2">
                  <Link className="group-hover:underline" href={news.href}>
                    {news.title}
                  </Link>
                </h3>

                <p className="pb-1 mb-2">{news.description}</p>

                <div className="text-sm text-secondary">{news.readTime}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="featured-news-pagination static mt-3 md:mt-4 text-center" />
      </div>
    </section>
  )
}

export default Feature
