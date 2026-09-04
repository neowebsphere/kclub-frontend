import type { StaticImageData } from 'next/image'

import Blog01 from '@/assets/img/blog/v2/01.jpg'
import blogv2 from '@/assets/img/blog/v2/03.jpg'
import blog05 from '@/assets/img/blog/v2/05.jpg'
import blog02 from '@/assets/img/blog/v2/06.jpg'
import single01 from '@/assets/img/blog/v2/single/01.jpg'
import single02 from '@/assets/img/blog/v2/single/02.jpg'
import cta from '@/assets/img/blog/v2/single/cta.png'
import gallery01 from '@/assets/img/blog/v2/single/gallery/th01.jpg'
import gallery02 from '@/assets/img/blog/v2/single/gallery/th02.jpg'
import gallery03 from '@/assets/img/blog/v2/single/gallery/th03.jpg'

import GlightBox from '@/components/GlightBox'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

type GalleryItemType = {
  image: StaticImageData
  colSpan: string
  rowSpan: string
}

type ArticleCardType = {
  image: StaticImageData
  category: string
  date: string
  title: string
  href: string
}

const galleryData: GalleryItemType[] = [
  {
    image: gallery01,
    colSpan: 'col-span-8',
    rowSpan: 'row-span-2',
  },
  {
    image: gallery02,
    colSpan: 'col-span-4',
    rowSpan: 'row-span-1',
  },
  {
    image: gallery03,
    colSpan: 'col-span-4',
    rowSpan: 'row-span-1',
  },
]

const relatedPost: ArticleCardType = {
  image: blogv2,
  category: 'Electric vehicles',
  date: 'July 12, 2024',
  title: 'Tesla fixes common recall with over-the-air update',
  href: '/pages/blog/single-v2',
}

const alsoReadData: ArticleCardType[] = [
  {
    image: Blog01,
    category: 'Car reviews',
    date: 'September 10, 2024',
    title: 'Exploring the Audi Q7: Luxury, performance, and innovation',
    href: '/pages/blog/single-v2',
  },
  {
    image: blog02,
    category: 'Buying guides',
    date: 'June 08, 2024',
    title: 'Which is the best small SUV for me?',
    href: '/pages/blog/single-v2',
  },
  {
    image: blog05,
    category: 'Industry news',
    date: 'June 06, 2024',
    title: '2025 Subaru Outback leads the latest new car news',
    href: '/pages/blog/single-v2',
  },
]

const Detail = () => {
  return (
    <section className="lg:mt-20 mt-15 pt-6 pb-12 mb-6">
      <div className="container">
        <ol className="flex flex-wrap items-center whitespace-nowrap md:pb-6 pb-2 mb-4">
          <li className="inline-flex items-center">
            <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="/">
              Home
            </Link>

            <Icon icon="lucide:chevron-right" className="mx-2" />
          </li>

          <li className="inline-flex items-center">
            <Link href="/pages/blog/layout-v1" className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden">
              Blog
            </Link>

            <Icon icon="lucide:chevron-right" className="mx-2" />
          </li>

          <li className="inline-flex items-center text-sm font-medium text-default-500/80 truncate" aria-current="page">
            Single post v.2
          </li>
        </ol>

        <div>
          <Image src={single01} alt="Ford Edge" className="rounded-md" />
        </div>

        <div className="lg:py-12 mt-4 lg:w-4xl w-full mx-auto">
          <div className="mb-6">
            <div className="flex md:flex-row flex-col md:items-center text-sm md:gap-4 gap-2 md:mb-2">
              <Link className="font-semibold text-default-500 uppercase hover:text-default-900 text-xs" href="#!">
                Industry news
              </Link>

              <div className="h-6 w-0.25 bg-default-200 dark:bg-white/20 md:block hidden" />

              <span className="text-default-500">November 15, 2024</span>
            </div>
          </div>

          <h1 className="pb-6 text-default-900 font-semibold lg:text-4.5xl md:text-3.5xl text-2.5xl">Ford Edge to be discontinued in 2025, won't return for 2026</h1>

          <hr className="md:my-4 text-default-200 dark:text-white/20" />

          <div className="pt-6">
            <p className="mb-4">
              Ford has officially announced that the midsize crossover SUV, Ford Edge, is set to be discontinued in the second quarter of 2024, with no plans for a 2025 model year. Ford spokesperson Jenn Banovetz confirmed the news, stating that production will continue into the
              second quarter, and the existing inventory will be sold throughout the year.
            </p>

            <p className="mb-4">
              Speculation about the discontinuation of the Edge had circulated for years, yet the redesigned 2024 Lincoln Nautilus hinted at the possibility of another generation for the Edge. Notably, production of the Nautilus transitioned from Ford's Oakville Assembly Complex
              in Ontario, Canada, to China, with anticipated deliveries in the current quarter. It's worth noting that an extended wheelbase variant known as the Ford Edge L is manufactured in China and available in various markets.
            </p>

            <div className="md:py-6 py-4 mb-4">
              <div className="grid grid-cols-12 grid-rows-2 lg:gap-6 gap-4">
                {galleryData.map((item, idx) => (
                  <div key={idx} className={`group relative overflow-hidden rounded-xl ${item.colSpan} ${item.rowSpan}`}>
                    <Image src={item.image} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
                      <GlightBox href={item.image.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
                        <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                          <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
                        </div>
                      </GlightBox>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-4">
              The Oakville plant, previously dedicated to manufacturing the Edge, has undergone a strategic transition to produce five upcoming electric vehicles. This shift, disclosed in 2020 with a production goal set for 2025, is anticipated to encompass a three-row electric
              SUV among the unnamed models. The move aligns with the broader industry trend toward electric mobility, reflecting Ford's commitment to embracing a more sustainable future.
            </p>

            <p className="mb-4">
              Introduced in 2007, the Edge midsize crossover established itself as a pioneer, filling the niche between smaller compact crossovers like the Escape and larger three-row SUVs like the Explorer. Competing with models such as the Jeep Grand Cherokee, Chevy Blazer, and
              Honda Passport, as well as newer entries like the Mazda CX-70, the Edge carved its place in the market. The decision to exit this seemingly lucrative segment appears unconventional, particularly considering its competitive pricing ranging from $40,000 for the base
              SE to well over $50,000 for the ST with additional options.
            </p>

            <div className="md:py-6 py-4 mb-4">
              <div className="border-b border-t border-border font-semibold py-4 flex gap-6 items-center">
                <div className="py-4 flex gap-6 items-center flex-wrap">
                  <div className="rounded-md overflow-hidden w-55">
                    <Image src={relatedPost.image} alt={relatedPost.title} className="w-55 h-full object-cover transition-transform duration-500 rounded-md hover:scale-110 z-0" />
                  </div>

                  <div>
                    <div className="flex md:flex-row flex-col md:items-center text-sm md:gap-4 gap-2 pb-1 mb-2">
                      <Link className="font-semibold text-default-500 uppercase hover:text-default-900 text-xs" href={relatedPost.href}>
                        {relatedPost.category}
                      </Link>

                      <div className="h-6 w-0.25 bg-default-200 dark:bg-white/20 md:block hidden" />

                      <span className="text-default-500">{relatedPost.date}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-default-900">
                      <Link className="hover:underline" href={relatedPost.href}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-4">
              Ford has confirmed that the 2024 Ford Edge will remain available for purchase throughout the year, but its discontinuation will undoubtedly create a significant void in Ford's overall sales volume. In 2023, Ford successfully sold 106,098 units of the five-seat Edge,
              reflecting a notable 24.1% increase from the previous year. Comparatively, the Ford Bronco midsize SUV slightly trailed behind the Edge in sales, while the smaller Bronco Sport, based on the Ford Escape, outperformed both with 127,476 units sold. Despite these
              figures, the Edge's sales numbers still fall behind Ford's leading crossover SUVs, the Escape and Explorer, in the robust family lineup.
            </p>

            <div className="md:py-6 py-4 mb-4">
              <Image src={single02} className="rounded-md mb-2" alt="Ford SUV" />

              <p className="text-default-500 text-sm">Image source Unsplash.com</p>
            </div>

            <p className="mb-4">
              The disappearance of the Edge from the market has fueled speculation, especially as Ford expands its electric vehicle (EV) portfolio and capitalizes on the triumph of the Bronco models. Ford's strategic move aligns with the industry trend of discontinuing older
              crossovers with traditional gas engines in favor of embracing the shift towards electric mobility. This shift is not exclusive to Ford, as other automakers, including Nissan with the Murano, Jeep with the Cherokee, and Mazda with the CX-9, have also discontinued
              older crossover models in 2024, signaling a broader transformation within the automotive landscape.
            </p>

            <div className="md:pt-6 pt-4 flex gap-4">
              <button className="py-2.5 px-5 rounded-md text-default-700 border border-border transition-all duration-400 ease-in-out text-sm font-semibold hover:border-default-900 inline-flex items-center" type="button">
                <Icon icon="lucide:share-2" className="size-4 me-2" />
                Share
              </button>

              <button className="py-2.5 px-5 rounded-md text-default-700 border border-border transition-all duration-400 ease-in-out text-sm font-semibold hover:border-default-900 inline-flex items-center" type="button">
                <Icon icon="lucide:thumbs-up" className="size-4 me-2" />
                Like it
              </button>
            </div>

            <div className="pt-12 lg:mt-12 md:mt-6 mt-2">
              <div className="sm:flex items-center bg-default-100 dark:bg-white/3 rounded">
                <div className="text-start ps-12 py-6">
                  <h2 className="text-2xl font-semibold pb-1 mb-2">Finder car ranking</h2>

                  <p className="text-sm">Check your guide to the bestsellers in this year</p>
                </div>

                <div className="relative w-full self-end sm:pt-4 sm:ms-auto max-w-[429px]">
                  <div className="absolute inset-0 flex items-start sm:items-center justify-center sm:justify-end z-10 px-4 sm:px-10">
                    <Link href="#!" className="bg-primary hover:bg-primary-hover text-white text-sm font-medium px-5 py-2.5 rounded-lg">
                      See the ranking
                    </Link>
                  </div>

                  <div className="relative w-full">
                    <Image src={cta} alt="CTA" className="w-full h-full object-cover rounded" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 lg:mt-12 md:mt-6 mt-2">
              <h2 className="pb-4 mb-4 lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Also read</h2>

              <div className="flex flex-col gap-6">
                {alsoReadData.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex gap-6 items-center md:flex-nowrap flex-wrap">
                      <Link href={item.href}>
                        <div className="rounded-md overflow-hidden h-35 w-55">
                          <Image src={item.image} alt={item.title} className="w-55 h-35 object-cover transition-transform duration-500 rounded-md hover:scale-110 z-0" />
                        </div>
                      </Link>

                      <div>
                        <div className="flex items-center gap-2 text-secondary pb-2 mb-1">
                          <Link className="text-secondary text-xs uppercase hover:text-default-900" href={item.href}>
                            {item.category}
                          </Link>

                          <div className="bg-default-300 dark:bg-white/20 w-px h-4 m-1" />

                          <span className="text-sm">{item.date}</span>
                        </div>

                        <Link className="hover:underline text-default-900 font-semibold text-xl" href={item.href}>
                          {item.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail
