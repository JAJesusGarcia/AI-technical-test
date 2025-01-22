'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProstateCancerPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="mb-8 text-center">
        <h1 className="text-4xl pt-8 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
          Cáncer de Próstata
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Explora análisis histológicos para identificar marcadores clave en el
          cáncer de próstata.
        </p>
      </div>

      <Tabs defaultValue="ki67" className="space-y-4 m-10">
        {/* Selector de pestañas mejorado */}
        <TabsList className="relative flex justify-center space-x-4 bg-gray-800 p-2 rounded-lg shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-80 rounded-lg pointer-events-none"></div>
          <TabsTrigger
            value="psa"
            className="relative z-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 ease-in-out hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            PSA
          </TabsTrigger>
          <TabsTrigger
            value="gleason"
            className="relative z-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 ease-in-out hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Gleason
          </TabsTrigger>
          <TabsTrigger
            value="androgen"
            className="relative z-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 ease-in-out hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Andrógenos
          </TabsTrigger>
        </TabsList>

        {/* Contenido para PSA */}
        <TabsContent value="psa" className="space-y-4">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg bg-white text-gray-800">
            <p className="text-muted-foreground">Proximamente: Análisis PSA.</p>
          </div>
        </TabsContent>

        {/* Contenido para Gleason */}
        <TabsContent value="gleason">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg bg-white text-gray-800">
            <p className="text-muted-foreground">
              Próximamente: Análisis de la escala Gleason
            </p>
          </div>
        </TabsContent>

        {/* Contenido para Andrógenos */}
        <TabsContent value="androgen">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg bg-white text-gray-800">
            <p className="text-muted-foreground">
              Próximamente: Análisis de receptores de Andrógenos
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
