import { Heart, Menu } from "lucide-react";
import logo from "../assets/images/logo.png";
import Sidebar from "./Sidebar";
import ToggleButton from "./common/ToggleButton";
import { useSelector } from "react-redux";
import { selectFavoritesCount } from "../../redux/favoritesSlice.js";

const Header = () => {
  const favoritesCount = useSelector(selectFavoritesCount);
  return (
    <div>
      {/* Navigation */}
      <nav className="w-full bg-background z-20 flex items-center justify-between px-8 lg:px-16 py-6 fixed ">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white p-1 rounded flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-white font-bold text-xl">
            AMAR
            <br />
            COFFEE
          </div>
        </a>

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
          <button className="relative w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-amber-900 transition">
            <Heart />

            {/* Badge - only shows when count > 0 */}
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                {favoritesCount > 9 ? "9+" : favoritesCount}
              </span>
            )}
          </button>
          <div className="w-10 lg:hidden h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-amber-900 transition">
            <Sidebar />
          </div>
          <div className="hidden lg:inline-block">
            <ToggleButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
