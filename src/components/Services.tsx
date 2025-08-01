// /components/Services.tsx

const services = [
  {
    title: "Web / App Designs",
    desc: "I work primarily in digital formats, delivering high-quality app and web designs that enhance user experiences and elevate brand identities.",
  },
  {
    title: "Posters Design",
    desc: "I am well-versed in poster design, creating unique and memorable visuals that effectively communicate messages and captivate audiences.",
  },
  {
    title: "Flyers & Brochures",
    desc: "I believe in creating clean, impactful layouts that deliver the message clearly and leave a lasting impression.",
  },
]

const Services = () => {
  return (
    <>
      <div className="flex flex-col py-10">
        <h3 className="font-poppins text-3xl md:text-5xl text-center mx-auto pr-10">
          What I Do
        </h3>
        <div className="flex flex-col gap-5 py-10">
          {services.map((service, idx) => (
            <div key={idx} className="my-6 px-10 md:px-6 md:max-w-md mx-auto">
              <h4 className="text-2xl font-lexend">{service.title}</h4>
              <p className="text-base font-poppins mt-2 px-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services
