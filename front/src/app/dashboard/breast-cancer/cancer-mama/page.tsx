'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KI67Analysis } from './ki67';

export default function BreastCancerPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="mb-8 text-center">
        <h1 className="text-4xl pt-8 font-bold text-gray-800">
          Cáncer de Mama
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Analiza imágenes histológicas para detectar diferentes marcadores de
          cáncer de mama.
        </p>
      </div>

      <Tabs defaultValue="ki67" className="space-y-4 m-10">
        {/* Selector de pestañas mejorado */}
        <TabsList className="relative flex justify-center space-x-4 bg-gray-800 p-2 rounded-lg shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-80 rounded-lg pointer-events-none"></div>
          <TabsTrigger
            value="ki67"
            className="relative z-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 ease-in-out hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            KI67
          </TabsTrigger>
          <TabsTrigger
            value="her2"
            className="relative z-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 ease-in-out hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            HER2
          </TabsTrigger>
          <TabsTrigger
            value="estrogen"
            className="relative z-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 ease-in-out hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Estrógeno
          </TabsTrigger>
          <TabsTrigger
            value="progesterone"
            className="relative z-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 ease-in-out hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Progesterona
          </TabsTrigger>
        </TabsList>

        {/* Contenido para KI67 */}
        <TabsContent value="ki67" className="space-y-4">
          <KI67Analysis />
        </TabsContent>

        {/* Contenido para HER2 */}
        <TabsContent value="her2">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg bg-white text-gray-800">
            <p className="text-muted-foreground">Próximamente: Análisis HER2</p>
          </div>
        </TabsContent>

        {/* Contenido para Estrógeno */}
        <TabsContent value="estrogen">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg bg-white text-gray-800">
            <p className="text-muted-foreground">
              Próximamente: Análisis de Estrógeno
            </p>
          </div>
        </TabsContent>

        {/* Contenido para Progesterona */}
        <TabsContent value="progesterone">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg bg-white text-gray-800">
            <p className="text-muted-foreground">
              Próximamente: Análisis de Progesterona
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
