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
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">
                AI Technical Test
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary px-3 py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary px-3 py-2"
            >
              About Us
            </Link>
            <Link
              href="/articles"
              className="text-gray-700 hover:text-primary px-3 py-2"
            >
              Articles
            </Link>

            {auth.isAuthenticated ? (
              <>
                <Link
                  href="/breast-cancer"
                  className="text-gray-700 hover:text-primary px-3 py-2"
                >
                  Cáncer de Mama
                </Link>
                <Link
                  href="/prostate-cancer"
                  className="text-gray-700 hover:text-primary px-3 py-2"
                >
                  Cáncer de Próstata
                </Link>
                <Button variant="ghost" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/register">
                  <Button>Register</Button>
                </Link>
              </>
            )}

            <Button variant="ghost">EN/ES</Button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
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
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/articles"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Articles
            </Link>

            {auth.isAuthenticated ? (
              <>
                <Link
                  href="/breast-cancer"
                  className="block px-3 py-2 text-gray-700 hover:text-primary"
                  onClick={toggleMenu}
                >
                  Cáncer de Mama
                </Link>
                <Link
                  href="/prostate-cancer"
                  className="block px-3 py-2 text-gray-700 hover:text-primary"
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
                  className="w-full justify-start"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={toggleMenu}>
                  <Button variant="ghost" className="w-full justify-start">
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={toggleMenu}>
                  <Button className="w-full">Register</Button>
                </Link>
              </>
            )}

            <Button variant="ghost" className="w-full justify-start">
              EN/ES
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
