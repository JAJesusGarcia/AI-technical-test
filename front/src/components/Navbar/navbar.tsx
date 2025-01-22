'use client';

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { AuthContext } from '@/context/auth-context'; // Contexto de autenticación
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import * as React from 'react';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useContext(AuthContext); // Usar el contexto de autenticación
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleLogout = () => {
    logout(); // Cerrar sesión desde el contexto
    setIsOpen(false);
  };

  const publicLinks = [
    { href: '/', label: 'Home' },
    {
      href: '/about',
      label: 'About Us',
      subItems: [
        { href: '/about/company', label: 'Company' },
        { href: '/about/team', label: 'Our Team' },
      ],
    },
    { href: '/articles', label: 'Articles' },
  ];

  const privateLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/breast-cancer', label: 'Cáncer de Mama' },
    { href: '/prostate-cancer', label: 'Cáncer de Próstata' },
  ];

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              AI Technical Test
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/about/company" title="Company">
                      Learn about our companys mission and vision
                    </ListItem>
                    <ListItem href="/about/team" title="Our Team">
                      Meet the experts behind our technology
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {publicLinks
                .filter((link) => link.href !== '/' && link.href !== '/about')
                .map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              {user &&
                privateLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          {user ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Logout
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to logout?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will log you out of your account.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleLogout}>
                    Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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

        {/* Mobile Menu */}
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
                {publicLinks.map((link) => (
                  <React.Fragment key={link.href}>
                    {link.href === '/about' ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setIsAboutOpen(!isAboutOpen)}
                          className={cn(
                            'flex items-center justify-between w-full text-left transition-colors hover:text-foreground/80 text-lg',
                            pathname.startsWith(link.href)
                              ? 'text-foreground font-medium'
                              : 'text-foreground/60',
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform',
                              isAboutOpen && 'transform rotate-180',
                            )}
                          />
                        </button>
                        {isAboutOpen && link.subItems && (
                          <div className="pl-4 space-y-2">
                            {link.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={cn(
                                  'block transition-colors hover:text-foreground/80 text-lg',
                                  pathname === subItem.href
                                    ? 'text-foreground font-medium'
                                    : 'text-foreground/60',
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          'transition-colors hover:text-foreground/80 text-lg',
                          pathname === link.href
                            ? 'text-foreground font-medium'
                            : 'text-foreground/60',
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
                {user &&
                  privateLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'transition-colors hover:text-foreground/80 text-lg',
                        pathname === link.href
                          ? 'text-foreground font-medium'
                          : 'text-foreground/60',
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
              <div className="mt-8 pt-8 border-t">
                {user ? (
                  <Button
                    variant="outline"
                    className="w-full text-lg"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full text-lg">
                        Login
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full text-lg">Register</Button>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
