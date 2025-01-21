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
  Menu,
} from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';

const mainNav = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: 'Análisis',
    href: '/dashboard/analysis',
    icon: <BarChart className="h-5 w-5" />,
  },
  {
    title: 'Pacientes',
    href: '/dashboard/patients',
    icon: <Users className="h-5 w-5" />,
  },
];

const cancerNav = [
  {
    title: 'Cáncer de Mama',
    href: '/dashboard/breast-cancer',
    icon: <ImageIcon className="h-5 w-5" />,
  },
  {
    title: 'Cáncer de Próstata',
    href: '/dashboard/prostate-cancer',
    icon: <FileText className="h-5 w-5" />,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { auth, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside
      className={`bg-gray-800 text-white transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-60'
      }`}
    >
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col">
        <div className="flex items-center justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-700"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="space-y-2">
            {mainNav.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={`flex h-10 items-center gap-4 rounded-md text-gray-300 no-underline transition-colors duration-200 ease-in-out hover:bg-gray-700 ${
                  isCollapsed ? 'justify-center' : 'px-3'
                } ${pathname === item.href ? 'bg-gray-700 text-white' : ''}`}
              >
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="flex-grow">{item.title}</span>
                )}
              </Link>
            ))}
          </div>

          <div className="my-4 border-t border-gray-600" />

          <div className="space-y-2">
            {cancerNav.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={`flex h-10 items-center gap-4 rounded-md text-gray-300 no-underline transition-colors duration-200 ease-in-out hover:bg-gray-700 ${
                  isCollapsed ? 'justify-center' : 'px-3'
                } ${pathname === item.href ? 'bg-gray-700 text-white' : ''}`}
              >
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="flex-grow">{item.title}</span>
                )}
              </Link>
            ))}
          </div>
        </nav>

        <div className="border-t border-gray-600 p-4">
          <div className="flex items-center gap-4 pb-4">
            <div className="flex flex-1 items-center gap-4 overflow-hidden">
              <div className="rounded-full bg-white/10 p-1">
                <div className="h-8 w-8 rounded-full bg-white/10" />
              </div>
              <div className="grid gap-1 overflow-hidden">
                <div className="font-medium leading-none">
                  {auth.user?.name}
                </div>
                <div className="text-xs text-gray-200">{auth.user?.email}</div>
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
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-white/10 text-white hover:bg-white/20"
          >
            <Settings className="mr-2 h-4 w-4" />
            Configuración
          </Button>
        </div>
      </div>
    </aside>
  );
}
