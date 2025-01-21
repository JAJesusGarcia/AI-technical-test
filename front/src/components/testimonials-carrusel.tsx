'use client';

import React, { useEffect, useState } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full p-8">
      <div className="relative space-y-8">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className={`transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-lg font-semibold text-white">
              {testimonial.quote}
            </p>
            <footer className="mt-2 text-sm text-white">
              <strong>{testimonial.author}</strong>
              <br />
              <span className="text-primary">{testimonial.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
};
