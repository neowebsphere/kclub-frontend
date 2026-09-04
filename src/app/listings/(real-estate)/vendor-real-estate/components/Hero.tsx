import cover from '@/assets/img/listings/real-estate/vendor-cover.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="lg:mt-20 mt-15 relative">
        <Image src={cover} className="absolute top-0 start-0 w-full h-full object-fit-cover" alt="Cover image" />
        <div className="md:hidden h-50" />
        <div className="hidden md:block lg:hidden h-65" />
        <div className="hidden lg:block xl:hidden h-75" />
        <div className="hidden xl:block h-85" />
      </section>
    </>
  )
}

export default Hero
