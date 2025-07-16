"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-richBlack text-linen px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold">HexaLogic</h2>
          <p className="text-textMuted mt-2 text-sm">
            Making digital feel personal.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-warmBeige mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="#home" className="hover:text-stone">Home</Link></li>
            <li><Link href="#services" className="hover:text-stone">Services</Link></li>
            <li><Link href="#projects" className="hover:text-stone">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-stone">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-warmBeige mb-2">Get in Touch</h3>
          <p className="text-sm text-textMuted">hexalogicedge@gmail.com</p>
          <p className="text-sm text-textMuted">+92 315 3573231</p>
        </div>
      </div>

      <div className="mt-10 text-center text-textMuted text-xs border-t border-softBrown pt-4">
        &copy; {new Date().getFullYear()} HexaLogic. All rights reserved.
      </div>
    </footer>
  );
}
