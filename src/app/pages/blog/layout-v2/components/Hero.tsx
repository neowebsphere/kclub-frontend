import feature from '@/assets/img/blog/v2/featured.jpg'
import subscription from '@/assets/img/blog/v2/subscription.png'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type BreadcrumbType = {
  id: number
  label: string
  href: string
}

type FeaturedPostType = {
  category: string
  date: string
  title: string
  description: string
  href: string
  image: StaticImageData
}

type BlogPostType = {
  id: number
  category: string
  date: string
  title: string
  href: string
}

const breadcrumbs: BreadcrumbType[] = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
]

const featuredPost: FeaturedPostType = {
  category: 'Electric vehicles',
  date: 'December 03, 2024',
  title: 'Kia EV9: The best electric car to buy in 2024?',
  description: 'Combining cutting-edge electric vehicle technology with a bold, modern design. Its impressive electric range and fast-charging capabilities make it perfect for long-distance travel...',
  href: '/pages/blog/single-v2',
  image: feature,
}

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    category: 'Industry news',
    date: 'November 15, 2024',
    title: 'New emission regulations: What they mean for car manufacturers',
    href: '/pages/blog/single-v2',
  },
  {
    id: 2,
    category: 'Car reviews',
    date: 'November 08, 2024',
    title: '2024 Honda CR-V: A comprehensive review',
    href: '/pages/blog/single-v2',
  },
  {
    id: 3,
    category: 'Industry news',
    date: 'October 30, 2024',
    title: 'Automotive industry faces supply chain challenges in 2024',
    href: '/pages/blog/single-v2',
  },
  {
    id: 4,
    category: 'Buying guides',
    date: 'October 19, 2024',
    title: 'Top tips for buying a used car in 2024',
    href: '/pages/blog/single-v2',
  },
]

const Hero = () => {
  return (
    <section className="bg-default-100 dark:bg-white/3 lg:mt-20 mt-15 pt-8 pb-12">
      <div className="container">
        <ol className="flex flex-wrap items-center whitespace-nowrap lg:mb-4 pb-2 mb-2">
          {breadcrumbs.map((item) => (
            <li key={item.id} className="inline-flex items-center">
              <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href={item.href}>
                {item.label}
              </Link>
              <Icon icon="lucide:chevron-right" className="mx-2" />
            </li>
          ))}

          <li className="inline-flex items-center text-sm font-medium text-default-500/80 truncate" aria-current="page">
            Blog layout v.2
          </li>
        </ol>

        <div className="grid md:grid-cols-12 grid-cols-1 gap-6 lg:pb-12 pb-8">
          <div className="md:col-span-7 col-span-1">
            <Link href={featuredPost.href}>
              <div className="rounded-xl overflow-hidden mb-6">
                <Image src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-500 rounded-xl hover:scale-110 z-0" />
              </div>
            </Link>

            <div className="flex items-center gap-2 text-secondary pb-2 mb-2">
              <Link className="text-secondary text-xs uppercase hover:text-default-900" href="">
                {featuredPost.category}
              </Link>

              <div className="bg-default-300 dark:bg-white/20 w-px h-4 m-1" />
              <span className="text-sm">{featuredPost.date}</span>
            </div>

            <h2 className="lg:text-2.5xl md:text-2xl text-xl pb-2 mb-1">
              <Link
                className="relative text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100"
                href={featuredPost.href}
              >
                {featuredPost.title}
              </Link>
            </h2>

            <p>{featuredPost.description}</p>
          </div>

          <div className="md:col-span-5 col-span-1">
            <div className="md:ps-6 lg:ms-4 md:border-s md:border-t-0 border-t md:pt-0 pt-6 border-border">
              <div className="flex flex-col gap-6 lg:pb-4 mb-12">
                {blogPosts.map((post) => (
                  <div key={post.id} className="mt-2">
                    <div className="flex items-center gap-2 text-secondary pb-2 mb-1">
                      <Link className="text-secondary text-xs uppercase hover:text-default-900" href="">
                        {post.category}
                      </Link>

                      <div className="bg-default-300 dark:bg-white/20 w-px h-4 m-1" />
                      <span className="text-sm">{post.date}</span>
                    </div>

                    <h3 className="text-xl">
                      <Link
                        className="relative text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100"
                        href={post.href}
                      >
                        {post.title}
                      </Link>
                    </h3>
                  </div>
                ))}
              </div>

              <div className="rounded-md mt-auto bg-info/10">
                <div className="flex items-end justify-between gap-4 pt-4 ps-4">
                  <h3 className="text-base font-semibold mb-4 text-default-900">Stay updated with Finder</h3>

                  <div className="relative lg:max-w-67.25 max-w-32 -mt-10 lg:-me-12 -me-4 aspect-[269/82]">
                    <Image src={subscription} alt="Subscription" className="w-full h-full object-contain" />
                  </div>
                </div>

                <form className="px-4 pb-4">
                  <input type="email" required placeholder="Your email" className="w-full mb-4 rounded-md border border-default-300 focus:ring-2 focus:ring-info focus:border-info px-4 py-2.25 text-sm bg-body-bg" />

                  <button type="submit" className="w-full text-sm bg-info text-white font-medium py-2.5 rounded-md shadow hover:bg-info/90 transition">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
