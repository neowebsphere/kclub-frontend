import avatar from '@/assets/img/account/avatar-lg.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

const ProfileOverview = () => {
  return (
    <>
      <div className="pb-12 lg:mb-4">
        <div className="mb-6">
          <Image src={avatar} alt="Michael Williams" className="size-30.5 rounded-full" />
        </div>

        <h2 className="mb-4 text-xl font-semibold text-default-900 dark:text-white">Michael Williams</h2>

        <ul className="mb-4 flex flex-row flex-wrap gap-4 text-sm">
          <li className="me-2 flex items-center">
            <Icon icon="lucide:mail" className="me-2 text-base" />
            m.williams@example.com
          </li>

          <li className="me-2 flex items-center">
            <Icon icon="lucide:phone" className="me-2 text-base" />
            (212) 555-7890
          </li>

          <li className="flex items-center">
            <Icon icon="lucide:map-pin" className="me-2 text-base" />
            New York, Brooklyn
          </li>
        </ul>

        <p className="mb-6 text-sm">
          Extensive experience in rentals and a vast database means I can quickly find the options that are right for you. Looking for a seamless and exciting rental experience? Contact me today - I promise it won't be boring! Your perfect home is just a call away.
        </p>

        <Link href="/account/settings" className="inline-flex w-auto rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-default-600 transition hover:border-default-900">
          Edit profile
        </Link>
      </div>
    </>
  )
}

export default ProfileOverview
