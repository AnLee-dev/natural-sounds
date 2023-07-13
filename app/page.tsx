import Image from "next/image";
import Navbar from "@/app/nav/page";
import Content from "@/app/content/page";
import Footer from "@/app/footer/page";
import Pause from "@/app/content/pause/page";

export default function Home() {
  return (
    <div className="bg-cover bg-my-custom-bg-class bg-no-repeat">
      <Navbar />
      <Pause />
      <Content />
      <Footer />
    </div>
  );
}
