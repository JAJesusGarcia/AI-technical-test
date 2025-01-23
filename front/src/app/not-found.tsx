'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-violet-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Cerebro animado con circuitos */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          className="relative w-48 h-48 mx-auto"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <BrainCircuit className="w-32 h-32 text-pink-600/80" />
          </motion.div>

          {/* Círculos pulsantes que representan conexiones neuronales */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-violet-300/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        {/* Mensaje principal animado */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Página no encontrada
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Nuestra IA está procesando su solicitud, pero parece que esta página
            no existe en nuestra base de datos. Le ayudaremos a encontrar el
            camino correcto.
          </p>
        </motion.div>

        {/* Patrones de circuitos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <CircuitPattern />
        </div>

        {/* Botón de regreso animado */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            asChild
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Link href="/">Volver al inicio</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

// Componente para los patrones de circuitos
function CircuitPattern() {
  return (
    <svg
      className="absolute w-full h-full opacity-[0.03]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <pattern
        id="circuit-pattern"
        patternUnits="userSpaceOnUse"
        width="20"
        height="20"
        className="text-gray-900"
      >
        <path
          d="M0 0h20v20H0V0zm10 10H0m10 0v10m0-10h10"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  );
}
