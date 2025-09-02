"use client"

import { motion } from "framer-motion"
export default function Promises() {

  return (

    <section className="px-4 py-16 bg-stone-100/50">
      <div className="max-w-4xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-amber-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Crafted With Care, Inspired by Nature
          </motion.h2>
          <motion.p
            className="text-lg text-stone-700 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every NUFATAH'S creation honors traditional recipes while embracing modern wellness. We use only the
            finest organic ingredients, handpicked and prepared with love, to nourish your body and delight your
            senses.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
