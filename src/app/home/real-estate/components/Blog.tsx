'use client'
import BlogImg1 from '@/assets/img/blog/v1/01.jpg'
import BlogImg2 from '@/assets/img/blog/v1/02.jpg'
import BlogImg3 from '@/assets/img/blog/v1/03.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type BlogItem = {
  title: string
  text: string
  category: string
  author: string
  date: string
  image: StaticImageData
  link: string
}

const blogsData: BlogItem[] = [
  {
    title: 'What to know when renting an apartment',
    category: 'Renting advice',
    author: 'Cody Fisher',
    date: 'July 09, 2024',
    image: BlogImg1,
    text: 'It is quite difficult to find a good apartment for long-term rent in large cities. In addition, potential tenants can face prob...',
    link: '/pages/blog/single-v1',
  },
  {
    title: 'Types of luxury housing',
    category: 'Investment advice',
    author: 'Kristin Watson',
    date: 'June 26, 2024',
    image: BlogImg2,
    text: 'What luxury housing is clear to every person. Housing characterized by increased comfort, interior, quality and ma...',
    link: '/pages/blog/single-v1',
  },
  {
    title: 'How to modernize your home on a budget',
    category: 'Home improvement',
    author: 'Darrell Steward',
    date: 'May 13, 2024',
    image: BlogImg3,
    text: "Modernizing your home doesn't have to break the bank. Here are some budget-friendly tips to give your living space a mo...",
    link: '/pages/blog/single-v1',
  },
]

const Blog = () => {
  return (
    <>
      <section className="lg:pb-28 md:pb-18 pb-12">
        <div className="container">
          <div className="flex items-start justify-between gap-4 pb-6 mb-4">
            <h2 className="text-center lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold text-default-900">Latest blogs</h2>
            <div className="inline-flex items-center gap-2">
              <Link href="/pages/blog/layout-v1" className="hover:underline flex items-center me-1 font-semibold">
                View all
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </Link>
            </div>
          </div>
          <Swiper
            className="pb-5"
            slidesPerView={1}
            spaceBetween={24}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              500: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            wrapperClass="lg:mb-0 mb-15"
          >
            {blogsData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link href={item.link} className="group">
                  <div className="rounded-md overflow-hidden mb-6">
                    <Image src={item.image} alt="Category image" className="w-full h-full object-cover transition-transform duration-500 rounded-md group-hover:scale-110 z-0" />
                  </div>
                </Link>
                <div className="mb-3">
                  <Link href={item.link} className="group"></Link>
                  <Link className="text-secondary text-xs uppercase" href="">
                    {item.category}
                  </Link>
                </div>
                <h3 className="text-default-900 font-semibold text-xl mb-2">
                  <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/pages/blog/single-v1">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-sm mb-4">{item.text}</p>
                <div className="text-sm gap-3">
                  <Link className="font-semibold" href="">
                    by {item.author}
                  </Link>
                  <span className="text-secondary">{item.date}</span>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination static mt-3 mt-sm-4" />
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Blog
