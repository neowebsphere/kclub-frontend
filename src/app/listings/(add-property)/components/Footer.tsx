import { Icon } from '@iconify/react'
import clsx from 'clsx'
import Link from 'next/link'

type FooterType = {
  className: string
  width: string
  backButtonLink?: string
  nextButtonLink: string
  backShow?: boolean
}

const Footer = ({ backButtonLink, nextButtonLink, backShow, className, width }: FooterType) => {
  return (
    <>
      <footer className="fixed bottom-0 pb-4 w-full bg-body-bg">
        <div className="h-1 w-full rounded-none bg-default-200">
          <div className="h-1 bg-default-900" style={{ width: width }} />
        </div>
        <div className="container pt-4">
          <div className={clsx('flex', className)}>
            {backShow && (
              <Link href={backButtonLink || ''} className="relative inline-flex items-center px-5 py-2.5 border border-default-900 bg-transparent rounded-md text-default-900 text-sm font-medium transition group hover:text-body-bg hover:bg-default-900">
                <Icon icon="lucide:arrow-left" className="me-2 opacity-100 -translate-x-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-5" />
                Back
                <Icon icon="lucide:arrow-left" className="me-2 absolute start-5 opacity-0 translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            )}

            <Link href={nextButtonLink} className="relative inline-flex items-center px-5 py-2 rounded-md bg-default-900 text-body-bg font-medium hover:bg-default-800 transition group text-sm">
              Next
              <Icon icon="lucide:arrow-right" className="ms-2 opacity-100 translate-x-0 transition-all duration-300   group-hover:opacity-0 group-hover:translate-x-5" />
              <Icon icon="lucide:arrow-right" className="ms-2 absolute end-5 opacity-0 -translate-x-5 transition-all duration-300  group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
