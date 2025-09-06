"use client"

import { motion } from "framer-motion"

const benefits = [
  "Energy boost after workouts",
  "Focus during study sessions",
  "Comfort food during cycle days",
  "Healthy dessert after meals",
  "Wholesome snack for kids & families",
]

export default function CustomerBenefits() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Nourishment for Every Moment
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                <span className="text-stone-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
