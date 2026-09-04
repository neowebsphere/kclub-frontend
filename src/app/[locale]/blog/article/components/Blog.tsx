'use client'
import author01 from '@/assets/img/blog/v4/author/01.jpg'
import author03 from '@/assets/img/blog/v4/author/03.jpg'
import author04 from '@/assets/img/blog/v4/author/04.jpg'
import featured01 from '@/assets/img/blog/v4/featured01.jpg'
import carousel01 from '@/assets/img/blog/v4/single/carousel/01.jpg'
import carousel02 from '@/assets/img/blog/v4/single/carousel/02.jpg'
import carousel03 from '@/assets/img/blog/v4/single/carousel/03.jpg'
import carousel04 from '@/assets/img/blog/v4/single/carousel/04.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import { Link } from '@/i18n/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type BlogItem = {
  id: number
  image: StaticImageData
  authorImage: StaticImageData
  author: string
  date: string
  title: string
  category: string
}

const blogData: BlogItem[] = [
  {
    id: 1,
    image: featured01,
    authorImage: carousel01,
    author: 'Dr. Martha Simpson',
    date: 'May 13, 2024',
    title: 'Herbal medicines: advantages and disadvantages',
    category: 'Herbal medicine',
  },
  {
    id: 2,
    image: carousel02,
    authorImage: author04,
    author: 'Dr. Jerome Bell',
    date: 'May 28, 2024',
    title: "Men's healthcare behaviors and attitudes",
    category: 'Medical industry',
  },
  {
    id: 3,
    image: carousel03,
    authorImage: author03,
    author: 'Dr. Bessie Cooper',
    date: 'June 09, 2024',
    title: "How Healthgrades rates America's best hospitals",
    category: 'Hospital quality',
  },
  {
    id: 4,
    image: carousel04,
    authorImage: author01,
    author: 'Dr. Martha Simpson',
    date: 'June 23, 2024',
    title: 'Best practices for using AI in digital pharma advertising',
    category: 'Healthcare trends',
  },
]

const Blog = () => {
  return (
    <section className="lg:py-12 pt-12">
      <div className="flex items-start justify-between gap-4 pb-6 mb-4">
        <h2 className="text-center lg:text-4.5xl md:text-3.5xl text-2xl font-semibold text-default-900">Also read</h2>

        <div className="flex gap-2">
          <button type="button" id="blog-prev" aria-label="Previous Slide" className="size-10 flex items-center justify-center rounded-full border border-default-300 dark:border-white/20 bg-body-bg">
            <Icon icon="lucide:chevron-left" className="size-5" />
          </button>

          <button type="button" id="blog-next" aria-label="Next Slide" className="size-10 flex items-center justify-center rounded-full border border-default-300 dark:border-white/20 bg-body-bg">
            <Icon icon="lucide:chevron-right" className="size-5" />
          </button>
        </div>
      </div>

      <Swiper
        className="pb-5"
        slidesPerView={1}
        spaceBetween={24}
        loop
        navigation={{
          prevEl: '#blog-prev',
          nextEl: '#blog-next',
        }}
        breakpoints={{
          500: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
      >
        {blogData.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="group">
              <Link href="">
                <div className="overflow-hidden rounded-md w-full h-full mb-6">
                  <Image src={blog.image} alt={blog.title} className="rounded-md mb-6 object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
                </div>
              </Link>
              <div className="flex items-center gap-1 text-default-500 mb-4">
                <div className="relative flex flex-nowrap items-centerflex items-center">
                  <div className="size-6 me-2">
                    <Image src={blog.authorImage} alt={blog.author} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <Link href="" className="text-default-600 hover:text-default-900 font-semibold text-sm">
                    {blog.author}
                  </Link>
                </div>
                <Icon icon="lucide:dot" className="text-default-400 size-4" />
                <span className="text-sm">{blog.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-default-900">
                <Link href="" className="hover:underline">
                  {blog.title}
                </Link>
              </h3>
              <Link href="" className="py-1 px-2 uppercase text-xs text-default-800 bg-default-100 dark:bg-white/3 rounded-md font-medium">
                {blog.category}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Blog
