"use client";

export default function Footer() {
  return (
    <footer className="bg-white/90 shadow-inner py-10 mt-16">
      <div className="max-w-[1400px] mx-auto px-6 text-center text-neutral-700">
        <p>© {new Date().getFullYear()} EQNX. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-[#bfa56a] transition-colors">Facebook</a>
          <a href="#" className="hover:text-[#bfa56a] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#bfa56a] transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
}