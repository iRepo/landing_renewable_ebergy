"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaBolt } from "react-icons/fa"

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Join the Green Revolution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Be part of the sustainable future. Let's power change together.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-green-800 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center mx-auto shadow-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <FaBolt className="mr-2" />
          Get Started Now
        </motion.button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              Fill in your details and we’ll get back to you shortly.
            </p>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded mb-2"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border rounded mb-2"
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-2 hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
