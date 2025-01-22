'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Navbar() {
  // const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Verificar el estado de autenticación basado en localStorage
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evitar errores de hidratación

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    window.location.href = '/login';
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo y Navegación */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">AI Technical Test</span>
          </Link>

          {/* Navegación principal (desktop) */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/about/company" className="block">
                          Company
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/about/team" className="block">
                          Our Team
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/articles">Articles</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {isAuthenticated && (
                <>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/breast-cancer">Cáncer de Mama</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/prostate-cancer">Cáncer de Próstata</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Botones de autenticación (desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <Button variant="outline" size="sm" onClick={handleLogout}>
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
        </div>

        {/* Menú móvil */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-8">
              <div className="flex flex-col space-y-4">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                      Dashboard
                    </Link>
                    <Link
                      href="/breast-cancer"
                      onClick={() => setIsOpen(false)}
                    >
                      Cáncer de Mama
                    </Link>
                    <Link
                      href="/prostate-cancer"
                      onClick={() => setIsOpen(false)}
                    >
                      Cáncer de Próstata
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Register</Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
