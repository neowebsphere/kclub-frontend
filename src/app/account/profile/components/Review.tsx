import ava01 from '@/assets/img/account/reviews/ava01.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Review = () => {
  return (
    <>
      <div className="pb-12 lg:mb-4">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 className="text-2xl font-semibold text-default-900 dark:text-white">Reviews</h2>

          <Link href="/account/reviews" className="flex items-center text-nowrap font-semibold hover:underline">
            View all
            <Icon icon="lucide:chevron-right" className="text-lg" />
          </Link>
        </div>

        <div className="rounded-md bg-default-100 p-6 dark:bg-white/5 md:p-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              { label: 'Reviews about you', value: '8' },
              { label: 'Reviews by you', value: '12' },
              { label: 'Marked as Useful', value: '3' },
              { label: 'Your overall rating', value: '4.9', rating: true },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="mb-2 text-sm font-normal text-body-color">{item.label}</h3>
                <div className="flex items-center text-xl font-semibold text-default-900 dark:text-white">
                  {item.rating && <Icon icon="tabler:star-filled" className="me-2 text-xl text-warning" />}
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <hr className="my-6 border-default-300 dark:border-white/10" />

          <div className="mb-4 flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              <Image src={ava01} alt="Randy Walker" className="size-12 rounded-full" />

              <div>
                <h6 className="mb-1 font-semibold text-default-900 dark:text-white">Randy Walker</h6>
                <div className="text-xs">Nov 12, 2024</div>
              </div>
            </div>

            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Icon key={index} icon="tabler:star-filled" className="text-warning" />
              ))}
            </div>
          </div>

          <p className="mb-2 text-sm">
            Review on:
            <Link className="ms-2 font-medium text-default-900 hover:underline dark:text-white" href="#!">
              67-04 Myrtle Ave Glendale, NY 11385
            </Link>
          </p>

          <p className="text-sm">Excellent apartment in the very center of the city, attractions and entertainment venues are located 50m from the flat. The flat was perfectly clean and had basic slippers, gel-shampoo, clean towels.</p>
        </div>
      </div>
    </>
  )
}

export default Review
