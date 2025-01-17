import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Detección temprana de cáncer con IA
              </h1>
              <p className="text-xl text-gray-300">
                Nuestra tecnología permite que la detección de cáncer sea más
                rápida y precisa. El futuro de la patología es ahora. El futuro
                es AI Technical Test.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/register">
                  <Button size="lg" className="text-lg">
                    Comenzar ahora
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="text-lg">
                    Saber más
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="AI Medical Technology"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cómo Funciona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro sistema utiliza algoritmos avanzados de IA para analizar
              imágenes histológicas, proporcionando resultados precisos y
              rápidos para ayudar en el diagnóstico temprano del cáncer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Carga de Imágenes
              </h3>
              <p className="text-gray-600 text-center">
                Sube tus imágenes histológicas de forma segura y rápida a
                nuestra plataforma.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Análisis con IA
              </h3>
              <p className="text-gray-600 text-center">
                Nuestros algoritmos analizan las imágenes y detectan patrones
                relevantes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Resultados Detallados
              </h3>
              <p className="text-gray-600 text-center">
                Recibe resultados precisos y detallados para apoyar tu
                diagnóstico.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
