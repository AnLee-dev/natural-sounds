import "./globals.css";
import Footer from "@/app/footer/page";
import Navbar from "@/app/nav/page";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className='w-screen h-screen bg-fixed bg-cover bg-bg-custom'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
