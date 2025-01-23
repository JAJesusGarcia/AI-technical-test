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
  iaKI67: z.number().min(0, 'Debe ser mayor o igual a 0'),
  iaTotalCells: z.number().min(0, 'Debe ser mayor o igual a 0'),
  iaPositiveCells: z.number().min(0, 'Debe ser mayor o igual a 0'),
  ki67: z.number().min(0, 'Debe ser mayor o igual a 0'),
  totalCells: z.number().min(0, 'Debe ser mayor o igual a 0'),
  positiveCells: z.number().min(0, 'Debe ser mayor o igual a 0'),
  negativeCells: z.number().min(0, 'Debe ser mayor o igual a 0'),
  wrongKI67: z.number().min(0, 'Debe ser mayor o igual a 0'),
  wrongTotalCells: z.number().min(0, 'Debe ser mayor o igual a 0'),
  wrongPositiveCells: z.number().min(0, 'Debe ser mayor o igual a 0'),
  wrongNegativeCells: z.number().min(0, 'Debe ser mayor o igual a 0'),
});

export function KI67Analysis() {
  const [file, setFile] = React.useState<File | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [result, setResult] = React.useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      iaKI67: 0,
      iaTotalCells: 0,
      iaPositiveCells: 0,
      ki67: 0,
      totalCells: 0,
      positiveCells: 0,
      negativeCells: 0,
      wrongKI67: 0,
      wrongTotalCells: 0,
      wrongPositiveCells: 0,
      wrongNegativeCells: 0,
    },
  });

  const processImage = async () => {
    if (!file) return;

    setIsProcessing(true);
    try {
      // Simular procesamiento
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const mockResult: AnalysisResult = {
        id: Math.random().toString(36).slice(2),
        type: 'KI67',
        originalImage: URL.createObjectURL(file),
        processedImage: URL.createObjectURL(file),
        values: {
          iaKI67: 50,
          iaTotalCells: 400,
          iaPositiveCells: 200,
          ki67: 75,
          totalNuclei: 200,
          positiveNuclei: 150,
          negativeNuclei: 50,
          positivePercentage: 75,
          confidence: 95,
          wrongKI67: 10,
          wrongTotalCells: 5,
          wrongPositiveCells: 4,
          wrongNegativeCells: 7,
        },
        createdAt: new Date(),
      };

      const mappedValues = {
        iaKI67: mockResult.values.iaKI67,
        iaTotalCells: mockResult.values.iaTotalCells,
        iaPositiveCells: mockResult.values.iaPositiveCells,
        ki67: mockResult.values.ki67,
        totalCells: mockResult.values.totalNuclei,
        positiveCells: mockResult.values.positiveNuclei,
        negativeCells: mockResult.values.negativeNuclei,
        wrongKI67: mockResult.values.wrongKI67,
        wrongTotalCells: mockResult.values.wrongTotalCells,
        wrongPositiveCells: mockResult.values.wrongPositiveCells,
        wrongNegativeCells: mockResult.values.wrongNegativeCells,
      };

      setResult(mockResult);
      form.reset(mappedValues);

      toast({
        variant: 'success',
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
    try {
      // Simular guardado y descarga
      const data = JSON.stringify(values, null, 2);
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
        variant: 'success',
        title: 'Resultados guardados',
        description: 'Los resultados han sido guardados correctamente.',
      });

      reset(); // Limpiar la vista de resultados
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
    <div className="space-y-8 pb-10 bg-gray-200">
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
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
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
                  {Object.keys(formSchema.shape).map((fieldName) => (
                    <FormField
                      key={fieldName}
                      control={form.control}
                      name={fieldName as keyof z.infer<typeof formSchema>}
                      render={({ field }) => (
                        <FormItem>
                          {/* Usa fieldName como etiqueta o tradúcelo */}
                          <FormLabel>
                            {fieldName.replace(/([A-Z])/g, ' $1')}
                          </FormLabel>
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
                  ))}
                </div>

                <div className="flex justify-end gap-2 mt-4">
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
