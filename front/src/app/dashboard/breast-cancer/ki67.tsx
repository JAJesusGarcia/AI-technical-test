'use client';

import * as React from 'react';
import Image from 'next/image';
import { Loader2, Save, Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import type { AnalysisResult } from '@/types/breast-cancer';
import { FileUpload } from '@/components/file-upload';

const formSchema = z.object({
  positiveNuclei: z.number().min(0, 'Debe ser mayor o igual a 0'),
  negativeNuclei: z.number().min(0, 'Debe ser mayor o igual a 0'),
  totalNuclei: z.number().min(0, 'Debe ser mayor o igual a 0'),
  positivePercentage: z
    .number()
    .min(0, 'Debe ser mayor o igual a 0')
    .max(100, 'Debe ser menor o igual a 100'),
  confidence: z
    .number()
    .min(0, 'Debe ser mayor o igual a 0')
    .max(100, 'Debe ser menor o igual a 100'),
});

export function KI67Analysis() {
  const [file, setFile] = React.useState<File | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [result, setResult] = React.useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      positiveNuclei: 0,
      negativeNuclei: 0,
      totalNuclei: 0,
      positivePercentage: 0,
      confidence: 0,
    },
  });

  const processImage = async () => {
    if (!file) return;

    setIsProcessing(true);
    try {
      // Simular procesamiento
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simular resultado
      const mockResult: AnalysisResult = {
        id: Math.random().toString(36).slice(2),
        type: 'KI67',
        originalImage: URL.createObjectURL(file),
        processedImage: URL.createObjectURL(file),
        values: {
          positiveNuclei: 150,
          negativeNuclei: 50,
          totalNuclei: 200,
          positivePercentage: 75,
          confidence: 95,
        },
        createdAt: new Date(),
      };

      setResult(mockResult);
      form.reset(mockResult.values);

      toast({
        title: 'Imagen procesada',
        description: 'La imagen ha sido analizada correctamente.',
      });
    } catch (err) {
      console.error(err);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Hubo un error al procesar la imagen.',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSave = async (values: z.infer<typeof formSchema>) => {
    if (!result) return;

    try {
      // Simular guardado
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const resultWithUpdatedValues = {
        ...result,
        values,
      };

      // Simular descarga
      const data = JSON.stringify(resultWithUpdatedValues, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ki67-analysis-${new Date().toISOString()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: 'Resultados guardados',
        description: 'Los resultados han sido guardados correctamente.',
      });
    } catch (err) {
      console.error(err);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Hubo un error al guardar los resultados.',
      });
    }
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    form.reset();
  };

  return (
    <div className="space-y-8">
      <Card className="bg-white text-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Análisis KI67</CardTitle>
          <CardDescription>
            Sube una imagen histológica para analizar el marcador KI67.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileUpload
            value={file}
            onChange={setFile}
            onRemove={() => setFile(null)}
          />
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={reset}>
            Cancelar
          </Button>
          <Button
            onClick={processImage}
            disabled={!file || isProcessing}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Procesar Imagen
          </Button>
        </CardFooter>
      </Card>

      {result && (
        <Card className="bg-white text-gray-800 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Resultados del Análisis
            </CardTitle>
            <CardDescription>
              Revisa y ajusta los resultados del análisis según sea necesario.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Imagen Original</h4>
                <div className="relative aspect-video border rounded-lg overflow-hidden">
                  <Image
                    src={result.originalImage || '/placeholder.svg'}
                    alt="Original"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Imagen Procesada</h4>
                <div className="relative aspect-video border rounded-lg overflow-hidden">
                  <Image
                    src={result.processedImage || '/placeholder.svg'}
                    alt="Processed"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSave)}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="positiveNuclei"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Núcleos Positivos</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="negativeNuclei"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Núcleos Negativos</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="totalNuclei"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total de Núcleos</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="positivePercentage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Porcentaje Positivo (%)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confidence"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confianza (%)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormDescription>
                          Nivel de confianza del análisis automático
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={reset}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    <Trash className="mr-2 h-4 w-4" />
                    Eliminar
                  </Button>
                  <Button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Resultados
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
