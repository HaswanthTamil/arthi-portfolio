"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import post1 from "@/assets/works/posts/post1.png"
import post2 from "@/assets/works/posts/post2.png"
import post3 from "@/assets/works/posts/post3.png"

import decor2 from "@/assets/decor/decor2.png"
import decor3 from "@/assets/decor/decor3.png"

const Posts = () => {
  const posts = [post1, post2, post3]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col relative bg-black overflow-hidden"
    >
      <div className="bg-black flex flex-col xl:flex-row xl:items-center xl:justify-center px-4 py-10">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-bold font-cormorant text-5xl md:text-7xl text-center mx-auto pr-10 text-shadow-white"
        >
          Content Creation
        </motion.h3>

        <div className="flex flex-col md:flex-row gap-8 w-full xl:max-w-[60%] items-center md:justify-evenly py-8">
          {posts.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="w-fit"
            >
              <Image
                src={img}
                alt={`Post ${i + 1}`}
                width={400}
                height={400}
                className="rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 right-0 translate-x-2/3 z-10"
      >
        <Image
          src={decor2}
          alt={"Background decor image"}
          width={200}
          height={50}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-10 rotate-90 z-10"
      >
        <Image
          src={decor3}
          alt={"Background decor image"}
          width={150}
          height={50}
        />
      </motion.div>
    </motion.div>
  )
}

export default Posts
