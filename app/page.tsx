"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomePage() {
  const products = [
    {
      name: "Wood Ember",
      note: "Smoky Wood",
      image: "/images/Wood-Ember.jpg",
      description: "Warm and mysterious scent inspired by dark forests.",
    },
    {
      name: "Rogue Atlas",
      note: "Amber Noir",
      image: "/images/Rogue-Atlas.jpg",
      description: "Bold and adventurous, perfect for the modern nomad.",
    },
    {
      name: "Midnight Sky",
      note: "Night Jasmine",
      image: "/images/Midnight-Sky.jpg",
      description: "Delicate jasmine blended with night air for a calming effect.",
    },
    {
      name: "Skybound",
      note: "Black Musk",
      image: "/images/Skybound.jpg",
      description: "Elevates the senses with a clean, airy musk fragrance.",
    },
    {
      name: "Violet Veil",
      note: "Citrus Amber",
      image: "/images/Violet-Veil.jpg",
      description: "A vibrant mix of citrus and amber for a luminous presence.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide hero every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#d7d4cd] font-sans" style={{ fontFamily: "Segoe UI, sans-serif" }}>
      <Navbar />

      {/* HERO BANNER SLIDER */}
      <section className="relative w-full h-[70vh] mt-[100px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={products[currentSlide].image}
              alt={products[currentSlide].name}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 flex flex-col justify-center items-center text-center px-6">
              <h1 className="text-4xl md:text-5xl font- text-white mb-4">
                EQNX
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Scent Beyond Boundaries
              </p>
              <a
                href="/shop"
                className="px-8 py-3 rounded-full bg-[#bfa56a] text-black font-semibold hover:bg-black hover:text-white transition-all"
              >
                Shop Collection
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* FEATURED PRODUCTS – Editorial Layout */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 space-y-24">
        {products.map((prod, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* IMAGE */}
            <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <Image
                src={prod.image}
                alt={prod.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* TEXT */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">{prod.name}</h3>
              <h4 className="text-lg italic text-neutral-600 mb-4">{prod.note}</h4>
              <p className="text-neutral-800 text-lg">{prod.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="bg-white/50 py-24">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">The EQNX Philosophy</h2>
          <p className="text-neutral-800 text-lg leading-relaxed">
            EQNX exists at the intersection of night and light. Every fragrance is
            designed to evoke motion, ambition, and identity. Crafted with precision,
            each scent lingers with a presence that captivates.
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Discover Your Signature Scent</h2>
          <a
            href="/shop"
            className="px-10 py-4 rounded-full bg-[#bfa56a] text-black font-semibold hover:bg-black hover:text-white transition-all"
          >
            Shop Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}