import Image from "next/image"
import heroImage from "@/assets/hero_image.png"

const Hero = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row py-10 px-5 md:px-10 gap-y-10">
        <div className="flex flex-col gap-10">
          {/* Intro section */}
          <div className="flex flex-col items-center justify-center text-center py-6">
            <h1 className="text-[5.25rem] font-poppins">ARTHI M</h1>
            <h2 className="text-2xl font-lexend -mt-2">
              Graphic & UI/UX Designer
            </h2>
          </div>

          {/* Image */}
          <div className="mx-auto sm:-translate-x-5">
            <Image src={heroImage} alt="hero image" width={400} height={400} />
          </div>
        </div>

        {/* services */}
        <div className="flex flex-col py-5 lg:translate-y-[40%]">
          <h2 className="text-2xl lg:text-4xl lg:w-[600px] font-robotoFlex text-center font-semibold py-4">
            UI/UX and Visual Design Services
          </h2>
          <ul className="list-disc list-inside font-playfair font-semibold text-lg lg:text-2xl">
            <div className="flex flex-col sm:mx-auto w-[100%] sm:w-fit px-10 gap-y-2">
              <li>Web Landing Page Design</li>
              <li>App Interface Design</li>
              <li>Poster Design</li>
              <li>Digital Design</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Hero
