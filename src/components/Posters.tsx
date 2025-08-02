"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import poster from "@/assets/works/poster.png";

const Posters = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex flex-col bg-black py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto w-full py-6"
      >
        <Image
          src={poster}
          alt="Poster Work Image"
          width={600}
          height={40}
          className="mx-auto w-full opacity-80"
        />
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center md:text-right text-xl md:text-3xl md:ml-auto md:max-w-2xl font-lexend py-3 md:py-8 md:pr-4"
      >
        Great design starts with understanding the story behind the need.
      </motion.span>
    </motion.div>
  );
};

export default Posters;
