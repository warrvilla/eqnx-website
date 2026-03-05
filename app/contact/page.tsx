"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-[#d7d4cd] font-sans" style={{ fontFamily: "Segoe UI, sans-serif" }}>
      <Navbar />

      <section className="max-w-[800px] mx-auto px-6 py-24 mt-20">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

        <form className="bg-white rounded-3xl shadow-xl p-8 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Name"
            className="border border-neutral-300 rounded-lg p-3 focus:outline-none focus:border-[#bfa56a]"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-neutral-300 rounded-lg p-3 focus:outline-none focus:border-[#bfa56a]"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="border border-neutral-300 rounded-lg p-3 focus:outline-none focus:border-[#bfa56a]"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-[#bfa56a] text-black font-semibold hover:bg-black hover:text-white transition-all"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}