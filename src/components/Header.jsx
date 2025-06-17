import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef(null);

  useEffect(() => {
    if (mobileMenuRef.current && menuItemsRef.current) {
      if (isMobileMenuOpen) {
        // Mobile menu open animation
        gsap.set(mobileMenuRef.current, { display: "block" });
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );

        // Animate menu items
        const items = menuItemsRef.current.children;
        gsap.fromTo(
          items,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.2, stagger: 0.1, delay: 0.1 }
        );
      } else {
        // Mobile menu close animation
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            if (mobileMenuRef.current) {
              gsap.set(mobileMenuRef.current, { display: "none" });
            }
          },
        });
      }
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [{page:"Home" , path:"/"}, {page:"Projects" , path:'/projects'}];

  return (
    <header className="fixed  max-w-[1280px]   mx-auto md:top-5 top-2    left-0 right-0 z-50 px-2 sm:px-4 lg:px-6">
      <div className="bg-[#1E1E1E]  overflow-x-hidden  px-4  backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-2xl">
        <div className="   mx-auto ">
          <div className="flex items-center justify-between  h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="logo" />
            </div>

            {/* Desktop Navigation */}
            <div className="flex gap-8 items-center">
              <nav className="hidden md:flex items-center gap-8  ">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-[15px]  text-slate-200 font-medium hover:text-white  transition-colors duration-200 relative group"
                  >
                    {item.page}
                  </Link>
                ))}
              </nav>

              {/* Contact Button - Desktop */}
              <div className="hidden md:block">
                <button className="bg-blue-600 text-[15px] hover:bg-blue-500 text-white px-3 py-2 rounded-[10px] font-medium transition-all duration-200 hover:scale-102 shadow-lg hover:shadow-blue-500/25">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="md:hidden border-t border-slate-700/50 bg-[#1E1E1E] rounded-b-2xl"
          style={{ display: "none" }}
        >
          <div ref={menuItemsRef} className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800 transition-all duration-200 font-medium"
              >
                {item.page}
              </Link>
            ))}
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 mt-4">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
