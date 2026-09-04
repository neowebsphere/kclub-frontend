type StoryItemType = {
  year: string
  title: string
  description: string
}

const storyData: StoryItemType[] = [
  {
    year: '2022',
    title: 'The vision takes shape',
    description:
      'In early 2022, a team with backgrounds in construction, technology, and customer service saw a pressing need in the market.',
  },
  {
    year: '2022',
    title: 'The vision takes shape',
    description:
      'In early 2022, a team with backgrounds in construction, technology, and customer service saw a pressing need in the market.',
  },
  {
    year: '2022',
    title: 'The vision takes shape',
    description:
      'In early 2022, a team with backgrounds in construction, technology, and customer service saw a pressing need in the market.',
  },
  {
    year: '2022',
    title: 'The vision takes shape',
    description:
      'In early 2022, a team with backgrounds in construction, technology, and customer service saw a pressing need in the market.',
  },
]

const Story = () => {
  return (
    <section className="lg:py-12 md:pt-6 pt-4 pb-12 lg:my-4">
      <div className="container">
        <h2 className="lg:mb-12 md:mb-10 mb-7 text-default-900 font-semibold lg:text-4.5xl md:text-3.5xl text-2.5xl">
          Finder story
        </h2>

        <div className="overflow-auto pb-4">
          <div className="lg:grid lg:grid-cols-4 flex gap-6">
            {storyData.map((item) => (
              <div key={item.year + item.title} className="min-w-55">
                <div className="flex items-center gap-4">
                  <div className="border border-info text-info py-3 inline-flex font-semibold px-6 text-sm rounded-full">
                    {item.year}
                  </div>

                  <div className="w-full border-t border-default-300 dark:border-white/20 me-n2" />
                </div>

                <h3 className="pt-4 mt-4 pb-1 mb-2 text-xl text-default-900 font-semibold">
                  {item.title}
                </h3>

                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story