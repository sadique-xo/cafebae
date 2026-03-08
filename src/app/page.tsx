import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { OurBrands } from "@/components/OurBrands";
import { Testimonials } from "@/components/Testimonials";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <OurBrands />
        <InstagramFeed />
        <Testimonials />
        <Location />
        <Footer />
      </main>
    </>
  );
}
