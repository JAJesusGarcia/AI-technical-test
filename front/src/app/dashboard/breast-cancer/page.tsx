'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KI67Analysis } from './ki67';

export default function BreastCancerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight animate-pulse">
          Cáncer de Mama
        </h1>
        <p className="text-lg text-gray-200 mt-2">
          Analiza imágenes histológicas para detectar diferentes marcadores de
          cáncer de mama.
        </p>
      </div>

      <Tabs defaultValue="ki67" className="space-y-4">
        <TabsList className="flex justify-center space-x-4">
          <TabsTrigger
            value="ki67"
            className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition-colors duration-300"
          >
            KI67
          </TabsTrigger>
          <TabsTrigger
            value="her2"
            className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition-colors duration-300"
          >
            HER2
          </TabsTrigger>
          <TabsTrigger
            value="estrogen"
            className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition-colors duration-300"
          >
            Estrógeno
          </TabsTrigger>
          <TabsTrigger
            value="progesterone"
            className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition-colors duration-300"
          >
            Progesterona
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ki67" className="space-y-4">
          <KI67Analysis />
        </TabsContent>
        <TabsContent value="her2">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg bg-white text-gray-800">
            <p className="text-muted-foreground">Próximamente: Análisis HER2</p>
          </div>
        </TabsContent>
        <TabsContent value="estrogen">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg bg-white text-gray-800">
            <p className="text-muted-foreground">
              Próximamente: Análisis de Estrógeno
            </p>
          </div>
        </TabsContent>
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
