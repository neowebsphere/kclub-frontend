import { Icon } from '@iconify/react'
import Link from 'next/link'

const Help = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl text-default-900 font-semibold mb-6">Need help?</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
          <div className="group cursor-pointer">
            <Icon icon="lucide:globe" className="text-2xl text-default-900 mb-2" />
            <h3 className="pb-md-1 mb-2">
              <Link className="text-default-900 font-semibold group-hover:underline" href="">
                Join a Finder property club
              </Link>
            </h3>
            <p className="text-sm">Join your local Host Club to connect with your hosting community both online and through in-person or virtual meetups.</p>
          </div>
          <div className="group cursor-pointer">
            <Icon icon="lucide:headphones" className="text-2xl text-default-900 mb-2" />
            <h3 className="pb-md-1 mb-2">
              <Link className="text-default-900 font-semibold group-hover:underline" href="">
                Join a Finder property club
              </Link>
            </h3>
            <p className="text-sm">I'm your virtual assistant from the Help Center, ready to assist you in finding the information and resources you're looking for.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Help
