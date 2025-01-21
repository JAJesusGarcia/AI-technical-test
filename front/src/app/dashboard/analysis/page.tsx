'use client';

import * as React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Download, Eye, Trash2 } from 'lucide-react';

import type { Analysis } from '@/types/analysis';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Datos de ejemplo
const data: Analysis[] = [
  {
    id: '1',
    patientName: 'María García',
    type: 'KI67',
    cancer: 'breast',
    status: 'completed',
    result: '75% positivo',
    confidence: 95,
    date: '2024-01-20T10:30:00',
    images: {
      original: '/images/resultado.webp',
      processed: '/images/resultado.webp',
    },
  },
  {
    id: '2',
    patientName: 'Juan Pérez',
    type: 'HER2',
    cancer: 'prostate',
    status: 'processing',
    result: 'En proceso',
    confidence: 80,
    date: '2024-01-19T15:45:00',
    images: {
      original: '/images/resultado.webp',
      processed: '/images/resultado.webp',
    },
  },
  {
    id: '3',
    patientName: 'Ana López',
    type: 'ER/PR',
    cancer: 'breast',
    status: 'completed',
    result: '85% positivo',
    confidence: 90,
    date: '2024-01-18T12:00:00',
    images: {
      original: '/images/resultado.webp',
      processed: '/images/resultado.webp',
    },
  },
  {
    id: '4',
    patientName: 'Carlos Rodríguez',
    type: 'P53',
    cancer: 'prostate',
    status: 'error',
    result: 'Error en análisis',
    confidence: 0,
    date: '2024-01-17T09:30:00',
    images: {
      original: '/images/resultado.webp',
      processed: '/images/resultado.webp',
    },
  },
  {
    id: '5',
    patientName: 'Lucía Fernández',
    type: 'KI67',
    cancer: 'breast',
    status: 'completed',
    result: '65% positivo',
    confidence: 88,
    date: '2024-01-16T18:15:00',
    images: {
      original: '/images/resultado.webp',
      processed: '/images/resultado.webp',
    },
  },
  {
    id: '6',
    patientName: 'Miguel Hernández',
    type: 'HER2',
    cancer: 'breast',
    status: 'processing',
    result: 'En proceso',
    confidence: 85,
    date: '2024-01-15T14:20:00',
    images: {
      original: '/images/resultado.webp',
      processed: '/images/resultado.webp',
    },
  },
  {
    id: '7',
    patientName: 'Sofía Martínez',
    type: 'ER/PR',
    cancer: 'prostate',
    status: 'completed',
    result: '90% positivo',
    confidence: 92,
    date: '2024-01-14T11:50:00',
    images: {
      original: '/images/resultado.webp',
      processed: '/images/resultado.webp',
    },
  },
  {
    id: '8',
    patientName: 'Jorge Gómez',
    type: 'P53',
    cancer: 'breast',
    status: 'error',
    result: 'Error en análisis',
    confidence: 0,
    date: '2024-01-13T08:00:00',
    images: {
      original: '/images/resultado.webp',
      processed: '/images/resultado.webp',
    },
  },
];

export default function AnalysisPage() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [selectedAnalysis, setSelectedAnalysis] =
    React.useState<Analysis | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false); // Added state for dialog
  const { toast } = useToast();

  const columns: ColumnDef<Analysis>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'patientName',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Paciente
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue('patientName')}</div>,
    },
    {
      accessorKey: 'type',
      header: 'Tipo',
      cell: ({ row }) => <div>{row.getValue('type')}</div>,
    },
    {
      accessorKey: 'cancer',
      header: 'Cáncer',
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue('cancer') === 'breast' ? 'Mama' : 'Próstata'}
        </div>
      ),
    },
    {
      accessorKey: 'status',
      header: 'Estado',
      cell: ({ row }) => {
        const status = row.getValue('status') as string;
        return (
          <div
            className={`capitalize font-medium ${
              status === 'completed'
                ? 'text-green-600'
                : status === 'processing'
                ? 'text-blue-600'
                : 'text-red-600'
            }`}
          >
            {status === 'completed'
              ? 'Completado'
              : status === 'processing'
              ? 'Procesando'
              : 'Error'}
          </div>
        );
      },
    },
    {
      accessorKey: 'result',
      header: 'Resultado',
      cell: ({ row }) => <div>{row.getValue('result')}</div>,
    },
    {
      accessorKey: 'confidence',
      header: 'Confianza',
      cell: ({ row }) => <div>{row.getValue('confidence')}%</div>,
    },
    {
      accessorKey: 'date',
      header: 'Fecha',
      cell: ({ row }) => (
        <div>
          {format(new Date(row.getValue('date')), 'PPp', { locale: es })}
        </div>
      ),
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const analysis = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir menú</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  setSelectedAnalysis(analysis);
                  setIsDialogOpen(true); // Updated onClick handler
                }}
              >
                <Eye className="mr-2 h-4 w-4" />
                Ver detalles
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  toast({
                    title: 'Descargando resultados...',
                    description: 'Los resultados se descargarán en breve.',
                  });
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar resultados
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => {
                  toast({
                    title: 'Análisis eliminado',
                    description: 'El análisis ha sido eliminado correctamente.',
                  });
                }}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Análisis</h2>
          <p className="text-muted-foreground">
            Historial completo de análisis realizados
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>Descargar Seleccionados</Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <Input
              placeholder="Buscar por paciente..."
              value={
                (table.getColumn('patientName')?.getFilterValue() as string) ??
                ''
              }
              onChange={(event) =>
                table
                  .getColumn('patientName')
                  ?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <Select
              value={
                (table.getColumn('cancer')?.getFilterValue() as string) ?? ''
              }
              onValueChange={(value) =>
                table.getColumn('cancer')?.setFilterValue(value)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo de cáncer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="breast">Mama</SelectItem>
                <SelectItem value="prostate">Próstata</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No se encontraron resultados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} de{' '}
            {table.getFilteredRowModel().rows.length} fila(s) seleccionada(s).
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Siguiente
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {' '}
        {/* Updated Dialog open prop */}
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Detalles del Análisis</DialogTitle>
            <DialogDescription>
              Análisis realizado el{' '}
              {selectedAnalysis &&
                format(new Date(selectedAnalysis.date), 'PPp', { locale: es })}
            </DialogDescription>
          </DialogHeader>
          {selectedAnalysis && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Imagen Original</h4>
                  <div className="relative aspect-video rounded-lg overflow-hidden border">
                    <Image
                      src={
                        selectedAnalysis.images.original || '/placeholder.svg'
                      }
                      alt="Original"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Imagen Procesada</h4>
                  <div className="relative aspect-video rounded-lg overflow-hidden border">
                    <Image
                      src={
                        selectedAnalysis.images.processed || '/placeholder.svg'
                      }
                      alt="Processed"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Información del Paciente</h4>
                  <dl className="grid grid-cols-2 gap-2">
                    <dt className="text-muted-foreground">Nombre:</dt>
                    <dd>{selectedAnalysis.patientName}</dd>
                    <dt className="text-muted-foreground">Tipo:</dt>
                    <dd>{selectedAnalysis.type}</dd>
                    <dt className="text-muted-foreground">Cáncer:</dt>
                    <dd className="capitalize">
                      {selectedAnalysis.cancer === 'breast'
                        ? 'Mama'
                        : 'Próstata'}
                    </dd>
                  </dl>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Resultados</h4>
                  <dl className="grid grid-cols-2 gap-2">
                    <dt className="text-muted-foreground">Estado:</dt>
                    <dd
                      className={`capitalize font-medium ${
                        selectedAnalysis.status === 'completed'
                          ? 'text-green-600'
                          : selectedAnalysis.status === 'processing'
                          ? 'text-blue-600'
                          : 'text-red-600'
                      }`}
                    >
                      {selectedAnalysis.status === 'completed'
                        ? 'Completado'
                        : selectedAnalysis.status === 'processing'
                        ? 'Procesando'
                        : 'Error'}
                    </dd>
                    <dt className="text-muted-foreground">Resultado:</dt>
                    <dd>{selectedAnalysis.result}</dd>
                    <dt className="text-muted-foreground">Confianza:</dt>
                    <dd>{selectedAnalysis.confidence}%</dd>
                  </dl>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// 'use client';

// import * as React from 'react';
// import Image from 'next/image';
// import { format } from 'date-fns';
// import { es } from 'date-fns/locale';
// import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
// import {
//   type ColumnDef,
//   type ColumnFiltersState,
//   type SortingState,
//   type VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from '@tanstack/react-table';
// import { Download, Eye, Trash2 } from 'lucide-react';

// import type { Analysis } from '@/types/analysis';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { Input } from '@/components/ui/input';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog';
// import { useToast } from '@/components/ui/use-toast';
// import { Checkbox } from '@/components/ui/checkbox';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';

// // Datos de ejemplo
// const data: Analysis[] = [
//   {
//     id: '1',
//     patientName: 'María García',
//     type: 'KI67',
//     cancer: 'breast',
//     status: 'completed',
//     result: '75% positivo',
//     confidence: 95,
//     date: '2024-01-20T10:30:00',
//     images: {
//       original: '/placeholder.svg',
//       processed: '/placeholder.svg',
//     },
//   },
//   // Agrega más datos de ejemplo aquí
// ];

// export default function AnalysisPage() {
//   const [sorting, setSorting] = React.useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//     [],
//   );
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});
//   const [rowSelection, setRowSelection] = React.useState({});
//   const [selectedAnalysis, setSelectedAnalysis] =
//     React.useState<Analysis | null>(null);
//   const { toast } = useToast();

//   const columns: ColumnDef<Analysis>[] = [
//     {
//       id: 'select',
//       header: ({ table }) => (
//         <Checkbox
//           checked={
//             table.getIsAllPageRowsSelected() ||
//             (table.getIsSomePageRowsSelected() && 'indeterminate')
//           }
//           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//           aria-label="Select all"
//         />
//       ),
//       cell: ({ row }) => (
//         <Checkbox
//           checked={row.getIsSelected()}
//           onCheckedChange={(value) => row.toggleSelected(!!value)}
//           aria-label="Select row"
//         />
//       ),
//       enableSorting: false,
//       enableHiding: false,
//     },
//     {
//       accessorKey: 'patientName',
//       header: ({ column }) => {
//         return (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//           >
//             Paciente
//             <CaretSortIcon className="ml-2 h-4 w-4" />
//           </Button>
//         );
//       },
//       cell: ({ row }) => <div>{row.getValue('patientName')}</div>,
//     },
//     {
//       accessorKey: 'type',
//       header: 'Tipo',
//       cell: ({ row }) => <div>{row.getValue('type')}</div>,
//     },
//     {
//       accessorKey: 'cancer',
//       header: 'Cáncer',
//       cell: ({ row }) => (
//         <div className="capitalize">
//           {row.getValue('cancer') === 'breast' ? 'Mama' : 'Próstata'}
//         </div>
//       ),
//     },
//     {
//       accessorKey: 'status',
//       header: 'Estado',
//       cell: ({ row }) => {
//         const status = row.getValue('status') as string;
//         return (
//           <div
//             className={`capitalize font-medium ${
//               status === 'completed'
//                 ? 'text-green-600'
//                 : status === 'processing'
//                 ? 'text-blue-600'
//                 : 'text-red-600'
//             }`}
//           >
//             {status === 'completed'
//               ? 'Completado'
//               : status === 'processing'
//               ? 'Procesando'
//               : 'Error'}
//           </div>
//         );
//       },
//     },
//     {
//       accessorKey: 'result',
//       header: 'Resultado',
//       cell: ({ row }) => <div>{row.getValue('result')}</div>,
//     },
//     {
//       accessorKey: 'confidence',
//       header: 'Confianza',
//       cell: ({ row }) => <div>{row.getValue('confidence')}%</div>,
//     },
//     {
//       accessorKey: 'date',
//       header: 'Fecha',
//       cell: ({ row }) => (
//         <div>
//           {format(new Date(row.getValue('date')), 'PPp', { locale: es })}
//         </div>
//       ),
//     },
//     {
//       id: 'actions',
//       enableHiding: false,
//       cell: ({ row }) => {
//         const analysis = row.original;

//         return (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="h-8 w-8 p-0">
//                 <span className="sr-only">Abrir menú</span>
//                 <DotsHorizontalIcon className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>Acciones</DropdownMenuLabel>
//               <DropdownMenuItem onClick={() => setSelectedAnalysis(analysis)}>
//                 <Eye className="mr-2 h-4 w-4" />
//                 Ver detalles
//               </DropdownMenuItem>
//               <DropdownMenuItem
//                 onClick={() => {
//                   toast({
//                     title: 'Descargando resultados...',
//                     description: 'Los resultados se descargarán en breve.',
//                   });
//                 }}
//               >
//                 <Download className="mr-2 h-4 w-4" />
//                 Descargar resultados
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem
//                 className="text-red-600"
//                 onClick={() => {
//                   toast({
//                     title: 'Análisis eliminado',
//                     description: 'El análisis ha sido eliminado correctamente.',
//                   });
//                 }}
//               >
//                 <Trash2 className="mr-2 h-4 w-4" />
//                 Eliminar
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         );
//       },
//     },
//   ];

//   const table = useReactTable({
//     data,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   });

//   return (
//     <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
//       <div className="flex items-center justify-between space-y-2">
//         <div>
//           <h2 className="text-3xl font-bold tracking-tight">Análisis</h2>
//           <p className="text-muted-foreground">
//             Historial completo de análisis realizados
//           </p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Button>Descargar Seleccionados</Button>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <div className="flex items-center justify-between">
//           <div className="flex flex-1 items-center space-x-2">
//             <Input
//               placeholder="Buscar por paciente..."
//               value={
//                 (table.getColumn('patientName')?.getFilterValue() as string) ??
//                 ''
//               }
//               onChange={(event) =>
//                 table
//                   .getColumn('patientName')
//                   ?.setFilterValue(event.target.value)
//               }
//               className="max-w-sm"
//             />
//             <Select
//               value={
//                 (table.getColumn('cancer')?.getFilterValue() as string) ?? ''
//               }
//               onValueChange={(value) =>
//                 table.getColumn('cancer')?.setFilterValue(value)
//               }
//             >
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Tipo de cáncer" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">Todos</SelectItem>
//                 <SelectItem value="breast">Mama</SelectItem>
//                 <SelectItem value="prostate">Próstata</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         <div className="rounded-md border">
//           <Table>
//             <TableHeader>
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <TableRow key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => {
//                     return (
//                       <TableHead key={header.id}>
//                         {header.isPlaceholder
//                           ? null
//                           : flexRender(
//                               header.column.columnDef.header,
//                               header.getContext(),
//                             )}
//                       </TableHead>
//                     );
//                   })}
//                 </TableRow>
//               ))}
//             </TableHeader>
//             <TableBody>
//               {table.getRowModel().rows?.length ? (
//                 table.getRowModel().rows.map((row) => (
//                   <TableRow
//                     key={row.id}
//                     data-state={row.getIsSelected() && 'selected'}
//                   >
//                     {row.getVisibleCells().map((cell) => (
//                       <TableCell key={cell.id}>
//                         {flexRender(
//                           cell.column.columnDef.cell,
//                           cell.getContext(),
//                         )}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell
//                     colSpan={columns.length}
//                     className="h-24 text-center"
//                   >
//                     No se encontraron resultados.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>

//         <div className="flex items-center justify-end space-x-2">
//           <div className="flex-1 text-sm text-muted-foreground">
//             {table.getFilteredSelectedRowModel().rows.length} de{' '}
//             {table.getFilteredRowModel().rows.length} fila(s) seleccionada(s).
//           </div>
//           <div className="space-x-2">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => table.previousPage()}
//               disabled={!table.getCanPreviousPage()}
//             >
//               Anterior
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => table.nextPage()}
//               disabled={!table.getCanNextPage()}
//             >
//               Siguiente
//             </Button>
//           </div>
//         </div>
//       </div>

//       <Dialog
//         open={!!selectedAnalysis}
//         onOpenChange={() => setSelectedAnalysis(null)}
//       >
//         <DialogContent className="max-w-4xl">
//           <DialogHeader>
//             <DialogTitle>Detalles del Análisis</DialogTitle>
//             <DialogDescription>
//               Análisis realizado el{' '}
//               {selectedAnalysis &&
//                 format(new Date(selectedAnalysis.date), 'PPp', { locale: es })}
//             </DialogDescription>
//           </DialogHeader>
//           {selectedAnalysis && (
//             <div className="grid gap-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <h4 className="font-medium mb-2">Imagen Original</h4>
//                   <div className="relative aspect-video rounded-lg overflow-hidden border">
//                     <Image
//                       src={
//                         selectedAnalysis.images.original || '/placeholder.svg'
//                       }
//                       alt="Original"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-medium mb-2">Imagen Procesada</h4>
//                   <div className="relative aspect-video rounded-lg overflow-hidden border">
//                     <Image
//                       src={
//                         selectedAnalysis.images.processed || '/placeholder.svg'
//                       }
//                       alt="Processed"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <h4 className="font-medium mb-2">Información del Paciente</h4>
//                   <dl className="grid grid-cols-2 gap-2">
//                     <dt className="text-muted-foreground">Nombre:</dt>
//                     <dd>{selectedAnalysis.patientName}</dd>
//                     <dt className="text-muted-foreground">Tipo:</dt>
//                     <dd>{selectedAnalysis.type}</dd>
//                     <dt className="text-muted-foreground">Cáncer:</dt>
//                     <dd className="capitalize">
//                       {selectedAnalysis.cancer === 'breast'
//                         ? 'Mama'
//                         : 'Próstata'}
//                     </dd>
//                   </dl>
//                 </div>
//                 <div>
//                   <h4 className="font-medium mb-2">Resultados</h4>
//                   <dl className="grid grid-cols-2 gap-2">
//                     <dt className="text-muted-foreground">Estado:</dt>
//                     <dd
//                       className={`capitalize font-medium ${
//                         selectedAnalysis.status === 'completed'
//                           ? 'text-green-600'
//                           : selectedAnalysis.status === 'processing'
//                           ? 'text-blue-600'
//                           : 'text-red-600'
//                       }`}
//                     >
//                       {selectedAnalysis.status === 'completed'
//                         ? 'Completado'
//                         : selectedAnalysis.status === 'processing'
//                         ? 'Procesando'
//                         : 'Error'}
//                     </dd>
//                     <dt className="text-muted-foreground">Resultado:</dt>
//                     <dd>{selectedAnalysis.result}</dd>
//                     <dt className="text-muted-foreground">Confianza:</dt>
//                     <dd>{selectedAnalysis.confidence}%</dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
