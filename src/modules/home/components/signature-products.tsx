"use client"

import { motion } from "framer-motion"

const products = [
  {
    title: "Narshingdi Nokshi Pitha",
    description:
      "Traditional Bengali delicacy with light golden fry, made from heritage recipes passed down through generations.",
    image: "/traditional-bengali-pitha-golden-fried.jpeg",
  },
  {
    title: "Brain Food Bars",
    description:
      "Soft brownie-style texture packed with nuts, seeds, and natural energy boosters for focus and vitality.",
    image: "/healthy-energy-bar-with-nuts-and-seeds.jpg",
  },
  {
    title: "Dubai Chocolate Dates",
    description:
      "Luxury dessert experience with fresh coconut filling, inspired by Middle Eastern traditions.",
    image: "/premium-chocolate-dates-with-coconut-filling.jpeg",
  },
]

export default function SignatureProducts() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Signature Creations
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="transition-transform duration-300"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-stone-700 text-pretty">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
