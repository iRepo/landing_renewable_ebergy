"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo optimizada */}
      <Image
        src="/hero-image.jpg"
        alt="Paisaje de energía renovable con turbinas eólicas"
        fill
        className="object-cover"
        quality={100}
        priority
      />

      {/* Overlay con gradiente para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

      {/* Contenido centrado */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        className="relative z-10 text-center text-white px-4"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Clean Energy for a Brighter Tomorrow
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Join the movement towards a greener, more sustainable world.
        </motion.p>

        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Desplázate a la sección de servicios"
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </section>
  )
}
