import property01 from '@/assets/img/add-item/property/01.jpg'
import property02 from '@/assets/img/add-item/property/02.jpg'
import property03 from '@/assets/img/add-item/property/03.jpg'
import property04 from '@/assets/img/add-item/property/04.jpg'
import { Icon } from '@iconify/react'
import { CirclePlus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Photos = () => {
  return (
    <>
      <div className="lg:col-span-2">
        <h1 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold lg:pb-2 pb-1 mb-4">Photos and videos</h1>
        <p className="text-sm">The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.</p>
        <p className="text-sm mb-4">The maximum video size is 10 MB. Formats: mp4, mov.</p>
        <div className="border border-border rounded-md p-3 grid md:grid-cols-3 grid-cols-2 gap-2">
          <div className="relative group block rounded-md overflow-hidden">
            <Image src={property01} alt="" className="size-full bg-cover object-cover" />
            <div className="absolute inset-0 flex justify-center items-center text-default-900 opacity-0 group-hover:opacity-100 transition duration-300">
              <Link href="" className="size-8 z-20 bg-body-bg text-default-800 rounded-md flex justify-center items-center hover:bg-default-100">
                <Trash2 className="size-4 relative z-20" />
              </Link>
              <div className="absolute inset-0 bg-black opacity-20 z-10" />
            </div>
            <div className="absolute start-2 top-2 z-10 mb-3 me-3 bg-body-bg text-default-900 text-xs px-2 py-1 rounded pointer-events-none flex items-center font-semibold">Cover</div>
          </div>
          <div className="relative group block rounded-md overflow-hidden">
            <Image src={property02} alt="" className="size-full bg-cover object-cover" />
            <div className="absolute inset-0 flex justify-center items-center text-default-900 opacity-0 group-hover:opacity-100 transition duration-300">
              <Link href="" className="size-8 z-20 bg-body-bg text-default-800 rounded-md flex justify-center items-center hover:bg-default-100">
                <Trash2 className="size-4 relative z-20" />
              </Link>
              <div className="absolute inset-0 bg-black opacity-20 z-10" />
            </div>
          </div>
          <div className="relative group block rounded-md overflow-hidden">
            <Image src={property03} alt="" className="size-full bg-cover object-cover" />
            <div className="absolute inset-0 flex justify-center items-center text-default-900 opacity-0 group-hover:opacity-100 transition duration-300">
              <Link href="" className="size-8 z-20 bg-body-bg text-default-800 rounded-md flex justify-center items-center hover:bg-default-100">
                <Trash2 className="size-4 relative z-20" />
              </Link>
              <div className="absolute inset-0 bg-black opacity-20 z-10" />
            </div>
          </div>
          <div className="relative group block rounded-md overflow-hidden">
            <Image src={property04} alt="" className="size-full bg-cover object-cover" />
            <div className="absolute inset-0 flex justify-center items-center text-default-900 opacity-0 group-hover:opacity-100 transition duration-300">
              <Link href="" className="size-8 z-20 bg-body-bg text-default-800 rounded-md flex justify-center items-center hover:bg-default-100">
                <Trash2 className="size-4 relative z-20" />
              </Link>
              <div className="absolute inset-0 bg-black opacity-20 z-10" />
            </div>
          </div>
          <div className="w-full group">
            <div className="flex items-center justify-center relative h-full cursor-pointer bg-default-100 dark:bg-white/3 border border-dashed border-default-300 dark:border-white/20 rounded-md p-4">
              <div className="text-center">
                <CirclePlus className="size-6 text-default-900 mb-2 block mx-auto" />
                <div className="relative text-sm font-medium text-default-700 group-hover:underline">Upload photos / videos</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-4">
          <label htmlFor="link" className="block text-sm font-medium text-default-900 mb-2">
            Link to the video tour
          </label>
          <div className="relative">
            <Icon icon="lucide:link" className="absolute start-4 top-1/2 -translate-y-1/2 text-default-600 size-4.5" />
            <input type="url" id="link" placeholder="www.youtube.com/..." className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent pe-4.5 py-2.75 ps-10" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Photos
