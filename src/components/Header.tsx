import React, { useState, useEffect } from 'react';
import { Menu, X, Package } from 'lucide-react';
import { colors } from '../theme/colors';

interface MenuItem {
  label: string;
  href: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems: MenuItem[] = [
    { label: 'Soluciones', href: '#' },
    { label: 'Precios', href: '#' },
    { label: 'Recursos', href: '#' },
    { label: 'Empresa', href: '#' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/images/Segucargo®-logo-secundaria Azul con color (2).png"
              alt="Segucargo Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2AD4AE] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}