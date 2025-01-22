import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TeamPage() {
  return (
    <div className="py-12 container mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Nuestro Equipo
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Conozca a los expertos detrás de nuestra tecnología revolucionaria de
          detección de cáncer.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[
          {
            name: 'Octavio Carranza',
            role: 'Development business leader and management operations',
            image: '/images/av_carranza.webp',
            specialties: ['Desarrollo de Negocios', 'Gestión de Operaciones'],
            bio: 'Octavio aporta más de 20 años de experiencia en desarrollo de negocios y gestión de operaciones. Su liderazgo ha sido fundamental en el crecimiento y expansión de nuestra empresa.',
          },
          {
            name: 'Pedro Nueno',
            role: 'Founder of the center of entrepreneurship from IESE BS.',
            image: '/images/Nunez.webp',
            specialties: [
              'Professor',
              'Honorary President',
              'International Business',
            ],
            bio: 'Pedro es un reconocido académico y emprendedor. Su experiencia en negocios internacionales y su visión innovadora han sido cruciales para establecer nuestra presencia global.',
          },
          {
            name: 'Agustin Caverzasi',
            role: 'Co-founder and leader of Deep Vision AI.',
            image: '/images/av_caverzasi.webp',
            specialties: [
              'CEO at Anyone AI',
              'Former President AI at IntelliSite',
              'Former CEO at Deep Vision AI',
            ],
            bio: 'Agustin es un pionero en el campo de la IA aplicada a la visión por computadora. Su experiencia técnica y liderazgo han sido fundamentales en el desarrollo de nuestras soluciones de IA para la detección del cáncer.',
          },
          {
            name: 'Dra. María Rodríguez',
            role: 'Chief Medical Officer',
            image: '/placeholder.svg',
            specialties: ['Oncología', 'Investigación Clínica'],
            bio: 'La Dra. Rodríguez aporta una valiosa perspectiva médica a nuestro equipo. Su experiencia en oncología y investigación clínica asegura que nuestras soluciones de IA se alineen con las necesidades reales de los profesionales de la salud.',
          },
          {
            name: 'Ing. Carlos Mendoza',
            role: 'Chief Technology Officer',
            image: '/placeholder.svg',
            specialties: ['Inteligencia Artificial', 'Aprendizaje Automático'],
            bio: 'Carlos lidera nuestro equipo de desarrollo tecnológico. Su experiencia en IA y aprendizaje automático impulsa la innovación continua en nuestras soluciones de detección de cáncer.',
          },
          {
            name: 'Lic. Ana Gómez',
            role: 'Chief Operating Officer',
            image: '/placeholder.svg',
            specialties: ['Gestión de Operaciones', 'Estrategia Empresarial'],
            bio: 'Ana supervisa las operaciones diarias de nuestra empresa. Su experiencia en gestión y estrategia empresarial asegura que nuestros procesos sean eficientes y efectivos.',
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
              <div className="flex flex-wrap gap-2 mb-4">
                {member.specialties.map((specialty, idx) => (
                  <Badge key={idx} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Culture */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestra Cultura</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Innovación Constante</h3>
            <p className="text-muted-foreground">
              Fomentamos un ambiente de trabajo que promueve la creatividad y la
              innovación continua. Creemos que las mejores ideas pueden venir de
              cualquier miembro del equipo.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">
              Colaboración Multidisciplinaria
            </h3>
            <p className="text-muted-foreground">
              Nuestro éxito se basa en la colaboración entre expertos en
              tecnología, medicina y negocios. Esta sinergia nos permite abordar
              desafíos complejos desde múltiples perspectivas.
            </p>
          </Card>
        </div>
      </div>

      {/* Join Our Team */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Únete a Nuestro Equipo
        </h2>
        <Card className="p-6">
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Estamos siempre en busca de talentos apasionados que quieran hacer
              una diferencia en la lucha contra el cáncer. Si te entusiasma la
              idea de trabajar en la intersección de la IA y la atención médica,
              nos encantaría saber de ti.
            </p>
            <p className="text-muted-foreground">
              Visita nuestra página de carreras para ver las oportunidades
              actuales o contáctanos directamente para explorar cómo puedes
              contribuir a nuestra misión.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
