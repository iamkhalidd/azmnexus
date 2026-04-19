
import { ShieldCheck } from "lucide-react"

export function Trust() {
  return (
    <section className="py-12 border-y border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Powering Qarevo Health
        </p>
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-4 bg-background/50 backdrop-blur-sm py-4 px-10 rounded-2xl border border-border/40 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
               <ShieldCheck className="h-6 w-6" />
            </div>
            <span className="text-3xl font-bold tracking-tighter text-primary italic">Qarevo Health</span>
          </div>
        </div>
      </div>
    </section>
  )
}
