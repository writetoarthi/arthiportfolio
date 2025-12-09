import nlimage from "./public/nextlogo.png";
const posts = [
  {
    id: 1,
    title: 'Product Manager Fellowship, Bangalore-2025',
    // href: '#',
   description: `
Built end to end PRD with user research interviews, KPIs, workflows, personas, user journeys, system design, wireframes & prototypes.Solved business cases and product assignments mentored by industry experts.
`,
      imageUrl:
      "/nextleap.png",
    
    category: { title: 'Product management', href: '#' },
    author: {
      name: 'NextLeap',
      role: 'Hands on Fellowship Program',
      // href: '#',
      imageUrl:
        "/nextleap.png",
    },
  },
  {
    id: 2,
    title: 'Co-Founder — Nakshatra Pre School (2014–2024)',
    // href: '#',
    description:
      'Oversaw parents handling, operations, marketing & promotions for 10+ years. Managed communication and service workflow for 1000+ parents by streamlining, work flows, setting different metrics. Created structured SOP that reduced operational dependency by 80%. Coordinated with teachers, vendors, and parents to ensure smooth learning delivery.',
    imageUrl:"/ent1.png",
  
   
    category: { title: 'Operational', href: '#' },
    author: {
      name: 'Co-Founder',
      role: 'Entrepreneurship',
      // href: '#',
      imageUrl:
        '/ent1.png',
    },
  },

]

export default function Example() {
  return (
    <section id="experience" >
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">My Experience</h2>
          <p className="mt-6 text-lg/8 text-gray-600">I bring a blend of hands-on product experience and a decade of people-focused operational leadership. My background combines user empathy, structured problem-solving, and the ability to turn insights into practical, scalable product solutions..</p>
          <div className="mt-16 space-y-20 lg:mt-20">
            {posts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-square w-full lg:w-64 lg:shrink-0">
                <img
                alt=""
                src={post.imageUrl}
                className="absolute inset-0 w-full rounded-2xl bg-gray-50 object-contain object-center p-6"
                />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    {/* <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time> */}
                    <a
                      // href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a >
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-lg/8 text-gray-600">{post.description}</p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                      <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                          <a >
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
