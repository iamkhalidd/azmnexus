"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "Solutions", href: "#solutions" },
  { title: "About", href: "#about" },
  { title: "Process", href: "#process" },
  { title: "Capabilities", href: "#capabilities" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/images/logo.png"
              alt="AZM Nexus Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-primary">AZM NEXUS</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/10 transition-colors font-medium")}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden lg:inline-flex">Login</Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">Get Started</Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            } />
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-border/40">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-8 mt-16 px-6">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/assets/images/logo.png"
                    alt="AZM Nexus Logo"
                    width={40}
                    height={40}
                  />
                  <span className="text-xl font-bold tracking-tight text-primary">AZM NEXUS</span>
                </Link>
                <nav className="flex flex-col gap-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-xl font-medium hover:text-accent transition-colors py-2 border-b border-border/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-6 mt-8">
                  <Button variant="outline" className="w-full h-12 text-lg">Login</Button>
                  <Button className="w-full h-12 text-lg bg-primary text-primary-foreground">Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
