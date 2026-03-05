"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ShopPage() {
  const scents = [
    { name: "Wood Ember", note: "Smoky Wood", image: "/images/Wood-Ember.jpg" },
    { name: "Rogue Atlas", note: "Amber Noir", image: "/images/Rogue-Atlas.jpg" },
    { name: "Midnight Sky", note: "Night Jasmine", image: "/images/Midnight-Sky.jpg" },
    { name: "Skybound", note: "Black Musk", image: "/images/Skybound.jpg" },
    { name: "Violet Veil", note: "Citrus Amber", image: "/images/Violet-Veil.jpg" },
  ];

  return (
    <div className="bg-[#d7d4cd] font-sans" style={{ fontFamily: "Segoe UI, sans-serif" }}>
      <Navbar />

      <section className="max-w-[1400px] mx-auto px-6 py-16 mt-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Shop Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scents.map((sc, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
                <Image src={sc.image} alt={sc.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-1">{sc.name}</h3>
                <h4 className="text-md italic text-neutral-600 mb-4">{sc.note}</h4>
                <a
                  href="#"
                  className="px-6 py-3 rounded-full bg-[#bfa56a] text-black font-semibold hover:bg-black hover:text-white transition-all"
                >
                  Buy Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}