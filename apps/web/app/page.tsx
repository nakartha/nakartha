'use client'

import React, { useState } from "react";
import {
  Github,
  ArrowRight,
  Wallet,
  Users,
  FolderSync as Sync,
  BarChart3,
  Shield,
  Star,
  Menu,
  X
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@workspace/ui/components/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                nakartha
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Button key={item.href} variant="ghost" asChild>
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
              <Button variant="outline" asChild>
                <a href="https://github.com/nakartha" className="flex items-center">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex items-center">
                        <Wallet className="h-8 w-8 text-primary" />
                        <span className="ml-2 text-xl font-bold">nakartha</span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                      <Button
                        key={item.href}
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                        onClick={() => setIsOpen(false)}
                      >
                        <a href={item.href}>{item.label}</a>
                      </Button>
                    ))}
                    <Button variant="outline" asChild className="w-full justify-start">
                      <a
                        href="https://github.com/nakartha"
                        className="flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Github className="h-5 w-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Effortless Expense Sharing & <br />
              Finance Tracking for Everyone
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Open-source solution for seamless expense management, perfect for
              roommates, trips, and group activities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-base">
                Start Managing Expenses for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a
                  href="https://github.com/nakartha"
                  className="inline-flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Powerful Features for Everyone
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wallet className="h-8 w-8 text-primary" />,
                title: "Bill Splitting",
                description:
                  "Split expenses fairly with smart calculation algorithms",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-primary" />,
                title: "Expense Tracking",
                description:
                  "Automated tracking and categorization of all transactions",
              },
              {
                icon: <Sync className="h-8 w-8 text-primary" />,
                title: "Real-time Sync",
                description:
                  "Instant updates across all devices and group members",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Group Management",
                description: "Create and manage multiple groups with ease",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  {feature.icon}
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create a Group",
                description:
                  "Start by creating a group and inviting your friends or roommates",
              },
              {
                step: "2",
                title: "Add Expenses",
                description:
                  "Log your expenses and let nakartha handle the calculations",
              },
              {
                step: "3",
                title: "Settle Up",
                description:
                  "Get detailed reports and settle up with minimal transactions",
              },
            ].map((step, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Product Manager",
                text: "nakartha has transformed how our team manages shared expenses. It's intuitive and reliable.",
              },
              {
                name: "David Chen",
                role: "Software Engineer",
                text: "As a developer, I appreciate the clean codebase and how easy it is to contribute to the project.",
              },
              {
                name: "Maria Garcia",
                role: "Student",
                text: "Perfect for managing expenses with my roommates. The real-time sync feature is a game-changer.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-primary"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "How secure is nakartha?",
                      answer:
                        "nakartha uses industry-standard encryption and security practices. Your data is encrypted both in transit and at rest.",
                    },
                    {
                      question: "What about privacy?",
                      answer:
                        "We take privacy seriously. Your financial data is never shared with third parties, and you have full control over your information.",
                    },
                    {
                      question: "How can I contribute to the project?",
                      answer:
                        "Check out our GitHub repository for contribution guidelines. We welcome both code and non-code contributions!",
                    },
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GitHub Contribution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-white p-8 md:p-12 text-center border-none shadow-xl">
            <CardContent className="p-0">
              <Shield className="h-12 w-12 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Join Our Open Source Community
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Help us make financial management accessible to everyone.
                Contribute to nakartha and be part of something meaningful.
              </p>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-primary"
              >
                <a
                  href="https://github.com/nakartha"
                  className="inline-flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Repository
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Wallet className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-white">
                nakartha
              </span>
            </div>
            <div className="flex space-x-6">
              <Button
                variant="link"
                asChild
                className="text-gray-300 hover:text-primary"
              >
                <a href="#features">Features</a>
              </Button>
              <Button
                variant="link"
                asChild
                className="text-gray-300 hover:text-primary"
              >
                <a href="#how-it-works">How It Works</a>
              </Button>
              <Button
                variant="link"
                asChild
                className="text-gray-300 hover:text-primary"
              >
                <a href="#testimonials">Testimonials</a>
              </Button>
              <Button
                variant="link"
                asChild
                className="text-gray-300 hover:text-primary"
              >
                <a href="#faq">FAQ</a>
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} nakartha. Open source finance
              management.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
