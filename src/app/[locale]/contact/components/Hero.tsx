import hero from '@/assets/img/contact/v2/hero.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="mt-15 lg:pt-6">
        <div className="relative py-12">
          <div className="container relative z-10 lg:py-12 md:py-6 lg:my-6">
            <h1 className="lg:text-5.5xl md:text-4.8xl text-3.5xl font-bold text-white lg:my-4">Looking for support?</h1>
          </div>
          <Image src={hero} alt="Background image" className="absolute top-0 start-0 w-full h-full object-cover" />
          <span className="absolute top-0 start-0 w-full h-full bg-gradient-to-r from-black/60 to-transparent" />
        </div>
      </section>
    </>
  )
}

export default Hero
