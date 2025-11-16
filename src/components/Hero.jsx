import React from "react";
import coffeeIcon from "../assets/images/coffee.png";
import coffeeBean from "../assets/icons/coffeeBean.png";
import paperCoffeeCup from "../assets/images/paperCoffeeCup.png";

const Hero = () => {
  return (
    <div className="min-h-screen relative bg-linear-to-br from-amber-900 via-amber-800 to-amber-900 overflow-hidden">
      {/* Floating Coffee Beans */}
      <div className="pointer-events-none opacity-40">
        <div className="absolute top-20 right-1/4 w-20 h-16 ">
          <img src={coffeeBean} alt="coffee bean icon" />
        </div>
        <div className="absolute top-80 left-1/6 w-20 h-16">
          <img src={coffeeBean} alt="coffee bean icon" />
        </div>
        <div className="absolute top-100 right-1/3 w-20 h-16">
          <img src={coffeeBean} alt="coffee bean icon" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container relative min-h-screen">
        {/* paper coffee cup */}
        <div className="pointer-events-none">
          <img
            src={paperCoffeeCup}
            alt="paper milk Coffee"
            className="object-contain absolute top-80 md:top-60 right-0 md:left-1/2 lg:left-1/3 w-55 md:w-80 lg:w-130"
          />
        </div>
        <h1 className="text-center text-7xl lg:text-9xl font-black text-amber-100 leading-none mt-50 mb-4">
          AMAR COFFEE
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="pointer-events-none z-1">
            <img
              src={coffeeIcon}
              alt="coffee cup"
              className="object-contain w-[150px]"
            />
          </div>

          {/* Right Content */}
          <div className="p-6 space-y-4 max-w-[400px] justify-self-end z-10">
            <p className="text-amber-50 text-lg leading-relaxed">
              Stay in control of every sip with our Temperature Display Coffee
              Mug, designed to keep your drink warm.
            </p>
            <button className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-100 transition transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
    </div>
  );
};

export default Hero;
