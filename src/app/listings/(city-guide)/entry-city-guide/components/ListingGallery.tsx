import single01 from '@/assets/img/listings/city-guide/single/01.jpg'
import single02 from '@/assets/img/listings/city-guide/single/02.jpg'
import single03 from '@/assets/img/listings/city-guide/single/03.jpg'
import single04 from '@/assets/img/listings/city-guide/single/04.jpg'
import single05 from '@/assets/img/listings/city-guide/single/05.jpg'
import GlightBox from '@/components/GlightBox'
import { Icon } from '@iconify/react'
import { Camera } from 'lucide-react'
import Image from 'next/image'

const ListingGallery = () => {
  return (
    <>
      <div className="grid md:grid-cols-12 grid-cols-2 grid-rows-2 lg:gap-6 gap-4 mb-12 pb-2">
        <div className="group relative overflow-hidden rounded-xl md:col-span-6 col-span-2 row-span-2">
          <Image src={single01} alt="" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute bottom-4 start-4 py-1.25 px-2.5 rounded bg-white text-dark z-20 text-xs inline-flex items-center gap-1">
            <Camera className="size-3.5 me-1" />
            20
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
            <GlightBox href={single01.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
              <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
              </div>
            </GlightBox>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl col-span-1 md:col-span-3 row-span-1">
          <Image src={single02} alt="" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
            <GlightBox href={single02.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
              <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
              </div>
            </GlightBox>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl col-span-1 md:col-span-3 row-span-1">
          <Image src={single03} alt="" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
            <GlightBox href={single03.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
              <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
              </div>
            </GlightBox>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl col-span-1 md:col-span-3 row-span-1">
          <Image src={single04} alt="" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
            <GlightBox href={single04.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
              <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
              </div>
            </GlightBox>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl col-span-1 md:col-span-3 row-span-1">
          <Image src={single05} alt="" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
            <GlightBox href={single05.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
              <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
              </div>
            </GlightBox>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingGallery
