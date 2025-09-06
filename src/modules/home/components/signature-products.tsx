"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

interface Ingredient {
  name: string
  fixed: boolean
}

interface Product {
  id: string
  title: string
  description: string
  image: string
  alt: string
  ingredients: Ingredient[]
  tags: string[]
  benefits: string[]
}

export default function SignatureProducts() {
  const products: Product[] = [
    {
      id: "nokshi",
      title: "Nokshi Pitha",
      description:
        "A taste of heritage — Handmade with village-pounded rice flour and infused with pure khejur gur, fried golden in natural soybean oil, and spiced with cardamom & cinnamon. A guilt-free way to enjoy the timeless sweetness of Bengal.",
      image: "/traditional-bengali-pitha-golden-fried.jpeg",
      alt: "Traditional Bengali Nokshi Pitha",
      ingredients: [
        { name: "Rice flour (Dheki-pounded)", fixed: true },
        { name: "Date molasses (Khejur Gur)", fixed: true },
        { name: "Garam masala blend", fixed: false },
        { name: "Soybean oil", fixed: false },
      ],
      tags: ["Family treats", "Celebrations", "Tea-time snacks"],
      benefits: [
        "Rice flour provides natural energy.",
        "Date molasses is rich in iron, potassium, and antioxidants, supporting blood health and immunity.",
        "Spices (cardamom, cinnamon, clove, bayleaf) aid in digestion and add warmth.",
        "Fried in natural oil to keep it light and golden.",
      ],
    },
    {
      id: "brain-bars",
      title: "Brain Food Bars",
      description:
        "Fuel your focus — Packed with fiber-rich oats, omega-loaded seeds, protein-filled nuts, and antioxidant-rich dark chocolate, these bars are carefully crafted to keep you going strong. The blend of ghee and butter adds warmth & depth, while fresh coconut brings a tropical finish.",
      image: "/healthy-energy-bar-with-nuts-and-seeds.jpg",
      alt: "Healthy Brain Food Energy Bars",
      ingredients: [
        { name: "Dates", fixed: true },
        { name: "Dark chocolate", fixed: true },
        { name: "Oats (ghee-fried)", fixed: false },
        { name: "Kataifi pastry", fixed: false },
        { name: "Fresh coconut", fixed: false },
        { name: "Pistachio", fixed: false },
        { name: "Cashew", fixed: false },
        { name: "Walnut", fixed: false },
        { name: "Peanut", fixed: false },
        { name: "Almond", fixed: false },
        { name: "Pumpkin seeds", fixed: false },
        { name: "Sunflower seeds", fixed: false },
        { name: "Chia seeds (white & black)", fixed: false },
        { name: "Flax seeds", fixed: false },
        { name: "Sesame seeds (white)", fixed: false },
      ],
      tags: [
        "Post-gym recovery",
        "Study focus",
        "Quick snack",
        "Energy boost anytime",
      ],
      benefits: [
        "Dates: natural energy + iron & magnesium for stamina.",
        "Oats: rich in fiber for steady energy release.",
        "Nuts (almonds, walnuts, pistachios, cashews): packed with protein, omega-3s, and vitamin E for brain and muscle health.",
        "Seeds (chia, flax, sesame, pumpkin, sunflower): tiny powerhouses of calcium, zinc, and healthy fats.",
        "Dark chocolate: loaded with antioxidants that improve mood and concentration.",
        "Fresh coconut: adds natural electrolytes and minerals.",
      ],
    },
    {
      id: "dubai-dates",
      title: "Dubai Chocolate Dates",
      description:
        "Luxury meets wellness — Inspired by Dubai's finest treats, these stuffed dates combine oats & kataifi crunch, nut-seed richness, and a velvety dark chocolate shell. Each bite is indulgent yet nourishing, perfect for dessert lovers who care about health.",
      image: "/premium-chocolate-dates-with-coconut-filling.jpeg",
      alt: "Premium Dubai Style Chocolate Dates",
      ingredients: [
        { name: "Premium Saudi dates", fixed: true },
        { name: "Dark chocolate coating", fixed: true },
        { name: "Oats (ghee-fried)", fixed: false },
        { name: "Kataifi pastry", fixed: false },
        { name: "Pistachio", fixed: false },
        { name: "Cashew", fixed: false },
        { name: "Walnut", fixed: false },
        { name: "Peanut", fixed: false },
        { name: "Almond", fixed: false },
        { name: "Pumpkin seeds", fixed: false },
        { name: "Sunflower seeds", fixed: false },
        { name: "Chia seeds (white & black)", fixed: false },
        { name: "Flax seeds", fixed: false },
        { name: "Sesame seeds (white)", fixed: false },
      ],
      tags: [
        "Dessert after meals",
        "Pregnant women",
        "Kids",
        "Women on cycle",
        "Students",
      ],
      benefits: [
        "Dates: natural sweetness with iron, fiber, and potassium — supports blood health and digestion.",
        "Nuts & Seeds: provide calcium, magnesium, and healthy fats for strong bones and sustained energy.",
        "Oats & kataifi: add fiber and crunch while keeping it light.",
        "Dark chocolate: rich in antioxidants that boost mood and protect the heart.",
      ],
    },
  ]

  const [selectedIngredients, setSelectedIngredients] = useState<
    Record<string, string[]>
  >({
    nokshi: [],
    "brain-bars": [],
    "dubai-dates": [],
  })

  const toggleIngredient = (productKey: string, ingredient: string) => {
    setSelectedIngredients((prev) => ({
      ...prev,
      [productKey]: prev[productKey]?.includes(ingredient)
        ? prev[productKey].filter((item) => item !== ingredient)
        : [...(prev[productKey] || []), ingredient],
    }))
  }

  return (
    <section className="px-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight">
            Our Signature Creations
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            Discover our handcrafted collection of organic treats, each one
            fully customizable to your preferences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, productIndex) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: productIndex * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-amber-700 transition-all duration-500 rounded-3xl overflow-hidden h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 mb-6 font-light leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-medium text-black text-sm uppercase tracking-wide">
                      Customize Ingredients
                    </h4>
                    {product.ingredients.map((ingredient, index) => (
                      <motion.div
                        key={ingredient.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div
                          onClick={() =>
                            !ingredient.fixed &&
                            toggleIngredient(product.id, ingredient.name)
                          }
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors duration-200 ${
                            ingredient.fixed
                              ? "bg-amber-700 border-amber-700 cursor-not-allowed opacity-80"
                              : selectedIngredients[product.id]?.includes(
                                  ingredient.name
                                )
                              ? "bg-amber-700 border-amber-700 cursor-pointer"
                              : "border-gray-300 hover:border-amber-700 cursor-pointer"
                          }`}
                        >
                          {(ingredient.fixed ||
                            selectedIngredients[product.id]?.includes(
                              ingredient.name
                            )) && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <button
                          disabled={ingredient.fixed}
                          onClick={() =>
                            !ingredient.fixed &&
                            toggleIngredient(product.id, ingredient.name)
                          }
                          className={`text-left font-light transition-colors duration-200 ${
                            ingredient.fixed
                              ? "text-black cursor-not-allowed"
                              : "text-gray-700 hover:text-black cursor-pointer"
                          }`}
                        >
                          {ingredient.name} {ingredient.fixed && "(essential)"}
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-4 mb-6">
                    <h4 className="font-medium text-black mb-2 text-sm">
                      Perfect For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
                    <h4 className="font-medium text-amber-900 mb-3 text-sm uppercase tracking-wide">
                      Nutritional Benefits
                    </h4>
                    <div className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <p
                          key={index}
                          className="text-sm text-amber-800 leading-relaxed"
                        >
                          • {benefit}
                        </p>
                      ))}
                    </div>
                  </div>

                  <Link href="/store">
                    <button className="w-full bg-amber-700 hover:bg-amber-800 text-white rounded-full py-3 font-medium transition-all duration-200 shadow-lg">
                      Customize & Order
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 font-light italic max-w-2xl mx-auto">
            Every ingredient is optional except the essentials that define each
            recipe's authentic character. Fully customizable for allergies,
            dietary preferences, or personal taste.
          </p>
        </div>
      </div>
    </section>
  )
}
