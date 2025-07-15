import Image from "next/image"
import backgroundImage from "@/assets/bg.png"
import HeroSection from "@/components/home/HeroSection"
import TechStack from "@/components/home/TechStack"
import About from "@/components/about/About"
import Projects from "@/components/projects/Projects"
import Contact from "@/components/contact/Contact"

export default function Home() {
  return (
    <>
      <Image
        src={backgroundImage}
        alt="background image"
        className="fixed top-0 left-0 w-screen h-screen object-cover object-left-top -z-50"
      />
      <div className="absolute inset-0 -z-10">
        {/* Bacldrop */}
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-45 -z-5"></div>
        {/* Circular blur */}
        <div
          className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm bg-black/30 pointer-events-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at 25% 50%, transparent 80px, black 700px)",
            maskImage:
              "radial-gradient(circle at 25% 50%, transparent 80px, black 700px)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </div>
      <main className="relative w-full h-screen flex flex-col px-4 md:px-10">
        <section
          id="home"
          className="py-5 md:py-10 flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-y-4 h-full"
        >
          {/* Left Info */}
          <HeroSection />

          {/* Right tech stack */}
          <TechStack />
        </section>
        <section
          id="about"
          className="py-5 md:py-10 flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-y-4 h-[300vh]"
        >
          <About />
        </section>
        <section
          id="projects"
          className="py-5 md:py-10 flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-y-4 mx-auto w-full"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="py-5 md:py-10 flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-y-4 mx-auto w-full"
        >
          <Contact />
        </section>
      </main>
    </>
  )
}
