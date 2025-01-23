'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-violet-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        {/* Contenedor principal de la animación */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Círculos giratorios externos */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-4 rounded-full"
              style={{
                borderColor: 'transparent',
                borderTopColor: `rgba(219, 39, 119, ${0.3 + i * 0.2})`,
                borderRightColor: `rgba(219, 39, 119, ${0.3 + i * 0.2})`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2 - i * 0.2,
                ease: 'linear',
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}

          {/* Puntos pulsantes que representan datos siendo procesados */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="w-3 h-3 mx-1 rounded-full bg-pink-600"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>

        {/* Mensaje de carga animado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-gray-900">
            Procesando su solicitud
          </h2>
          <p className="text-gray-600 max-w-sm mx-auto">
            Nuestro sistema de IA está analizando la información. Por favor,
            espere un momento.
          </p>
        </motion.div>

        {/* Barra de progreso */}
        <div className="max-w-md mx-auto w-full h-1 bg-pink-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-pink-600"
            animate={{
              width: ['0%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Patrón de fondo */}
        <div className="fixed inset-0 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.02]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="neural-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 0 L20 40 M0 20 L40 20"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#neural-pattern)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
