import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Code, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Security First",
    description: "Your data stays protected. We prioritize security in every solution we build.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Performance-optimized solutions that keep your business running smoothly.",
  },
  {
    icon: Code,
    title: "Custom Built",
    description: "Tailored software solutions designed specifically for your unique challenges.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We work alongside you every step of the way to ensure success.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-foreground/2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose Starcode</h2>
          <p className="text-lg text-muted-foreground">We transform uncertainty into success with proven expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <feature.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
