'use client'
import "./globals.css";
import Footer from "@/app/footer/page";
import Navbar from "@/app/nav/page";
import { ThemeProvider } from "next-themes"

function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html>
      <body>
        <ThemeProvider attribute="class">
        <div className='w-full h-full bg-inherit bg-fixed bg-cover bg-bg-custom-mobile dark:bg-bg-custom-mobile-dark sm:bg-bg-custom sm:dark:bg-bg-custom-dark'>
          <Navbar />
          {children}
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
