import Image from "next/image";

import Navbar from "@/components/Navbar";

export default function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-[90%] md:w-[85%] xl:w-[80%] mx-auto">
      <Navbar />
      {children}
      {/* Footer Section */}
      <footer>
        <div>
          <Image 
            src="/images/Logo.png"
            alt="Logo"
            width={188}
            height={37}
          />
          <p>Your best Anime info site forever</p>
        </div>
        <div>
          <li>
            <p>ABOUT US</p>
            <ul>Company</ul>
            <ul>About us</ul>
            <ul>Philosophy</ul>
          </li>
          <li>
            <p>LINKS</p>
            <ul>Library</ul>
            <ul>News</ul>
          </li>
        </div>
      </footer>
    </main>
  )
}