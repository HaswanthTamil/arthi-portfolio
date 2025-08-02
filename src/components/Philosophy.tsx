"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import decor from "@/assets/decor/decor1.png"

const Philosophy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex flex-col relative bg-black"
    >
      <div className="z-10 bg-transparent flex flex-col xl:flex-row xl:justify-center py-20 px-4 mx-auto xl:mx-0 w-fit">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="font-lexend xl:leading-relaxed gap-4 pt-3 text-5xl max-w-md xl:text-center text-shadow-white"
        >
          My Design Philosophy
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          viewport={{ once: true }}
          className="font-cormorant text-2xl lg:text-4xl mt-10 xl:mt-20 sm:max-w-xl xl:max-w-full xl:w-[50%]"
        >
          In my approach to design, I believe that every project is an
          opportunity to reflect the true value and identity of a person or
          brand. Good design transcends aesthetics; it speaks to the core values
          and intentions behind it. By paying meticulous attention to symbolism,
          patterns, and purpose, I ensure that each design not only communicates
          an idea but also resonates deeply with its audience. Whether it&#39;s
          a small project or a grand vision, my focus is on creating designs
          that make a meaningful impact and hold enduring relevance.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 z-0"
      >
        <Image
          src={decor}
          alt="Background decor image"
          width={200}
          height={50}
          className="opacity-20 md:opacity-50"
        />
      </motion.div>
    </motion.div>
  )
}

export default Philosophy
