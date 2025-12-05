import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    title: "Custom Software Development",
    description: "Bespoke solutions built from the ground up to solve your specific business challenges.",
    image: "/custom-software-development-tech.jpg",
  },
  {
    title: "Secure Infrastructure",
    description: "Enterprise-grade security measures to protect your data and ensure peace of mind.",
    image: "/cybersecurity-infrastructure.jpg",
  },
  {
    title: "Digital Transformation",
    description: "Guide your legacy systems into the modern era with our transformation expertise.",
    image: "/digital-transformation-business.png",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground">Comprehensive solutions for your digital journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
