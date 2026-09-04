import { Icon } from '@iconify/react'
import { Link } from '@/i18n/navigation'
import Favorite from './Favorite'
import Help from './Help'
import MyListing from './MyListing'
import ProfileOverview from './ProfileOverview'
import Review from './Review'

const Profile = () => {
  return (
    <div className="lg:col-span-9 col-span-1">
      <h1 className="mb-4 pb-4 lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">My profile</h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:mb-4 pb-12">
        <div className="h-full rounded-md bg-success/10">
          <div className="p-6">
            <h3 className="mb-2 text-sm font-normal text-default-900 dark:text-white">Personal wallet</h3>

            <div className="text-xl font-semibold text-default-900 dark:text-white">$0.00</div>
          </div>

          <div className="px-6 pb-6">
            <Link className="inline-flex items-center text-sm font-medium text-success" href="#!">
              <span className="hover:underline">Top up the wallet</span>

              <Icon icon="lucide:chevron-right" className="ms-1 text-base" />
            </Link>
          </div>
        </div>

        <div className="flex items-center rounded-md bg-warning/10 p-6">
          <div className="relative h-24 w-24 shrink-0" role="progressbar" aria-label="Profile completion" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 96 96">
              <circle cx={48} cy={48} r={44} stroke="rgba(255,255,255)" strokeWidth={8} fill="transparent" />

              <circle cx={48} cy={48} r={44} stroke="currentColor" strokeWidth={8} fill="transparent" strokeDasharray="276.46" strokeDashoffset="96.76" className="text-warning transition-all duration-300" />
            </svg>

            <h5 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-default-900 dark:text-white">65%</h5>
          </div>

          <div className="ps-6">
            <h3 className="mb-2 pb-1 font-semibold text-default-900 dark:text-white">Complete your profile</h3>

            <ul className="space-y-2 text-sm">
              {['Add the languages you speak', 'Verify your email', 'Add date of birth'].map((item) => (
                <li key={item} className="flex items-center">
                  <Icon icon="lucide:plus" className="me-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ProfileOverview />

      <MyListing />

      <Review />

      <Favorite />

      <Help />
    </div>
  )
}

export default Profile
