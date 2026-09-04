import ranking from '@/assets/img/blog/v2/ranking.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const CarRanking = () => {
  return (
    <>
      <section className="lg:pt-12 md:pt-6">
        <div className="container">
          <h2 className="pt-12 md:mb-4 pb-4 lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Finder car ranking</h2>
          <div className="overflow-auto whitespace-nowrap mb-4 pb-4">
            <ul className="flex md:gap-4 gap-2">
              <li>
                <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-900 bg-default-100 dark:bg-white/3 text-sm font-semibold">
                  Small SUVs
                </Link>
              </li>
              <li>
                <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                  Electric cars
                </Link>
              </li>
              <li>
                <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                  Small hatchbacks
                </Link>
              </li>
              <li>
                <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                  Luxury sports cars
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 bg-default-50 rounded-xl dark:bg-white/3">
            <div className="rounded-tl-xl rounded-bl-xl !h-full md:block hidden">
              <Image src={ranking} className="rounded-tl-xl rounded-bl-xl h-full object-cover" alt="Image" />
            </div>
            <div className="md:p-12 p-6">
              <div className="flex items-center justify-between gap-4 my-2">
                <h3 className="lg:text-2xl text-xl font-semibold text-default-900">Best small SUVs</h3>
                <span className="bg-primary py-1 px-2 text-xs text-white rounded font-semibold">Top 5</span>
              </div>
              <ol className="mb-4 lg:pb-1">
                <li className="flex justify-between gap-4 border-b py-4 border-border">
                  <span className="text-sm font-semibold text-body-color">01</span>
                  <span className="text-default-900">Honda CR-V</span>
                </li>
                <li className="flex justify-between gap-4 border-b py-4 border-border">
                  <span className="text-sm font-semibold text-body-color">02</span>
                  <span className="text-default-900">Toyota RAV4</span>
                </li>
                <li className="flex justify-between gap-4 border-b py-4 border-border">
                  <span className="text-sm font-semibold text-body-color">03</span>
                  <span className="text-default-900">Mazda CX-50</span>
                </li>
                <li className="flex justify-between gap-4 border-b py-4 border-border">
                  <span className="text-sm font-semibold text-body-color">04</span>
                  <span className="text-default-900">Subaru Forester</span>
                </li>
                <li className="flex justify-between gap-4 border-b py-4 border-border">
                  <span className="text-sm font-semibold text-body-color">05</span>
                  <span className="text-default-900">Kia Sportage</span>
                </li>
              </ol>
              <Link href="" className="hover:underline flex items-center text-nowrap me-1 text-sm font-semibold">
                View all
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CarRanking
