"use client"

import { motion } from "framer-motion"

const features = [
  {
    icon: "🌿",
    title: "Organic & Natural",
    description:
      "Only clean, pure ingredients sourced from trusted organic farms.",
  },
  {
    icon: "✋",
    title: "Handmade with Love",
    description:
      "Every batch shaped and packed by caring hands with attention to detail.",
  },
  {
    icon: "💪",
    title: "Designed for Wellness",
    description:
      "Energy, focus, balance, and tradition combined in every bite.",
  },
]

export default function WhyChooseNufatahs() {
  return (
    <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose NUFATAH'S
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-700 text-pretty">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
