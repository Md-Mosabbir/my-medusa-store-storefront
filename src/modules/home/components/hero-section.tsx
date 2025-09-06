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
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
            Handmade. Organic.
            <br />
            100% Customizable.
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-light mb-12">
            At NUFATAH'S, every product is crafted with love, tradition, and
            health in mind. The best part? You can customize ingredients to fit
            your taste, diet, or allergies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href={"/store"}>
                <Button
                  size="large"
                  className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 shadow-xl"
                >
                  Explore Customizable Sweets
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
