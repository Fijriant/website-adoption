import dynamic from "next/dynamic";

// Mengimpor komponen Hero dengan ssr: false
const Hero = dynamic(() => import("./components/hero"), { ssr: false });
const About = dynamic(() => import("./components/about"), { ssr: false });
const Project = dynamic(() => import("./components/project"), { ssr: false });
const Partner = dynamic(() => import("./components/partner"), { ssr: false });
const Footer = dynamic(() => import("./components/footer"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Partner />
      <Footer />
    </div>
  );
}
