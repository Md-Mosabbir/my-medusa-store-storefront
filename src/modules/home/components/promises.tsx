"use client"

import { motion } from "framer-motion"
import { Button } from "@medusajs/ui"

export default function Promises() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-8 tracking-tight">
            Your Sweet, Your Way
          </h2>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-12 max-w-4xl mx-auto shadow-lg">
            <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
              At NUFATAH'S, no two people are the same — why should food be?
              Every product is fully customizable. If you're allergic to nuts,
              seeds, or spices, you can simply uncheck ingredients and make your
              own version.
            </p>
            <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
              Some core ingredients are fixed because they define the soul of
              the recipe, but the rest is up to you.
            </p>
            <p className="text-xl text-black font-medium mb-10">
              Choose your taste, protect your health, and enjoy sweets made for
              you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
