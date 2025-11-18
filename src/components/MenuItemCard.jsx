import React from "react";
import { ArrowRight, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavorite,
  selectIsFavorite,
} from "../../redux/favoritesSlice.js";
import espresso from "../assets/images/Espresso.jpg"
import cappuccino from "../assets/images/Cappuccino.jpg"
import latte from "../assets/images/Latte.jpg"
import icedCoffee from "../assets/images/IcedCoffee.jpg"
import mocha from "../assets/images/Mocha.jpg"
import americano from "../assets/images/Americano.jpg"
import coldBrew from "../assets/images/ColdBrew.jpg"
import frappuccino from "../assets/images/Frappuccino.jpg"

const MenuItemCard = ({ item, i }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(item.id));

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(item));
  };
  const itemImages = [espresso, cappuccino, latte, icedCoffee, mocha, americano, coldBrew, frappuccino]
const currentItemImage = itemImages[i]
  return (
    <div className="w-full min-h-screen bg-background p-4 md:p-8 lg:p-12 flex items-center justify-center">
      <div className="max-w-7xl w-full  overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Content Section */}
          <div
            className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 ${
              i % 2 === 0 ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {item.name}
              <br />
              <span
                className={`text-background text-2xl md:text-3xl lg:text-4xl font-extrabold ${
                  item?.category === "Hot" ? "bg-[#FFA500]" : "bg-[#6495ED]"
                } px-5 rounded-2xl`}
              >
                {item.category}
              </span>
              <br />
              <span className="text-green-500">{item.price}</span>
            </h1>

            <p className="text-[#fbfbfb] text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              Enjoy coffee at the perfect temperature with our Temperature
              Display Mug, showing you the warmth of every sip. Never too hot,
              never too cold—just right every time.
            </p>

            <div className="flex flex-row items-center gap-4">
              <button className="group bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleToggleFavorite}
                className={`${
                  isFavorite ? "bg-white text-amber-900" : "text-white"
                } w-10 h-10 rounded-full border-2 border-white flex items-center justify-center  hover:bg-white hover:text-amber-900  transition`}
              >
                <Heart />
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className={`relative rounded-3xl bg-linear-to-br  from-amber-600 via-amber-700 to-amber-800 p-8 md:p-12 lg:p-16  order-1 ${
              i % 2 === 0 ? "lg:order-1" : "lg:order-2"
            } min-h-[400px] lg:h-[600px]`}
          >
            <div className="pointer-events-none z-1 w-full h-full rounded-3xl overflow-hidden">
              <img
                src={currentItemImage}
                alt="Coffee image"
                className="object-cover h-full w-full"
              />
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
