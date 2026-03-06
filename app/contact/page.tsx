"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-[#d7d4cd] font-sans min-h-screen m-0 p-0" style={{ fontFamily: "Segoe UI, sans-serif" }}>
      {/* NAVBAR */}
      <Navbar />

      {/* CONTACT SECTION */}
      <section className="max-w-[800px] mx-auto px-6 py-24 pt-32">
        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-12 text-center text-black">Contact Us</h2>

        {/* FORM */}
        <form className="bg-[#f4f2ed] shadow-xl p-10 flex flex-col gap-6 rounded-none">
          {/* NAME INPUT */}
          <input
            type="text"
            placeholder="Name"
            className="border border-neutral-400 p-4 text-black rounded-none focus:outline-none focus:border-[#bfa56a] placeholder:text-neutral-500"
          />

          {/* EMAIL INPUT */}
          <input
            type="email"
            placeholder="Email"
            className="border border-neutral-400 p-4 text-black rounded-none focus:outline-none focus:border-[#bfa56a] placeholder:text-neutral-500"
          />

          {/* MESSAGE TEXTAREA */}
          <textarea
            placeholder="Message"
            rows={5}
            className="border border-neutral-400 p-4 text-black rounded-none focus:outline-none focus:border-[#bfa56a] placeholder:text-neutral-500"
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="px-6 py-3 bg-[#bfa56a] text-black font-semibold hover:bg-black hover:text-white transition-all rounded-none shadow-md"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}