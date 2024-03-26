'use client';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
       <NavBar />
        {children}
       <Footer />
      </NextThemesProvider>
    </NextUIProvider>
  )
}