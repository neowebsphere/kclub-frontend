'use client'
import v101 from '@/assets/img/blog/v1/01.jpg'
import v102 from '@/assets/img/blog/v1/02.jpg'
import v108 from '@/assets/img/blog/v1/08.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type BlogItem = {
  image: StaticImageData
  category: string
  title: string
  description: string
  author: string
  date: string
}

const blogData: BlogItem[] = [
  {
    image: v102,
    category: 'Investment advice',
    title: 'Types of luxury housing',
    description: 'What luxury housing is clear to every person. Housing characterized by increased comfort, interior, quality and modern amenities.',
    author: 'Kristin Watson',
    date: 'June 26, 2024',
  },
  {
    image: v101,
    category: 'Renting advice',
    title: 'What to know when renting an apartment',
    description: 'It is quite difficult to find a good apartment for long-term rent in large cities. Here are some important things to consider.',
    author: 'Cody Fisher',
    date: 'July 09, 2024',
  },
  {
    image: v108,
    category: 'Interior design',
    title: '7 tips for achieving maximum coziness',
    description: 'Creating a cozy atmosphere in your home is a delightful way to enhance comfort and relaxation with smart design ideas.',
    author: 'Bessie Cooper',
    date: 'March 10, 2024',
  },
]

const Blog = () => {
  return (
    <section className="lg:py-12 md:pt-6 pt-4 pb-12 lg:my-4">
      <div className="container">
        <div className="pb-6 md:mb-4 flex justify-between items-center">
          <h2 className="lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold text-default-900">From the blog</h2>
          <Link href="/blog" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
            View all
            <Icon icon="lucide:chevron-right" className="text-lg ms-1" />
          </Link>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          wrapperClass="mb-12"
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            500: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
        >
          {blogData.map((blog, idx) => (
            <SwiperSlide key={idx}>
              <Link href="" className="block group">
                <div className="rounded-md overflow-hidden mb-6">
                  <Image src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 rounded-md group-hover:scale-110" />
                </div>
              </Link>
              <div className="mb-3">
                <Link href="" className="text-secondary text-xs uppercase hover:text-default-900 transition-all duration-300">
                  {blog.category}
                </Link>
              </div>
              <h3 className="text-default-900 font-semibold text-xl mb-2">
                <Link href="" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 hover:after:opacity-100 after:h-0.25 after:bg-current after:transition-all after:duration-300">
                  {blog.title}
                </Link>
              </h3>
              <p className="text-sm mb-4">{blog.description}</p>
              <div className="text-sm flex items-center gap-3">
                <span className="font-semibold">by {blog.author}</span>
                <span className="text-secondary">{blog.date}</span>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination static mt-3 mt-sm-4" />
        </Swiper>
      </div>
    </section>
  )
}

export default Blog
