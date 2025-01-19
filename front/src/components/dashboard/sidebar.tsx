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
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';

const mainNav = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Análisis',
    href: '/dashboard/analysis',
    icon: BarChart,
  },
  {
    title: 'Pacientes',
    href: '/dashboard/patients',
    icon: Users,
  },
];

const cancerNav = [
  {
    title: 'Cáncer de Mama',
    href: '/breast-cancer',
    icon: ImageIcon,
  },
  {
    title: 'Cáncer de Próstata',
    href: '/prostate-cancer',
    icon: FileText,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { auth, logout } = useAuth();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-gray-900/5 dark:bg-gray-900">
      {/* Header */}
      <div className="border-b p-4">
        <Link href="/dashboard" className="flex flex-col items-start gap-1">
          <h1 className="font-semibold text-lg">Clínica Padua</h1>
          <p className="text-sm text-muted-foreground">Sistema de Detección</p>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          <div className="px-2 py-2">
            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              Principal
            </h2>
            <div className="grid gap-1">
              {mainNav.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
                    pathname === item.href &&
                      'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50',
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="px-2 py-2">
            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              Diagnóstico
            </h2>
            <div className="grid gap-1">
              {cancerNav.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
                    pathname === item.href &&
                      'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50',
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="flex items-center gap-4 pb-4">
          <div className="flex flex-1 items-center gap-4 overflow-hidden">
            <div className="rounded-full bg-primary/10 p-1">
              <div className="h-8 w-8 rounded-full bg-primary/10" />
            </div>
            <div className="grid gap-1 overflow-hidden">
              <div className="font-medium leading-none">{auth.user?.name}</div>
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
        </div>
        <Button variant="outline" size="sm" className="w-full">
          <Settings className="mr-2 h-4 w-4" />
          Configuración
        </Button>
      </div>
    </div>
  );
}
