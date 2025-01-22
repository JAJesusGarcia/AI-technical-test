import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Revolucionando la Detección del Cáncer
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Combinamos la experiencia médica con inteligencia artificial avanzada
          para mejorar la precisión y velocidad en el diagnóstico del cáncer.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
          <p className="text-muted-foreground">
            Democratizar el acceso a diagnósticos precisos de cáncer mediante
            tecnología de vanguardia, permitiendo a los profesionales de la
            salud tomar decisiones más informadas y rápidas.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
          <p className="text-muted-foreground">
            Ser líderes globales en soluciones de IA para la detección temprana
            del cáncer, contribuyendo a salvar vidas a través de diagnósticos
            más precisos y accesibles.
          </p>
        </Card>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Precisión Avanzada',
              description:
                'Algoritmos de IA entrenados con millones de muestras histológicas para garantizar resultados precisos.',
              image: '/placeholder.svg?height=48&width=48',
            },
            {
              title: 'Rapidez',
              description:
                'Resultados en minutos, no días, permitiendo iniciar tratamientos más rápidamente.',
              image: '/placeholder.svg?height=48&width=48',
            },
            {
              title: 'Fácil de Usar',
              description:
                'Interfaz intuitiva diseñada por y para profesionales médicos.',
              image: '/placeholder.svg?height=48&width=48',
            },
          ].map((feature, index) => (
            <Card key={index} className="p-6">
              <CardContent className="space-y-4 p-0">
                <Image
                  src={feature.image || '/placeholder.svg'}
                  alt=""
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Nuestro Equipo</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Dra. María González',
              role: 'Directora Médica',
              image: '/placeholder.svg?height=300&width=300',
              specialties: ['Oncología', 'Patología Digital'],
            },
            {
              name: 'Dr. Carlos Rodríguez',
              role: 'Jefe de Investigación',
              image: '/placeholder.svg?height=300&width=300',
              specialties: ['Investigación Clínica', 'IA en Medicina'],
            },
            {
              name: 'Ing. Ana Martínez',
              role: 'Líder de Desarrollo IA',
              image: '/placeholder.svg?height=300&width=300',
              specialties: ['Machine Learning', 'Análisis de Imágenes'],
            },
          ].map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
