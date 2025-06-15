import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";
const inter=Inter({subsets:["latin"]});
export const metadata: Metadata = {
  title: "Herish Kumar -Portfolio",
  description: "Herish Kumar is a passionate Full Stack Developer specializing in building scalable, high-performance web applications using Next.js, Node.js, and modern technologies. Explore projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased dark  `} 
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
