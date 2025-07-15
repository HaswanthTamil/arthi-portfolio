// components/TimeLine.jsx
"use client"
import { motion } from "framer-motion"

const timeline = [
  { date: "Apr 2025", label: "Picked up Python. Finished it in 1 month flat." },
  {
    date: "May 2025",
    label: "Dived head-first into frontend (React + Tailwind gang).",
  },
  {
    date: "Jun Week 1",
    label: "Flopped my first interview (learned a lot tho).",
  },
  {
    date: "Jun Week 2",
    label:
      "Started learning Django with just the official docs. No courses. Built a simple blog app in 2 days.",
  },
  { date: "Jun Week 2", label: "Took on an unpaid gig to gain real-world XP." },
  { date: "Jun Week 3", label: "Landed my first paying client. Let's gooo." },
  { date: "Jun Week 4", label: "Founded BytesBrush to make it official." },
  { date: "Jul 2025", label: "Working on a paid collab with another startup." },
]

export default function TimeLine() {
  return (
    <div className="w-full px-4 md:px-10 mt-20 pt-20 md:pt-0 md:mt-0 xl:mx-auto">
      {/* About Me */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-4xl text-white text-shadow font-bold mb-4">
          About Me
        </h2>
        <p className="text-lg text-gray-100 text-shadow">
          Hi! I&#39;m <span className="font-semibold text-white">Haswanth</span>{" "}
          — a frontend-focused fullstack dev who loves turning ideas into sleek,
          functional apps.
          <br />
          Founder of{" "}
          <span className="font-semibold text-white">BytesBrush</span>,
          part-time freelancer, full-time uni survivor.
          <br />I don&#39;t just build UIs — I craft experiences that click.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto border-l border-gray-500 pl-6">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-10 relative"
          >
            <div className="absolute -left-[15px] top-2 w-3 h-3 bg-white rounded-full border border-gray-600" />
            <h4 className="text-white px-1 font-semibold text-lg">
              {item.date}
            </h4>
            <p className="text-gray-200 px-1 text-base">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
