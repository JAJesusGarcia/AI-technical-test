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
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div className="absolute w-full animate-slide-vertical space-y-8">
        {extendedTestimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="space-y-4 border-l-2 border-white/30 pl-6"
          >
            <p className="text-xl font-medium leading-relaxed text-white">
              {testimonial.quote}
            </p>
            <footer className="text-sm">
              <div className="font-semibold text-white">
                {testimonial.author}
              </div>
              <div className="text-white/70">{testimonial.role}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
};
