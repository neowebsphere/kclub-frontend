import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import blog01 from '@/assets/img/blog/v4/01.jpg'
import blog02 from '@/assets/img/blog/v4/02.jpg'
import blog03 from '@/assets/img/blog/v4/03.jpg'
import blog04 from '@/assets/img/blog/v4/04.jpg'
import blog05 from '@/assets/img/blog/v4/05.jpg'
import blog06 from '@/assets/img/blog/v4/06.jpg'
import blog07 from '@/assets/img/blog/v4/07.jpg'
import blog08 from '@/assets/img/blog/v4/08.jpg'

import author01 from '@/assets/img/blog/v4/author/01.jpg'
import author02 from '@/assets/img/blog/v4/author/02.jpg'
import author03 from '@/assets/img/blog/v4/author/03.jpg'
import author04 from '@/assets/img/blog/v4/author/04.jpg'
import author05 from '@/assets/img/blog/v4/author/05.jpg'
import author06 from '@/assets/img/blog/v4/author/06.jpg'
import author07 from '@/assets/img/blog/v4/author/07.jpg'
import author08 from '@/assets/img/blog/v4/author/08.jpg'
import Link from 'next/link'

type CategoryType = {
  id: number
  label: string
  active?: boolean
}

type BlogPostType = {
  id: number
  title: string
  description: string
  category: string
  date: string
  author: string
  image: StaticImageData
  authorImage: StaticImageData
  href: string
}

const categories: CategoryType[] = [
  { id: 1, label: 'Blog', active: true },
  { id: 2, label: 'News' },
  { id: 3, label: 'Doctors' },
  { id: 4, label: 'Patients' },
  { id: 5, label: 'Healthy tips' },
  { id: 6, label: 'What to do if...' },
]

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: 'Best practices for using AI in digital pharma advertising',
    description: "Today's healthcare consumers have a strong preference for a patient-centric approach, prioritizing personalized experiences and convenience...",
    category: 'Healthcare trends',
    date: 'June 23, 2024',
    author: 'Dr. Martha Simpson',
    image: blog01,
    authorImage: author01,
    href: '/blog/article',
  },
  {
    id: 2,
    title: "How Healthgrades rates America's best hospitals",
    description: 'Since its establishment in 1998, Healthgrades has been aiding consumers in assessing and contrasting hospital performance concerning care delivered during a hospital...',
    category: 'Hospital quality',
    date: 'June 09, 2024',
    author: 'Dr. Bessie Cooper',
    image: blog02,
    authorImage: author03,
    href: '/blog/article',
  },
  {
    id: 3,
    title: "Men's healthcare behaviors and attitudes",
    description: "Understanding men's healthcare behaviors and attitudes is crucial for improving their overall well-being. This blog post explores common trends, challenges...",
    category: 'Medical industry',
    date: 'May 28, 2024',
    author: 'Dr. Jerome Bell',
    image: blog03,
    authorImage: author04,
    href: '/blog/article',
  },
  {
    id: 4,
    title: 'Seven trends affecting pharma marketing',
    description: 'The dynamics of how physicians engage with pharmaceutical brands are evolving—has your pharmaceutical marketing strategy adjusted accordingly?...',
    category: 'Healthcare trends',
    date: 'May 16, 2024',
    author: 'Dr. Darlene Robertson',
    image: blog04,
    authorImage: author05,
    href: '/blog/article',
  },
  {
    id: 5,
    title: 'How health systems can thrive as retail clinics rise',
    description: "To appeal to these discerning consumers and stay ahead of the competition, it's crucial to understand and incorporate the following five healthcare consumerism trends...",
    category: 'Healthcare system',
    date: 'May 05, 2024',
    author: 'Dr. Guy Hawkins',
    image: blog05,
    authorImage: author02,
    href: '/blog/article',
  },
  {
    id: 6,
    title: 'Five healthcare consumerism trends to watch',
    description: "Today's healthcare consumers have a strong preference for a patient-centric approach, prioritizing personalized experiences and convenience...",
    category: 'Healthcare trends',
    date: 'May 05, 2024',
    author: 'Dr. Jacob Jones',
    image: blog06,
    authorImage: author06,
    href: '/blog/article',
  },
  {
    id: 7,
    title: '2024 Hospital quality awards calendar',
    description: 'The current healthcare landscape emphasizes the need for fast, digital interactions and effective, affordable treatment options...',
    category: 'Healthcare quality',
    date: 'April 12, 2024',
    author: 'Dr. Brooklyn Simmons',
    image: blog07,
    authorImage: author07,
    href: '/blog/article',
  },
  {
    id: 8,
    title: 'What physicians value most when making referrals',
    description: 'Discover what physicians value most when making referrals. This blog post delves into the key factors influencing their decisions, including trust, patient...',
    category: 'Treatment options',
    date: 'March 30, 2024',
    author: 'Dr. Arlene McCoy',
    image: blog08,
    authorImage: author08,
    href: '/blog/article',
  },
]

const CategoryBlog = () => {
  return (
    <div className="lg:col-span-8 col-span-1">
      <ul className="flex md:gap-4 gap-2 mb-6 pb-4 overflow-x-auto whitespace-nowrap">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href=""
              className={`py-2.5 px-5 inline-flex rounded-full text-sm font-semibold transition-all duration-300 ${
                category.active ? 'text-default-900 border border-default-900 bg-default-100 dark:bg-white/3' : 'text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900'
              }`}
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        {blogPosts.map((post, index) => (
          <div key={post.id}>
            <div className="grid md:grid-cols-12 grid-cols-1 md:gap-12 gap-6 lg:pb-4">
              <div className="col-span-9 md:order-1 order-2">
                <div className="flex items-center gap-1 text-default-500 mb-4">
                  <div className="relative flex flex-nowrap items-center">
                    <div className="size-6 me-2">
                      <Image className="w-full h-full rounded-full object-cover" src={post.authorImage} alt={post.author} />
                    </div>
                    <Link href="" className="text-default-600 hover:text-default-900 font-semibold text-sm">
                      {post.author}
                    </Link>
                  </div>
                  <Icon icon="lucide:dot" />
                  <div className="text-sm">{post.date}</div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-default-900">
                  <Link className="hover:underline" href={post.href}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-4">{post.description}</p>
                <Link href="" className="py-1 px-2 uppercase text-xs text-default-800 bg-default-100 dark:bg-white/3 rounded-md font-medium">
                  {post.category}
                </Link>
              </div>

              <div className="col-span-3 md:order-2 order-1">
                <div className="overflow-hidden rounded-md w-33">
                  <Image src={post.image} className="rounded-md object-cover w-33 transition-transform duration-500 hover:scale-105" alt={post.title} />
                </div>
              </div>
            </div>

            {index !== blogPosts.length - 1 && <hr className="my-6 text-default-200 dark:text-white/20" />}
          </div>
        ))}

        <nav className="flex items-center gap-x-1 mt-8" aria-label="Pagination">
          <div className="flex items-center gap-x-1">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                type="button"
                className={`min-h-9.5 min-w-9.5 flex justify-center items-center py-2 px-3 text-sm rounded-lg transition-all ${page === 1 ? 'bg-default-200 text-default-800' : 'text-default-800 hover:bg-default-100 dark:text-white dark:hover:bg-white/10'}`}
              >
                {page}
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
    </div>
  )
}

export default CategoryBlog
