import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient-shift bg-[length:200%_200%]">
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center p-6 md:p-10 lg:p-12 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl transition-all duration-300 hover:shadow-purple-500/50">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-10 w-10 text-yellow-300 animate-pulse mr-2" />
          <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
            Unlock Your Business Potential
          </h2>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          Transform Your Sales Workflow
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Our CRM solution helps you manage leads, track opportunities, and close deals faster with an intuitive, powerful platform designed for modern businesses.
        </p>
        <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50">
          Get Started For Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      {/* Tailwind CSS keyframes for animations (add to tailwind.config.js extend.keyframes)
      This blob animation code is for illustration, usually you'd define it in tailwind.config.js
      and apply classes like animate-blob, animation-delay-xxxx
      */
      /*
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      .animate-blob {
        animation: blob 7s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
      }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
      */}
    </section>
  );
};

export default HeroSection;

