"use client"

import { Button } from "@medusajs/ui"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br from-red-900/80 via-amber-800/90 to-orange-700/85 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 tracking-tight text-balance">
            Handcrafted. Healthy.
            <br />
            Customizable.
          </h2>
          <p className="text-xl font-light mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
            From Nokshi Pitha to luxury date chocolates, our mission is to blend
            heritage with health, indulgence with well-being — always with your
            customization at heart.
          </p>
          <Link href={"/store"}>
            <Button
              size="large"
              className="bg-white text-amber-800 hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-medium transition-all duration-200 shadow-lg"
            >
              Start Your Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
