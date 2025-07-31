// /components/Works.tsx

import Image from "next/image"
import cuisine from "@/assets/works/cuisine.png"
import nutrition from "@/assets/works/nutrition.png"
import mrm from "@/assets/works/mrm.png"
import Link from "next/link"

const cuisineLink =
  "https://www.figma.com/proto/bT8HuN7bpDINcDiTidK1Yj/CaringHandsHub?node-id=0-3"
const nutritionLink =
  "https://www.figma.com/design/8jtgc7xWkmmZnWCGONapfy/Food-Linker?node-id=0-1&p=f&t=VZfzidNlgNASIrwS-0"
const mrmLink = "https://mrmfurnitures.com"

const Works = () => {
  return (
    <>
      <div className="bg-black flex flex-col xl:flex-row-reverse xl:items-center xl:justify-center px-4 py-10">
        <h3 className="font-bold font-cormorant text-7xl text-center mx-auto pr-10 text-shadow-white">
          Design Works
        </h3>
        <div className="flex flex-col md:flex-row gap-8 w-full xl:max-w-[60%] items-center md:justify-evenly py-8">
          {/* Image 1 */}
          <div className="relative group w-fit">
            <Link href={cuisineLink}>
              <Image
                src={cuisine}
                alt="Landing page for website"
                width={200}
                height={400}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center rounded-2xl">
                <p className="text-white font-lexend text-lg text-center font-medium text-shadow">
                  Landing page for website
                </p>
              </div>
            </Link>
          </div>

          {/* Image 2 */}
          <div className="relative group w-fit">
            <Link href={nutritionLink}>
              <Image
                src={nutrition}
                alt="App Layout design"
                width={200}
                height={400}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center rounded-2xl">
                <p className="text-white font-lexend text-lg text-center font-medium text-shadow">
                  App design
                </p>
              </div>
            </Link>
          </div>

          {/* Image 3 */}
          <div className="relative group w-fit">
            <Link href={mrmLink}>
              <Image
                src={mrm}
                alt="Landing page for website"
                width={200}
                height={400}
                className="rounded-2xl"
              />

              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center rounded-2xl">
                <p className="text-white font-lexend text-lg text-center font-medium text-shadow">
                  Landing page for website
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Works
