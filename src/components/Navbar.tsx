"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "О школе" },
  { href: "#courses", label: "Наши курсы" },
  { href: "#contact", label: "Контакты" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Главная навигация">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2" aria-label="Логотип школы">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-semibold text-zinc-900">Hudozhka</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-600 hover:text-violet-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              aria-expanded={isOpen}
              aria-label="Открыть меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-zinc-600 hover:text-violet-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}