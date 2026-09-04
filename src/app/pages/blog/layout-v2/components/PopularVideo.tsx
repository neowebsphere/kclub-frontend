import vlog01 from '@/assets/img/blog/v2/vlog/01.jpg'
import vlog02 from '@/assets/img/blog/v2/vlog/02.jpg'
import vlog03 from '@/assets/img/blog/v2/vlog/03.jpg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type VideoItem = {
  id: number
  title: string
  href: string
  image: StaticImageData
  likes: string
  duration: string
}

const popularVideos: VideoItem[] = [
  {
    id: 1,
    title: 'Electric Mercedes sedan car reportedly debuting in 2025',
    href: '/pages/blog/single-v2',
    image: vlog01,
    likes: '100%',
    duration: '36:12',
  },
  {
    id: 2,
    title: 'Budget vs Premium tyres: which are better value this year?',
    href: '/pages/blog/single-v2',
    image: vlog02,
    likes: '99%',
    duration: '24:30',
  },
  {
    id: 3,
    title: 'Tesla fixes common recall with over-the-air update',
    href: '/pages/blog/single-v2',
    image: vlog03,
    likes: '100%',
    duration: '17:25',
  },
]

const PopularVideo = () => {
  return (
    <section className="lg:py-12 md:py-6">
      <div className="container">
        <div className="flex items-start justify-between gap-4 pb-4 pt-12 md:mb-4">
          <h2 className="text-2xl font-semibold text-default-900 md:text-2.5xl lg:text-3.5xl">Popular videos</h2>

          <div className="inline-flex items-center gap-2">
            <Link href="/pages/blog" className="me-1 flex items-center text-nowrap text-sm font-semibold hover:underline">
              More video
              <Icon icon="lucide:chevron-right" className="text-lg" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {popularVideos.map((video) => (
            <div key={video.id} className="group">
              <Link href={video.href}>
                <div className="relative h-full w-full overflow-hidden rounded-md">
                  <Image src={video.image} alt={video.title} className="h-full w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-110" />

                  <div className="absolute top-0 start-0 z-10 flex flex-col gap-1 pt-2 ps-2 mt-2 ms-2">
                    <div className="bg-black/70 size-8 text-white inline-flex items-center justify-center rounded-md">
                      <Icon icon="lucide:video" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 start-0 z-10 flex w-full items-center justify-between bg-black/30 px-3 py-1 text-white backdrop-blur-sm">
                    <div className="flex items-center text-sm">
                      <Icon icon="lucide:thumbs-up" className="me-2 text-base" />

                      {video.likes}
                    </div>

                    <div className="text-sm">{video.duration}</div>
                  </div>
                </div>
              </Link>

              <h3 className="pt-6 text-xl font-semibold text-default-900">
                <Link href={video.href} className="group-hover:underline">
                  {video.title}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularVideo
