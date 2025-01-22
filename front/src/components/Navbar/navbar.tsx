'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const publicLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/articles', label: 'Articles' },
];

const privateLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/breast-cancer', label: 'Cáncer de Mama' },
  { href: '/prostate-cancer', label: 'Cáncer de Próstata' },
];

export function Navbar() {
  const pathname = usePathname();
  const { auth, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">AI Technical Test</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {publicLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-foreground/60',
                )}
              >
                {link.label}
              </Link>
            ))}
            {auth.isAuthenticated &&
              privateLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-foreground/80',
                    pathname === link.href
                      ? 'text-foreground'
                      : 'text-foreground/60',
                  )}
                >
                  {link.label}
                </Link>
              ))}
          </nav>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {auth.isAuthenticated ? (
              <Button variant="ghost" onClick={handleLogout}>
                Logout
              </Button>
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
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
              <span className="sr-only">Toggle language</span>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('md:hidden', isOpen ? 'block' : 'hidden')}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {publicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                pathname === link.href
                  ? 'bg-primary/10 text-foreground'
                  : 'text-foreground/60 hover:bg-primary/10 hover:text-foreground',
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {auth.isAuthenticated &&
            privateLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-primary/10 text-foreground'
                    : 'text-foreground/60 hover:bg-primary/10 hover:text-foreground',
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          {auth.isAuthenticated ? (
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <Button className="mt-2 w-full">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
