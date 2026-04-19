import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Cpu, Globe, Lock, Server } from "lucide-react"

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-accent border-accent/30 font-semibold px-4 py-1">Global Capabilities</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Technical <span className="text-accent">Excellence</span> at Scale</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Our technological stack is built on the pillars of performance, security, and global reach.
          </p>
        </div>

        <Tabs defaultValue="infrastructure" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted p-1 rounded-full h-14 w-fit border border-border/40">
              <TabsTrigger value="infrastructure" className="rounded-full px-8 h-full data-[state=active]:bg-primary data-[state=active]:text-white font-semibold">Infrastructure</TabsTrigger>
              <TabsTrigger value="security" className="rounded-full px-8 h-full data-[state=active]:bg-primary data-[state=active]:text-white font-semibold">Security</TabsTrigger>
              <TabsTrigger value="intelligence" className="rounded-full px-8 h-full data-[state=active]:bg-primary data-[state=active]:text-white font-semibold">Intelligence</TabsTrigger>
              <TabsTrigger value="connectivity" className="rounded-full px-8 h-full data-[state=active]:bg-primary data-[state=active]:text-white font-semibold">Connectivity</TabsTrigger>
            </TabsList>
          </div>

          <div className="bg-muted/30 rounded-[2.5rem] p-8 md:p-16 border border-border/40 min-h-[400px]">
            <TabsContent value="infrastructure" className="mt-0 focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary text-white flex items-center justify-center">
                    <Server className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Next-Gen Distributed Infrastructure</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our proprietary infrastructure mesh provides zero-latency response times for high-frequency operations. Built with redundancy at every layer.
                  </p>
                  <ul className="space-y-4">
                    {["Edge computing integration", "Multi-region redundancy", "Automated load balancing"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-semibold text-primary/80">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 aspect-video flex items-center justify-center">
                   <div className="grid grid-cols-3 gap-4 w-full h-full opacity-30">
                      {Array.from({length: 12}).map((_, i) => (
                        <div key={i} className="bg-primary/20 rounded-lg animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                   </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-0 focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary text-white flex items-center justify-center">
                    <Lock className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Fortified Security Frameworks</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Security is not an afterthought; it's woven into every line of code and every piece of hardware we deploy.
                  </p>
                  <ul className="space-y-4">
                    {["Zero-trust architecture", "End-to-end encryption", "Real-time threat detection"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-semibold text-primary/80">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-emerald-500/5 rounded-3xl p-8 border border-emerald-500/10 aspect-video flex items-center justify-center">
                    <Lock className="h-24 w-24 text-emerald-500/20" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="intelligence" className="mt-0 focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary text-white flex items-center justify-center">
                    <Cpu className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Strategic AI & Intelligence</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Transforming massive datasets into predictive insights that allow our partners to anticipate market shifts before they happen.
                  </p>
                  <ul className="space-y-4">
                    {["Predictive modeling", "Natural language processing", "Automated decision systems"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-semibold text-primary/80">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-500/5 rounded-3xl p-8 border border-purple-500/10 aspect-video flex items-center justify-center">
                    <Cpu className="h-24 w-24 text-purple-500/20" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="connectivity" className="mt-0 focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary text-white flex items-center justify-center">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Seamless Global Connectivity</h3>
                  <p className="text-lg text-muted-relaxed">
                    Connecting global hubs with a private network that bypasses the bottlenecks of the public internet.
                  </p>
                  <ul className="space-y-4">
                    {["Low-latency private fiber", "Satellite mesh backup", "SD-WAN optimization"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-semibold text-primary/80">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cyan-500/5 rounded-3xl p-8 border border-cyan-500/10 aspect-video flex items-center justify-center">
                    <Globe className="h-24 w-24 text-cyan-500/20" />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
