import "./globals.css";
import Footer from "@/app/footer/page";
import Navbar from "@/app/nav/page";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className='w-full h-full bg-inherit bg-fixed bg-cover bg-bg-custom'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
