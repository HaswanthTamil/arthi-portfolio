import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero_image.png";

const resume = "/arthi_resume.pdf";

const Hero = () => {
  return (
    <>
      <div className="w-full lg:h-min-screen flex flex-col lg:flex-row lg:justify-center lg:items-center py-10 px-5 md:px-10 gap-y-10">
        {/* Left Section (Intro + Image) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-10 xl:translate-x-[20%]"
        >
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center py-6"
          >
            <h1 className="text-[5.25rem] font-poppins text-shadow-white">
              ARTHI M
            </h1>
            <h2 className="text-2xl font-lexend -mt-2">
              Graphic & UI/UX Designer
            </h2>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto sm:-translate-x-5 rounded-xl overflow-hidden"
          >
            <Image src={heroImage} alt="hero image" width={400} height={400} />
          </motion.div>
        </motion.div>

        {/* Right Section (Services + Button) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col py-5 xl:translate-x-[30%] lg:translate-y-[15%]"
        >
          <h2 className="text-2xl lg:text-4xl lg:w-[600px] font-robotoFlex text-center font-semibold py-4 lg:text-right">
            UI/UX and Visual Design Services
          </h2>

          <ul className="list-disc list-inside font-cormorant font-semibold text-lg lg:text-2xl">
            <div className="flex flex-col sm:mx-auto w-[100%] sm:w-fit px-10 gap-y-2">
              <li>Web Landing Page Design</li>
              <li>App Interface Design</li>
              <li>Poster Design</li>
              <li>Digital Design</li>
            </div>
          </ul>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="py-5 w-fit mx-auto"
          >
            <button className="mx-auto w-fit px-3 py-2 bg-gray-300/70 rounded-full text-black font-poppins font-semibold hover:bg-gray-400/70 hover:rotate-6 transition-all duration-300 ease-in-out">
              <a href={resume} download>
                View Resume
              </a>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 1 }}
        className="bg-black h-[20px] border-b border-gray-200/20 hidden md:block"
      ></motion.div>
    </>
  );
};

export default Hero;
