import "./globals.css";
import Footer from "@/app/footer/page";
import Navbar from "@/app/nav/page";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className='bg-fixed bg-cover bg-bg-custom'>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
