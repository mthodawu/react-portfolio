import Image from "next/image";
import { FaLaptop } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import clearbg from "/public/orange.png";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className="min-h-screen px-10">
                <nav className="flex justify-between  py-10 mb-12">
                    <h1 className="text-xl font-burtons">Hello, welcome to my demo!</h1>
                    <ul className="flex items-center">
                        <li>
                            <FaLaptop className="cursor-pointer text-2xl" />
                        </li>
                        <li>
                            <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg  text-white px-4 py-2 ml-4">CV</a>
                        </li>
                    </ul>
                </nav>
                <div className="text-center p-10">
                    <h2 className="text-5xl py-2 text-orange-500 font-medium">Mthokozisi Sibanda</h2>
                    <h3 className="text-2xl py-2 text-teal-300">Developer and Honours student</h3>
                    <p className="text-md py-5 leading-8 text-gray-300">
                        I am a developer and an Honours student at Rhodes University.
                        I like playing around with technology and hope to make an impact with it on the world.
                        I am currently studying towards a BSc (Hons) in Computer Science
                        and I am looking for opportunities to hone my skills in the fields of Web App development and Cyber Security.
                    </p>
                </div>
                <div className="text-5xl flex justify-center gap-16 py-10 text-gray-600 ">
                    <AiFillGithub />
                    <AiFillLinkedin />
                </div>

                <div className="relative mx-auto  w-40 h-40 mt-30 ">
                    <Image src={clearbg} alt="Developer waving"
                        className="rounded-lg relative object-center "

                        objectFit="cover" />
                </div>
            </section>
        </main>
    );
}

const posts = [
    {
        id: 1,
        title: 'How I built this site',
        href: '#',
        description:
            'This is a post about how I built this site using Next.js and Tailwind CSS.',
        date: 'May 2, 2024',
        datetime: '2024-05-2',
        category: { title: 'Web development', href: '#' },
        author: {
            name: 'Mthokozisi Sibanda',
            role: 'Developer and Honours student',
            href: '#',
            imageUrl:
                '/avatar.png',
        },
    },
    {
        id: 2,
        title: 'Acropalyse',
        href: '#',
        description:
            'Imagine taking a screenshot of something, cropping out sensitive information and then posting it online or to a friend. What could go wrong?',
        date: 'May 2, 2024',
        datetime: '2024-05-2',
        category: { title: 'Cyber Security', href: '#' },
        author: {
            name: 'Mthokozisi Sibanda',
            role: 'Developer and Honours student',
            href: '#',
            imageUrl:
                '/avatar.png',
        },
    },
    {
        id: 3,
        title: 'It\'s a marathon, not a sprint',
        href: '#',
        description:
            'Reflections from the SANReN CyberSecurity Challenge qualifying round.',
        date: 'May 2, 2024',
        datetime: '2024-05-2',
        category: { title: 'Cyber Security', href: '#' },
        author: {
            name: 'Mthokozisi Sibanda',
            role: 'Developer and Honours student',
            href: '#',
            imageUrl:
                '/avatar.png',
        },
    },
    // More posts...
]

export function BlogCarousel() {
    return (
        <div className="bg-dark py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-teal-600 sm:text-4xl">A very small blog</h2>
                    <p className="mt-2 text-lg leading-8 text-orange-50">
                        Reflections, inspirations & more.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-orange-100 px-3 py-1.5 font-medium text-black hover:bg-orange-300"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-orange-200 group-hover:text-teal-200">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-orange-600">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-100">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

//Content for the blog carousel
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { IoFootsteps } from "react-icons/io5";
import { GiBrickWall } from "react-icons/gi";

export function Post() {
    return (
        <section>
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-orange-500">Blog post</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How I built this site</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    Have you ever scrolled through social media and stumbled upon something that ignites a creative spark?
                                    That's exactly what happened to me recently. I was browsing through YouTube when I saw a video post by a developer showcasing his stunning portfolio website,
                                    built with Tailwind CSS and Next.js. The clean design, smooth animations, and overall responsiveness left me mesmerized.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt=""
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    In that moment, a realization dawned on me:
                                    I needed a portfolio to showcase my own skills! But where to begin?
                                    The developer's post mentioned these cool technologies,
                                    <span className="font-semibold text-gray-900">Tailwind CSS</span> (a utility-first CSS framework that allows you
                                    to build custom designs without leaving HTML) <span className="font-semibold text-gray-900">and Next.js</span>( a React framework that enables server-side rendering,
                                    making your site faster and more SEO-friendly.)<br></br><br></br>
                                    I decided to give it a try.

                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <IoFootsteps className="mt-1 h-5 w-5 flex-none text-orange-500" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Taking the First Step: Embracing Modularity. </strong> 
                                             Instead of feeling overwhelmed, I decided to break things down. I knew a single-page portfolio would a
                                            great starting point, and that's where the concept of modularity came in.
                                            I envisioned the site as a collection of reusable components, each representing a section like
                                            "About Me," "Skills," or "Blog." This way, I could focus on building and perfecting each component independently, and
                                            incrementally following the CI/CD principle.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <GiBrickWall className="mt-1 h-5 w-5 flex-none text-orange-500" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">A Step-by-Step Build</strong>
                                            <ol>
                                                <li>
                                                    <span><strong className="font-medium text-gray-900">Setting Up:</strong> I started by creating a new Next.js project using the command line.
                                                        This gave me the basic file structure and functionalities for building a React application as well as installing the required dependencies including
                                                        Tailwind CSS and TypeScript(optionally). Then made my initial commit to GitHub (a version control system).</span></li><br></br>
                                                <li>
                                                    <span><strong className="font-medium text-gray-900">Building components:</strong> One by one, I built the components for each section of the portfolio, commiting changes to GitHub as I went along.
                                                        Each component had its own JavaScript (.js) exported function and in-line CSS styling with Tailwind classes.
                                                        To view my changes in real-time, I had a live server running on a secondary display which enabled rapid design iterations.</span></li><br></br>
                                                <li>
                                                    <span><strong className="font-medium text-gray-900">Responsiveness:</strong> To ensure the site looked good on any device, 
                                                    I used Tailwind's responsive utilities extensively.  
                                                    Adding classes like <code>md:hidden</code> or <code>lg:flex</code> allowed me to control how elements appeared on different screen sizes(i.e on a mobile phone or a desktop)</span></li><br></br>
                                                    <li>
                                                    <span><strong className="font-medium text-gray-900">Future extensions:</strong> The process of building this portfolio is not simply about the website itself;
                                                     it is a journey of learning and exploration. Tailwind CSS makes styling a breeze, and Next.js provided a solid foundation for building a modern React application.
                                                    The final product will be a single-page portfolio that showcases my skills and projects in a visually appealing and responsive way 
                                                    [Picture of your final portfolio website].  
                                                    More importantly, it will serve as a testament to the power of starting small, embracing modularity, and taking inspiration from others.
                                                    </span></li>

                                            </ol>
                                        </span>
                                    </li>
                                    </ul>
                                    {/* <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-orange-500" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                                            vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                                <p className="mt-6">
                                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                                    Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                                    tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                                    turpis ipsum eu a sed convallis diam.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


