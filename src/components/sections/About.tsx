import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { StrategyIllustration } from "@/components/ui/illustrations"

const highlights = [
  "Strategic Technology Integration",
  "High-Performance Infrastructure",
  "Adaptive Security Frameworks",
  "Global Scale & Local Expertise",
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-border/20">
               <div className="w-full aspect-[4/5] bg-slate-50 dark:bg-slate-950 flex items-center justify-center relative p-8">
                  <StrategyIllustration />
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                     <div className="h-px w-12 bg-accent mx-auto mb-4" />
                     <h3 className="text-xl font-bold text-primary tracking-tight">Strategy-First Approach</h3>
                  </div>
               </div>
            </div>
            {/* Balanced geometric accent */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>

          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-accent font-bold tracking-widest uppercase text-sm">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
                Driving the Nexus of <span className="text-accent">Strategy & Technology</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the principle of seamless integration, AZM Nexus has evolved into a global leader in technological orchestration. We don't just provide services; we architect the digital future of our partners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="font-semibold text-primary/80">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-6 py-2">
              "In a world of fragmented data and disconnected systems, our mission is to create the nexus where all components of an enterprise thrive in unison."
            </p>

            <div className="flex pt-4">
              <Button size="lg" className="rounded-full px-8 font-semibold">
                Learn More About Our Vision
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
