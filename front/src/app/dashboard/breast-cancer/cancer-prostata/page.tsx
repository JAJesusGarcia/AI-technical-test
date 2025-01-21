'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProstateCancerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 text-white p-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight animate-pulse">
          Cáncer de Próstata
        </h1>
        <p className="text-lg text-gray-200 mt-2">
          Explora análisis histológicos para identificar marcadores clave en el
          cáncer de próstata.
        </p>
      </div>

      <Tabs defaultValue="psa" className="space-y-4">
        <TabsList className="flex justify-center space-x-4">
          <TabsTrigger
            value="psa"
            className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition-colors duration-300"
          >
            PSA
          </TabsTrigger>
          <TabsTrigger
            value="gleason"
            className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition-colors duration-300"
          >
            Gleason
          </TabsTrigger>
          <TabsTrigger
            value="androgen"
            className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition-colors duration-300"
          >
            Andrógenos
          </TabsTrigger>
        </TabsList>

        {/* Contenido para PSA */}
        <TabsContent value="psa" className="space-y-4">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg bg-white text-gray-800">
            <p className="text-muted-foreground">
              Aquí se mostrará el análisis PSA.
            </p>
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
