'use client';

import type React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Esta plataforma ha revolucionado la forma en que diagnosticamos el cáncer. La precisión y velocidad son incomparables.',
    author: 'Dr. María González',
    role: 'Patóloga',
  },
  {
    quote:
      'La plataforma ha simplificado enormemente el manejo de mis casos de cáncer de mama.',
    author: 'Dr. Juan Pérez',
    role: 'Oncólogo',
  },
  {
    quote:
      'Como radiólogo, he encontrado colaboraciones increíbles gracias a esta plataforma.',
    author: 'Dra. Laura Gómez',
    role: 'Radióloga',
  },
];

export const TestimonialsCarousel: React.FC = () => {
  // Duplicamos los testimonios para lograr el bucle infinito
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute w-full animate-slide-vertical space-y-8">
        {extendedTestimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="space-y-2 border-l border-primary/30 pl-6"
          >
            <strong>
              <p className="text-lg text-white">{testimonial.quote}</p>
            </strong>
            <footer className="text-sm">
              <span className="text-primary">{testimonial.author}</span>
              <br />
              <span className="text-white/70">{testimonial.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
};
