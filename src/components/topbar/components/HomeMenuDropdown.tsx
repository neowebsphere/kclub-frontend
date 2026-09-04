'use client'
import carsDark from '@/assets/img/mega-menu/cars-dark.jpg'
import carsLight from '@/assets/img/mega-menu/cars-light.jpg'
import guideDark from '@/assets/img/mega-menu/city-guide-dark.jpg'
import guideLight from '@/assets/img/mega-menu/city-guide-light.jpg'
import contractorsDark from '@/assets/img/mega-menu/contractors-dark.jpg'
import contractorsLight from '@/assets/img/mega-menu/contractors-light.jpg'
import doctorDark from '@/assets/img/mega-menu/doctors-dark.jpg'
import doctorLight from '@/assets/img/mega-menu/doctors-light.jpg'
import eventsDark from '@/assets/img/mega-menu/events-dark.jpg'
import eventsLight from '@/assets/img/mega-menu/events-light.jpg'
import realDark from '@/assets/img/mega-menu/real-estate-dark.jpg'
import realLight from '@/assets/img/mega-menu/real-estate-light.jpg'
import Icon from '@/components/wrappers/Icon'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MenuItem = {
  title: string
  description: string
  href: string
  lightImage: StaticImageData
  darkImage: StaticImageData
}

const menuItems: MenuItem[] = [
  {
    title: 'Real Estate',
    description: 'Property listings directory',
    href: '/home/real-estate',
    lightImage: realLight,
    darkImage: realDark,
  },
  {
    title: 'Cars',
    description: 'Vehicle sales listings',
    href: '/home/cars',
    lightImage: carsLight,
    darkImage: carsDark,
  },
  {
    title: 'Contractors',
    description: 'Professional services directory',
    href: '/home/contractors',
    lightImage: contractorsLight,
    darkImage: contractorsDark,
  },
  {
    title: 'Doctors',
    description: 'Medical professionals listings',
    href: '/home/doctors',
    lightImage: doctorLight,
    darkImage: doctorDark,
  },
  {
    title: 'Events',
    description: 'Upcoming events listings',
    href: '/home/events',
    lightImage: eventsLight,
    darkImage: eventsDark,
  },
  {
    title: 'City Guide',
    description: 'Local places directory',
    href: '/home/city-guide',
    lightImage: guideLight,
    darkImage: guideDark,
  },
]

const HomeMenuDropdown = () => {
  const pathname = usePathname()

  const isHomeActive = pathname.startsWith('/home')

  return (
    <div className="hs-dropdown [--trigger:hover] relative inline-flex transition-all duration-300">
      <button type="button" className={`hs-dropdown-toggle cursor-pointer text-default-900 flex items-center py-2 px-4.5 font-medium ${isHomeActive ? 'active' : ''}`} aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
        Home
        <Icon icon="chevron-down" className="size-4.5 ms-1" />
      </button>

      <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10" role="menu" aria-orientation="vertical">
        <div
          className="p-3 border border-border hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out opacity-0 scale-90 duration-200 origin-center min-w-0 bg-body-bg shadow-custom rounded-xl after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
          data-hs-transition
        >
          <ul className="flex flex-col">
            {menuItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <li key={item.href} className="group z-30">
                  <Link href={item.href} className={`block text-default text-sm font-semibold rounded-md hover:bg-default-100 hover:dark:bg-white/3 p-2 ${isActive ? 'active' : ''}`}>
                    <span className="font-medium">{item.title}</span>

                    <span className="block text-xs font-normal text-body-color">{item.description}</span>
                  </Link>

                  <Link href={item.href} className="absolute top-0 end-2 h-full -m-px w-50 rounded translate-x-full bg-body-bg p-2 border border-default-200 bg-cover bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:z-30">
                    <Image src={item.lightImage} alt={item.title} className="block dark:hidden h-full" width={200} height={150} />

                    <Image src={item.darkImage} alt={item.title} className="dark:block hidden h-full" width={200} height={150} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeMenuDropdown
