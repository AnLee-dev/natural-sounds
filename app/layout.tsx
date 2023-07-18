import "./globals.css";
import Footer from "@/app/footer/page";
import Navbar from "@/app/nav/page";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-fixed bg-cover bg-my-custom-bg-class bg-no-repea'>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
