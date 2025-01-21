'use client';

import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: File | null;
  onChange?: (file: File | null) => void;
  onRemove?: () => void;
  accept?: string[];
  maxSize?: number;
}

export function FileUpload({
  value,
  onChange,
  onRemove,
  accept = ['image/jpeg', 'image/png'],
  maxSize = 5242880, // 5MB
  className,
  ...props
}: FileUploadProps) {
  const [preview, setPreview] = React.useState<string | null>(null);

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        onChange?.(file);
      }
    },
    [onChange],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept.reduce((acc, curr) => ({ ...acc, [curr]: [] }), {}),
    maxSize,
    multiple: false,
  });

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
    <div className={cn('space-y-4', className)} {...props}>
      <div
        {...getRootProps()}
        className={cn(
          'border-2 border-dashed rounded-lg p-8 transition-colors',
          isDragActive
            ? 'border-primary bg-primary/5'
            : 'border-muted-foreground/25',
          preview ? 'py-4' : 'h-[300px]',
          'flex flex-col items-center justify-center gap-4 relative',
        )}
      >
        <input {...getInputProps()} />
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
