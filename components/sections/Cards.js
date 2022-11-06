import Image from "next/image";

const posts = [
  {
    title: "Mortgage Calculator",
    href: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/cta1.webp",
  },
  {
    title: "Contact Us",
    href: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/cta2.webp",
  },
  {
    title: "Follow us on Facebook",
    href: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/cta3.webp",
  },
];

export default function Cards() {
  return (
    <div className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg md:w-[70%] mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="border border-slate-300 cursor-pointer flex flex-col transition-all duration-500 transform hover:shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-60 w-full object-cover"
                  src={post.imageUrl}
                  alt={post.title}
                  height="450"
                  width="600"
                />
              </div>
              <div className="flex-1 bg-white py-10 px-6 flex flex-col justify-between">
                <div className="flex-1 text-center">
                  <a href={post.href} className="block mt-2">
                    <p className="text-2xl font-sans font-bold text-primary">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-slate-400">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
