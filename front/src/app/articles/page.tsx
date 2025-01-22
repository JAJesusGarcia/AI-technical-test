'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Clock, ChevronDown } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Avances en la Detección Temprana del Cáncer de Mama mediante IA',
    excerpt:
      'Nuevos algoritmos de inteligencia artificial están revolucionando la forma en que detectamos el cáncer de mama en etapas tempranas...',
    image: '/images/article1.webp',
    date: '2024-01-22',
    author: 'Dra. María González',
    category: 'Investigación',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'El Futuro de la Patología Digital',
    excerpt:
      'La transformación digital en la patología está cambiando la forma en que diagnosticamos y tratamos el cáncer...',
    image: '/images/article2.webp',
    date: '2024-01-20',
    author: 'Dr. Carlos Rodríguez',
    category: 'Tecnología',
    readTime: '7 min',
  },
  {
    id: 3,
    title: 'Impacto de la IA en el Diagnóstico del Cáncer de Próstata',
    excerpt:
      'Los sistemas de IA están mostrando resultados prometedores en la identificación temprana del cáncer de próstata...',
    image: '/images/article3.webp',
    date: '2024-01-18',
    author: 'Ing. Ana Martínez',
    category: 'Innovación',
    readTime: '6 min',
  },
  // Add more articles as needed
];

const categories = [
  'Todos',
  'Investigación',
  'Tecnología',
  'Innovación',
  'Casos Clínicos',
];

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Header con animación sutil */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-fade-in">
            Últimas Noticias y Artículos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mantente actualizado con los últimos avances en tecnología médica y
            detección del cáncer.
          </p>
          <br />

          {/* Barra de búsqueda mejorada */}
          <div className="max-w-lg mx-auto">
            <div className="relative flex gap-2 shadow-lg rounded-lg bg-background/95 backdrop-blur">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar artículos..."
                className="pl-12 h-12 border-none focus-visible:ring-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="rounded-l-none">Buscar</Button>
            </div>
          </div>
        </div>

        {/* Categorías con diseño mejorado */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === selectedCategory ? 'default' : 'secondary'}
              className={`
                px-4 py-2 text-sm cursor-pointer transition-all
                hover:scale-105 active:scale-95
                ${category === selectedCategory ? 'shadow-md' : ''}
              `}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Grid de artículos con diseño mejorado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="group flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-background/95 backdrop-blur"
            >
              <div className="relative h-[240px] overflow-hidden rounded-t-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 shadow-lg">
                  {article.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/articles/${article.id}`}>{article.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="mt-auto pt-6 border-t">
                <div className="flex items-center justify-between w-full text-sm">
                  <div className="flex items-center gap-3">
                    <Image
                      src={article.image}
                      alt={article.author}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Botón de cargar más mejorado */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="group gap-2 hover:shadow-md transition-all"
          >
            Cargar más artículos
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
