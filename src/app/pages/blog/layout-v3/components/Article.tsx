import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import th01 from '@/assets/img/blog/v3/th01.jpg'
import th02 from '@/assets/img/blog/v3/th02.jpg'
import th03 from '@/assets/img/blog/v3/th03.jpg'
import th04 from '@/assets/img/blog/v3/th04.jpg'
import th05 from '@/assets/img/blog/v3/th05.jpg'
import th06 from '@/assets/img/blog/v3/th06.jpg'
import th07 from '@/assets/img/blog/v3/th07.jpg'
import th08 from '@/assets/img/blog/v3/th08.jpg'
import th09 from '@/assets/img/blog/v3/th09.jpg'
import Link from 'next/link'

type ArticleItem = {
  id: number
  title: string
  date: string
  image: StaticImageData
  href: string
}

type ArticleSection = {
  id: number
  title: string
  articles: ArticleItem[]
}

const articleSections: ArticleSection[] = [
  {
    id: 1,
    title: 'Most read',
    articles: [
      { id: 1, title: 'Serving up storage in kitchen renovations', date: 'September 28, 2024', image: th01, href: '' },
      { id: 2, title: '5 Reasons to install a backyard storage shed', date: 'August 17, 2024', image: th02, href: '' },
      { id: 3, title: 'How to make your kitchen ready for hosting', date: 'July 23, 2024', image: th03, href: '' },
    ],
  },
  {
    id: 2,
    title: 'Recommended',
    articles: [
      { id: 4, title: 'Unlocking your dream bathroom', date: 'October 30, 2024', image: th04, href: '' },
      { id: 5, title: 'Winter home renovation projects on a budget', date: 'September 15, 2024', image: th05, href: '' },
      { id: 6, title: 'Gardening tips for spring 2024', date: 'August 09, 2024', image: th06, href: '' },
    ],
  },
  {
    id: 3,
    title: 'Trending',
    articles: [
      { id: 7, title: '3 Reasons to update your flooring this winter', date: 'August 26, 2024', image: th07, href: '' },
      { id: 8, title: 'Boosting home safety: the latest in smart security', date: 'July 19, 2024', image: th08, href: '' },
      { id: 9, title: '20 professional tips for fencing installers', date: 'June 12, 2024', image: th09, href: '' },
    ],
  },
]

const Article = () => {
  return (
    <section className="py-12 lg:mt-12 md:mt-4">
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          {articleSections.map((section) => (
            <div key={section.id} className="flex flex-col gap-6">
              <Link href="" className="text-xl font-semibold text-default-900 inline-flex items-center hover:underline">
                {section.title}
                <Icon icon="lucide:chevron-right" className="ms-2" />
              </Link>

              {section.articles.map((article) => (
                <div key={article.id}>
                  <div className="flex gap-4 items-center">
                    <Link href={article.href}>
                      <div className="rounded-md overflow-hidden size-24 shrink-0">
                        <Image src={article.image} alt={article.title} className="size-24 h-full object-cover transition-transform duration-500 rounded-md hover:scale-105 z-0" />
                      </div>
                    </Link>

                    <div>
                      <h3 className="pb-1 mb-2">
                        <Link className="text-base font-semibold text-default-900 hover:underline" href={article.href}>
                          {article.title}
                        </Link>
                      </h3>

                      <div className="text-xs text-secondary">{article.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Article
