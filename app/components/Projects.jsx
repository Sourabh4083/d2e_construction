"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Lumber Sample Takeoff",
      desc: "Framing lumber samples with quantities for studs, joists, beams, and headers. See how we break down materials for efficient procurement and planning.",
      img: "/lumber.png", 
      pdf: "/Lumber-Sample.pdf", 
    },
    {
      id: 2,
      title: "Drywall Sample (OST)",
      desc: "Explore OST-based drywall samples with area takeoffs, wall types, and ceiling layouts. These samples reflect efficient plan marking and organized quantity reporting.",
      img: "/Drywall.png",
      pdf: "/Drywall-Sample-OST.pdf",
    },
    {
      id: 3,
      title: "Structural",
      desc: "Review structural estimation samples including concrete, steel, and reinforcement details. Files showcase how we organize framing and foundation quantities for accurate bids.",
      img: "/structural.png",
      pdf: "/Structural.pdf",
    },
    {
      id: 4,
      title: "Civil Hardscape and Landscape",
      desc: "View detailed samples for paving, curbs, retaining walls, and outdoor surfaces. Our hardscape estimates include accurate measurements and material breakdowns.",
      img: "/civil.jpg",
      pdf: "/Civil-Hardscape.pdf",
    },
    {
      id: 5,
      title: "Mechanical Electrical and Plumbing",
      desc: "Access sample takeoffs for HVAC, lighting, piping, and plumbing systems. Each file illustrates comprehensive MEP scope coverage with clear categorization.",
      img: "/mep.jpg",
      pdf: "/MEP.pdf",
    },
  ];

  const excelSamples = [
    { id: 1, name: "01 - Takeoff Summary", file: "/01-takeoff-Summary.xlsx" },
    { id: 2, name: "02 - Takeoff Summary", file: "/02-takeoff-Summary.xlsx" },
    { id: 3, name: "03 - Takeoff Summary", file: "/03-takeoff-Summary.xlsx" },
  ];

  return (
    <section id="projects" className="relative min-h-screen text-white px-10 py-20">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 -z-10"
    style={{ backgroundImage: "url('/background3.jpg')" }}
  />
      {/* INTRO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-[#976759] mb-6">
          Our Projects
        </h2>
        <p className="text-gray-800 leading-relaxed text-lg">
          We take pride in delivering high-quality construction solutions across
          residential, commercial, and industrial sectors. Below are some of our
          featured projects that highlight our expertise, attention to detail,
          and commitment to excellence. Each project reflects our ability to
          manage timelines, budgets, and technical complexities while meeting
          client expectations. From groundwork and structural framing to
          complete MEP installations, we bring experience and precision to every
          stage of construction.
        </p>
      </motion.div>

      {/* PROJECT CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-yellow-500/30 transition-all duration-300 max-w-sm"
          >
            <div className="relative w-full h-48">
              <Image
                src={proj.img}
                alt={proj.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#5f8b98]">
                {proj.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {proj.desc}
              </p>
              <motion.a
                whileHover={{ x: 5 }}
                href={proj.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:underline"
              >
                See Sample →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EXCEL FILES SECTION */}
      <div className="mt-20 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-[#00bfff] font-bold mb-10"
        >
          Takeoff Summaries
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {excelSamples.map((excel, i) => (
            <motion.a
              key={excel.id}
              href={excel.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-900 border border-gray-700 p-8 rounded-2xl text-[#5f8b98] font-semibold text-lg text-center shadow-lg hover:shadow-yellow-500/30 transition-all"
            >
              {excel.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
