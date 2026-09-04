import avatar05 from '@/assets/img/about/v2/avatars/05.jpg'
import avatar06 from '@/assets/img/about/v2/avatars/06.jpg'
import avatar07 from '@/assets/img/about/v2/avatars/07.jpg'
import avatar08 from '@/assets/img/about/v2/avatars/08.jpg'
import avatar09 from '@/assets/img/about/v2/avatars/09.jpg'
import avatar10 from '@/assets/img/about/v2/avatars/10.jpg'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

type TeamMemberType = {
  id: number
  name: string
  image: StaticImageData
}

type RatingType = {
  id: number
  title: string
  href: string
  icon: React.ReactNode
}

type ResourceType = {
  id: number
  title: string
  href: string
}

const teamMembers: TeamMemberType[] = [
  { id: 1, name: 'Kristin Watson', image: avatar05 },
  { id: 2, name: 'Lizzy Rogers', image: avatar06 },
  { id: 3, name: 'Cody Fisher', image: avatar07 },
  { id: 4, name: 'Michael Howard', image: avatar08 },
  { id: 5, name: 'Jacob Jones', image: avatar09 },
  { id: 6, name: 'Darrell Steward', image: avatar10 },
]

const ratings: RatingType[] = [
  {
    id: 1,
    title: '5/5 rating on the App Store',
    href: '/',
    icon: (
      <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width={48} height={48}>
        <path d="M38.299.003H9.695C4.337.003 0 4.34 0 9.698v28.61a9.69 9.69 0 0 0 9.695 9.689h28.61c5.351 0 9.695-4.337 9.695-9.695V9.698A9.7 9.7 0 0 0 38.299.003z" fill="url(#G)" />
        <path
          d="M23.793 11.03l.972-1.68c.6-1.05 1.938-1.404 2.988-.804s1.404 1.938.804 2.988l-9.365 16.21h6.773c2.196 0 3.425 2.58 2.472 4.367H8.579c-1.212 0-2.184-.972-2.184-2.184s.972-2.184 2.184-2.184h5.567l7.127-12.353-2.226-3.863a2.19 2.19 0 0 1 .804-2.988 2.19 2.19 0 0 1 2.988.804l.954 1.686zM15.37 34.361l-2.1 3.642c-.6 1.05-1.938 1.404-2.988.804s-1.404-1.938-.804-2.988l1.56-2.7c1.764-.546 3.198-.126 4.331 1.242zm18.082-6.605h5.681c1.212 0 2.184.972 2.184 2.184s-.972 2.184-2.184 2.184h-3.156l2.13 3.696a2.19 2.19 0 0 1-.804 2.988 2.19 2.19 0 0 1-2.988-.804l-8.069-13.978c-1.83-3.156-.522-6.323.768-7.397l6.437 11.129z"
          fill="#fff"
        />
        <defs>
          <linearGradient id="G" x1={24} y1=".003" x2={24} y2="47.997" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#00bffc" />
            <stop offset={1} stopColor="#0073f6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    title: '4.9/5 rating on the Google Play',
    href: '/',
    icon: (
      <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width={48} height={48}>
        <path d="M3.318.742c-.543.574-.864 1.466-.864 2.622v41.273c0 1.157.321 2.047.864 2.622l.138.135 23.12-23.12V24v-.273L3.456.606l-.138.135z" fill="url(#A)" />
        <path d="M34.283 31.983l-7.706-7.71V24v-.273l7.708-7.708.174.099 9.131 5.188c2.608 1.482 2.608 3.906 0 5.389l-9.131 5.188-.175.099z" fill="url(#B)" />
        <path d="M34.459 31.883L26.577 24 3.318 47.258c.86.91 2.279 1.023 3.878.114l27.262-15.49z" fill="url(#C)" />
        <path d="M34.459 16.117L7.197.627C5.597-.281 4.178-.168 3.318.742L26.577 24l7.882-7.883z" fill="url(#D)" />
        <defs>
          <linearGradient id="A" x1="24.526" y1="2.929" x2="-6.793" y2="34.248" href="#E">
            <stop offset={0} stopColor="#00a0ff" />
            <stop offset=".007" stopColor="#00a2ff" />
            <stop offset=".26" stopColor="#00beff" />
            <stop offset=".512" stopColor="#00d2ff" />
            <stop offset=".76" stopColor="#00dfff" />
            <stop offset={1} stopColor="#00e3ff" />
          </linearGradient>
          <linearGradient id="B" x1="46.985" y1="24.001" x2="1.829" y2="24.001" href="#E">
            <stop offset={0} stopColor="#ffe000" />
            <stop offset=".409" stopColor="#ffbd00" />
            <stop offset=".775" stopColor="#ffa600" />
            <stop offset={1} stopColor="#ff9c00" />
          </linearGradient>
          <linearGradient id="C" x1="30.176" y1="28.283" x2="-12.295" y2="70.754" href="#E">
            <stop offset={0} stopColor="#ff3743" />
            <stop offset={1} stopColor="#e30864" />
          </linearGradient>
          <linearGradient id="D" x1="-2.538" y1="-12.997" x2="16.427" y2="5.968" href="#E">
            <stop offset={0} stopColor="#00a06f" />
            <stop offset=".069" stopColor="#00a86e" />
            <stop offset=".476" stopColor="#00cf6e" />
            <stop offset=".801" stopColor="#00e76d" />
            <stop offset={1} stopColor="#00ef6d" />
          </linearGradient>
          <linearGradient id="E" gradientUnits="userSpaceOnUse" />
        </defs>
      </svg>
    ),
  },
]

const resources: ResourceType[] = [
  { id: 1, title: 'How can I leave a review for a partner?', href: '/' },
  { id: 2, title: 'What support does kclub Partner offer?', href: '/' },
  { id: 3, title: 'Community: Connect with other partners', href: '/' },
  { id: 4, title: 'Press and announcements about kclub', href: '/' },
]

const Team = () => {
  return (
    <section className="py-12 md:mt-4">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
          <div className="lg:col-span-3 md:col-span-4 col-span-1">
            <h3 className="lg:pb-6 md:pb-4 pb-2 mb-4 uppercase text-sm font-normal text-secondary">kclub core team</h3>

            <div className="flex items-center gap-5 flex-wrap">
              {teamMembers.map((member) => (
                <div key={member.id} className="group flex justify-center items-center flex-col hs-tooltip [--placement:auto]">
                  <button type="button" className="hs-tooltip-toggle size-16 inline-flex justify-center items-center gap-2">
                    <div>
                      <Image src={member.image} alt={member.name} className="size-16 rounded-full" />
                    </div>

                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible bg-default-800 text-white rounded inline-block absolute invisible text-sm -mt-8 -ms-4 z-10 py-1 px-2" role="tooltip">
                      {member.name}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9 md:col-span-8 col-span-1">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div className="lg:w-82.5 w-full ms-auto">
                <h3 className="lg:pb-6 md:pb-4 pb-2 mb-4 uppercase text-sm font-normal text-secondary">Best in the market</h3>

                <div className="flex flex-col gap-6">
                  {ratings.map((item) => (
                    <Link key={item.id} className="inline-flex items-center gap-4 group" href={item.href}>
                      {item.icon}

                      <div className="font-medium text-default-900 group-hover:underline">{item.title}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="lg:w-104 w-full ms-auto">
                <h3 className="lg:pb-6 md:pb-4 pb-2 mb-4 uppercase text-sm font-normal text-secondary">Helpful resources</h3>

                <div className="flex flex-col gap-4">
                  {resources.map((item) => (
                    <Link key={item.id} className="flex text-base font-normal group items-center" href={item.href}>
                      <Icon icon="lucide:chevron-right" className="text-lg me-2" />

                      <span className="group-hover:underline">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
