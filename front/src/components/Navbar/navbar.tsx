'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { auth, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-500">
                AI Technical Test
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              href="/articles"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors duration-300"
            >
              Articles
            </Link>

            {auth.isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors duration-300"
                >
                  Dashboard
                </Link>
                <Link
                  href="/breast-cancer"
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors duration-300"
                >
                  Cáncer de Mama
                </Link>
                <Link
                  href="/prostate-cancer"
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors duration-300"
                >
                  Cáncer de Próstata
                </Link>
                <Button
                  variant="ghost"
                  onClick={logout}
                  className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300">
                    Register
                  </Button>
                </Link>
              </>
            )}

            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              EN/ES
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/articles"
              className="block px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Articles
            </Link>

            {auth.isAuthenticated ? (
              <>
                <Link
                  href="/breast-cancer"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Cáncer de Mama
                </Link>
                <Link
                  href="/prostate-cancer"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Cáncer de Próstata
                </Link>
                <Button
                  variant="ghost"
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="w-full justify-start text-gray-700 hover:text-blue-500 transition-colors duration-300"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={toggleMenu}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-blue-500 transition-colors duration-300"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={toggleMenu}>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300">
                    Register
                  </Button>
                </Link>
              </>
            )}

            <Button
              variant="ghost"
              className="w-full justify-start text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              EN/ES
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
