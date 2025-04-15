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
          
        </div>
      </footer>
    </main>
  )
}