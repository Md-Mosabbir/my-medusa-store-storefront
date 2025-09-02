"use client"

import { Button } from "@medusajs/ui"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-screen md:h-[100vh] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70"></div>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover mix-blend-overlay"
        >
          <source src="/bg-vid.mp4" type="video/mp4" />
        </video>

        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-amber-50 mb-6 text-balance drop-shadow-lg">
            Handcrafted Organic Treats for Body, Mind & Soul
          </h1>
          <p className="text-lg md:text-xl text-amber-100/90 mb-8 max-w-3xl mx-auto text-pretty drop-shadow-md">
            From Narshingdi Nokshi Pitha to Brain Food Bars and Dubai Chocolate
            Dates — handmade with pure, natural ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/store"}>
              <Button
                size="large"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Explore Our Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
