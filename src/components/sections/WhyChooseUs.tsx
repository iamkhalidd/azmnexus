import { Award, Zap, Users, ShieldCheck } from "lucide-react"

const reasons = [
  {
    title: "Unmatched Reliability",
    description: "99.99% uptime guaranteed across all our infrastructure and managed services.",
    icon: Zap,
  },
  {
    title: "Elite Expertise",
    description: "Our team consists of industry veterans with decades of experience in complex systems.",
    icon: Award,
  },
  {
    title: "Security First",
    description: "Integrated security protocols that exceed industry standards for data protection.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Centric",
    description: "We build long-term partnerships, not just vendor-client relationships.",
    icon: Users,
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-bold tracking-widest uppercase text-sm">The AZM Advantage</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Why Industry Leaders Choose <span className="text-accent">AZM Nexus</span>
              </h2>
              <p className="text-xl text-primary-foreground/70 leading-relaxed max-w-xl">
                We combine technical precision with strategic foresight to deliver outcomes that drive real business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-primary-foreground/60 leading-relaxed text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-8 md:p-12">
                <div className="space-y-8">
                   <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <h4 className="text-2xl font-bold">Performance Matrix</h4>
                      <span className="text-accent font-mono">2024 Report</span>
                   </div>

                   <div className="space-y-6">
                      {[
                        { label: "Operational Efficiency", val: 94 },
                        { label: "Cost Reduction", val: 32 },
                        { label: "System Response Time", val: 99 },
                        { label: "Client Satisfaction", val: 98 }
                      ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex justify-between text-sm">
                              <span className="opacity-70">{stat.label}</span>
                              <span className="font-bold">{stat.val}%</span>
                           </div>
                           <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                              <div
                                 className="h-full bg-accent rounded-full"
                                 style={{ width: `${stat.val}%` }}
                              />
                           </div>
                        </div>
                      ))}
                   </div>

                   <div className="pt-4 flex items-center gap-4">
                      <div className="h-3 w-3 rounded-full bg-accent animate-pulse" />
                      <p className="text-sm opacity-60 italic text-white">Live data streaming from global nexus points</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
