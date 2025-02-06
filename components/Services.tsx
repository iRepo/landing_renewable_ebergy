"use client"

import { motion } from "framer-motion"
import { FaSolarPanel, FaWind, FaLeaf } from "react-icons/fa"

const services = [
  {
    title: "Solar Energy",
    description:
      "Harness the power of the sun with our cutting-edge solar solutions.",
    icon: FaSolarPanel,
  },
  {
    title: "Wind Energy",
    description:
      "Capture the wind's potential with our advanced turbine technology.",
    icon: FaWind,
  },
  {
    title: "Energy Efficiency",
    description:
      "Optimize your energy consumption with our smart efficiency systems.",
    icon: FaLeaf,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Header mejorado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-green-600 text-lg font-semibold uppercase tracking-wide">
            Sustainable Solutions
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Renewable Energy Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our cutting-edge solutions designed to optimize energy
            consumption and harness the power of natural resources.
          </p>
        </motion.div>

        {/* Cards de Servicios */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icono con fondo circular */}
              <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-green-100 text-green-600 text-6xl mb-6">
                <service.icon />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
