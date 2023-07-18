"use client";
import Navbar from "@/app/nav/page";
import Content from "@/app/content/page";
import Footer from "@/app/footer/page";

function Home() {
  return (
    <div className="bg-cover bg-my-custom-bg-class bg-no-repeat">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
