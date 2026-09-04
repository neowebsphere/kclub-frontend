import agents01 from '@/assets/img/home/real-estate/agents/01.png'
import agents02 from '@/assets/img/home/real-estate/agents/02.png'
import agents03 from '@/assets/img/home/real-estate/agents/03.png'
import agents04 from '@/assets/img/home/real-estate/agents/04.png'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type SocialLink = {
  icon: string
  tooltip: string
  href: string
}

type Agent = {
  id: number
  name: string
  role: string
  image: StaticImageData
  profileUrl: string
  socials: SocialLink[]
}

const agents: Agent[] = [
  {
    id: 1,
    name: 'Ivy Taylor',
    role: 'Imperial Property Group Agent',
    image: agents01,
    profileUrl: '/listings/vendor-real-estate',
    socials: [
      { icon: 'tabler:brand-instagram', tooltip: 'Instagram', href: '' },
      { icon: 'tabler:brand-facebook-filled', tooltip: 'Facebook', href: '' },
      { icon: 'lucide:linkedin', tooltip: 'Linkedin', href: '' },
    ],
  },
  {
    id: 2,
    name: 'Floyd Miles',
    role: 'Urban Nest Realty Group Agent',
    image: agents02,
    profileUrl: '/listings/vendor-real-estate',
    socials: [
      { icon: 'tabler:brand-instagram', tooltip: 'Instagram', href: '' },
      { icon: 'tabler:brand-facebook-filled', tooltip: 'Facebook', href: '' },
      { icon: 'lucide:linkedin', tooltip: 'Linkedin', href: '' },
    ],
  },
  {
    id: 3,
    name: 'Adrian Frederick',
    role: 'Prime Path Properties Agent',
    image: agents03,
    profileUrl: '/listings/vendor-real-estate',
    socials: [
      { icon: 'tabler:brand-instagram', tooltip: 'Instagram', href: '' },
      { icon: 'tabler:brand-facebook-filled', tooltip: 'Facebook', href: '' },
      { icon: 'lucide:linkedin', tooltip: 'Linkedin', href: '' },
    ],
  },
  {
    id: 4,
    name: 'Hugh Blake',
    role: 'Harbor View Real Estate Agent',
    image: agents04,
    profileUrl: '/listings/vendor-real-estate',
    socials: [
      { icon: 'tabler:brand-instagram', tooltip: 'Instagram', href: '' },
      { icon: 'tabler:brand-facebook-filled', tooltip: 'Facebook', href: '' },
      { icon: 'lucide:linkedin', tooltip: 'Linkedin', href: '' },
    ],
  },
]

const Testimonial = () => {
  return (
    <section className="lg:py-28 md:py-18 py-12">
      <div className="container">
        <h2 className="text-center lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold text-default-900 lg:mb-10 md:mb-6 mb-4">Top real estate agents</h2>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="group">
              <Link href={agent.profileUrl}>
                <div className="size-33 rounded-full overflow-hidden bg-default-100 dark:bg-white/3 mx-auto">
                  <Image src={agent.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-full" alt={agent.name} />
                </div>
              </Link>

              <h3 className="pt-4 mt-1 mb-1 text-center">
                <Link
                  href={agent.profileUrl}
                  className="text-default-900 text-xl text-center font-semibold relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300"
                >
                  {agent.name}
                </Link>
              </h3>

              <p className="text-sm text-center">{agent.role}</p>

              <div className="mt-5 flex justify-center gap-1">
                {agent.socials.map((social, index) => (
                  <div key={index} className="text-center">
                    <div className="hs-tooltip [--placement:top] inline-block">
                      <Link href={social.href} className="hs-tooltip-toggle inline-flex justify-center items-center gap-2 text-default-600 size-8">
                        <Icon icon={social.icon} className="text-body-color" />
                        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md" role="tooltip">
                          {social.tooltip}
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
