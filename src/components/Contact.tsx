"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import illus from "@/assets/illustration.png"

const Contact = () => {
  const projectLinks = [
    {
      label: "Figma",
      href: "https://www.figma.com/proto/bT8HuN7bpDINcDiTidK1Yj/CaringHandsHub?node-id=0-3",
    },
    {
      label: "Figma",
      href: "https://www.figma.com/design/8jtgc7xWkmmZnWCGONapfy/Food-Linker?node-id=0-1&t=YHunbnPHIz8CT4n7-0",
    },
    {
      label: "PPTs",
      href: "https://www.canva.com/design/DAGClZqf7lo/ugDTrIk9Uo4q52Ac0_GkmQ/edit?utm_content=DAGClZqf7lo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="w-full py-10 px-10 md:px-4 flex flex-col md:flex-row md:justify-around gap-4 mx-auto"
    >
      {/* Left Section */}
      <div className="flex flex-col gap-4">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-lexend text-xl md:text-3xl"
        >
          Get In Touch
        </motion.h3>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          href="mailto:arthi5796@gmail.com"
          className="font-poppins"
        >
          Email: arthi5796@gmail.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <span className="font-poppins">Project Links</span>
          <div className="flex flex-col gap-2 px-4 font-sans">
            {projectLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={illus} alt="Decor Image" width={300} height={40} />
      </motion.div>
    </motion.div>
  )
}

export default Contact
