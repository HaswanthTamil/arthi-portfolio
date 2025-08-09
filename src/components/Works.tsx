"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import cuisine from "@/assets/works/cuisine.png"
import nutrition from "@/assets/works/nutrition.png"
import mrm from "@/assets/works/mrm.png"
import nexora from "@/assets/works/nexora.jpg"

const cuisineLink =
  "https://www.figma.com/proto/bT8HuN7bpDINcDiTidK1Yj/CaringHandsHub?node-id=0-3"
const nutritionLink =
  "https://www.figma.com/design/8jtgc7xWkmmZnWCGONapfy/Food-Linker?node-id=0-1&p=f&t=VZfzidNlgNASIrwS-0"
const mrmLink = "https://mrmfurnitures.com"
const nexoraLink =
  "https://www.figma.com/design/t3W8FEKHuUpCTyMnyW0Xwz/NEXORA?node-id=1-12&m=dev&t=a6rKDD9ZC9kA5F9h-1"

const Works = () => {
  const items = [
    { src: nexora, link: nexoraLink, label: "Landing page for website" },
    { src: nutrition, link: nutritionLink, label: "App design" },
    { src: cuisine, link: cuisineLink, label: "Landing page for website" },
    { src: mrm, link: mrmLink, label: "Landing page for website" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-black flex flex-col xl:flex-row-reverse xl:items-center xl:justify-center px-4 py-10"
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-bold font-cormorant text-7xl text-center mx-auto pr-10 text-shadow-white"
      >
        Design Works
      </motion.h3>

      <div className="flex flex-col md:flex-row gap-8 w-full xl:max-w-[60%] items-center md:justify-evenly py-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.3,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic easing curve
            }}
            className="relative group w-fit"
          >
            <Link href={item.link} target="_blank">
              <Image
                src={item.src}
                alt={item.label}
                width={200}
                height={400}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center rounded-2xl">
                <p className="text-white font-lexend text-lg text-center font-medium text-shadow">
                  {item.label}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Works
