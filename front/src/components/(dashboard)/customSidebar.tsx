'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart,
  FileText,
  Home,
  ImageIcon,
  Settings,
  Users,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

const mainNav = [
  {
    title: 'Home',
    href: '/',
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: 'Files',
    href: '/dashboard/analysis',
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: 'Users',
    href: '/dashboard/patients',
    icon: <Users className="h-4 w-4" />,
  },
  //   {
  //     title: 'Charts',
  //     href: '/charts',
  //     icon: <BarChart className="h-4 w-4" />,
  //   },
  {
    title: 'Images',
    href: '/images',
    icon: <ImageIcon className="h-4 w-4" />,
  },
];

const cancerNav = [
  {
    title: 'Cáncer de Mama',
    href: '/dashboard/breast-cancer/cancer-mama',
    icon: <ImageIcon className="h-5 w-5" />,
  },
  {
    title: 'Cáncer de Próstata',
    href: '/dashboard/',
    icon: <FileText className="h-5 w-5" />,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { auth, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'bg-card text-card-foreground shadow-lg transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-16' : 'w-64',
      )}
    >
      <div className="sticky top-0 flex h-screen flex-col border-r">
        <div className="flex h-16 items-center justify-between px-4">
          {!isCollapsed && (
            <div className="font-semibold">AI Technical Test</div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            {isCollapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </Button>
        </div>

        <nav className="flex-1 space-y-4 overflow-y-auto p-4">
          <TooltipProvider delayDuration={0}>
            <div className="space-y-2">
              {mainNav.map((item) => (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex h-10 items-center gap-4 rounded-md px-3 text-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground',
                        isCollapsed && 'justify-center px-0',
                        pathname === item.href &&
                          'bg-accent text-accent-foreground',
                      )}
                    >
                      {item.icon}
                      {!isCollapsed && (
                        <span className="flex-grow">{item.title}</span>
                      )}
                    </Link>
                  </TooltipTrigger>
                  {isCollapsed && (
                    <TooltipContent side="right">{item.title}</TooltipContent>
                  )}
                </Tooltip>
              ))}
            </div>

            <div className="my-4 border-t" />

            <div className="space-y-2">
              {cancerNav.map((item) => (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex h-10 items-center gap-4 rounded-md px-3 text-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground',
                        isCollapsed && 'justify-center px-0',
                        pathname === item.href &&
                          'bg-accent text-accent-foreground',
                      )}
                    >
                      {item.icon}
                      {!isCollapsed && (
                        <span className="flex-grow">{item.title}</span>
                      )}
                    </Link>
                  </TooltipTrigger>
                  {isCollapsed && (
                    <TooltipContent side="right">{item.title}</TooltipContent>
                  )}
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </nav>

        <div className="border-t p-4">
          <div
            className={cn(
              'mb-4 flex items-center gap-4',
              isCollapsed && 'justify-center',
            )}
          >
            {!isCollapsed ? (
              <>
                <div className="flex flex-1 items-center gap-4 overflow-hidden">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="h-8 w-8 rounded-full bg-primary/10" />
                  </div>
                  <div className="grid gap-1 overflow-hidden">
                    <div className="font-medium leading-none">
                      {auth.user?.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {auth.user?.email}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => logout()}
                >
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">Cerrar sesión</span>
                </Button>
              </>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => logout()}
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="sr-only">Cerrar sesión</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Cerrar sesión</TooltipContent>
              </Tooltip>
            )}
          </div>
          {!isCollapsed && (
            <Button variant="outline" size="sm" className="w-full">
              <Settings className="mr-2 h-4 w-4" />
              Configuración
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
}
