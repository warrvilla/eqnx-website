"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `transition duration-300 ${
      pathname === path
        ? "text-[#bfa56a] font-medium"
        : "text-black/80 hover:text-[#bfa56a]"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#d7d4cd]/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl tracking-widest text-black hover:text-[#bfa56a] transition">
            EQNX
          </h1>
        </Link>

        {/* Navigation */}
        <div className="flex gap-10 text-[15px] tracking-wide">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link href="/shop" className={linkStyle("/shop")}>
            Shop
          </Link>

          <Link href="/contact" className={linkStyle("/contact")}>
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}