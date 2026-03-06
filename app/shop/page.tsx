"use client";

/*
EQNX SHOP PAGE – FINAL AESTHETIC
- Light beige page background (#d7d4cd)
- Soft light product cards (#f5f3ef) with shadow
- Dark text (#333), gold buttons (#bfa56a)
- Product titles in Times New Roman
- Large product images (1440x1800) scaled responsively
- Responsive grid, includes Navbar & Footer
- No hero banner
*/

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ShopPage() {
  const products = [
    { name: "Wood Ember", note: "Smoky Wood", price: "₱299", img: "/images/Wood-Ember.jpg" },
    { name: "Rogue Atlas", note: "Amber Noir", price: "₱299", img: "/images/Rogue-Atlas.jpg" },
    { name: "Midnight Sky", note: "Night Jasmine", price: "₱299", img: "/images/Midnight-Sky.jpg" },
    { name: "Skybound", note: "Black Musk", price: "₱299", img: "/images/Skybound.jpg" },
    { name: "Violet Veil", note: "Citrus Amber", price: "₱299", img: "/images/Violet-Veil.jpg" },
  ];

  return (
    <div className="bg-[#d7d4cd] text-black font-sans min-h-screen">
      
      {/* NAVIGATION */}
      <Navbar />

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f5f3ef] border border-gray-300 shadow-lg overflow-hidden transition group"
            >
              {/* PRODUCT IMAGE */}
              <div className="relative h-[300px] sm:h-[350px] md:h-[320px] overflow-hidden">
                <Image
                  src={prod.img}
                  alt={prod.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>

              {/* PRODUCT DETAILS */}
              <div className="p-4">
                {/* Product Title in Times New Roman */}
                <h3
                  className="text-lg font-semibold mb-1 text-gray-800"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  {prod.name}
                </h3>

                <h4 className="text-gray-500 italic mb-2">{prod.note}</h4>
                <p className="text-gray-700 mb-3">{prod.price}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full px-4 py-2 bg-[#bfa56a] text-black font-semibold border border-[#bfa56a] hover:bg-black hover:text-[#bfa56a] transition-all"
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}