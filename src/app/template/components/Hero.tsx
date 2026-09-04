import carsDark from '@/assets/img/intro/demos/cars-dark.jpg'
import carsLight from '@/assets/img/intro/demos/cars-light.jpg'
import cityGuideDark from '@/assets/img/intro/demos/city-guide-dark.jpg'
import cityGuideLight from '@/assets/img/intro/demos/city-guide-light.jpg'
import contractorsdark from '@/assets/img/intro/demos/contractors-dark.jpg'
import contractorslight from '@/assets/img/intro/demos/contractors-light.jpg'
import doctorsDark from '@/assets/img/intro/demos/doctors-dark.jpg'
import doctorsLight from '@/assets/img/intro/demos/doctors-light.jpg'
import eventsDark from '@/assets/img/intro/demos/events-dark.jpg'
import eventsLight from '@/assets/img/intro/demos/events-light.jpg'
import realEstateDark from '@/assets/img/intro/demos/real-estate-dark.jpg'
import realEstateLight from '@/assets/img/intro/demos/real-estate-light.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type DemoItem = {
  title: string
  href: string
  lightImage: StaticImageData
  darkImage: StaticImageData
}

const demoItems: DemoItem[] = [
  { title: 'Contractors', href: '/home/contractors', lightImage: contractorslight, darkImage: contractorsdark },
  { title: 'Real Estate', href: '/home/real-estate', lightImage: realEstateLight, darkImage: realEstateDark },
  { title: 'Doctors', href: '/home/doctors', lightImage: doctorsLight, darkImage: doctorsDark },
  { title: 'Events', href: '/home/events', lightImage: eventsLight, darkImage: eventsDark },
  { title: 'Cars', href: '/home/cars', lightImage: carsLight, darkImage: carsDark },
  { title: 'City Guide', href: '/home/city-guide', lightImage: cityGuideLight, darkImage: cityGuideDark },
]

const Hero = () => {
  return (
    <>
      <section className="lg:pt-30 md:pt-24 pt-20 lg:pb-24 md:pb-18 pb-12 bg-default-100 dark:bg-white/3">
        <div className="container">
          <div className="pt-4 md:mb-12 mb-6 md:w-162 w-full mx-auto text-center">
            <h1 className="lg:text-5xl md:text-4.5xl text-3xl mb-4 md:pb-2 text-default-900 font-bold">
              Directory &amp; Listings <span className="text-nowrap">Tailwind CSS 4 HTML</span> Template
            </h1>
            <p className="text-lg">Maximize your directory or listings platform with our premium Tailwind css template, designed for top performance and easy customization.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {demoItems.map((item) => (
              <div key={item.href} className="w-full bg-body-bg p-1 rounded-xl relative group">
                <Link href={item.href}>
                  <div className="rounded-xl overflow-hidden">
                    <Image src={item.lightImage} className="block dark:hidden w-full h-full object-cover transition-transform duration-500 rounded-xl group-hover:scale-105 z-0" alt={item.title} />
                    <Image src={item.darkImage} className="hidden dark:block w-full h-full object-cover transition-transform duration-500 rounded-xl group-hover:scale-105 z-0" alt={item.title} />
                  </div>
                </Link>
                <div className="absolute bottom-0 start-0 p-3">
                  <Link href={item.href} className="m-1 bg-default-900 inline-flex justify-center items-center text-body-bg group-hover:bg-default-950 rounded-full py-2 px-3.5 text-sm font-semibold relative">
                    {item.title}
                    <Icon icon="lucide:arrow-up-right" className="ms-2 opacity-100 translate-y-0 transition-all duration-300 text-base  group-hover:opacity-0  group-hover:-translate-y-5" />
                    <Icon icon="lucide:arrow-up-right" className="ms-2 absolute end-3.5 opacity-0 translate-y-5 transition-all duration-300 text-base  group-hover:opacity-100 group-hover:translate-y-0" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
