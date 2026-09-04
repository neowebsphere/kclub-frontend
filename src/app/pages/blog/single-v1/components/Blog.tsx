'use client'
import blog01 from '@/assets/img/blog/v1/01.jpg'
import blog02 from '@/assets/img/blog/v1/02.jpg'
import blog03 from '@/assets/img/blog/v1/03.jpg'
import blog07 from '@/assets/img/blog/v1/07.jpg'
import blog08 from '@/assets/img/blog/v1/08.jpg'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type BlogPostType = {
  id: number
  image: StaticImageData
  category: string
  title: string
  description: string
  author: string
  date: string
  href: string
}

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    image: blog01,
    category: 'Renting advice',
    title: 'What to know when renting an apartment',
    description: 'It is quite difficult to find a good apartment for long-term rent in large cities. In addition, potential tenants can face prob...',
    author: 'Cody Fisher',
    date: 'July 09, 2024',
    href: '/pages/blog/single-v1',
  },
  {
    id: 2,
    image: blog02,
    category: 'Investment advice',
    title: 'Types of luxury housing',
    description: 'What luxury housing is clear to every person. Housing characterized by increased comfort, interior, quality and ma...',
    author: 'Kristin Watson',
    date: 'June 26, 2024',
    href: '/pages/blog/single-v1',
  },
  {
    id: 3,
    image: blog03,
    category: 'Home improvement',
    title: 'How to modernize your home on a budget',
    description: "Modernizing your home doesn't have to break the bank. Here are some budget-friendly tips to give your living space a mo...",
    author: 'Darrell Steward',
    date: 'May 13, 2024',
    href: '/pages/blog/single-v1',
  },
  {
    id: 4,
    image: blog07,
    category: 'Home improvement',
    title: 'When is the right time to downsize home?',
    description: 'Deciding when to downsize your home is a personal choice that depends on various factors. Here are some common...',
    author: 'Darrell Steward',
    date: 'March 29, 2024',
    href: '/pages/blog/single-v1',
  },
  {
    id: 5,
    image: blog08,
    category: 'Interior design',
    title: '7 tips for achieving maximum coziness',
    description: 'Creating a cozy atmosphere in your home is a delightful way to enhance comfort and relaxation. Here are seven tips to...',
    author: 'Bessie Cooper',
    date: 'March 10, 2024',
    href: '/pages/blog/single-v1',
  },
]

const Blog = () => {
  return (
    <section className="lg:pb-28 md:pb-18 pb-12">
      <div className="container">
        <div className="flex items-start justify-between gap-4 pb-6 mb-4">
          <h2 className="text-center lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold text-default-900">Also read</h2>

          <div className="flex gap-2">
            <button type="button" id="prev" aria-label="Previous" className="size-10 flex items-center justify-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full">
              <Icon icon="lucide:chevron-left" className="size-4.5" />
            </button>

            <button type="button" id="next" aria-label="Next" className="size-10 flex items-center justify-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full">
              <Icon icon="lucide:chevron-right" className="size-4.5" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          navigation={{
            prevEl: '#prev',
            nextEl: '#next',
          }}
          breakpoints={{
            500: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
          className="pb-5"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="group">
                <Link href={post.href}>
                  <div className="rounded-md overflow-hidden mb-6">
                    <Image src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 rounded-md group-hover:scale-110" />
                  </div>
                </Link>

                <div className="mb-3">
                  <Link href="" className="text-secondary text-xs uppercase">
                    {post.category}
                  </Link>
                </div>

                <h3 className="text-default-900 font-semibold text-xl mb-2">
                  <Link href={post.href} className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 hover:after:opacity-100 after:h-0.25 after:bg-current after:transition-all after:duration-300">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm mb-4">{post.description}</p>

                <div className="flex items-center gap-3 text-sm">
                  <Link href="" className="font-semibold">
                    by {post.author}
                  </Link>

                  <span className="text-secondary">{post.date}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Blog
