import OfferImg1 from '@/assets/img/home/doctors/offers/01.jpg'
import OfferImg2 from '@/assets/img/home/doctors/offers/02.jpg'
import OfferImg3 from '@/assets/img/home/doctors/offers/03.jpg'
import Image, { StaticImageData } from 'next/image'
import main from '@/assets/img/home/doctors/offers/main.png'
import Link from 'next/link'

type OfferType = {
  title: string
  description: string
  price: string
  originalPrice: string
  image: StaticImageData
}

const offerData: OfferType[] = [
  {
    title: '10% discount on consultation',
    description: 'If you want to get quality advice on health issues. Only now you can order a consultation with a 15% discount. Hurry up, the number of places is limited!',
    price: '$45.00',
    originalPrice: '$50.00',
    image: OfferImg1,
  },
  {
    title: '15% discount on all tests',
    description: 'The new Helsymedica laboratory offers discounts on all types of analyzes and tests for pensioners.',
    price: '$55.00',
    originalPrice: '$65.00',
    image: OfferImg2,
  },
  {
    title: '25% discount on emergency',
    description: 'Would you like to schedule a consultation in advance? Choose a date and time convenient for you and get a 25% discount.',
    price: '$52.00',
    originalPrice: '$70.00',
    image: OfferImg3,
  },
]

const Offer = () => {
  return (
    <>
      <section className="bg-info dark">
        <div className="container">
          <div className="lg:pt-12 pt-6">
            <h2 className="font-semibold lg:text-4.5xl md:text-3.5xl text-2.5xl pt-12 mb-8 text-white">Special offers</h2>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-6">
            <div>
              <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4">
                {offerData.map((item, idx) => (
                  <div className="cursor-pointer bg-white/10 rounded-xl lg:p-8 p-6 group grid grid-cols-12 gap-6" key={idx}>
                    <div className="col-span-9">
                      <h3 className="md:text-2xl text-xl font-semibold mb-2">
                        <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300 text-white" href="#!">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-white opacity-75 mb-6">{item.description}</p>
                      <div className="flex items-center">
                        <span className="text-primary-border-subtle font-semibold md:text-2xl text-xl pe-1 me-2">{item.price}</span>
                        <del className="text-white opacity-75">{item.originalPrice}</del>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <Image src={item.image} alt="Image" className="rounded-xl w-26.5" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:mb-12 mb-6 inline-flex mt-4">
                <Link href="" className=" text-white bg-primary hover:bg-primary-hover py-3.5 px-6 font-semibold transition-all duration-300 rounded-md">
                  More offers
                </Link>
              </div>
            </div>
            <div className="md:-mt-90 lg:mt-0 -mt-20">
              <Image src={main} alt="Image" className="lg:w-full lg:ms-0 mx-auto md:ms-auto md:w-69 w-50" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Offer
