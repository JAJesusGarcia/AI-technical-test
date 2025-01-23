// import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  Lightbulb,
  HandshakeIcon,
  ArrowRight,
  LinkedinIcon,
  TwitterIcon,
  Mail,
} from 'lucide-react';

export default function TeamPage() {
  // const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Octavio Carranza',
      role: 'Development business leader and management operations',
      image: '/images/av_carranza.webp',
      specialties: ['Desarrollo de Negocios', 'Gestión de Operaciones'],
      bio: 'Octavio aporta más de 20 años de experiencia en desarrollo de negocios y gestión de operaciones. Su liderazgo ha sido fundamental en el crecimiento y expansión de nuestra empresa.',
      linkedin: 'https://www.linkedin.com/in/octaviocarranza/',
      twitter: '#',
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
      linkedin: 'https://www.linkedin.com/in/pedro-nueno-b595841a8/',
      twitter: '#',
    },
    {
      name: 'Agustin Caverzasi',
      role: 'Co-founder and leader of Deep Vision AI',
      image: '/images/av_caverzasi.webp',
      specialties: [
        'CEO at Anyone AI',
        'Former President AI at IntelliSite',
        'Former CEO at Deep Vision AI',
      ],
      bio: 'Agustin es un pionero en el campo de la IA aplicada a la visión por computadora. Su experiencia técnica y liderazgo han sido fundamentales en el desarrollo de nuestras soluciones de IA para la detección del cáncer.',
      linkedin: 'https://www.linkedin.com/in/agustincaverzasi/',
      twitter: '#',
    },
    {
      name: 'Jesús García',
      role: 'Full Stack Developer',
      image: '/images/myPhoto5.webp',
      specialties: [
        'Desarrollo de Software',
        'Metodologias Agiles',
        'Next.js',
        'TypeScript',
      ],
      bio: 'Mi compromiso es crear experiencias de usuario intuitivas y accesibles, utilizando tecnologías punteras como Next.js, React y Node.js, contribuyendo al desarrollo de esta aplicación innovadora para la detección temprana de cáncer.',
      linkedin: 'https://www.linkedin.com/in/jesusjagarcia/',
      twitter: '#',
    },
    {
      name: 'Ing. Carlos Mendoza',
      role: 'Chief Technology Officer',
      image: '/images/empresario-nuevo1.webp',
      specialties: [
        'Inteligencia Artificial',
        'Aprendizaje Automático',
        'Usuario inventado',
      ],
      bio: 'Carlos lidera nuestro equipo de desarrollo tecnológico. Su experiencia en IA y aprendizaje automático impulsa la innovación continua en nuestras soluciones de detección de cáncer.',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Lic. Ana Gómez',
      role: 'Chief Operating Officer',
      image: '/images/empresario3.webp',
      specialties: [
        'Gestión de Operaciones',
        'Estrategia Empresarial',
        'Usuario inventado',
      ],
      bio: 'Ana supervisa las operaciones diarias de nuestra empresa. Su experiencia en gestión y estrategia empresarial asegura que nuestros procesos sean eficientes y efectivos.',
      linkedin: '#',
      twitter: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/80 to-muted/20">
      {/* Hero Section */}
      <div className="relative py-24 container mx-auto px-4 inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-y-0 w-96 bg-primary/5 blur-3xl -left-48 transform rotate-12" />
          <div className="absolute inset-y-0 w-96 bg-primary/5 blur-3xl -right-48 transform -rotate-12" />
        </div>

        <div className="relative text-center space-y-6 max-w-4xl mx-auto">
          <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Users className="h-8 w-8 text-purple-800" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
            Nuestro Equipo
          </h1>
          <p className="text-xl md:text-2xl  text-gray-100">
            Conozca a los expertos detrás de nuestra tecnología revolucionaria
            de detección de cáncer.
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-background/60 backdrop-blur"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-gray-500 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-primary/10 hover:bg-primary/20 text-primary"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex gap-4 pt-4">
                  <Button variant="ghost" size="icon">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <TwitterIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Culture */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nuestra Cultura
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-lg transition-all bg-background/60 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Innovación Constante</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fomentamos un ambiente de trabajo que promueve la creatividad
                  y la innovación continua. Creemos que las mejores ideas pueden
                  venir de cualquier miembro del equipo.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-8 hover:shadow-lg transition-all bg-background/60 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <HandshakeIcon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Colaboración Multidisciplinaria
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro éxito se basa en la colaboración entre expertos en
                  tecnología, medicina y negocios. Esta sinergia nos permite
                  abordar desafíos complejos desde múltiples perspectivas.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Join Our Team */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-background border-none text-center">
            <CardContent className="space-y-6 p-0">
              <h2 className="text-4xl font-bold mb-6">
                Únete a Nuestro Equipo
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estamos siempre en busca de talentos apasionados que quieran
                hacer una diferencia en la lucha contra el cáncer. Si te
                entusiasma la idea de trabajar en la intersección de la IA y la
                atención médica, nos encantaría saber de ti.
              </p>
              <Button size="lg" className="mt-8 gap-2">
                Ver Oportunidades
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
