import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pillars from "@/components/Pillars";
import Courses from "@/components/Courses";
import Enrollment from "@/components/Enrollment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Pillars />
        <Courses />
        <Enrollment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
