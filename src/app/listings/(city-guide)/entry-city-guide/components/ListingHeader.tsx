import singledark from '@/assets/img/listings/city-guide/single/logo-dark.png'
import singlelight from '@/assets/img/listings/city-guide/single/logo-light.png'
import { Icon } from '@iconify/react'
import { Heart, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ListingHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-4 lg:mb-6 mb-4">
        <div className="flex items-center gap-4">
          <div className="size-14">
            <Image src={singlelight} className="block dark:hidden" alt="Logo" />
            <Image src={singledark} className="hidden dark:block" alt="Logo" />
          </div>
          <h1 className="lg:text-4.5xl md:text-3.5xl text-2.5xl text-default-900 font-semibold">Sbarro Restaurant</h1>
        </div>
        <div className="flex gap-2">
          <div className="group flex justify-center items-center flex-col">
            <div className="hs-dropdown relative inline-flex hs-tooltip [--placement:auto]">
              <button type="button" className="hs-dropdown-toggle hs-tooltip-toggle size-10 focus:bg-default-100 dark:focus:bg-white/3 inline-flex justify-center items-center gap-2 rounded-full">
                <Share2 className="stroke-2 size-4 text-default-700" />

                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible bg-default-800 text-default-50 rounded inline-block absolute invisible text-xs -mt-4 -ms-3 z-10 py-1 px-2">Share</span>
              </button>

              <div className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute top-10! z-20 min-w-38 border-border bg-body-bg shadow-custom rounded-md mt-2">
                <div className="p-2.5 space-y-0.5">
                  <Link href="" className="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm hover:bg-default-100">
                    <Icon icon="lucide:facebook" className="size-4 fill-default-800" />
                    Facebook
                  </Link>
                  <Link href="" className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm hover:bg-default-100">
                    <Icon icon="lucide:instagram" className="size-4 text-default-800" />
                    Instagram
                  </Link>
                  <Link href="" className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm hover:bg-default-100">
                    <Icon icon="lucide:linkedin" className="size-4 fill-default-800" />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex justify-center items-center flex-col hs-tooltip [--placement:auto]">
            <button type="button" className="hs-tooltip-toggle size-10 bg-default-100 dark:bg-white/3 rounded-full inline-flex justify-center items-center gap-2 ">
              <Heart className="stroke-2 size-4 text-default-700" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible bg-default-800 text-body-bg rounded inline-block absolute invisible text-xs -mt-4 -ms-3 z-10 py-1 px-2 " role="tooltip">
                Wishlist
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingHeader
