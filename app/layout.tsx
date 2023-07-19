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
        <div className='w-full h-full bg-inherit bg-fixed bg-cover bg-bg-custom dark:bg-bg-custom-dask'>
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
