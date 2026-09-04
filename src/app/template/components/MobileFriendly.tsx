import qrLight from '@/assets/img/intro/qr-light.png'
import qrDark from '@/assets/img/intro/qr-dark.png'
import mobileLight from '@/assets/img/intro/mobile-light.png'
import mobileDark from '@/assets/img/intro/mobile-dark.png'
import Image from 'next/image'

const MobileFriendly = () => {
  return (
    <>
      <section className="bg-default-100 dark:bg-white/3">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6 lg:items-center items-end">
            <div className="lg:col-span-5 md:col-span-6 col-span-1 md:py-12 pt-12 md:text-start text-center">
              <h2 className="mb-4 text-default-900 font-semibold lg:text-4.5xl md:text-3.5xl text-2xl">
                Mobile Friendly Interface. <span className="text-primary">PWA ready</span>
              </h2>
              <p className="text-lg mb-6">Finder ensures seamless interactions across all devices. With progressive web app (PWA) compatibility, users can enjoy the app-like experiences on their mobile browsers.</p>
              <p className="text-sm font-medium text-default-900 mb-6">Scan QR code below to test on your device:</p>
              <Image src={qrLight} className="dark:hidden md:mx-0 mx-auto" width={120} alt="QR code" />
              <Image src={qrDark} className="hidden dark:block md:mx-0 mx-auto" width={120} alt="QR code" />
            </div>
            <div className="lg:col-span-7 md:col-span-6 col-span-1">
              <Image src={mobileLight} className="dark:hidden" alt="Mobile PWA" />
              <Image src={mobileDark} className="hidden dark:block" alt="Mobile PWA" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MobileFriendly
