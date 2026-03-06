"use client";

/*
EQNX HOMEPAGE – FULL UPDATED & CLEAN
- Hero banner 80vh
- Products section with sharp edges
- Product titles in Times New Roman and black
- Customer reviews section: brand colors, smooth rotation
- Navbar & Footer included
- Animations aesthetic & smooth
*/

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomePage() {
  const products = [
    { name: "Wood Ember", note: "Smoky Wood", image: "/images/Wood-Ember.jpg", description: "Warm and mysterious scent inspired by dark forests." },
    { name: "Rogue Atlas", note: "Amber Noir", image: "/images/Rogue-Atlas.jpg", description: "Bold and adventurous, perfect for the modern nomad." },
    { name: "Midnight Sky", note: "Night Jasmine", image: "/images/Midnight-Sky.jpg", description: "Delicate jasmine blended with night air for a calming effect." },
    { name: "Skybound", note: "Black Musk", image: "/images/Skybound.jpg", description: "Elevates the senses with a clean, airy musk fragrance." },
    { name: "Violet Veil", note: "Citrus Amber", image: "/images/Violet-Veil.jpg", description: "A vibrant mix of citrus and amber for a luminous presence." },
  ];

  const reviews = [
    { name: "Elijah", image: "/images/placeholder.jpg", rating: 5, comment: "Absolutely love Wood Ember! Perfect scent." },
    { name: "Karen", image: "/images/placeholder.jpg", rating: 5, comment: "Every scent I tried from them smells like heaven" },
    { name: "James", image: "/images/placeholder.jpg", rating: 5, comment: "Midnight Sky is calming and elegant." },
    { name: "Arianne", image: "/images/placeholder.jpg", rating: 5, comment: "Skybound elevates my mood every day!" },
    { name: "Kurt", image: "/images/placeholder.jpg", rating: 4, comment: "Perfume is good, but packaging needs improvement. I love it tho." },
    { name: "Joshua", image: "/images/placeholder.jpg", rating: 5, comment: "EQNX fragrances are top quality!" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#d7d4cd] font-sans">

      {/* NAVIGATION */}
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative w-full h-[80vh] overflow-hidden">
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
              priority
              style={{ objectFit: "cover" }}
              className="rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/10 flex flex-col justify-center items-center text-center px-6 rounded-none">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl text-white mb-4 drop-shadow-xl"
              >
                EQNX
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-lg"
              >
                Scent Beyond Boundaries
              </motion.p>
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#bfa56a] text-black font-semibold shadow-lg hover:bg-black hover:text-white transition-all"
              >
                Shop Collection
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 space-y-24">
        {products.map((prod, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className="relative w-full md:w-1/2 h-[420px] overflow-hidden shadow-xl group rounded-none">
              <Image
                src={prod.image}
                alt={prod.name}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-[1200ms] group-hover:scale-110 rounded-none"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-4xl font-bold mb-2 text-black" style={{ fontFamily: "Times New Roman, serif" }}>{prod.name}</h3>
              <h4 className="text-lg italic text-neutral-600 mb-4">{prod.note}</h4>
              <p className="text-neutral-800 text-lg leading-relaxed">{prod.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CUSTOMER REVIEWS – CLEAN, OFF-BRAND */}
      <section className="bg-[#f0eee6] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Our Customers Say</h2>
          <div className="flex overflow-hidden relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex gap-8"
            >
              {reviews.concat(reviews).map((rev, idx) => (
                <div key={idx} className="w-[300px] flex-shrink-0 bg-white rounded-none shadow-xl p-6 flex flex-col items-center gap-4">
                  <Image
                    src={rev.image}
                    alt={rev.name}
                    width={80}
                    height={80}
                    className="rounded-none"
                  />
                  <h4 className="font-bold text-lg text-black">{rev.name}</h4>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.894a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.32 2.41a1 1 0 00-.364 1.118l1.263 3.894c.3.921-.755 1.688-1.54 1.118l-3.32-2.41a1 1 0 00-1.176 0l-3.32 2.41c-.785.57-1.84-.197-1.54-1.118l1.263-3.894a1 1 0 00-.364-1.118L2.44 9.32c-.783-.57-.38-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.262-3.894z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral-700 text-sm text-center">{rev.comment}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="bg-white/50 py-24"
      >
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">The EQNX Philosophy</h2>
          <p className="text-neutral-800 text-lg leading-relaxed">
            EQNX exists at the intersection of night and light. Every fragrance is
            designed to evoke motion, ambition, and identity. Crafted with precision,
            each scent lingers with a presence that captivates.
          </p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Discover Your Signature Scent</h2>
          <motion.a
            href="/shop"
            whileHover={{ scale: 1.08 }}
            className="px-12 py-5 bg-[#bfa56a] text-black font-semibold shadow-xl hover:bg-black hover:text-white transition-all"
          >
            Shop Now
          </motion.a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}