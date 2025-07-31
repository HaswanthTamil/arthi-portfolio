import Image from "next/image"

import post1 from "@/assets/works/posts/post1.png"
import post2 from "@/assets/works/posts/post2.png"
import post3 from "@/assets/works/posts/post3.png"

import decor from "@/assets/decor/decor-2.png"

const Posts = () => {
  return (
    <div className="w-full flex flex-col relative bg-black overflow-hidden">
      <div className="bg-black flex flex-col xl:flex-row xl:items-center xl:justify-center px-4 py-10">
        <h3 className="font-bold font-cormorant text-5xl md:text-7xl text-center mx-auto pr-10 text-shadow-white">
          Content Creation
        </h3>
        <div className="flex flex-col md:flex-row gap-8 w-full xl:max-w-[60%] items-center md:justify-evenly py-8">
          {/* Image 1 */}
          <div className="w-fit">
            <Image
              src={post1}
              alt="Social media post for MRM Furnitures"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>

          {/* Image 2 */}
          <div className="w-fit">
            <Image
              src={post2}
              alt="App Layout design"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>

          {/* Image 3 */}
          <div className="w-fit">
            <Image
              src={post3}
              alt="Landing page for website"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 right-0 translate-x-2/3 z-10">
        <Image
          src={decor}
          alt={"Background decor image"}
          width={200}
          height={50}
        />
      </div>
    </div>
  )
}

export default Posts
