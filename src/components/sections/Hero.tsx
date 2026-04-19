import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronRight, Play, ShieldCheck } from "lucide-react"
import { NexusIllustration } from "@/components/ui/illustrations"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 max-w-2xl">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
                Bridging Complexity with <span className="text-accent">Strategic Clarity</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                AZM Nexus delivers premium technology infrastructure and strategic consulting to empower global enterprises in an evolving digital landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 px-8 text-lg font-semibold group">
                Discover Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-semibold border-border/60 hover:bg-accent/5 hover:text-accent">
                <Play className="mr-2 h-4 w-4 fill-current" />
                Watch Overview
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-border/40 mt-4">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-bold text-primary italic">Qarevo Health</span>
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Image Container with balanced depth */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/20 aspect-square md:aspect-[4/3] lg:aspect-square">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
               <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden p-8">
                  <NexusIllustration />
               </div>
            </div>

            {/* Floating Card UI for visual depth */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-card p-4 md:p-6 rounded-2xl shadow-xl border border-border/60 flex items-center gap-4 animate-bounce-slow">
               <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <ChevronRight className="h-6 w-6" />
               </div>
               <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Growth Factor</p>
                  <p className="text-xl font-bold text-primary">+128% ROI</p>
               </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-primary p-4 md:p-6 rounded-2xl shadow-xl text-white flex flex-col gap-1">
               <p className="text-3xl font-bold">99.9%</p>
               <p className="text-xs opacity-70">Infrastructure Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
