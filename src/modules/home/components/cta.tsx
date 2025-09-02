"use client"

import { Button } from "@medusajs/ui"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="px-4 py-20 bg-gradient-to-r from-amber-100 to-stone-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-balance">
            Taste the Difference of Pure, Handmade Goodness
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={"/store"}>
                <Button
                  size="large"
                  className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full transition-all duration-300"
                >
                  Shop Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
