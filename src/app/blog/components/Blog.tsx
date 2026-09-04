import author01 from '@/assets/img/blog/v4/author/01.jpg'
import author02 from '@/assets/img/blog/v4/author/02.jpg'
import featured01 from '@/assets/img/blog/v4/featured01.jpg'
import featured02 from '@/assets/img/blog/v4/featured02.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export type FeaturedBlogType = {
  id: number
  image: StaticImageData
  authorImage: StaticImageData
  authorName: string
  date: string
  title: string
  category: string
  href: string
}

const featuredBlogsData: FeaturedBlogType[] = [
  {
    id: 1,
    image: featured01,
    authorImage: author01,
    authorName: 'Dr. Martha Simpson',
    date: 'May 13, 2024',
    title: 'Herbal medicines: advantages and disadvantages',
    category: 'Herbal medicine',
    href: '/pages/blog/single-v3',
  },
  {
    id: 2,
    image: featured02,
    authorImage: author02,
    authorName: 'Dr. Guy Hawkins',
    date: 'April 25, 2024',
    title: 'Five healthcare consumerism trends to watch',
    category: 'Healthcare system',
    href: '/pages/blog/single-v3',
  },
]

const Blog = () => {
  return (
    <>
      <section className="lg:mt-15 mt-10 pt-12 md:mb-6 relative">
        <div className="container">
          <h1 className="lg:text-3.5xl md:text-2.5xl text-2xl mb-4 pb-4 text-default-900 font-semibold">Our blog</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:pb-16 md:pb-12 pb-10 border-b border-border">
            {featuredBlogsData.map((item, idx) => (
              <div key={idx}>
                <Link href={item.href}>
                  <div className="overflow-hidden rounded-md w-full h-105 mb-6">
                    <Image src={item.image} className="rounded-md mb-6 object-cover w-full h-105 transition-transform duration-500 hover:scale-105" alt="Image" />
                  </div>
                </Link>
                <div className="flex items-center gap-1 text-default-500 mb-4">
                  <Link href="/blog/article"></Link>
                  <div className="relative flex flex-nowrap items-center">
                    <Link href="/blog/article">
                      <div className="size-6 me-2">
                        <Image className="w-full h-full rounded-full object-cover" src={item.authorImage} alt="Avatar" />
                      </div>
                    </Link>
                    <Link href="" className="text-default-600 hover:text-default-900 font-semibold text-sm">
                      {item.authorName}
                    </Link>
                  </div>
                  <Icon icon="lucide:dot" />
                  <div className="text-sm">{item.date}</div>
                </div>
                <h3 className="md:text-2xl text-xl font-semibold mb-4 text-default-900">
                  <Link className="hover:underline" href="/blog/article">
                    {item.title}
                  </Link>
                </h3>
                <Link href="" className="py-1 px-2 uppercase text-xs text-default-800 bg-default-100 dark:bg-white/3 rounded-md font-medium">
                  {item.category}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
