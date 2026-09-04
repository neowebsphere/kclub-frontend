import v301 from '@/assets/img/blog/v3/01.jpg'
import v302 from '@/assets/img/blog/v3/02.jpg'
import v303 from '@/assets/img/blog/v3/03.jpg'
import v304 from '@/assets/img/blog/v3/04.jpg'
import v305 from '@/assets/img/blog/v3/05.jpg'
import v306 from '@/assets/img/blog/v3/06.jpg'
import v307 from '@/assets/img/blog/v3/07.jpg'
import v308 from '@/assets/img/blog/v3/08.jpg'
import v309 from '@/assets/img/blog/v3/09.jpg'
import v310 from '@/assets/img/blog/v3/10.jpg'
import v311 from '@/assets/img/blog/v3/11.jpg'
import v312 from '@/assets/img/blog/v3/12.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export type BlogPostType = {
  image: StaticImageData
  title: string
}

const recentPostsData: BlogPostType[] = [
  { image: v301, title: '5 Ways to incorporate a stainless bench in your interior decor' },
  { image: v302, title: 'Choosing the right asbestos removal company' },
  { image: v303, title: 'Best features to ask your luxury home builder about' },
  { image: v304, title: 'Proactive roof care: 4 steps to ensure long-term durability' },
  { image: v305, title: 'Benefits of having a wine cellar at home' },
  { image: v306, title: 'Developing your roof maintenance checklist' },
  { image: v307, title: 'Extend the lifespan of your heater with proper maintenance' },
  { image: v308, title: 'Why you should hire professionals to clean your gutters' },
  { image: v309, title: '20 professional tips for fencing installers' },
  { image: v310, title: 'Boosting home safety: the latest in smart security' },
  { image: v311, title: 'How to choose the best company for installing your HVAC' },
  { image: v312, title: 'Unlocking your dream bathroom' },
]

const Blog = () => {
  return (
    <>
      <section className="lg:py-12 md:py-8 pt-2 pb-4 lg:my-4">
        <div className="container">
          <div className="flex items-center justify-between pb-4 flex-wrap md:mb-4 mb-2 gap-4">
            <h2 className="text-default-900 font-semibold lg:text-3.5xl md:text-2.5xl text-2xl">Recent posts</h2>
            <div className="flex gap-3 md:gap-6 lg:-ms-2 ms-0">
              <div className="w-51.25">
                <select className="w-full border-0 rounded-none ps-0 text-default-700 focus:ring-0 focus:outline-none bg-transparent">
                  <option value="All">All categories</option>
                  <option value="Home improvement">Home improvement</option>
                  <option value="Contractor advice">Contractor advice</option>
                  <option value="DIY projects">DIY projects</option>
                  <option value="Renovation trends" defaultChecked>
                    Renovation trends
                  </option>
                </select>
              </div>
              <div className="relative w-31.25">
                <Icon icon="lucide:arrow-down-up" className="absolute top-1/2 start-0 -translate-y-1/2 z-10" />
                <select className="w-full border-0 rounded-none ps-4 pe-0 text-default-700 focus:ring-0 focus:outline-none ms-2 items-center flex bg-transparent">
                  <option value="Newest">Newest</option>
                  <option value="Popular" defaultChecked>
                    Popular
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {recentPostsData.map((item, idx) => (
              <div key={idx} className="group relative rounded-md overflow-hidden">
                <Link href=""></Link>
                <div className="rounded-md overflow-hidden size-full">
                  <Link href="">
                    <Image src={item.image} alt="Category image" className="size-full object-cover transition-transform duration-500 rounded-md group-hover:scale-110 z-0" />
                  </Link>
                  <div className="p-4 absolute bottom-0 start-0 z-10">
                    <Link href=""></Link>
                    <h3 className="text-xl font-semibold text-white">
                      <Link href=""></Link>
                      <Link className="group-hover:underline text-white" href="">
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                </div>
                <span className="bg-gradient-to-t from-[#212a36]/75 to-transparent absolute start-0 top-30 h-full w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
