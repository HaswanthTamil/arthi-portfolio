import Hero from "@/components/Hero"
import Philosophy from "@/components/Philosophy"
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
      </main>
    </>
  )
}
