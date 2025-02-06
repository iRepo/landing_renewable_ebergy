"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Emily Carter",
    position: "CEO, SolarTech Solutions",
    quote:
      "Switching to renewable energy with this company was the best decision we made. Our carbon footprint has significantly decreased, and our energy bills are lower than ever!",
  },
  {
    name: "Mark Robinson",
    position: "Director, WindPower Corp",
    quote:
      "Their wind energy solutions have helped us achieve our sustainability goals. The team was professional and delivered beyond our expectations!",
  },
  {
    name: "Sophia Martinez",
    position: "Operations Manager, Green Innovations",
    quote:
      "Thanks to their energy optimization strategies, we’ve cut operational costs by 30%. Highly recommend their expertise!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have successfully transitioned to
            renewable energy with our help.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <p className="text-gray-600 italic mb-4">“{testimonial.quote}”</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
