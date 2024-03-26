import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";



const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["200", "400", "700"]
});

export const metadata: Metadata = {
  title: "BlackBoys",
  description: "This is BlackBoys Studio Portfolio Website With Entertainment_hub,Blog, CV, Portfolio, About, Contact, Login, Register, Hub, Projects, and more with Next.js 14 and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={poppins.className} >
          <Providers>  
          <main>
            {children}
          </main>
        </Providers>
        </body>
      </html>
  );
}
