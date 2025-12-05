"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { InquiryModal } from "./inquiry-modal"

export default function Hero() {
  const [inquiryOpen, setInquiryOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />

        <div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Founded 2025 • Western Mindanao State University
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-pretty">
            Guide Your Business{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Into the Future
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Transform from digital uncertainty into a confident technological leader. We build secure, reliable software
            solutions that illuminate your path forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => setInquiryOpen(true)}
              className="bg-primary hover:bg-foreground text-primary-foreground hover:text-primary px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-base font-semibold border-foreground/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <InquiryModal open={inquiryOpen} onOpenChange={setInquiryOpen} type="journey" />
    </>
  )
}
