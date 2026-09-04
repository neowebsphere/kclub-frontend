import blog01 from '@/assets/img/blog/v1/01.jpg'
import blog02 from '@/assets/img/blog/v1/02.jpg'
import blog03 from '@/assets/img/blog/v1/03.jpg'
import blog04 from '@/assets/img/blog/v1/04.jpg'
import blog05 from '@/assets/img/blog/v1/05.jpg'
import blog06 from '@/assets/img/blog/v1/06.jpg'
import blog07 from '@/assets/img/blog/v1/07.jpg'
import blog08 from '@/assets/img/blog/v1/08.jpg'
import blog09 from '@/assets/img/blog/v1/09.jpg'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type Category = 'Real estate news' | 'Buying tips' | 'Selling strategies' | 'Renting advice' | 'Investment advice' | 'Interior design' | 'Home improvement'

type BlogPost = {
  id: number
  image: StaticImageData
  category: Category
  title: string
  description: string
  author: string
  date: string
  href: string
}

const categories: Category[] = ['Real estate news', 'Buying tips', 'Selling strategies']

const blogs: BlogPost[] = [
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
    image: blog04,
    category: 'Selling strategies',
    title: 'How real estate drone photography can elevate your listing?',
    description: 'In the competitive world of real estate, first impressions matter, and drone photography has become a game-chang...',
    author: 'Jacob Jones',
    date: 'May 05, 2024',
    href: '/pages/blog/single-v1',
  },
  {
    id: 5,
    image: blog05,
    category: 'Interior design',
    title: '10 delightful dining room decor trends for spring season',
    description: 'As the seasons change, so do the trends in interior design, and the dining room is no exception. Spring brings with it a...',
    author: 'Cody Fisher',
    date: 'April 17, 2024',
    href: '/pages/blog/single-v1',
  },
  {
    id: 6,
    image: blog06,
    category: 'Home improvement',
    title: '5 easy-to-ambitious projects to improve your home',
    description: 'Embarking on home improvement projects not only enhances your living space but also provides a fulfilling sense of acc...',
    author: 'Kathryn Murphy',
    date: 'April 12, 2024',
    href: '/pages/blog/single-v1',
  },
  {
    id: 7,
    image: blog07,
    category: 'Home improvement',
    title: 'When is the right time to downsize home?',
    description: 'Deciding when to downsize your home is a personal choice that depends on various factors. Here are some common...',
    author: 'Darrell Steward',
    date: 'March 29, 2024',
    href: '/pages/blog/single-v1',
  },
  {
    id: 8,
    image: blog08,
    category: 'Interior design',
    title: '7 tips for achieving maximum coziness',
    description: 'Creating a cozy atmosphere in your home is a delightful way to enhance comfort and relaxation. Here are seven tips to...',
    author: 'Bessie Cooper',
    date: 'March 10, 2024',
    href: '/pages/blog/single-v1',
  },
  {
    id: 9,
    image: blog09,
    category: 'Investment advice',
    title: 'Strategies for real estate investments',
    description: 'Discover key strategies for successful real estate investments in this guide. From identifying profitable properties to und...',
    author: 'Andrew Richards',
    date: 'February 19, 2024',
    href: '/pages/blog/single-v1',
  },
]

const paginationItems = [1, 2, 3, 4]

const Blog = () => {
  return (
    <section className="lg:pb-12 md:pb-8 mb-12">
      <div className="container">
        <div className="flex justify-between gap-6 items-center mb-4 flex-wrap">
          <ul className="flex md:gap-4 gap-2 flex-wrap">
            <li className="md:block hidden">
              <button className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-900 bg-default-100 dark:bg-white/3 text-sm font-semibold">All</button>
            </li>
            {categories.map((category) => (
              <li key={category} className={category === 'Selling strategies' ? 'lg:block hidden' : 'md:block hidden'}>
                <button className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">{category}</button>
              </li>
            ))}

            <li className="md:block hidden">
              <button className="md:w-auto w-full bg-transparent text-default-900 py-2.5 px-5 text-sm rounded-md justify-center items-center inline-flex font-semibold" aria-haspopup="dialog" aria-expanded="false" aria-controls="categoriesModal" data-hs-overlay="#categoriesModal">
                More categories
                <Icon icon="lucide:plus" className="text-sm ms-2" />
              </button>
            </li>

            <li>
              <button
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="categoriesModal"
                data-hs-overlay="#categoriesModal"
                type="button"
                className="md:hidden py-2.5 px-5 border border-border rounded-md text-sm font-semibold text-default-900 inline-flex justify-center items-center"
              >
                <Icon icon="lucide:list" className="text-base me-2" />
                Categories
              </button>
            </li>
          </ul>

          <div className="relative w-30">
            <Icon icon="lucide:arrow-down-up" className="absolute top-1/2 start-0 -translate-y-1/2 z-10 size-4" />
            <select defaultValue="Newest" className="bg-transparent border-0 rounded-none text-sm ps-6 pe-1 w-full text-default-600">
              <option value="Newest">Newest</option>
              <option value="Popular">Popular</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="h-full mt-6">
              <Link href={blog.href} className="group">
                <div className="rounded-md overflow-hidden mb-6">
                  <Image src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 rounded-md group-hover:scale-110 z-0" />
                </div>
              </Link>
              <div className="mb-3">
                <Link className="text-secondary text-xs uppercase hover:text-default-900 transition-all duration-400" href="">
                  {blog.category}
                </Link>
              </div>
              <h3 className="text-default-900 font-semibold text-xl mb-2">
                <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href={blog.href}>
                  {blog.title}
                </Link>
              </h3>
              <p className="text-sm mb-4">{blog.description}</p>
              <div className="text-sm gap-3">
                <Link className="font-semibold" href="">
                  by {blog.author}
                </Link>
                <span className="text-secondary">{blog.date}</span>
              </div>
            </div>
          ))}
        </div>

        <nav className="flex items-center gap-x-1 pt-12 justify-center" aria-label="Pagination">
          <div className="flex items-center gap-x-1">
            {paginationItems.map((item) => (
              <button
                key={item}
                type="button"
                className={`min-h-9.5 min-w-9.5 flex justify-center items-center py-2 px-3 text-sm rounded-lg transition-all duration-300 ${item === 1 ? 'bg-default-200 text-default-800' : 'text-default-800 hover:bg-default-100 dark:text-white dark:hover:bg-white/10'}`}
              >
                {item}
              </button>
            ))}
            <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-400 hover:text-blue-600 p-2 text-sm rounded-lg">
              <Icon icon="lucide:ellipsis" className="text-lg" />
            </button>
            <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg dark:text-white dark:hover:bg-white/10">
              8
            </button>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Blog
