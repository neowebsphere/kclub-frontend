import featured1 from '@/assets/img/listings/real-estate/featured/01.jpg'
import featured2 from '@/assets/img/listings/real-estate/featured/02.jpg'
import featured3 from '@/assets/img/listings/real-estate/featured/03.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const RecentlyAdded = () => {
  return (
    <>
      <section className="lg:py-24 md:py-20 py-14 relative">
        <div className="container">
          <div className="flex justify-between mb-6 flex-wrap">
            <h2 className="lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold mb-4 text-default-900">Added today</h2>
            <ul className="inline-flex gap-2 pb-4 overflow-x-auto">
              <li>
                <Link href="" className="border border-dark inline-flex rounded-full dark:border-white text-default-900 py-2.5 px-5 text-sm font-medium">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="" className="border border-default-300 inline-flex transition-all duration-300 hover:border-dark rounded-full hover:dark:border-white text-default-900 py-2.5 px-5 text-sm font-medium">
                  Houses
                </Link>
              </li>
              <li>
                <Link href="" className="border border-default-300 inline-flex transition-all duration-300 hover:border-dark rounded-full hover:dark:border-white text-default-900 py-2.5 px-5 text-sm font-medium">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="" className="border border-default-300 inline-flex transition-all duration-300 hover:border-dark rounded-full hover:dark:border-white text-default-900 py-2.5 px-5 text-sm font-medium">
                  Commercials
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="relative rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 z-10" />
              <Image src={featured1} alt="Category image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
              <div className="p-4 inline-flex">
                <div className="inline-flex gap-2 absolute top-0 start-0 p-3 mt-2 ms-2">
                  <span className="bg-info text-white text-xs flex items-center px-2 py-1 font-medium rounded">
                    Verified
                    <Icon icon="lucide:shield" className="ms-1" />
                  </span>
                  <span className="bg-warning text-white px-2 py-1 text-xs font-semibold rounded">Featured</span>
                </div>
              </div>
              <div className="absolute top-0 start-0 size-full z-10 p-4 lg:p-6">
                <div className="flex items-end h-full p-3">
                  <div className="flex flex-wrap items-center justify-between w-full gap-3">
                    <div>
                      <h3 className="text-white flex flex-wrap md:text-2.5xl text-20 items-center mb-1 lg:mb-2">
                        3-bed apartment
                        <span className="text-base font-medium mx-2">|</span>
                        <span className="text-base">127 sq.m</span>
                      </h3>
                      <p className="text-sm text-white">3811 Ditmars Blvd Astoria, NY 11105</p>
                    </div>
                    <Link href="/listings/single-entry-real-estate" className="bg-primary/90 text-sm font-semibold text-white px-4 py-2 rounded group-hover:bg-primary transition-colors relative">
                      From $3,850
                    </Link>
                  </div>
                </div>
              </div>
              <span className="absolute top-0 start-0 size-full bg-black opacity-30 md:hidden block" />
              <span className="absolute top-0 start-0 size-full hidden md:block" style={{ background: 'linear-gradient(0deg, rgba(64,64,64,0.74) 10.5%, rgba(0,0,0,0) 54.86%)' }} />
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden group mb-6">
                <div className="absolute inset-0 bg-black/10 z-10" />
                <Image src={featured2} alt="Category image" className="w-full lg:h-81.5 h-47 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-0 start-0 z-10 p-3 mt-2 ms-2 flex gap-2">
                  <span className="bg-warning text-white px-2 py-1 text-xs font-semibold rounded">Featured</span>
                </div>
                <div className="absolute top-0 start-0 size-full z-20 p-4 lg:p-6 flex items-end">
                  <div className="flex flex-wrap items-center justify-between w-full gap-3">
                    <div>
                      <h3 className="text-white flex flex-wrap items-center md:text-2.5xl text-20 mb-1 lg:mb-2">
                        2-bed apartment
                        <span className="text-base font-medium mx-2">|</span>
                        <span className="text-base">78 sq.m</span>
                      </h3>
                      <p className="text-sm text-white">40 S 9th St, Brooklyn, NY 11249</p>
                    </div>
                    <Link href="/listings/single-entry-real-estate" className="bg-primary/90 text-sm font-semibold text-white px-4 py-2 rounded group-hover:bg-primary transition-colors">
                      From $2,600
                    </Link>
                  </div>
                </div>
                <span className="absolute top-0 start-0 size-full bg-black opacity-30 md:hidden block" />
                <span className="absolute top-0 start-0 size-full hidden md:block" style={{ background: 'linear-gradient(0deg, rgba(64,64,64,0.74) 10.5%, rgba(0,0,0,0) 54.86%)' }} />
              </div>
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 z-10" />
                <Image src={featured3} alt="Category image" className="w-full object-cover lg:h-81.5 h-47 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-0 start-0 z-20 p-3 mt-2 ms-2 flex gap-2">
                  <span className="bg-warning text-white px-2 py-1 text-xs font-semibold rounded">Featured</span>
                </div>
                <div className="absolute top-0 start-0 size-full z-20 p-4 lg:p-6 flex items-end">
                  <div className="flex flex-wrap items-center justify-between w-full gap-3">
                    <div>
                      <h3 className="text-white flex flex-wrap items-center md:text-2.5xl text-20 mb-1 lg:mb-2">
                        1-bed apartment
                        <span className="text-base font-medium mx-2">|</span>
                        <span className="text-base">78 sq.m</span>
                      </h3>
                      <p className="text-sm text-white">444 Park Ave, Brooklyn, NY 11205</p>
                    </div>
                    <Link href="/listings/single-entry-real-estate" className="bg-primary/90 text-sm font-semibold text-white px-4 py-2 rounded group-hover:bg-primary transition-colors">
                      From $1,750
                    </Link>
                  </div>
                </div>
                <span className="absolute top-0 start-0 size-full bg-black opacity-30 md:hidden block" />
                <span className="absolute top-0 start-0 size-full hidden md:block" style={{ background: 'linear-gradient(0deg, rgba(64,64,64,0.74) 10.5%, rgba(0,0,0,0) 54.86%)' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 start-0 w-full h-4/5 -z-10 bg-default-100 dark:bg-white/3 " />
      </section>
    </>
  )
}

export default RecentlyAdded
