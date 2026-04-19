import { Search, PenTool, Rocket, HeadphonesIcon } from "lucide-react"

const steps = [
  {
    title: "Discovery & Analysis",
    description: "We dive deep into your existing infrastructure and business goals to identify critical integration points.",
    icon: Search,
    number: "01"
  },
  {
    title: "Strategic Design",
    description: "Our architects draft a comprehensive blueprint tailored to your specific operational needs and scale.",
    icon: PenTool,
    number: "02"
  },
  {
    title: "Precision Deployment",
    description: "Systematic implementation with minimal disruption, ensuring all nexus points are perfectly aligned.",
    icon: Rocket,
    number: "03"
  },
  {
    title: "Continuous Optimization",
    description: "Ongoing management and proactive enhancements to keep your systems at peak performance.",
    icon: HeadphonesIcon,
    number: "04"
  }
]

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-accent font-bold tracking-widest uppercase text-sm">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">The AZM <span className="text-accent">Methodology</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A structured, four-phase approach to ensuring excellence in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border/60 to-transparent -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                <div className="h-20 w-20 rounded-full bg-background border-2 border-border/40 flex items-center justify-center relative z-10 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                  <step.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-accent text-white font-bold flex items-center justify-center shadow-lg border-4 border-background z-20">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
