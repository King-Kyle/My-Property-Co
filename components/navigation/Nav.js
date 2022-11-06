//import svg's
import Logo from "../../public/logo.svg";

const navigation = {
  pages: [
    { name: "Home", href: "#" },
    { name: "Property Search", href: "#" },
    { name: "Tools", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

export default function Nav() {
  return (
    <>
      <header aria-label="Site Header" className="bg-primary">
        <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block" href="#">
                <span className="sr-only">Home</span>
                <Logo />
              </a>
            </div>
            <div className="md:flex md:justify-end md:items-center ">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {navigation.pages.map((page) => (
                    <li key={page.name}>
                      <a
                        href={page.href}
                        className="uppercase transition font-normal text-white hover:text-secondary"
                      >
                        {page.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
