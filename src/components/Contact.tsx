// /components/Contact.tsx
import illus from "@/assets/illustration.png"
import Image from "next/image"

const Contact = () => {
  return (
    <>
      <div className="w-full py-10 px-10 md:px-4 flex flex-col md:flex-row md:justify-around gap-4 mx-auto w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-center font-lexend text-xl md:text-3xl">
            Get In Touch
          </h3>
          <a href="mailto:arthi5796@gmail.com" className="font-poppins">
            Email: arthi5796@gmail.com
          </a>
          <div className="flex flex-col gap-2">
            <span className="font-poppins">Project Links</span>
            <div className="flex flex-col gap-2 px-4 font-sans">
              <a href="https://www.figma.com/proto/bT8HuN7bpDINcDiTidK1Yj/CaringHandsHub?node-id=0-3">
                Figma
              </a>
              <a href="https://www.figma.com/design/8jtgc7xWkmmZnWCGONapfy/Food-Linker?node-id=0-1&t=YHunbnPHIz8CT4n7-0">
                Figma
              </a>
              <a href="https://www.canva.com/design/DAGClZqf7lo/ugDTrIk9Uo4q52Ac0_GkmQ/edit?utm_content=DAGClZqf7lo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                PPTs
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={illus} alt="Decor Image" width={300} height={40} />
        </div>
      </div>
    </>
  )
}

export default Contact
