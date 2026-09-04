import single01 from '@/assets/img/listings/contractors/single/projects/01.jpg'
import single02 from '@/assets/img/listings/contractors/single/projects/02.jpg'
import single03 from '@/assets/img/listings/contractors/single/projects/03.jpg'
import single04 from '@/assets/img/listings/contractors/single/projects/04.jpg'
import { Icon } from '@iconify/react'
import type { LucideIcon } from 'lucide-react'
import { Baby, BedDouble, Box, LampCeiling, MapPin, Microwave, Rows3, ShowerHead, Star, SwatchBook, ThumbsDown, ThumbsUp, WashingMachine } from 'lucide-react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type ServiceItem = {
  title: string
  icon: LucideIcon
}

type CategoryItem = {
  label: string
  active?: boolean
}

type ProjectItem = {
  id: number
  title: string
  location: string
  image: StaticImageData
}

type ReviewItem = {
  id: number
  name: string
  date: string
  rating: number
  message: string
  likes: number
  dislikes: number
}

const services: ServiceItem[] = [
  { title: '3D rendering', icon: Box },
  { title: 'Bedroom design', icon: BedDouble },
  { title: 'Kitchen design', icon: Microwave },
  { title: 'Bathroom design', icon: ShowerHead },
  { title: 'Closet design', icon: Rows3 },
  { title: 'Laundry room design', icon: WashingMachine },
  { title: 'Kids bedroom design', icon: Baby },
  { title: 'Interior design', icon: LampCeiling },
  { title: 'Color consulting', icon: SwatchBook },
]

const categories: CategoryItem[] = [{ label: 'All', active: true }, { label: 'Kitchen' }, { label: 'Living room' }, { label: 'Pool' }, { label: 'Dining room' }]

const projects: ProjectItem[] = [
  { id: 1, title: 'Bel Air - French Inspired Kitchen', location: '845 West 53rd Street, Ap. 7B, NY 10019', image: single01 },
  { id: 2, title: 'Mid Century Open Floor Kitchen', location: '929 Hart St, Brooklyn, NY 11237', image: single02 },
  { id: 3, title: 'Studio City - Cape Cod New Construction', location: '219 East 78th Street, Suite 3A, NY 10075', image: single03 },
  { id: 4, title: 'Encino Scandinavian Living Room', location: '3811 Ditmars Blvd Astoria, NY 11105', image: single04 },
]

const reviews: ReviewItem[] = [
  {
    id: 1,
    name: 'Randy W.',
    date: 'November 19, 2024',
    rating: 5,
    message: "From start to finish, his cooperation was incredibly smooth. The pricing was quite reasonable, and the task was completed efficiently and with a high level of cleanliness. I'm delighted that we chose Mike over the other companies we considered based on quotes.",
    likes: 6,
    dislikes: 0,
  },
  {
    id: 2,
    name: 'Lora Palmer',
    date: 'November 10, 2024',
    rating: 5,
    message: 'He was absolutely amazing very professional. I highly recommend hirings Mike.',
    likes: 13,
    dislikes: 2,
  },
  {
    id: 3,
    name: 'Melissa Smith',
    date: 'November 5, 2024',
    rating: 5,
    message: 'Mike delivered exceptional work at an excellent price. I highly recommend him. They completed the job in just four days, and after a full year, there have been no issues.',
    likes: 8,
    dislikes: 0,
  },
  {
    id: 4,
    name: 'Alice Cooper',
    date: 'October 23, 2024',
    rating: 5,
    message:
      "Mike's service was exceptional, he is true professional. Discovered him on the website, took a chance, and without a doubt, he not only met but exceeded our expectations. I'm more than pleased to write a glowing review for Mike. As a highly satisfied customer, I can confidently say that he has definitely earned it.",
    likes: 27,
    dislikes: 3,
  },
  {
    id: 5,
    name: 'Natalia D.',
    date: 'October 7, 2024',
    rating: 4,
    message:
      "Mike exhibited great professionalism and politeness. I hired him to replace the door springs, which he did efficiently in a short amount of time. I would wholeheartedly recommend his services to anyone. I'm delighted that everything is now functioning like new again.",
    likes: 15,
    dislikes: 0,
  },
]

const ratingStats = [
  { star: 5, count: 44, width: '58%' },
  { star: 4, count: 17, width: '22.4%' },
  { star: 3, count: 9, width: '12%' },
  { star: 2, count: 4, width: '5%' },
  { star: 1, count: 2, width: '2.6%' },
]

const About = () => {
  return (
    <div className="lg:col-span-2 col-span-1">
      <div className="lg:w-190 w-full">
        <section className="mb-12">
          <h2 className="lg:text-2xl text-xl font-semibold text-default-900 lg:mb-6 mb-4">About</h2>

          <p className="text-sm">
            I'm a skilled handyperson adept at various maintenance, repair, and installation tasks. With a keen eye for detail and a wide range of skills, I tackle diverse projects, from fixing leaky faucets and repairing electrical issues to assembling furniture and conducting
            minor renovations. I bring expertise and efficiency to every job, ensuring homes and spaces remain functional, safe, and aesthetically pleasing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="lg:text-2xl text-xl font-semibold text-default-900 lg:mb-6 mb-4">Services offered</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            {services.map((service) => {
              const ServiceIcon = service.icon
              return (
                <div key={service.title} className="flex items-center">
                  <ServiceIcon className="size-5 me-2" />
                  {service.title}
                </div>
              )
            })}
          </div>
        </section>

        <div className="lg:pb-12">
          <h2 className="text-2xl font-semibold text-default-900  lg:mb-6 mb-4">{projects.length} Projects</h2>

          <div className="overflow-x-auto whitespace-nowrap mb-4 pb-4">
            <ul className="inline-flex gap-2">
              {categories.map((category) => (
                <li key={category.label}>
                  <button type="button" className={`border inline-flex rounded-full py-2.5 px-5 text-sm font-medium transition-all duration-300 ${category.active ? 'border-dark bg-default-100 text-default-900' : 'border-default-300 hover:border-dark text-default-900'}`}>
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="rounded-md overflow-hidden">
                  <Image src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 rounded-md group-hover:scale-110" />
                </div>

                <h3 className="text-default-900 font-semibold text-xl pt-6 pb-2">
                  <Link href="" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current after:transition-all after:duration-300">
                    {project.title}
                  </Link>
                </h3>

                <div className="flex gap-1 items-center text-sm">
                  <MapPin className="size-3.5" />
                  {project.location}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button type="button" className="border border-default-300 rounded-md py-3.5 px-6 w-full font-semibold inline-flex justify-center text-default-800 hover:border-default-900 transition-all duration-300">
              Load more projects
            </button>
          </div>
        </div>

        <div className="lg:pt-6 md:pt-4 pt-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-default-900">Reviews</h2>

            <button className="border border-default-900 text-default-800 text-sm px-4 py-2 rounded-md inline-flex items-center justify-center hover:bg-default-900 font-medium hover:text-body-bg transition-all duration-300">
              <Icon icon="lucide:edit-3" className="text-base -ms-1 me-2" />
              Add review
            </button>
          </div>
        </div>

        <div className="mb-4 pb-4 grid md:grid-cols-12 grid-cols-1 gap-6">
          <div className="md:col-span-4 col-span-1 bg-default-100 dark:bg-white/3 rounded-md p-6 flex flex-col justify-center items-center h-full!">
            <div className="text-4xl font-semibold text-default-900 pb-2 mb-1">4.5</div>
            <div className="flex justify-center gap-1 text-sm mb-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="fill-warning text-warning size-4" />
              ))}
            </div>

            <div className="text-sm">76 reviews</div>
          </div>

          <div className="md:col-span-8 col-span-1">
            <div className="flex flex-col gap-4">
              {ratingStats.map((item) => (
                <div key={item.star} className="flex items-center gap-2">
                  <div className="flex items-center text-sm gap-1">
                    {item.star}
                    <Star className="fill-warning text-warning size-4" />
                  </div>
                  <div className="flex-1 h-1 bg-default-200 rounded-full overflow-hidden">
                    <div className="bg-warning h-1 rounded-full" style={{ width: item.width }} />
                  </div>
                  <div className="text-sm text-nowrap text-right w-10">{item.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-6 flex-col">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-2 mb-2 sm:mb-2">
              <div className="flex items-center gap-4 mb-1">
                <h6 className="text-default-900 font-semibold">{review.name}</h6>
                <span className="text-xs text-default-500">{review.date}</span>
              </div>

              <div className="flex gap-1 text-sm mb-1">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star key={idx} className="fill-warning text-warning size-4" />
                ))}
              </div>

              <p className="text-sm mb-1">{review.message}</p>

              <div className="flex items-center">
                <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -me-1">
                  <ThumbsUp className="size-3.5 me-1" />
                  {review.likes}
                </button>

                <div className="h-5 w-px bg-default-300 dark:bg-white/20 mx-4 my-2" />

                <button type="button" className="flex items-center py-2 text-sm text-default-500 transition -ms-1">
                  <ThumbsDown className="size-3.5 me-1" />
                  {review.dislikes}
                </button>
              </div>
            </div>
          ))}
        </div>

        <nav className="flex items-center gap-x-1 pt-6" aria-label="Pagination">
          <div className="flex items-center gap-x-1">
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-default-200 text-default-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
              aria-current="page"
            >
              1
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              2
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              3
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              4
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              5
            </button>
            <div className="hs-tooltip inline-block">
              <button
                type="button"
                className="hs-tooltip-toggle group min-h-9.5 min-w-9.5 flex justify-center items-center text-default-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
              >
                <Icon icon="lucide:ellipsis" className="text-lg" />
              </button>
            </div>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center text-default-800 hover:bg-default-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-default-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              16
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default About
