import logo from "../assets/images/logo.png"
const Header = () => {
  return (
    <div>
       {/* Navigation */}
      <nav className="w-full z-20 flex items-center justify-between px-8 lg:px-16 py-6 fixed ">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white p-1 rounded-lg flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-white font-bold text-xl">
            AMAR
            <br />
            COFFEE
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <a href="#home" className="hover:text-amber-200 transition">
            Home
          </a>
          <a href="#about" className="hover:text-amber-200 transition">
            About
          </a>
          <a href="#shop" className="hover:text-amber-200 transition">
            Shop
          </a>
          <a href="#contact" className="hover:text-amber-200 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-amber-900 transition">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-amber-900 transition">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-amber-900 transition">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
