'use client'
import ConsultImg1 from '@/assets/img/home/doctors/consultation/01.jpg'
import ConsultImg2 from '@/assets/img/home/doctors/consultation/02.jpg'
import ConsultImg3 from '@/assets/img/home/doctors/consultation/03.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Consultation = {
  title: string
  description: string
  price: string
  originalPrice: string
  image: StaticImageData
}

const consultationData: Consultation[] = [
  {
    title: 'Optometrist',
    description: 'Providing comprehensive eye exams, vision correction, and eye health services to ensure optimal visual performance and eye care.',
    price: '$50.00',
    originalPrice: '$75.00',
    image: ConsultImg1,
  },
  {
    title: 'Therapist',
    description: 'Offering professional mental health support and therapeutic services, address emotional challenges, and improve overall well-being.',
    price: '$35.00',
    originalPrice: '$45.00',
    image: ConsultImg2,
  },
  {
    title: 'Dentist',
    description: 'Delivering high-quality dental care, including cleanings, fillings, preventative treatments, and restorative procedures to maintain',
    price: '$60.00',
    originalPrice: '$90.00',
    image: ConsultImg3,
  },
]

const Consultation = () => {
  return (
    <>
      <section className="lg:py-28 md:py-18 py-12">
        <div className="container">
          <div className="flex items-start justify-between gap-4 md:mb-8 mb-6">
            <h2 className="text-default-900 lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold">Popular consultations</h2>
            <div className="inline-flex items-center gap-2 ">
              <Link href="" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
                View all
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </Link>
            </div>
          </div>
          <Swiper
            className="pb-5"
            slidesPerView={1}
            spaceBetween={24}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            wrapperClass="md:mb-0 mb-8"
          >
            {consultationData.map((item, idx) => (
              <SwiperSlide className="group !h-full" key={idx}>
                <Link href="/listings/list-doctors" className="group"></Link>
                <div className="border border-border rounded-md">
                  <Link href="/listings/list-doctors" className="group">
                    <div className="rounded-tl-md rounded-tr-md w-full h-full overflow-hidden">
                      <Image src={item.image} alt="Image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0 rounded-tl-md rounded-tr-md" />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link href="/listings/list-doctors" className="group"></Link>
                    <h3 className="text-default-900 font-semibold text-2xl pt-1 mb-2">
                      <Link href="/listings/list-doctors" className="group"></Link>
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/list-doctors">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                  <div className="p-4 flex flex-wrap gap-3 justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-semibold text-default-900">{item.price}</div>
                      <del className="text-sm text-secondary">{item.originalPrice}</del>
                    </div>
                    <button type="button" className="py-2.5 px-5 inline-flex border border-primary text-primary transition-all duration-300 rounded-md text-sm hover:bg-primary-hover:text-white">
                      Book an appointment
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination static mt-3" />
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Consultation
