import ProjectCard from "./ProjectCard"
import mrm from "@/assets/mrm.png"
import mrm_thumb from "@/assets/mrm_thumb.jpg"
import bytesbrush from "@/assets/bytesbrush.png"
import bb_logo from "@/assets/bb_logo.png"

const Projects = () => {
  return (
    <div className="w-full flex flex-col">
      <div>
        <h2 className="text-4xl text-white text-shadow font-bold mb-10 text-center">
          Projects
        </h2>
      </div>
      <div className="flex flex-wrap gap-y-5 justify-around w-[80%] mx-auto">
        <ProjectCard
          title="MRM Furnitures"
          description="Landing page for furniture manufacturer, built and shipped under a week"
          href="https://mrmfurnitures.com"
          imageSrc={mrm}
          thumbSrc={mrm_thumb}
          icons={["HTML", "JS", "Tailwind", "CSS"]}
        />
        <ProjectCard
          title="BytesBrush"
          description="Official website for BytesBrush, a tech blog and community platform."
          href="https://bytes-brush.vercel.app/"
          imageSrc={bytesbrush}
          thumbSrc={bb_logo}
          icons={["Next.js", "TS", "Tailwind", "Vercel"]}
        />
      </div>
      <div>
        <p className="text-gray-300 text-center mt-10 font-poppins">
          More projects coming soon! Stay tuned for updates.
        </p>
      </div>
    </div>
  )
}

export default Projects
