import {
  Cloud,
  ShieldCheck,
  Cpu,
  BarChart3,
  Network,
  Globe2,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Digital Infrastructure",
    description: "Architecting robust, scalable, and future-proof digital foundations for modern enterprises.",
    icon: Network,
    category: "Infrastructure",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Cyber Resilience",
    description: "Advanced security frameworks designed to protect critical assets in an era of evolving threats.",
    icon: ShieldCheck,
    category: "Security",
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Cloud Orchestration",
    description: "Seamless migration and management of multi-cloud environments for maximum efficiency.",
    icon: Cloud,
    category: "Cloud",
    color: "bg-cyan-500/10 text-cyan-500"
  },
  {
    title: "Strategic Analytics",
    description: "Transforming raw data into actionable intelligence through high-performance computing.",
    icon: BarChart3,
    category: "Intelligence",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Hardware Engineering",
    description: "Custom-built technical hardware solutions optimized for specific industrial needs.",
    icon: Cpu,
    category: "Hardware",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Global Connectivity",
    description: "Interconnecting international branches with low-latency, high-bandwidth private networks.",
    icon: Globe2,
    category: "Connectivity",
    color: "bg-indigo-500/10 text-indigo-500"
  }
]

export function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <Badge variant="outline" className="border-accent/30 text-accent font-semibold px-4 py-1">Our Solutions</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Comprehensive Enterprise <span className="text-accent">Orchestration</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide a spectrum of premium services designed to address the most complex technological challenges of the modern age.
            </p>
          </div>
          <button className="flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors pb-2 border-b-2 border-accent/20 hover:border-accent">
            View All Services <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border/40 bg-background hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`h-14 w-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <Badge variant="secondary" className="w-fit mb-3 bg-muted/50 text-muted-foreground font-medium">{service.category}</Badge>
                <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="mt-8 pt-6 border-t border-border/10 flex items-center justify-between">
                   <span className="text-sm font-bold uppercase tracking-wider text-primary/60">Explore Details</span>
                   <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <ArrowRight className="h-4 w-4" />
                   </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
