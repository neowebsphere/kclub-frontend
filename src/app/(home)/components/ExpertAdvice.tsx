import advice01 from '@/assets/img/home/partners/advice/01.jpg'
import advice02 from '@/assets/img/home/partners/advice/02.jpg'
import advice03 from '@/assets/img/home/partners/advice/03.jpg'
import advice04 from '@/assets/img/home/partners/advice/04.jpg'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type AdviceItem = {
  image: StaticImageData
  category: string
  title: string
  description: string
  date: string
}

const adviceData: AdviceItem[] = [
  {
    image: advice01,
    category: 'Cleaning',
    title: 'Expert advice from masters of cleanliness',
    description: 'Unlock the secrets to a spotless home with tips from cleaning professionals. From tackling stubborn...',
    date: 'Oct 19, 2024',
  },
  {
    image: advice02,
    category: 'Flooring',
    title: 'How to quickly clean laminate flooring',
    description: 'Learn the fastest and most effective methods to clean laminate flooring without damaging its surface...',
    date: 'Sep 13, 2024',
  },
  {
    image: advice03,
    category: 'Air Conditioning',
    title: 'Choose air conditioner with air ionization',
    description: 'Explore the benefits of air conditioners with air ionization technology. Find out how these units improve air...',
    date: 'Sep 05, 2024',
  },
  {
    image: advice04,
    category: 'Landscaping',
    title: 'Landscaping ideas from top local experts',
    description: "Get inspired by creative landscaping ideas from the best local experts. Whether you're revamping your garden...",
    date: 'Aug 26, 2024',
  },
]

const ExpertAdvice = () => {
  return (
    <section className="lg:py-24 md:py-18 py-14 bg-default-100 dark:bg-white/3">
      <div className="container">
        <div className="flex md:items-center items-start justify-between gap-4 lg:mb-10 md:mb-8 mb-6">
          <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Expert advice</h2>
          <Link href="#!" className="hover:underline flex items-center text-nowrap me-1 font-semibold gap-1">
            View all
            <Icon icon="lucide:chevron-right" className="text-lg" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
          {adviceData.map((item, idx) => (
            <div key={idx} className="group">
              <div className="flex md:items-center items-start">
                <Link href="" className="shrink-0">
                  <div className="rounded-md overflow-hidden md:w-[130px] w-[110px]">
                    <Image src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 rounded-md group-hover:scale-105" />
                  </div>
                </Link>
                <div className="md:pe-12 pe-0 ps-4">
                  <Link href="">
                    <span className="text-xs py-1 px-2 text-default-900 bg-default-200/60 rounded-md">{item.category}</span>
                  </Link>
                  <h3 className="pt-1 my-2 text-xl font-semibold text-default-900">
                    <Link href="" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-[1px] after:bg-current after:transition-all after:duration-300">
                      {item.title}
                    </Link>
                  </h3>

                  <p className="mb-2 text-body-color">{item.description}</p>
                  <span className="text-sm text-secondary">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertAdvice
