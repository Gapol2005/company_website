"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { InquiryModal } from "./inquiry-modal"

export default function CTA() {
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  const [callModalOpen, setCallModalOpen] = useState(false)

  return (
    <>
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 -z-10 rounded-2xl" />

          <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Transform Your Business?</h2>

          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Let's turn your digital uncertainty into confidence. Get started with Starcode today and become part of our
            constellation of success stories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => setProjectModalOpen(true)}
              className="bg-primary hover:bg-foreground text-primary-foreground hover:text-primary px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => setCallModalOpen(true)}
              className="px-8 py-6 text-base font-semibold border-foreground/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent rounded-lg"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <InquiryModal open={projectModalOpen} onOpenChange={setProjectModalOpen} type="project" />
      <InquiryModal open={callModalOpen} onOpenChange={setCallModalOpen} type="call" />
    </>
  )
}
