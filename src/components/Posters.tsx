// /components/Posters.tsx

import Image from "next/image"
import poster from "@/assets/works/poster.png"

const Posters = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-black py-10">
        <h3 className="font-bold font-cormorant text-5xl md:text-7xl text-center mx-auto pr-10 text-shadow-white">
          Posters
        </h3>
        <div className="mx-auto w-full">
          <Image
            src={poster}
            alt="Poster Work Image"
            width={600}
            height={40}
            className="mx-auto w-full"
          />
        </div>
        <span className="text-center md:text-right text-xl md:text-3xl md:ml-auto md:max-w-2xl font-lexend py-3 md:py-8 md:pr-4">
          Great design starts with understanding the story behind the need.
        </span>
      </div>
    </>
  )
}

export default Posters
