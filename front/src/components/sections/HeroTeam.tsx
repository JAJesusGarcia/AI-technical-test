// import { Users } from 'lucide-react';
import React from 'react';

export function HeroTeam() {
  return (
    <div className="relative py-24 w-full px-4 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 w-96 bg-primary/5 blur-3xl -left-48 transform rotate-12" />
        <div className="absolute inset-y-0 w-96 bg-primary/5 blur-3xl -right-48 transform -rotate-12" />
      </div>

      <div className="relative text-center space-y-6 max-w-4xl mx-auto">
        {/* <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
          <Users className="h-8 w-8 text-purple-800" />
        </div> */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
          Nuestro Equipo
        </h1>
        <p className="text-xl md:text-2xl  text-gray-100">
          Conozca a los expertos detrás de nuestra tecnología revolucionaria de
          detección de cáncer.
        </p>
      </div>
    </div>
  );
}
