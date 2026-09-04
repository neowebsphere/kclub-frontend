import Link from "next/link"

const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 pb-4 w-full bg-body-bg">
        <div className="h-1 w-full rounded-none bg-default-200">
          <div className="h-1 bg-default-900" style={{ width: '100%' }} />
        </div>
        <div className="container pt-4">
          <div className="flex justify-between">
            <div className="text-xl font-semibold text-default-900">Total: $29.00</div>
            <Link href="/listings/property-promotion" className="relative inline-flex items-center px-5 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-hover transition text-sm">
              Submit and publish
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
