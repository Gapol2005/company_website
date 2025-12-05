import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur border-b border-border/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-primary animate-fade-in"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <polygon points="50,10 61,40 93,40 68,60 79,90 50,70 21,90 32,60 7,40 39,40" />
              <text
                x="50"
                y="55"
                textAnchor="middle"
                fontSize="20"
                fill="currentColor"
                fontWeight="bold"
                className="font-mono"
              >
                &lt;/&gt;
              </text>
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground">Starcode</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Solutions
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg">
          Get Started
        </Button>
      </div>
    </header>
  )
}
