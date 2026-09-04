import project04 from '@/assets/img/home/partners/projects/04.jpg'
import project05 from '@/assets/img/home/partners/projects/05.jpg'
import project06 from '@/assets/img/home/partners/projects/06.jpg'
import project07 from '@/assets/img/home/partners/projects/07.jpg'
import { Icon } from '@iconify/react'
import { Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type PricingItem = {
  img: StaticImageData
  title: string
  rating: number
  reviews: number
  price: string
}

const pricingData: PricingItem[] = [
  { img: project04, title: 'Cleaning up after repairs', rating: 4.5, reviews: 63, price: 'From $150' },
  { img: project05, title: 'Installation of flat roofs', rating: 4.3, reviews: 18, price: 'From $1,870' },
  { img: project06, title: 'Handyperson for small projects', rating: 4.7, reviews: 35, price: 'From $230' },
  { img: project07, title: 'One-time cleaning service', rating: 4.9, reviews: 127, price: 'From $120' },
]

const Pricing = () => {
  return (
    <>
      <section className="lg:pb-24 pt-5 md:pb-18 pb-14.5">
        <div className="container">
          <div className="flex md:items-center items-start justify-between gap-4 lg:mb-10 md:mb-8 mb-6">
            <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Common pricing references</h2>
            <div className="inline-flex items-center gap-2 ">
              <Link href="" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
                View all
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {pricingData.map((item, idx) => (
              <div className="group" key={idx}>
                <Link href="/partners" className="group"></Link>
                <div className="md:flex block border border-border rounded-md">
                  <Link href="/partners" className="group">
                    <div className="md:rounded-bl-md rounded-bl-0 md:rounded-tr-none rounded-tr-md rounded-tl-md overflow-hidden group relative lg:h-45.75 h-48">
                      <Image src={item.img} alt="" className="lg:h-45.75 h-48 w-full object-cover transition-transform duration-500 md:rounded-bl-md rounded-bl-0 md:rounded-tr-none rounded-tr-md rounded-tl-md group-hover:scale-105 z-0" />
                    </div>
                  </Link>
                  <div className="lg:p-6 p-4">
                    <Link href="/partners" className="group"></Link>
                    <h3 className="text-default-900 font-semibold mb-2 group-hover:underline">
                      <Link href="/partners" className="group"></Link>
                      <Link href="/partners">{item.title}</Link>
                    </h3>
                    <div className="flex items-center lg:gap-4 gap-1 mb-6">
                      <div className="flex items-center gap-1">
                        <Star className="fill-warning text-warning size-4" />
                        <span className="text-sm text-body-color">{item.rating}</span>
                        <span className="text-xs text-secondary">({item.reviews})</span>
                      </div>
                      <div className="text-sm text-default-900">From {item.price}</div>
                    </div>
                    <button
                      type="button"
                      className="mt-auto rounded-md border border-default-900 dark:border-white text-default-900 dark:text-white py-2.5 px-5 text-sm font-semibold inline-flex relative z-2 ms-auto transition-all duration-300 ease-in-out hover:bg-default-900 hover:text-white"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
