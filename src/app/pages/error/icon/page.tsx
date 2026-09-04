import cones from '@/assets/img/404/traffic-cones.png'
import Topbar from '@/components/topbar'
import { Icon } from '@iconify/react'
import { ChevronRight, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" showSignIn ButtonText="Sell car" ButtonClassName="rounded-md" ButtonIcon={<Plus className="size-4 me-2" />} />

      <section className="lg:pb-27 md:pb-15 lg:pt-45 md:pt-35 pt-25 bg-default-100 dark:bg-white/3">
        <div className="container">
          <div className="md:w-141 w-full mx-auto">
            <Image src={cones} alt="Traffic cones" className="w-49 mx-auto" />
            <h1 className="md:pt-12 pt-6 mb-6 text-default-900 font-semibold lg:text-3.5xl md:text-2.5xl text-2xl text-center">Sorry, we can't find that page</h1>
            <div className="bg-body-bg border border-default-300 dark:border-white/20 rounded-md p-2">
              <form className="flex flex-col sm:flex-row gap-2 p-1">
                <div className="flex items-center w-full ms-2">
                  <Icon icon="lucide:search" className="text-lg text-default-800" />
                  <input type="search" placeholder="What are you looking for?" required className="w-full border-0 focus:ring-0 placeholder-default-500 text-sm bg-transparent" />
                </div>
                <button type="submit" className="text-body-bg bg-default-800 rounded-md transition-all duration-300 ease-in-out hover:bg-default-900 py-3.5 px-6">
                  Search
                </button>
              </form>
            </div>
            <div className="md:pt-12 pt-6 flex flex-col gap-6">
              <div className="group cursor-pointer flex items-center">
                <div>
                  <div className="size-13 rounded border border-border flex items-center justify-center bg-body-bg text-default-700">
                    <Icon icon="lucide:copy" className="text-xl" />
                  </div>
                </div>
                <div className="ps-4">
                  <div className="flex items-center mb-1">
                    <Link className="relative text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100" href="">
                      Over 1 million listings
                    </Link>
                    <ChevronRight className="size-4.5 ms-1" />
                  </div>
                  <p className="text-sm">Finder is a leading digital marketplace for the automotive industry.</p>
                </div>
              </div>
              <div className="group cursor-pointer flex items-center">
                <div>
                  <div className="size-13 rounded border border-border flex items-center justify-center bg-body-bg text-default-700">
                    <Icon icon="lucide:car" className="text-xl" />
                  </div>
                </div>
                <div className="ps-4">
                  <div className="flex items-center mb-1">
                    <Link className="relative text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100" href="">
                      Online car appraisal
                    </Link>
                    <ChevronRight className="size-4.5 ms-1" />
                  </div>
                  <p className="text-sm">Compare the price and quality of the car and make the right choice.</p>
                </div>
              </div>
              <div className="group cursor-pointer flex items-center">
                <div>
                  <div className="size-13 rounded border border-border flex items-center justify-center bg-body-bg text-default-700">
                    <Icon icon="lucide:info" className="text-xl" />
                  </div>
                </div>
                <div className="ps-4">
                  <div className="flex items-center mb-1">
                    <Link className="relative text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100" href="">
                      Help and support
                    </Link>
                    <ChevronRight className="size-4.5 ms-1" />
                  </div>
                  <p className="text-sm">Our friendly team here to help with all you questions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <footer className="pt-12 pb-6 bg-default-100 dark:bg-white/3">
  <div className="container">
    <div className="md:pb-4">
      <p className="text-sm text-center">
        © All rights reserved. Made by <Link className="text-default-900 font-medium  hover:underline" href="" target="_blank" rel="noreferrer">Coderthemes</Link>
      </p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Page
