import Logo from '../assets/Logo.png';

function HeaderDash() {
  return (
    <>
      <header className="bg-gray-800 text-white shadow-md border-b border-gray-200">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Logo" width="75" height="75" />
          </a>
          <div className="flex flex-1 items-center justify-end">
            <nav aria-label="Global" className="hidden md:flex space-x-6 text-md">
              <a className="text-white hover:text-blue-400 transition" href="#">
                About
              </a>
              <a className="text-white hover:text-blue-400 transition" href="#">
                Products
              </a>
              <a className="text-white hover:text-blue-400 transition" href="#">
                Services
              </a>
            </nav>
            <button
              className="block md:hidden rounded bg-gray-700 p-2.5 text-white transition hover:text-gray-300"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
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
      </header>
    </>
  );
}

export default HeaderDash;