import single01 from '@/assets/img/listings/real-estate/single/01.jpg'
import single02 from '@/assets/img/listings/real-estate/single/02.jpg'
import single03 from '@/assets/img/listings/real-estate/single/03.jpg'
import GlightBox from '@/components/GlightBox'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 md:gap-6 gap-4" id="lightgallery">
        <div className="group relative overflow-hidden rounded-xl md:col-span-2 col-span-1 row-span-2">
          <Image src={single01} alt="img" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
            <GlightBox href={single01.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
              <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
              </div>
            </GlightBox>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl col-span-1 row-span-1">
          <Image src={single02} alt="img" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
            <GlightBox href={single02.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
              <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
              </div>
            </GlightBox>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl col-span-1 row-span-1">
          <Image src={single03} alt="img" className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
            <GlightBox href={single03.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
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

export default Gallery
