import blog01 from '@/assets/img/blog/v2/01.jpg'
import blog02 from '@/assets/img/blog/v2/02.jpg'
import blog03 from '@/assets/img/blog/v2/03.jpg'
import blog04 from '@/assets/img/blog/v2/04.jpg'
import blog05 from '@/assets/img/blog/v2/05.jpg'
import blog06 from '@/assets/img/blog/v2/06.jpg'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type BlogPostType = {
  id: number
  image: StaticImageData
  category: string
  date: string
  title: string
  href: string
}

const postsData: BlogPostType[] = [
  {
    id: 1,
    image: blog01,
    category: 'Car reviews',
    date: 'September 10, 2024',
    title: 'Exploring the Audi Q7: Luxury, performance, and innovation',
    href: '/pages/blog/single-v2',
  },
  {
    id: 2,
    image: blog02,
    category: 'Electric vehicles',
    date: 'August 30, 2024',
    title: 'Electric Lotus sports car reportedly debuting in 2025',
    href: '/pages/blog/single-v2',
  },
  {
    id: 3,
    image: blog03,
    category: 'Electric vehicles',
    date: 'July 25, 2024',
    title: 'Tesla fixes common recall with over-the-air update',
    href: '/pages/blog/single-v2',
  },
  {
    id: 4,
    image: blog04,
    category: 'Car reviews',
    date: 'July 13, 2024',
    title: 'SpeedKore built a carbon-bodied, Hellcat-powered 1970 Charger',
    href: '/pages/blog/single-v2',
  },
  {
    id: 5,
    image: blog05,
    category: 'Industry news',
    date: 'June 17, 2024',
    title: '2025 Subaru Outback leads the latest new car news',
    href: '/pages/blog/single-v2',
  },
  {
    id: 6,
    image: blog06,
    category: 'Buying guides',
    date: 'June 08, 2024',
    title: 'Which is the best small SUV for me?',
    href: '/pages/blog/single-v2',
  },
]

const Post = () => {
  return (
    <section className="lg:pt-12 md:pt-6">
      <div className="container">
        <h2 className="pt-12 md:mb-4 pb-4 lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Popular posts</h2>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {postsData.map((post) => (
            <div key={post.id}>
              <div className="flex gap-6 items-center md:flex-nowrap flex-wrap">
                <Link href={post.href}>
                  <div className="rounded-md overflow-hidden h-35 w-55">
                    <Image src={post.image} alt={post.title} className="w-55 h-35 object-cover transition-transform duration-500 rounded-md hover:scale-110" />
                  </div>
                </Link>

                <div>
                  <div className="flex items-center gap-2 text-secondary pb-2 mb-1">
                    <Link className="text-secondary text-xs uppercase hover:text-default-900" href={post.href}>
                      {post.category}
                    </Link>

                    <div className="bg-default-300 dark:bg-white/20 w-px h-4 m-1" />

                    <span className="text-sm">{post.date}</span>
                  </div>

                  <Link className="hover:underline text-default-900 font-semibold text-xl" href={post.href}>
                    {post.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Post
