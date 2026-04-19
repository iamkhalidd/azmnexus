import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-md">
                <Image
                  src="/assets/images/logo.png"
                  alt="AZM Nexus Logo"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">AZM NEXUS</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed max-w-xs">
              Empowering global enterprises with strategic technology solutions and digital infrastructure for a connected future.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#solutions" className="text-primary-foreground/70 hover:text-white transition-colors">Our Solutions</Link>
              <Link href="#about" className="text-primary-foreground/70 hover:text-white transition-colors">About AZM Nexus</Link>
              <Link href="#process" className="text-primary-foreground/70 hover:text-white transition-colors">Our Methodology</Link>
              <Link href="#capabilities" className="text-primary-foreground/70 hover:text-white transition-colors">Global Capabilities</Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-white transition-colors">Careers</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="h-5 w-5 text-accent" />
                <span>+234 (901) 557-1955</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="h-5 w-5 text-accent" />
                <span>azmnexuslimited@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-primary-foreground/70">Subscribe to our newsletter for the latest industry insights.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium hover:bg-accent/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} AZM Nexus. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
