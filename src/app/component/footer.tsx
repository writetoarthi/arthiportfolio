import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const navigation = [

  {
    name: 'Linkedin',
    href: 'https://linkedin.com/in/arthideepak',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
          <FaLinkedin size={28} className="text-gray-600" />

    ),
  },
  
  {
    name: 'Instagram',
    href: 'https://instagram.com/',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
           <FaInstagram size={28} className="text-gray-500" />

    ),
  },
   {
    name: 'GitHub',
href: 'hhtps://github.com/',
icon: (props: React.SVGProps<SVGSVGElement>) => (
      <FaGithub size={28} className="text-gray-800" />

)
  },
  
]

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
          &copy; 2025 Arthi Annamalai Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
