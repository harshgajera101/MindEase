import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
// import Logo from "../assets/img/logo.png";
// import Logo1 from "../assets/img/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative bg-amber-800 text-white shadow-lg overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white transform translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white transform -translate-x-8 translate-y-8"></div>
        </div>

        <div className="relative z-10 flex justify-between items-center px-6 py-4">
          {/* Logo with icon */}
          <div className="flex items-center space-x-3">
            <Heart className="w-7 h-7 text-amber-200" fill="currentColor" />
            {/* <img src={Logo1} alt="" className="w-16 h-16"/> */}
            <h1 className="text-2xl font-bold tracking-wide hover:text-amber-200 transition-colors duration-200 cursor-pointer">
              MindEase
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-lg">
            <a
              href="/"
              className="relative hover:text-amber-200 transition-all duration-200 group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a
              href="/about"
              className="relative hover:text-amber-200 transition-all duration-200 group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a
              href="/depression"
              className="relative hover:text-amber-200 transition-all duration-200 group"
            >
              <span className="relative z-10">Depression</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a
              href="/anxiety"
              className="relative hover:text-amber-200 transition-all duration-200 group"
            >
              <span className="relative z-10">Anxiety</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-200"></span>
            </a>
            {/* <a
              href="/chat"
              className="relative hover:text-amber-200 transition-all duration-200 group"
            >
              <span className="relative z-10">Chat</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-200"></span>
            </a> */}
            <a
              href="/relaxation"
              className="relative hover:text-amber-200 transition-all duration-200 group"
            >
              <span className="relative z-10">Exercise</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-200"></span>
            </a>
            {/* <a 
              href="/blog" 
              className="relative hover:text-amber-200 transition-all duration-200 group"
            >
              <span className="relative z-10">Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a 
              href="/support" 
              className="relative hover:text-amber-200 transition-all duration-200 group"
            >
              <span className="relative z-10">Support</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-200"></span>
            </a> */}

            {/* 🔑 Clerk Authentication */}
            <div className="relative">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="relative hover:text-amber-200 transition-all duration-200 group">
                    <span className="relative z-10">Sign-in</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-200"></span>
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 transform hover:scale-110"
          >
            {isOpen ? (
              <X
                size={24}
                className="transform rotate-0 transition-transform duration-200"
              />
            ) : (
              <Menu
                size={24}
                className="transform rotate-0 transition-transform duration-200"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-amber-900 bg-opacity-50 backdrop-blur-sm border-t border-amber-700">
            <div className="px-6 py-4 space-y-4 text-center">
              <a
                href="/"
                className="block hover:text-amber-200 transition-all duration-200 hover:translate-x-2 hover:bg-amber-700 hover:bg-opacity-30 px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="block hover:text-amber-200 transition-all duration-200 hover:translate-x-2 hover:bg-amber-700 hover:bg-opacity-30 px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/depression"
                className="block hover:text-amber-200 transition-all duration-200 hover:translate-x-2 hover:bg-amber-700 hover:bg-opacity-30 px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Depression
              </a>
              <a
                href="/anxiety"
                className="block hover:text-amber-200 transition-all duration-200 hover:translate-x-2 hover:bg-amber-700 hover:bg-opacity-30 px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Anxiety
              </a>
              {/* <a
                href="/chat"
                className="block hover:text-amber-200 transition-all duration-200 hover:translate-x-2 hover:bg-amber-700 hover:bg-opacity-30 px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Chat
              </a> */}
              {/* <a 
                href="/blog" 
                className="block hover:text-amber-200 transition-all duration-200 hover:translate-x-2 hover:bg-amber-700 hover:bg-opacity-30 px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <a 
                href="/support" 
                className="block hover:text-amber-200 transition-all duration-200 hover:translate-x-2 hover:bg-amber-700 hover:bg-opacity-30 px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Support
              </a> */}
              <a
                href="/relaxation"
                className="block hover:text-amber-200 transition-all duration-200 hover:translate-x-2 hover:bg-amber-700 hover:bg-opacity-30 px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Exercise
              </a>
              {/* Sign-in/User Button with consistent styling */}
              <div className="block">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button
                      className="block w-full hover:text-amber-200 transition-all duration-200 hover:translate-x-2 hover:bg-amber-700 hover:bg-opacity-30 px-3 py-2 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign-in
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="block hover:text-amber-200 transition-all duration-200 hover:translate-x-2 hover:bg-amber-700 hover:bg-opacity-30 px-2 py-1 rounded-lg">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"></div>
      </nav>
    </>
  );
}
