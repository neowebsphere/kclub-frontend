import banner from '@/assets/img/home/contractors/banner.png'
import th01 from '@/assets/img/home/contractors/projects/th01.jpg'
import th02 from '@/assets/img/home/contractors/projects/th02.jpg'
import th03 from '@/assets/img/home/contractors/projects/th03.jpg'
import th04 from '@/assets/img/home/contractors/projects/th04.jpg'
import th05 from '@/assets/img/home/contractors/projects/th05.jpg'
import { Icon } from '@iconify/react'
import { Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type ProjectType = {
  title: string
  image: StaticImageData
  rating: number
  reviews: number
  price: string
}

const projectsData: ProjectType[] = [
  { title: 'Decks & porches', image: th01, rating: 4.7, reviews: 95, price: '$1,890' },
  { title: 'Roof repair', image: th02, rating: 4.5, reviews: 48, price: '$1,120' },
  { title: 'Appliance repair', image: th03, rating: 4.8, reviews: 113, price: '$120' },
  { title: 'Gutter service', image: th04, rating: 5.0, reviews: 73, price: '$390' },
  { title: 'Home cleaning', image: th05, rating: 4.9, reviews: 256, price: '$75' },
  { title: 'Fence repair', image: th05, rating: 4.8, reviews: 29, price: '$205' },
]

const PopularProject = () => {
  return (
    <>
      <section className="lg:py-4">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-6">
            <div className="col-span-1 lg:block hidden">
              <div className="relative max-w-76.5">
                <div className="relative h-full z-10 p-12 mb-3">
                  <h3 className="mb-2 text-2.5xl text-default-900 font-semibold">
                    <Link href="">Get matched with local pros</Link>
                  </h3>
                  <p className="text-sm">for your next home project.</p>
                </div>
                <Link href="" className="block relative z-10 pb-6 ps-12 ms-4">
                  <div className="mb-2" style={{ width: 324 }}>
                    <Image src={banner} alt="Image" className="w-full h-full" />
                  </div>
                </Link>
                <span className="absolute top-0 start-0 w-full h-full bg-default-100 dark:bg-white/3 rounded-xl overflow-hidden dark:hidden">
                  <span className="absolute top-full start-0 -translate-y-1/2 bg-white/50 rounded-full -mt-5 -ms-5 xl:ms-4 size-130" />
                </span>
                <span className="absolute top-0 start-0 w-full h-full bg-default-100 dark:bg-white/3 rounded overflow-hidden hidden dark:block">
                  <span className="absolute top-full start-0 -translate-y-1/2 bg-white/10 rounded-full -mt-5 -ms-5 xl:ms-4 size-130" />
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 col-span-1">
              <div className="flex md:items-center items-start justify-between gap-4 lg:mb-10 md:mb-8 mb-6">
                <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Popular projects near you</h2>
                <div className="inline-flex items-center gap-2 ">
                  <Link href="" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
                    View all
                    <Icon icon="lucide:chevron-right" className="text-lg" />
                  </Link>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                {projectsData.map((item, idx) => (
                  <div className="group" key={idx}>
                    <Link href="/contractors" className="group"></Link>
                    <div className="flex gap-4">
                      <Link href="/contractors" className="group">
                        <div className="rounded-md w-28 h-auto overflow-hidden">
                          <Image src={item.image} alt="Category image" className="w-28 h-auto object-cover transition-transform duration-500 rounded-md group-hover:scale-110 z-0" />
                        </div>
                      </Link>
                      <div className="pt-1">
                        <Link href="/contractors" className="group"></Link>
                        <h3 className="mb-1 font-semibold text-default-900">
                          <Link href="/contractors" className="group"></Link>
                          <Link className="hover:underline transition-all duration-300 ease-in-out" href="/contractors">
                            {item.title}
                          </Link>
                        </h3>
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-body-color">{item.rating}</span>
                          <span className="text-xs text-secondary">({item.reviews})</span>
                        </div>
                        <div className="text-sm text-default-900">From {item.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularProject
