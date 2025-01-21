'use client';

import * as React from 'react';
import Image from 'next/image';
import { Upload, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FileUploadProps {
  value?: File | null;
  onChange?: (file: File | null) => void;
  onRemove?: () => void;
  accept?: string[];
  maxSize?: number;
  className?: string;
}

export function FileUpload({
  value,
  onChange,
  onRemove,
  accept = ['image/jpeg', 'image/png'],
  maxSize = 5242880, // 5MB
  className,
}: FileUploadProps) {
  const [preview, setPreview] = React.useState<string | null>(null);
  const [isDragActive, setIsDragActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    if (file) {
      if (!accept.includes(file.type)) {
        alert('Tipo de archivo no soportado');
        return;
      }
      if (file.size > maxSize) {
        alert('Archivo demasiado grande');
        return;
      }
      onChange?.(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  React.useEffect(() => {
    if (value) {
      const objectUrl = URL.createObjectURL(value);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [value]);

  return (
    <div className={cn('space-y-4', className)}>
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          'border-2 border-dashed rounded-lg p-8 transition-colors cursor-pointer',
          isDragActive
            ? 'border-primary bg-primary/5'
            : 'border-muted-foreground/25',
          preview ? 'py-4' : 'h-[300px]',
          'flex flex-col items-center justify-center gap-4 relative',
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept.join(',')}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            handleFileChange(file || null);
          }}
        />

        {preview ? (
          <>
            <div className="relative w-full aspect-video">
              <Image
                src={preview || '/placeholder.svg'}
                alt="Preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="absolute top-2 right-2"
              onClick={(e) => {
                e.stopPropagation();
                onRemove?.();
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <>
            <div className="p-4 rounded-full bg-primary/10">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-lg font-medium">
                Arrastra y suelta o haz click para seleccionar
              </p>
              <p className="text-sm text-muted-foreground">
                Soporta imágenes JPG y PNG hasta 5MB
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
