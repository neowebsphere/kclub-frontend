import single01 from '@/assets/img/listings/contractors/single/01.jpg'
import single02 from '@/assets/img/listings/contractors/single/02.jpg'
import single03 from '@/assets/img/listings/contractors/single/03.jpg'
import single04 from '@/assets/img/listings/contractors/single/04.jpg'
import single05 from '@/assets/img/listings/contractors/single/05.jpg'
import avatar from '@/assets/img/listings/contractors/single/avatar.jpg'
import GlightBox from '@/components/GlightBox'
import { Icon } from '@iconify/react'
import { CreditCard, Leaf, Shield, Star, ThumbsUp } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

type GalleryItem = {
  image: StaticImageData
  colSpan: string
  rowSpan: string
  featured?: boolean
}

const galleryImages: GalleryItem[] = [
  { image: single01, colSpan: 'md:col-span-8 col-span-2', rowSpan: 'row-span-2', featured: true },
  { image: single02, colSpan: 'md:col-span-2 col-span-1', rowSpan: 'row-span-1' },
  { image: single03, colSpan: 'md:col-span-2 col-span-1', rowSpan: 'row-span-1' },
  { image: single04, colSpan: 'md:col-span-2 col-span-1', rowSpan: 'row-span-1' },
  { image: single05, colSpan: 'md:col-span-2 col-span-1', rowSpan: 'row-span-1' },
]

const Hero = () => {
  return (
    <>
      <div className="flex md:items-center justify-between mb-4 pb-4">
        <div className="sm:flex items-center me-4">
          <div className="aspect-square shrink-0 bg-default-100 rounded-full overflow-hidden mb-2 sm:mb-0" style={{ width: 72 }}>
            <Image src={avatar} alt="Avatar" />
          </div>
          <div className="md:ps-6">
            <div className="flex items-center pb-1 mb-2">
              <h1 className="text-xl text-default-900 font-semibold pe-1 me-2">Mike Gardner</h1>
              <span className="inline-flex items-center bg-info text-white text-xs font-medium px-2 py-0.5 rounded">
                Verified
                <Shield className="size-3.5 ms-1" />
              </span>
            </div>
            <ul className="flex flex-wrap gap-2 text-sm -ms-2 mb-0">
              <li className="flex items-center gap-1 ms-2">
                <Star className="fill-warning text-warning size-4" />
                <span className="text-sm text-default-700">4.7</span>
                <span className="text-xs text-default-500 self-end">(26)</span>
              </li>
              <li className="flex items-center gap-1 ms-2">
                <CreditCard className="size-3.5" />
                $500 - $2,000
              </li>
              <li className="flex items-center gap-1 ms-2">
                <Leaf className="size-3.5" />
                Eco-friendly
              </li>
              <li className="flex items-center gap-1 ms-2">
                <ThumbsUp className="size-3.5" />
                Listing of the month
              </li>
            </ul>
          </div>
        </div>
        <div className="hs-tooltip [--placement:top] flex justify-end mb-3">
          <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-10 border border-default-300 dark:border-white/20 rounded-full hover:border-body-color transition-all duration-300">
            <Icon icon="lucide:bookmark" className="size-3.5 text-body-color" />
            <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md " role="tooltip">
              Bookmark
            </span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-12 grid-cols-2 grid-rows-2 lg:gap-6 gap-4 mb-12">
        {galleryImages.map((item, idx) => (
          <div key={idx} className={`group relative overflow-hidden rounded-xl ${item.colSpan} ${item.rowSpan}`}>
            <Image src={item.image} alt={`Contractor gallery image`} className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />

            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
              <GlightBox href={item.image.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
                <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                  <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
                </div>
              </GlightBox>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Hero
