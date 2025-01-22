'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KI67Analysis } from './ki67';

export default function BreastCancerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50 p-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-background animate-pulse">
          Cáncer de Mama
        </h1>
        <p className="text-lg text-background/90 mt-2">
          Analiza imágenes histológicas para detectar diferentes marcadores de
          cáncer de mama.
        </p>
      </div>

      <div className="container max-w-5xl mx-auto">
        <Tabs defaultValue="ki67" className="space-y-8">
          <div className="relative flex justify-center">
            <TabsList className="relative inline-flex bg-background/10 backdrop-blur-sm p-1 rounded-lg shadow-lg">
              <TabsTrigger
                value="ki67"
                className="data-[state=active]:bg-background data-[state=active]:text-primary relative px-6 py-2 rounded-md font-medium text-sm text-background transition-all"
              >
                KI67
              </TabsTrigger>
              <TabsTrigger
                value="her2"
                className="data-[state=active]:bg-background data-[state=active]:text-primary relative px-6 py-2 rounded-md font-medium text-sm text-background transition-all"
              >
                HER2
              </TabsTrigger>
              <TabsTrigger
                value="estrogen"
                className="data-[state=active]:bg-background data-[state=active]:text-primary relative px-6 py-2 rounded-md font-medium text-sm text-background transition-all"
              >
                Estrógeno
              </TabsTrigger>
              <TabsTrigger
                value="progesterone"
                className="data-[state=active]:bg-background data-[state=active]:text-primary relative px-6 py-2 rounded-md font-medium text-sm text-background transition-all"
              >
                Progesterona
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ki67" className="space-y-4">
            <div className="bg-background rounded-lg shadow-lg p-6">
              <KI67Analysis />
            </div>
          </TabsContent>

          <TabsContent value="her2">
            <div className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex h-[400px] items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center space-y-2">
                  <p className="text-2xl font-semibold text-muted-foreground">
                    Próximamente
                  </p>
                  <p className="text-muted-foreground">
                    El análisis HER2 estará disponible pronto
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="estrogen">
            <div className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex h-[400px] items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center space-y-2">
                  <p className="text-2xl font-semibold text-muted-foreground">
                    Próximamente
                  </p>
                  <p className="text-muted-foreground">
                    El análisis de Estrógeno estará disponible pronto
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="progesterone">
            <div className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex h-[400px] items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center space-y-2">
                  <p className="text-2xl font-semibold text-muted-foreground">
                    Próximamente
                  </p>
                  <p className="text-muted-foreground">
                    El análisis de Progesterona estará disponible pronto
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
