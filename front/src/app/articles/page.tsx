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
import { Search } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Avances en la Detección Temprana del Cáncer de Mama mediante IA',
    excerpt:
      'Nuevos algoritmos de inteligencia artificial están revolucionando la forma en que detectamos el cáncer de mama en etapas tempranas...',
    image: '/placeholder.svg?height=400&width=600',
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
    image: '/placeholder.svg?height=400&width=600',
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
    image: '/placeholder.svg?height=400&width=600',
    date: '2024-01-18',
    author: 'Ing. Ana Martínez',
    category: 'Innovación',
    readTime: '6 min',
  },
  // Add more articles as needed
];

export default function ArticlesPage() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Últimas Noticias y Artículos
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Mantente actualizado con los últimos avances en tecnología médica y
          detección del cáncer.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar artículos..." className="pl-10" />
          </div>
          <Button>Buscar</Button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {[
          'Todos',
          'Investigación',
          'Tecnología',
          'Innovación',
          'Casos Clínicos',
        ].map((category) => (
          <Badge
            key={category}
            variant={category === 'Todos' ? 'default' : 'secondary'}
            className="cursor-pointer"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <div className="relative h-[200px]">
              <Image
                src={article.image || '/placeholder.svg'}
                alt={article.title}
                fill
                className="object-cover rounded-t-lg"
              />
              <Badge className="absolute top-4 left-4">
                {article.category}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">
                <Link
                  href={`/articles/${article.id}`}
                  className="hover:text-primary"
                >
                  {article.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">
                {article.excerpt}
              </p>
            </CardContent>
            <CardFooter className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-muted" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Cargar más artículos
        </Button>
      </div>
    </div>
  );
}
