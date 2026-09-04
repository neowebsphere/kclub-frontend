import v401 from '@/assets/img/blog/v4/01.jpg'
import v402 from '@/assets/img/blog/v4/02.jpg'
import v403 from '@/assets/img/blog/v4/03.jpg'
import author01 from '@/assets/img/blog/v4/author/01.jpg'
import author03 from '@/assets/img/blog/v4/author/03.jpg'
import author04 from '@/assets/img/blog/v4/author/04.jpg'
import featured01 from '@/assets/img/blog/v4/featured01.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export type BlogPostType = {
  title: string
  link: string
  image: StaticImageData
  category: string
  date: string
  author: {
    name: string
    avatar: StaticImageData
  }
}
export const blogPosts: BlogPostType[] = [
  {
    title: 'Best practices for using AI in digital pharma advertising',
    link: '/pages/blog/single-v3',
    image: v401,
    category: 'Healthcare trends',
    date: 'June 23, 2024',
    author: {
      name: 'Dr. Martha Simpson',
      avatar: author01,
    },
  },
  {
    title: "How Healthgrades rates America's best hospitals",
    link: '/pages/blog/single-v3',
    image: v402,
    category: 'Hospital quality',
    date: 'June 09, 2024',
    author: {
      name: 'Dr. Bessie Cooper',
      avatar: author03,
    },
  },
  {
    title: "Men's healthcare behaviors and attitudes",
    link: '/pages/blog/single-v3',
    image: v403,
    category: 'Medical industry',
    date: 'May 28, 2024',
    author: {
      name: 'Dr. Jerome Bell',
      avatar: author04,
    },
  },
]

const Blog = () => {
  return (
    <>
      <section className="lg:py-28 md:py-18 py-12">
        <div className="container">
          <div className="flex items-start justify-between lg:gap-4 md:mb-8 mb-6">
            <h2 className="text-default-900 lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold">Health news</h2>
            <div className="inline-flex items-center gap-2 ">
              <Link href="" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
                View all
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6">
            <div>
              <Link href="/pages/blog/single-v3">
                <div className="overflow-hidden rounded-md w-full h-105 mb-6">
                  <Image src={featured01} alt="Image" className="rounded-md mb-6 object-cover w-full h-105 transition-transform duration-500 hover:scale-105" />
                </div>
              </Link>
              <div className="flex items-center gap-1 text-default-500 mb-4">
                <Link href="/pages/blog/single-v3"></Link>
                <div className="relative flex flex-nowrap items-center">
                  <Link href="/pages/blog/single-v3">
                    <div className="size-6 me-2">
                      <Image src={author01} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                    </div>
                  </Link>
                  <Link href="" className="text-default-600 hover:text-default-900 font-semibold text-sm">
                    Dr. Martha Simpson
                  </Link>
                </div>
                <Icon icon="lucide:dot" />
                <div className="text-sm">May 13, 2024</div>
              </div>
              <h3 className="md:text-2xl text-xl font-semibold mb-4 text-default-900">
                <Link className="hover:underline" href="/pages/blog/single-v3">
                  Herbal medicines: advantages and disadvantages
                </Link>
              </h3>
              <Link href="" className="py-1 px-2 uppercase text-xs text-default-800 bg-default-100 dark:bg-white/3 rounded-md font-medium">
                Herbal medicine
              </Link>
            </div>
            <hr className="my-6 text-default-200 dark:text-white/20 lg:hidden block" />
            <div className="lg:ps-8">
              {blogPosts.map((post, index) => (
                <div key={post.title}>
                  <div className="grid md:grid-cols-12 grid-cols-1 md:gap-12 gap-6 lg:pb-4">
                    <div className="col-span-9 md:order-1 order-2">
                      <div className="flex items-center gap-1 text-default-500 mb-4">
                        <div className="relative flex flex-nowrap items-center">
                          <div className="size-6 me-2">
                            <Image className="w-full h-full rounded-full object-cover" src={post.author.avatar} alt={post.author.name} />
                          </div>
                          <Link href="" className="text-default-600 hover:text-default-900 font-semibold text-sm">
                            {post.author.name}
                          </Link>
                        </div>
                        <Icon icon="lucide:dot" />
                        <div className="text-sm">{post.date}</div>
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-default-900">
                        <Link className="hover:underline" href={post.link}>
                          {post.title}
                        </Link>
                      </h3>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
