import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"

const Exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Animinna",
    default: "Animinna",
  },
  description: "Animation Recommendation Site Made by NextJS 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Exo2.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
