import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function CompanyPage() {
  return (
    <div className="py-12 container mx-auto px-4">
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
              image: '/images/home2.webp',
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
                  alt={feature.title}
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

      {/* Company History */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestra Historia
        </h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">2018: Los Inicios</h3>
              <p className="text-muted-foreground">
                Fundada por un equipo de médicos y expertos en IA, nuestra
                empresa nació de la visión de revolucionar la detección del
                cáncer utilizando tecnología de vanguardia.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Fundación de la empresa"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">2020: Primer Producto</h3>
              <p className="text-muted-foreground">
                Lanzamos nuestra primera solución de IA para la detección de
                cáncer de mama, marcando un hito en la industria médica.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Lanzamiento del primer producto"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                2022: Expansión Global
              </h3>
              <p className="text-muted-foreground">
                Expandimos nuestras operaciones a nivel internacional, llevando
                nuestra tecnología a hospitales y clínicas en todo el mundo.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Expansión global"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Future Plans */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Mirando al Futuro
        </h2>
        <Card className="p-6">
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Continuamos innovando y expandiendo nuestras soluciones de IA para
              abordar más tipos de cáncer y mejorar constantemente la precisión
              de nuestros diagnósticos. Nuestro objetivo es seguir siendo
              líderes en la intersección de la IA y la atención médica,
              contribuyendo a un futuro donde el diagnóstico temprano y preciso
              del cáncer sea accesible para todos.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
