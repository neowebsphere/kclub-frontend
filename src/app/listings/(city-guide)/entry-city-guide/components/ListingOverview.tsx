import singledark from '@/assets/img/listings/city-guide/single/map-dark.jpg'
import singlelight from '@/assets/img/listings/city-guide/single/map-light.jpg'
import { CigaretteOff, CircleParking, PawPrint, Wine } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ListingOverview = () => {
  return (
    <>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div className="md:col-span-7 col-span-1">
          <h2 className="mb-4 lg:text-2xl text-xl font-semibold text-default-900">Overall info</h2>
          <ul className="flex flex-wrap gap-2 text-sm mb-4">
            <li className="flex items-center">
              <CircleParking className="size-3.5 me-1" />
              Free parking
            </li>
            <li className="flex items-center ms-4">
              <CigaretteOff className="size-3.5 me-1" />
              Non-smoking rooms
            </li>
            <li className="flex items-center md:ms-4 ms-0">
              <PawPrint className="size-3.5 me-1" />
              Pet-friendly
            </li>
            <li className="flex items-center lg:ms-4 md:ms-0 ms-4">
              <Wine className="size-3.5 me-1" />
              Bar
            </li>
          </ul>
          <p className="text-sm mb-4">
            Sbarro Restaurant offers a delectable fusion of flavors for both meat lovers and vegans alike. Our diverse menu features succulent meat dishes and tantalizing vegan creations, ensuring a delightful dining experience for every palate. Savor the best of both worlds in a
            welcoming ambiance that celebrates the joy of shared meals and culinary diversity.
          </p>
          <p className="text-sm mb-4">
            At Sbarro, we pride ourselves on using only the freshest ingredients, sourced locally whenever possible, to craft our mouth-watering dishes. From hearty pasta and pizza options to vibrant salads and creative vegan bowls, there's something for everyone to enjoy. Each
            meal is thoughtfully prepared by our talented chefs, bringing bold flavors and authentic tastes to your table.
          </p>
          <p className="text-sm">
            Whether you're stopping in for a quick lunch or enjoying a leisurely dinner with friends and family, Sbarro offers an inviting atmosphere perfect for any occasion. Our friendly staff is dedicated to providing exceptional service, ensuring that every visit is a
            memorable one. Come experience the perfect blend of tradition and innovation at Sbarro Restaurant, where every bite is a celebration of good food and great company.
          </p>
        </div>
        <div className="md:col-span-5 ms-auto col-span-1 md:ps-6">
          <div className="relative rounded-md overflow-hidden max-w-104">
            <svg className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-primary -mt-4" xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor">
              <path d="M37.572 12.725a15 15 0 0 0-11.867-8.139c-1.132-.114-2.272-.114-3.404 0-2.502.253-4.9 1.131-6.973 2.553s-3.757 3.342-4.895 5.585a16.21 16.21 0 0 0 2.222 17.84l10.189 12.388a1.5 1.5 0 0 0 1.159.547 1.5 1.5 0 0 0 1.159-.547L35.35 30.565a16.21 16.21 0 0 0 2.221-17.84zM24.002 25.5a6 6 0 0 1-5.543-3.704 6 6 0 0 1 1.301-6.539 6 6 0 0 1 6.539-1.301 6 6 0 0 1 3.704 5.543 6.01 6.01 0 0 1-1.759 4.241c-1.125 1.125-2.65 1.758-4.241 1.759z" />
            </svg>

            <div className="absolute inset-0 flex justify-center items-end z-10 p-6">
              <Link href="" className="bg-primary rounded-full px-5 py-2 text-white font-medium hover:bg-primary-hover text-sm">
                Get directions
              </Link>
            </div>

            <div className="relative bg-gray-100">
              <Image src={singlelight} alt="" className="block dark:hidden w-full h-full object-cover" />
              <Image src={singledark} alt="" className="hidden dark:block w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingOverview
