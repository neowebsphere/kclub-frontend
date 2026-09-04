import googleFontsPng from '@/assets/img/intro/features/google-fonts.png'
import html5Png from '@/assets/img/intro/features/html5.png'
import jsPng from '@/assets/img/intro/features/js.png'
import npmPng from '@/assets/img/intro/features/npm.png'
import sassPng from '@/assets/img/intro/features/sass.png'
import tailwindSvg from '@/assets/img/intro/features/tailwind.svg'
import touchPng from '@/assets/img/intro/features/touch.png'
import vectorPng from '@/assets/img/intro/features/vector.png'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

type FeatureItem = {
  title: string
  description: string
  image: StaticImageData
  class: string
}

const featureItems: FeatureItem[] = [
  {
    title: 'Built with latest Tailwind',
    description: "Finder is the powerful e-commerce front-end solution based on Tailwind - the world's most popular responsive, mobile-first front-end component library.",
    image: tailwindSvg,
    class: 'h-12 w-14',
  },
  {
    title: 'Easy to Customize with Sass',
    description: 'Finder is built using Sass, allowing for effortless customization of colors, typography, and beyond. It is the most mature, stable, and powerful CSS extension language in the world.',
    image: sassPng,
    class: 'size-12',
  },
  {
    title: 'Kick-start Your Development',
    description: 'Start your development process fast and easy with included Npm scripts setup, full tasks automation and local server hot reload. The configuration files are included in the download package.',
    image: npmPng,
    class: 'h-12 w-14',
  },
  {
    title: 'Future-proof JavaScript',
    description: "Finder's core scripts, along with all dependencies, are meticulously crafted in vanilla JS (ES6 modules), ensuring optimal performance and compatibility across various platforms.",
    image: jsPng,
    class: 'size-12',
  },
  {
    title: 'W3C Valid HTML Code',
    description: 'As you likely know, ensuring 100% valid code through W3C validation for all HTML files is crucial. Invalid HTML imposes restrictions on innovation, yet Finder remains innovative at its core.',
    image: html5Png,
    class: 'size-12',
  },
  {
    title: 'Touch-enabled Sliders',
    description: 'In the era of touch screens it is important to ensure great user experience on handheld devices, especially when it comes to such frequently used interface component as slider.',
    image: touchPng,
    class: 'size-12',
  },
  {
    title: 'Google Fonts',
    description: 'Finder uses preloaded variable Google font (Inter) which is free, fast to load and of very high quality. Currently Google fonts library includes 1600+ font families to choose from.',
    image: googleFontsPng,
    class: 'size-12',
  },
  {
    title: 'Vector Based HD-ready Icons',
    description: 'Finder is equiped with font-based icon pack and svg icons to ensure that infographics and interface icons look sharp on any device with any screen resolution and pixel density.',
    image: vectorPng,
    class: 'size-12',
  },
]

const Feature = () => {
  return (
    <>
      <section className="py-12 lg:my-12 md:my-6 my-3">
        <div className="container">
          <h2 className="text-center text-default-900 font-semibold lg:text-4.5xl md:text-3.5xl text-2.5xl lg:mb-12 mb-4 lg:mt-2 lg:pt-6 lg:pb-4 md:pb-6 pb-4">Finder Feature Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-12 md:gap-10 gap-6">
            {featureItems.map((item) => (
              <div key={item.title} className="text-center">
                <Image src={item.image} alt={item.title} className={clsx('mb-4 mx-auto', item.class)} />
                <h3 className="pt-1 pb-2 mb-1 text-xl text-default-800 font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Feature
