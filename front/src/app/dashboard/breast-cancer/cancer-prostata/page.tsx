'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProstateCancerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50 p-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-background animate-pulse">
          Cáncer de Próstata
        </h1>
        <p className="text-lg text-background/90 mt-2">
          Explora análisis histológicos para identificar marcadores clave en el
          cáncer de próstata.
        </p>
      </div>

      <div className="container max-w-5xl mx-auto">
        <Tabs defaultValue="psa" className="space-y-8">
          <div className="relative flex justify-center">
            <TabsList className="relative inline-flex bg-background/10 backdrop-blur-sm p-1 rounded-lg shadow-lg">
              <TabsTrigger
                value="psa"
                className="data-[state=active]:bg-background data-[state=active]:text-primary relative px-6 py-2 rounded-md font-medium text-sm text-background transition-all"
              >
                PSA
              </TabsTrigger>
              <TabsTrigger
                value="gleason"
                className="data-[state=active]:bg-background data-[state=active]:text-primary relative px-6 py-2 rounded-md font-medium text-sm text-background transition-all"
              >
                Gleason
              </TabsTrigger>
              <TabsTrigger
                value="androgen"
                className="data-[state=active]:bg-background data-[state=active]:text-primary relative px-6 py-2 rounded-md font-medium text-sm text-background transition-all"
              >
                Andrógenos
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="psa">
            <div className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex h-[400px] items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center space-y-2">
                  <p className="text-2xl font-semibold text-muted-foreground">
                    Próximamente
                  </p>
                  <p className="text-muted-foreground">
                    El análisis PSA estará disponible pronto
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gleason">
            <div className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex h-[400px] items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center space-y-2">
                  <p className="text-2xl font-semibold text-muted-foreground">
                    Próximamente
                  </p>
                  <p className="text-muted-foreground">
                    El análisis de la escala Gleason estará disponible pronto
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="androgen">
            <div className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex h-[400px] items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center space-y-2">
                  <p className="text-2xl font-semibold text-muted-foreground">
                    Próximamente
                  </p>
                  <p className="text-muted-foreground">
                    El análisis de receptores de Andrógenos estará disponible
                    pronto
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
