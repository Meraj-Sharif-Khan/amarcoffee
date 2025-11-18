import React from "react";
import { Facebook, Instagram } from "lucide-react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const quickLinks = ["Home", "Shop", "About Us", "Contact Us"];
  const companyLinks = [
    "Login/Sign up",
    "Terms of Services",
    "Privacy Policy",
    "Refund policy",
  ];

  return (
    <footer className="bg-background text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white p-1 rounded flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
              <div className="text-white font-bold text-xl">
                AMAR
                <br />
                COFFEE
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full border-2 border-white hover:bg-white hover:text-amber-900 transition-all duration-300 flex items-center justify-center group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border-2 border-white hover:bg-white hover:text-amber-900 transition-all duration-300 flex items-center justify-center group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="text-gray-200">
             <a className="text-[#5dff47]" href="https://merajsharif.netlify.app" target="_blank"
                >Develop by Meraj Sharif</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Copyright */}
          <div className="text-gray-300 text-sm text-center lg:text-left">
            © 2025, Amar Coffee
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-2">
            {/* American Express */}
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-[8px] font-bold">
              AMEX
            </div>

            {/* Apple Pay */}
            <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-white text-[8px] font-bold">
              Pay
            </div>

            {/* Diners Club */}
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-blue-600 text-[8px] font-bold">
              DC
            </div>

            {/* Discover */}
            <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center text-white text-[7px] font-bold">
              DISC
            </div>

            {/* Google Pay */}
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-[8px] font-bold">
              G Pay
            </div>

            {/* Mastercard */}
            <div className="w-12 h-8 bg-linear-to-r from-red-600 to-orange-500 rounded flex items-center justify-center">
              <div className="flex -space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full opacity-80"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full opacity-80"></div>
              </div>
            </div>

            {/* PayPal */}
            <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center text-white text-[7px] font-bold">
              PayPal
            </div>

            {/* Shop Pay */}
            <div className="w-12 h-8 bg-purple-600 rounded flex items-center justify-center text-white text-[7px] font-bold">
              SHOP
            </div>

            {/* Venmo */}
            <div className="w-12 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-[8px] font-bold">
              venmo
            </div>

            {/* Visa */}
            <div className="w-12 h-8 bg-blue-900 rounded flex items-center justify-center text-white text-[8px] font-bold">
              VISA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
