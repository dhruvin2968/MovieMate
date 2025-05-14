import React, { useState, useEffect } from 'react';
import { 
  Film, 
  Search, 
  Heart, 
  Bell, 
  MessageSquare, 
  Layers, 
  ChevronRight,
  ArrowRight,
  Star,
  Play
} from 'lucide-react';
import { motion } from 'framer-motion';

export const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Search className="h-10 w-10 text-red-500" />, title: "Smart Search",
      description: "Find exactly what you want to watch with our intelligent search that understands genres, moods, and even plot elements."
    },
    {
      icon: <Star className="h-10 w-10 text-red-500" />, title: "Personalized Recommendations",
      description: "Get movie and show suggestions tailored to your unique taste based on your watch history and preferences."
    },
    {
      icon: <Heart className="h-10 w-10 text-red-500" />, title: "Watchlist",
      description: "Keep track of everything you want to watch in one organized place, accessible across all your devices."
    },
    {
      icon: <Bell className="h-10 w-10 text-red-500" />, title: "Release Reminders",
      description: "Never miss a premiere - set reminders for upcoming movies and episodes of your favorite shows."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-red-500" />, title: "Social Reviews",
      description: "Share your thoughts on what you've watched and see what your friends are enjoying."
    },
    {
      icon: <Layers className="h-10 w-10 text-red-500" />, title: "Multi-Platform Support",
      description: "Access MovieMate on any device - mobile, tablet, desktop, or smart TV for a seamless experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Navbar */}
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'}`}
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Film className="h-8 w-8 text-red-500 mr-2" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300">MovieMate</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-red-400 transition">Features</a>
            <a href="#showcase" className="hover:text-red-400 transition">Showcase</a>
            <a href="#pricing" className="hover:text-red-400 transition">Pricing</a>
          </div>
          <button className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition flex items-center font-medium">
            Sign In
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-10 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-1/3 right-0 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>
        <div className="container mx-auto relative grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8 max-w-xl" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Personal <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300">Movie Companion</span>
            </h1>
            <p className="text-lg text-gray-300">
              Discover, track, and enjoy movies and TV shows tailored just for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-red-600 rounded-full hover:bg-red-700 transition hover:scale-105 flex items-center font-medium">
                Try Now <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-gray-900 transition hover:scale-105 flex items-center font-medium">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-90"></div>
              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-center items-center">
                <div className="w-full max-w-xs">
                  <div className="rounded-lg overflow-hidden shadow-2xl mb-4">
                    <div className="bg-gray-800 p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <Film className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-medium text-sm">Now Trending</span>
                      </div>
                      <Heart className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="bg-gray-900 p-4">
                      <div className="w-full h-32 bg-gray-700 rounded-md mb-3 relative flex items-center justify-center">
                        <Play className="h-12 w-12 text-white opacity-80" />
                      </div>
                      <h3 className="text-sm font-medium mb-1">Interstellar Odyssey</h3>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} fill={i < 4 ? 'currentColor' : 'none'} className="h-3 w-3 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400 ml-2">4.2/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <h4 className="text-xs font-medium text-gray-400 mb-1">Watchlist</h4>
                      <p className="text-sm">12 movies</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <h4 className="text-xs font-medium text-gray-400 mb-1">Watched</h4>
                      <p className="text-sm">86 movies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Enhance Your Viewing Experience</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              MovieMate offers a complete set of tools designed to transform how you discover and enjoy entertainment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} 
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                whileHover={{ scale: 1.03 }}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
