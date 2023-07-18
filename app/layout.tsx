import "./globals.css";
import Footer from "@/app/footer/page";
import Navbar from "@/app/nav/page";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className='bg-fixed bg-inherit bg-cover bg-bg-custom'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
