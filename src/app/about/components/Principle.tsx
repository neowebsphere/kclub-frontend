import about01 from '@/assets/img/about/v2/principles/01.jpg'
import about02 from '@/assets/img/about/v2/principles/02.jpg'
import about03 from '@/assets/img/about/v2/principles/03.jpg'
import about04 from '@/assets/img/about/v2/principles/04.jpg'
import about05 from '@/assets/img/about/v2/principles/05.jpg'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

type PrincipleItem = {
  id: number
  title: string
  description: string
  image: StaticImageData
  mobileAspect: string
  tabletAspect: string
  desktopAspect: string
}

const leftPrinciples: PrincipleItem[] = [
  {
    id: 1,
    title: 'Commitment to quality',
    description: 'We feature only the top contractors who excel in craftsmanship and professionalism, ensuring every project meets the highest standards of quality.',
    image: about01,
    mobileAspect: 'aspect-[300/200]',
    tabletAspect: 'aspect-[350/336]',
    desktopAspect: 'aspect-[664/670]',
  },
  {
    id: 2,
    title: 'Dependability and trust',
    description: 'We connect you with reliable contractors who are punctual, responsive, and consistent, guaranteeing your project remains on schedule and within scope.',
    image: about02,
    mobileAspect: 'aspect-[300/200]',
    tabletAspect: 'aspect-[350/336]',
    desktopAspect: 'aspect-[664/670]',
  },
]

const rightPrinciples: PrincipleItem[] = [
  {
    id: 3,
    title: 'Full transparency',
    description: 'We emphasize clarity and openness, offering detailed contractor profiles with credentials, past projects.',
    image: about03,
    mobileAspect: 'aspect-[300/200]',
    tabletAspect: 'aspect-[350/226]',
    desktopAspect: 'aspect-[664/470]',
  },
  {
    id: 4,
    title: 'Client-centric approach',
    description: "Share experiences and helping us continually enhance our platform's service quality.",
    image: about04,
    mobileAspect: 'aspect-[300/200]',
    tabletAspect: 'aspect-[350/196]',
    desktopAspect: 'aspect-[664/375]',
  },
  {
    id: 5,
    title: 'Integrity in every interaction',
    description: 'We maintain the highest ethical standards, ensuring our contractors follow fair practices and professional conduct throughout their engagements.',
    image: about05,
    mobileAspect: 'aspect-[300/200]',
    tabletAspect: 'aspect-[350/226]',
    desktopAspect: 'aspect-[664/470]',
  },
]

const PrincipleCard = ({ title, description, image, mobileAspect, tabletAspect, desktopAspect }: PrincipleItem) => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 z-20 p-6">
        <div className="lg:p-4">
          <h3 className="lg:text-2.5xl mb-3 text-2xl font-semibold text-white lg:mb-4">{title}</h3>

          <p className="lg:text-lg text-sm text-white">{description}</p>
        </div>
      </div>
      <div className={clsx('md:hidden', mobileAspect)} />
      <div className={clsx('hidden md:block lg:hidden', tabletAspect)} />
      <div className={clsx('hidden lg:block', desktopAspect)} />
      <Image src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <span className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 to-black/0" />
    </div>
  )
}

const Principle = () => {
  return (
    <section className="lg:py-12 md:pt-6 pt-4 pb-12 lg:my-4">
      <div className="container">
        <h2 className="lg:text-4.5xl md:text-3.5xl mb-7 pt-12 text-2.5xl font-semibold text-default-900 md:mb-10 lg:mb-12">Our principles</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {leftPrinciples.map((item) => (
              <PrincipleCard key={item.id} {...item} />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {rightPrinciples.map((item) => (
              <PrincipleCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Principle
