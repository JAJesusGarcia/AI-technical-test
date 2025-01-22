'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const NeuralNetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-300/30 via-transparent to-transparent animate-pulse" />
    </div>
  );
};

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center">
      <NeuralNetworkBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90" />
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
              Detección temprana de{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-pink-200">
                cáncer con IA
              </span>
            </h1>
            <p className="text-xl text-gray-100">
              Nuestra tecnología permite que la detección de cáncer sea más
              rápida y precisa. El futuro de la patología es ahora.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-200"
                >
                  Comenzar ahora
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-purple border-white hover:bg-white/10"
                >
                  Saber más
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
            <Image
              src="/images/home.webp"
              alt="AI Medical Technology"
              fill
              className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
