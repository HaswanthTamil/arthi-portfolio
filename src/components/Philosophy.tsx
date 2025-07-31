// /components/Philosophy.tsx

import Image from "next/image"
import decor from "@/assets/decor/decor1.png"

const Philosophy = () => {
  return (
    <div className="w-full flex flex-col relative bg-black">
      <div className="z-10 bg-transparent flex flex-col xl:flex-row xl:justify-center py-20 px-4 mx-auto xl:mx-0 w-fit">
        <h3 className="font-lexend xl:leading-relaxed gap-4 pt-3 text-5xl max-w-md xl:text-center text-shadow-white">
          My Design Philosophy
        </h3>
        <p className="font-cormorant text-2xl lg:text-4xl mt-10 xl:mt-20 sm:max-w-xl xl:max-w-full xl:w-[50%]">
          In my approach to design, I believe that every project is an
          opportunity to reflect the true value and identity of a person or
          brand. Good design transcends aesthetics; it speaks to the core values
          and intentions behind it. By paying meticulous attention to symbolism,
          patterns, and purpose, I ensure that each design not only communicates
          an idea but also resonates deeply with its audience. Whether it&#39;s
          a small project or a grand vision, my focus is on creating designs
          that make a meaningful impact and hold enduring relevance.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 z-0">
        <Image
          src={decor}
          alt={"Background decor image"}
          width={200}
          height={50}
          className="opacity-20 md:opacity-50"
        />
      </div>
    </div>
  )
}

export default Philosophy
