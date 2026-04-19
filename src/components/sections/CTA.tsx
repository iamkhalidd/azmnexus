import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative bg-primary rounded-[3rem] overflow-hidden p-8 md:p-20 shadow-2xl">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/4" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Ready to Build Your <span className="text-accent">Enterprise Nexus?</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Join the ranks of global leaders who have transformed their digital infrastructure with AZM Nexus. Let&apos;s architect your future together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-16 px-10 text-xl font-bold group">
                Get Started Today
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full h-16 px-10 text-xl font-bold">
                <Mail className="mr-2 h-6 w-6" />
                Contact Sales
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/50 font-medium uppercase tracking-widest">
              No Commitment Required • Strategy Consultation Included
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
