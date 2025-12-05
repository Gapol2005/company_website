"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface InquiryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  type?: "project" | "call" | "journey"
}

export function InquiryModal({ open, onOpenChange, type = "project" }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const getTitle = () => {
    switch (type) {
      case "call":
        return "Schedule a Call"
      case "journey":
        return "Start Your Journey"
      default:
        return "Start Your Project"
    }
  }

  const getDescription = () => {
    switch (type) {
      case "call":
        return "Let's discuss how we can help your business thrive. Schedule a meeting with our team."
      case "journey":
        return "Tell us about your vision and let's explore how Starcode can help you achieve it."
      default:
        return "Share your project details and we'll get back to you with a custom proposal."
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("[v0] Form submitted:", formData)

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            projectType: "",
            budget: "",
            timeline: "",
            message: "",
          })
          setSubmitted(false)
          onOpenChange(false)
        }, 2000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">{getTitle()}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{getDescription()}</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 bg-primary rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
            <p className="text-center text-muted-foreground">
              We've received your inquiry and will get back to you shortly at {formData.email}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="border-foreground/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="border-foreground/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+63 967 092 2527"
                  className="border-foreground/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground font-semibold">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company"
                  className="border-foreground/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <Label htmlFor="projectType" className="text-foreground font-semibold">
                  Project Type
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => handleSelectChange("projectType", value)}
                >
                  <SelectTrigger className="border-foreground/20">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-app">Web Application</SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="cloud-solution">Cloud Solution</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-foreground font-semibold">
                  Budget Range
                </Label>
                <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                  <SelectTrigger className="border-foreground/20">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-10k">Under ₱10,000</SelectItem>
                    <SelectItem value="10k-50k">₱10,000 - ₱50,000</SelectItem>
                    <SelectItem value="50k-100k">₱50,000 - ₱100,000</SelectItem>
                    <SelectItem value="100k-500k">₱100,000 - ₱500,000</SelectItem>
                    <SelectItem value="500k-plus">₱500,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Timeline */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="timeline" className="text-foreground font-semibold">
                  Project Timeline
                </Label>
                <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                  <SelectTrigger className="border-foreground/20">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (ASAP)</SelectItem>
                    <SelectItem value="1-month">Within 1 Month</SelectItem>
                    <SelectItem value="2-3-months">2-3 Months</SelectItem>
                    <SelectItem value="3-6-months">3-6 Months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-semibold">
                Tell us about your project *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Share your vision, requirements, or any specific details about your project..."
                required
                rows={5}
                className="border-foreground/20 focus:border-primary transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Submit Inquiry
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              We'll review your inquiry and respond within 24-48 hours.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
