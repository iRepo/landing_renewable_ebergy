"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const caseStudies = [
  {
    title: "GreenTech Solar Farms",
    description:
      "Implemented a large-scale solar farm that now powers over 10,000 homes, reducing carbon emissions by 40%.",
    image: "/case-study-1.jpg",
    stat: "10,000+ homes powered",
    testimonial:
      "This project has transformed our energy strategy! - CEO, GreenTech",
  },
  {
    title: "Wind Energy for Urban Areas",
    description:
      "Developed an innovative urban wind energy solution, increasing efficiency by 30% in high-density areas.",
    image: "/case-study-2.webp",
    stat: "30% more efficiency",
    testimonial:
      "A breakthrough in sustainable urban planning! - Director, EcoCities",
  },
  {
    title: "Energy Optimization for Industries",
    description:
      "Helped a leading manufacturing company optimize energy use, cutting costs by 25% annually.",
    image: "/case-study-3.jpg",
    stat: "25% cost reduction",
    testimonial:
      "We've seen major savings thanks to this project! - CTO, IndustryX",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-green-600 text-lg font-semibold uppercase tracking-wide">
            Real Impact
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Successful Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we’ve helped companies and communities transition to
            clean energy with real-world solutions.
          </p>
        </motion.div>

        {/* Grid de Casos de Éxito */}
        <div className="mt-12 space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
              >
                {/* Imagen con altura fija y tamaño reducido */}
                <div
                  className={`md:w-1/3 ${index % 2 !== 0 ? "md:order-2" : ""}`}
                >
                  <div className="h-[250px] md:h-[300px] lg:h-[350px] w-full overflow-hidden relative">
                    <Image
                      src={study.image}
                      alt={study.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Contenido */}
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {study.description}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-green-600 text-xl font-bold">
                      {study.stat}
                    </span>
                    <p className="text-gray-500 italic text-sm md:text-base">
                      {study.testimonial}
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Separador sutil entre cada caso de éxito */}
              {index < caseStudies.length - 1 && (
                <div className="border-t border-gray-300 w-3/4 mx-auto my-8 opacity-50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
