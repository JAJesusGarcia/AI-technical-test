'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KI67Analysis } from './ki67';

export default function BreastCancerPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Cáncer de Mama</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Analiza imágenes histológicas para detectar diferentes marcadores de
          cáncer de mama.
        </p>
      </div>

      <Tabs defaultValue="ki67" className="space-y-4">
        <TabsList>
          <TabsTrigger value="ki67">KI67</TabsTrigger>
          <TabsTrigger value="her2">HER2</TabsTrigger>
          <TabsTrigger value="estrogen">Estrógeno</TabsTrigger>
          <TabsTrigger value="progesterone">Progesterona</TabsTrigger>
        </TabsList>
        <TabsContent value="ki67" className="space-y-4">
          <KI67Analysis />
        </TabsContent>
        <TabsContent value="her2">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">Próximamente: Análisis HER2</p>
          </div>
        </TabsContent>
        <TabsContent value="estrogen">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">
              Próximamente: Análisis de Estrógeno
            </p>
          </div>
        </TabsContent>
        <TabsContent value="progesterone">
          <div className="flex h-[400px] items-center justify-center border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">
              Próximamente: Análisis de Progesterona
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
