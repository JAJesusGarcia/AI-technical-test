'use client';

import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../ui/button';

const UploadPage: React.FC = () => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: 'Error',
        description: 'Por favor selecciona un archivo antes de subirlo.',
        variant: 'error',
      });
      return;
    }

    setIsUploading(true);
    try {
      // Simular la subida de la imagen
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: 'Éxito',
        description: `El archivo ${selectedFile.name} se subió correctamente.`,
      });
      setSelectedFile(null);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un problema al subir el archivo.',
        variant: 'error',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Subir Imágenes</h1>

        <div className="mb-4">
          <label
            htmlFor="file-upload"
            className="block mb-2 font-medium text-gray-700"
          >
            Selecciona una imagen para subir
          </label>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {selectedFile && (
          <p className="mb-4 text-sm text-gray-600">
            Archivo seleccionado: <strong>{selectedFile.name}</strong>
          </p>
        )}

        <Button
          onClick={handleUpload}
          disabled={isUploading}
          className="w-full"
        >
          {isUploading ? 'Subiendo...' : 'Subir Imagen'}
        </Button>
      </div>
    </div>
  );
};

export default UploadPage;
