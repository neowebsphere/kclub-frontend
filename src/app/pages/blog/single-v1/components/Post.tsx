import single01 from '@/assets/img/blog/v1/single/01.jpg'
import single02 from '@/assets/img/blog/v1/single/02.jpg'
import avatar from '@/assets/img/blog/v1/single/avatar.jpg'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type SocialShareType = {
  id: number
  icon: string
  tooltip: string
}

type TagType = {
  id: number
  label: string
}

type CommentType = {
  id: number
  name: string
  date: string
  comment: string
  likes: number
  dislikes: number
}

type ArticleSectionType = {
  id: number
  title: string
  description: string
}

const socialShareData: SocialShareType[] = [
  { id: 1, icon: 'lucide:instagram', tooltip: 'Share on Instagram' },
  { id: 2, icon: 'lucide:facebook', tooltip: 'Share on Facebook' },
  { id: 3, icon: 'lucide:link', tooltip: 'Copy link' },
]

const articleSections: ArticleSectionType[] = [
  {
    id: 1,
    title: '1. Captivating perspectives',
    description: 'Drones provide a unique vantage point, capturing stunning aerial views of the property and its surroundings. This allows potential buyers to visualize the layout, landscaping, and neighborhood in a way that traditional ground-level photos cannot convey.',
  },
  {
    id: 2,
    title: '2. Highlighting property features',
    description: "Drones excel at showcasing expansive properties, emphasizing key features like pools, gardens, and outdoor amenities. Aerial shots provide a comprehensive view, helping buyers understand the property's layout and potential.",
  },
  {
    id: 3,
    title: '3. Showcasing surrounding area',
    description: "Drone photography extends beyond the property boundaries, offering a glimpse of the surrounding neighborhood, parks, or proximity to landmarks. This broader perspective can influence a buyer's decision by presenting the property in its larger context.",
  },
  {
    id: 4,
    title: '4. Creating a cinematic experience',
    description: 'Drones can capture dynamic, sweeping shots that add a cinematic quality to property videos. This immersive experience can evoke emotion and create a lasting impression, setting your listing apart from others.',
  },
  {
    id: 5,
    title: '5. Emphasizing property size and scale',
    description: "Drones excel at illustrating the size and scale of a property, particularly for larger estates or expansive landscapes. This helps potential buyers gauge the property's proportions and get a comprehensive understanding of its size.",
  },
  {
    id: 6,
    title: '6. Engaging online presence',
    description: "In an era where online browsing plays a crucial role in the home-buying process, drone photography enhances your listing's online presence. Eye-catching visuals grab attention, encouraging potential buyers to explore the property further.",
  },
  {
    id: 7,
    title: '7. Demonstrating property connectivity',
    description: "Drones can showcase a property's proximity to amenities, schools, and transportation hubs. This connectivity is valuable information for buyers looking for a convenient and well-connected living environment.",
  },
  {
    id: 8,
    title: '8. Competitive edge in marketing',
    description: 'As drone technology becomes more accessible, incorporating it into your real estate marketing strategy can give you a competitive edge. Properties with high-quality aerial imagery are more likely to attract attention and stand out in a crowded market.',
  },
]

const tagsData: TagType[] = [
  { id: 1, label: 'Real estate' },
  { id: 2, label: 'Drones' },
  { id: 3, label: 'Selling property' },
]

const commentsData: CommentType[] = [
  {
    id: 1,
    name: 'Bessie Cooper',
    date: 'July 07, 2024',
    comment: 'Absolutely love the idea of using drone photography in real estate listings! The captivating perspectives and aerial views truly offer a fresh and unique way to showcase a property. It’s a game-changer for sure.',
    likes: 6,
    dislikes: 1,
  },
  {
    id: 2,
    name: 'Andrew Richards',
    date: 'June 19, 2024',
    comment: "In today's digital age, an engaging online presence is crucial for any successful real estate listing. Drones not only grab attention but also keep potential buyers immersed in the property, increasing the chances of a memorable viewing experience.",
    likes: 8,
    dislikes: 2,
  },
  {
    id: 3,
    name: 'Ralph Edwards',
    date: 'May 26, 2024',
    comment:
      "This is a fantastic read! Drone photography truly revolutionizes the way we present real estate listings. The aerial perspectives and high-quality images not only highlight the property's features but also give potential buyers a better sense of the surrounding area. It's amazing how a simple change in the way we capture photos can significantly enhance a listing's appeal and attract more interested buyers. Definitely considering this for my next property listing. Thanks for sharing!",
    likes: 13,
    dislikes: 0,
  },
  {
    id: 4,
    name: 'Kathryn Murphy',
    date: 'April 13, 2024',
    comment:
      "As someone always looking for the next big thing in real estate marketing, drone photography has my full attention. It's not just about standing out; it's about telling a story, and drones allow you to narrate the unique story of each property in a visually stunning way.",
    likes: 24,
    dislikes: 5,
  },
]

const articleImages: StaticImageData[] = [single01, single02]

const Post = () => {
  return (
    <div className="lg:col-span-8 col-span-1">
      <div className="mb-4">
        <Link className="text-default-700 text-xs uppercase font-medium mb-4 inline-flex" href="#!">
          Selling strategies
        </Link>

        <h1 className="md:text-2.5xl text-2xl font-semibold text-default-900 mb-6">How real estate drone photography can elevate your listing?</h1>

        <div className="pb-6 flex justify-between items-center border-b border-border">
          <div className="flex md:flex-row flex-col md:items-center text-sm md:gap-4 gap-2 md:mb-2">
            <Link className="font-semibold text-default-900" href="#!">
              by Darrell Steward
            </Link>

            <span className="text-default-500">May 05, 2024</span>

            <div className="h-6 w-0.25 bg-default-200 dark:bg-white/20 md:block hidden" />

            <Link className="font-normal text-default-500" href="#comments">
              8 comments
            </Link>
          </div>

          <div className="flex items-center">
            {socialShareData.map((item) => (
              <div key={item.id} className="hs-tooltip [--placement:top] flex justify-end mb-3">
                <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-10 rounded-full transition-all duration-300">
                  <Icon icon={item.icon} className="size-4 text-default-900" />

                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md" role="tooltip">
                    {item.tooltip}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="md:mt-2 pt-6">
          <p className="mb-4">
            In the competitive world of real estate, first impressions matter, and drone photography has become a game-changer for property listings. The use of aerial imagery captured by drones can significantly elevate the presentation of a property. Here's how real estate
            drone photography can make your listing stand out.
          </p>

          <div className="pt-6 mb-4">
            <Image src={articleImages[0]} className="rounded-md mb-2" alt="Drone photography" />
            <p className="text-default-500 text-sm">Image source Freepik.com</p>
          </div>

          {articleSections.map((section) => (
            <div key={section.id}>
              <h2 className="lg:pt-6 pt-4 mb-4 text-xl text-default-900 font-semibold">{section.title}</h2>
              <p className="mb-4">{section.description}</p>
            </div>
          ))}

          <div className="pt-6 mb-4">
            <Image src={articleImages[1]} className="rounded-md mb-2" alt="Real estate aerial view" />
            <p className="text-default-500 text-sm">Image source Freepik.com</p>
          </div>

          <h2 className="lg:pt-6 pt-4 mb-4 text-xl text-default-900 font-semibold">Conclusion</h2>
          <p className="mb-4">
            Incorporating drone photography into your real estate listings not only adds a touch of innovation but also provides potential buyers with a comprehensive and visually appealing overview of the property. It's an investment that can pay off by making your listings more
            attractive and memorable in the eyes of prospective buyers. So why settle for a worm's-eye view when you can soar above the competition with drone photography?
          </p>
          <div className="md:py-6 py-4 border-b border-border">
            <ul className="mb-4 flex-wrap flex gap-2">
              {tagsData.map((tag) => (
                <li key={tag.id}>
                  <Link href="#!" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                    {tag.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-b border-border py-4">
            <div className="py-4">
              <div className="rounded-full size-14 mb-4">
                <Image src={avatar} className="rounded-full" alt="Darrell Steward" />
              </div>

              <div className="flex items-center gap-6 mb-2">
                <h6 className="text-default-900 font-semibold">Darrell Steward</h6>

                <div className="flex gap-2">
                  <Link className="size-8 rounded bg-default-100 dark:bg-white/3 flex justify-center items-center transition-all duration-300 hover:bg-default-200" href="#!" aria-label="Facebook">
                    <Icon icon="tabler:brand-facebook-filled" className="text-sm" />
                  </Link>
                  <Link className="size-8 rounded bg-default-100 dark:bg-white/3 flex justify-center items-center transition-all duration-300 hover:bg-default-200" href="#!" aria-label="Linkedin">
                    <Icon icon="tabler:brand-linkedin-filled" className="text-sm" />
                  </Link>
                </div>
              </div>

              <p className="text-sm">Real estate expert with over 10 years of experience, specializing in residential and commercial properties. The author of numerous articles on the real estate market, trends and investment strategies.</p>
            </div>
          </div>

          <div id="comments" className="pt-12 lg:mt-12 md:mt-4 mt-2">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="lg:text-2.5xl md:text-2xl text-2xl text-default-900 font-semibold">{commentsData.length} comments</h2>

              <button type="button" className="py-2.5 px-5 rounded text-sm inline-flex items-center text-body-bg bg-default-900 font-semibold transition-all duration-300 hover:bg-default-950">
                <Icon icon="lucide:edit-3" className="me-2 text-sm" />
                Write comment
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {commentsData.map((comment) => (
                <div key={comment.id}>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-default-900 font-semibold">{comment.name}</span>
                    <span className="text-secondary text-xs">{comment.date}</span>
                  </div>

                  <p className="text-sm pb-2 mb-1">{comment.comment}</p>

                  <div className="flex items-center">
                    <button type="button" className="text-default-600 flex items-center">
                      <Icon icon="lucide:thumbs-up" className="text-base me-1" />
                      {comment.likes}
                    </button>
                    <div className="w-px h-5 bg-default-300 dark:bg-white/20 my-2 mx-4" />
                    <button type="button" className="text-default-600 flex items-center">
                      <Icon icon="lucide:thumbs-down" className="text-base me-1" />
                      {comment.dislikes}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-4">
              <nav className="flex items-center gap-x-1" aria-label="Pagination">
                <div className="flex items-center gap-x-1">
                  {[1, 2].map((page) => (
                    <button key={page} type="button" className={`min-h-9.5 min-w-9.5 flex justify-center items-center py-2 px-3 text-sm rounded-lg transition-all duration-300 ${page === 1 ? 'bg-default-200 text-default-800' : 'text-default-800 hover:bg-default-100'}`}>
                      {page}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
