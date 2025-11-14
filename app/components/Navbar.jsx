"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#solution", label: "Solutions" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (href) => {
    if (typeof document === "undefined") return;
    const target = document.querySelector(href);
    if (!target) return;
    setMenuOpen(false);
    const delay = window.innerWidth < 768 ? 300 : 0;
    setTimeout(() => {
      const navbarHeight = 60;
      const y = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, delay);
  };
  
  const handleScroll = (href) => {
    if (typeof document === "undefined") return;
    const target = document.querySelector(href);
    if (!target) return;
    setMenuOpen(false);
    const delay = window.innerWidth < 768 ? 300 : 0;
    setTimeout(() => {
      const navbarHeight = 310;
      const y = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, delay);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#5f8b98]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5">
        <img src="/company logo.png" alt="Company Logo" className="w-24 cursor-pointer" />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActive(link.href);
                handleSmoothScroll(link.href);
              }}
              className={`relative text-sm font-medium transition-all duration-300 ${
                active === link.href
                  ? "text-[#5f8b98]"
                  : "text-gray-300 hover:text-[#976759]"
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#5f8b98] rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen((s) => !s)} className="md:hidden flex flex-col gap-1">
          <span
            className={`h-0.5 w-5 bg-[#976759] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#976759] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#976759] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col px-6 py-4 space-y-4 md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#5f8b98]/20"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  setActive(link.href);
                  handleScroll(link.href);
                }}
                className={`text-base text-left font-semibold transition-colors duration-300 ${
                  active === link.href
                    ? "text-[#5f8b98]"
                    : "text-gray-300 hover:text-[#976759]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
