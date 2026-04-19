import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Trust } from "@/components/sections/Trust"
import { About } from "@/components/sections/About"
import { Solutions } from "@/components/sections/Solutions"
import { Process } from "@/components/sections/Process"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Capabilities } from "@/components/sections/Capabilities"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Trust />
        <About />
        <Solutions />
        <WhyChooseUs />
        <Process />
        <Capabilities />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
