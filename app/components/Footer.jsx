"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0a0a0f] text-gray-300 border-t border-yellow-500/20 "
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/company logo.png"
              alt="D2E Construction Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-[#976759]">
            D2E Construction
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Building excellence through precision engineering, innovative design,
            and trusted partnerships in every project we deliver.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-[#976759] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#services", label: "Services" },
              { href: "#solution", label: "Solutions" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#5f8b98] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-6">
          <h3 className="text-xl font-semibold text-[#976759] mb-2">
            Get In Touch
          </h3>
          <p className="text-gray-400 text-sm">
            Reach out to our team — we’ll respond within 24 hours.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="bg-yellow-500/10 p-3 rounded-full">
              <Phone className="text-yellow-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-sm">Call us on</p>
              <p className="font-medium text-white">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="bg-yellow-500/10 p-3 rounded-full">
              <Mail className="text-yellow-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-sm">Email us at</p>
              <p className="font-medium text-white">
                d2econstruction@email.com
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="bg-yellow-500/10 p-3 rounded-full">
              <MapPin className="text-yellow-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-sm">Head Office</p>
              <p className="font-medium text-white">
                Sector 45, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-500/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} D2E Construction. All rights reserved.
      </div>
    </motion.footer>
  );
}
