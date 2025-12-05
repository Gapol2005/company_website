import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-foreground/2">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Building Tomorrow's Solutions Today</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2025 by five passionate students from Western Mindanao State University's College of Computing
              Studies, Starcode represents innovation meets purpose. We believe every client deserves secure, reliable
              technology that empowers their growth.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our vision: to become the brightest constellation in software engineering, where each project becomes a
              guiding light for businesses navigating their digital transformation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border/50 p-4">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Founding Members</p>
              </Card>
              <Card className="bg-card border-border/50 p-4">
                <p className="text-3xl font-bold text-primary">2025</p>
                <p className="text-sm text-muted-foreground">Year Founded</p>
              </Card>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Image src="/professional-team-meeting-software.jpg" alt="Starcode Team" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
