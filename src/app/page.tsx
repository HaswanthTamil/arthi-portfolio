import Hero from "@/components/Hero"
import Philosophy from "@/components/Philosophy"
import Posters from "@/components/Posters"
import Posts from "@/components/Posts"
import Services from "@/components/Services"
import Works from "@/components/Works"

export default function Home() {
  return (
    <>
      <main className="bg-black dark:bg-black text-white dark:text-white">
        <section id="hero">
          <Hero />
        </section>
        <section id="philosophy">
          <Philosophy />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="posts">
          <Posts />
        </section>
        <section id="posters">
          <Posters />
        </section>
        <section id="services">
          <Services />
        </section>
      </main>
    </>
  )
}
