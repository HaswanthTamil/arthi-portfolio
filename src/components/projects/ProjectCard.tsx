"use client"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa"
import {
  SiTailwindcss,
  SiNextdotjs,
  SiVercel,
  SiTypescript,
} from "react-icons/si"
import { Code, Server } from "lucide-react"

const iconMap: { [key: string]: React.ReactElement } = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JS: <FaJs className="text-yellow-400" />,
  TS: <SiTypescript className="text-[#3178C6]" />,
  React: <FaReact className="text-cyan-400" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  "Next.js": <SiNextdotjs className="text-gray-950" />,
  Node: <FaNodeJs className="text-green-500" />,
  Vercel: <SiVercel className="text-gray-950" />,
  API: <Server className="text-gray-200 w-4 h-4" />,
  Code: <Code className="text-gray-300 w-4 h-4" />,
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  href,
  thumbSrc,
  icons,
}: {
  title: string
  description: string
  imageSrc: StaticImageData
  thumbSrc?: StaticImageData
  href: string
  icons?: string[]
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-container"
    >
      <div className="card-inner">
        {/* Front */}
        <div className="card-front bg-black">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-xl opacity-80"
          />
        </div>

        {/* Back */}
        <div className="card-back shadow-md bg-transparent relative border-[1px] border-gray-700/70">
          <div className="w-full h-full bg-gray-700/50 blur z-0 absolute"></div>
          <div className="absolute inset-0 flex flex-col z-10 p-4">
            <div className="flex flex-row items-center gap-2">
              {thumbSrc && (
                <div className="w-fit h-fit rounded-full overflow-hidden">
                  <Image
                    src={thumbSrc}
                    alt="thumbnail"
                    width={24}
                    height={24}
                  />
                </div>
              )}
              <h3 className="text-lg text-white font-poppins font-semibold">
                {title}
              </h3>
            </div>
            <p className="text-sm text-gray-100 px-3 py-5 text-center">
              {description}
            </p>
            {icons && (
              <div className="flex flex-row w-[80%] mx-auto items-center py-2">
                <div className="flex flex-row w-full justify-around">
                  {icons?.map((iconName, idx) => (
                    <div key={idx} className="text-xl">
                      {iconMap[iconName] || <Code />}{" "}
                      {/* fallback icon if not found */}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
