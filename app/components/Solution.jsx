"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SolutionsPage() {
  const [activeCard, setActiveCard] = useState("general");

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const solutions = [
    {
      id: "general",
      title: "General Contractors",
      short: "Streamlined digital workflows for efficient project delivery.",
      details: (
        <div className="space-y-10">
          {/* INTRO SECTION */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#976759]">
              General Contractors
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="/general-contractor.webp"
                alt="General Contractors"
                className="rounded-xl w-full md:w-1/2 object-cover"
              />
              <p className="text-gray-300 leading-relaxed md:w-1/2">
                At <span className="text-yellow-400 font-semibold">D2E Construction</span>,
                we provide comprehensive general contracting services that take your
                construction project from concept to completion — on time, on budget,
                and built to last. Whether you’re planning a new build, renovation,
                or commercial fit-out, our experienced team handles every detail
                with precision and professionalism.
              </p>
            </div>
          </div>

          {/* BIM SERVICES */}
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-[#976759]">
              BIM Services
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="/bim-services.webp"
                alt="BIM Services"
                className="rounded-xl w-full md:w-1/2 object-cover"
              />
              <p className="text-gray-300 leading-relaxed md:w-1/2">
                We support general contractors by managing all BIM and construction
                technology needs from day one. Our solutions streamline collaboration,
                enhance project understanding, and minimize costly delays and rework.
                With our team on board, your projects move forward with greater clarity
                and confidence.
              </p>
            </div>

            {/* BIM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all bg-gray-900/40">
                <h4 className="text-[#5f8b98] font-semibold mb-2">1. BIM Modeling</h4>
                <p className="text-gray-300">
                  We deliver accurate, data-rich 3D models that form the foundation for
                  smarter planning, construction, and coordination. Our models help
                  identify potential clashes early and provide a reliable reference
                  throughout the lifecycle of the project.
                </p>
              </div>
              <div className="border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all bg-gray-900/40">
                <h4 className="text-[#5f8b98] font-semibold mb-2">2. BIM Coordination</h4>
                <p className="text-gray-300">
                  Our team ensures seamless integration between disciplines —
                  architectural, structural, and MEP. By resolving clashes early,
                  we reduce rework and keep projects on track.
                </p>
              </div>
              <div className="border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all bg-gray-900/40">
                <h4 className="text-[#5f8b98] font-semibold mb-2">3. MEP Drafting Solutions</h4>
                <p className="text-gray-300">
                  We offer precise and efficient MEP drafting services aligned
                  with your project’s specifications — ensuring every system is
                  coordinated and ready for installation.
                </p>
              </div>
              <div className="border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all bg-gray-900/40">
                <h4 className="text-[#5f8b98] font-semibold mb-2">4. BIM Visualization</h4>
                <p className="text-gray-300">
                  We bring designs to life with high-quality 3D visualizations and
                  walkthroughs — helping stakeholders understand the project vision
                  and make faster, more confident decisions.
                </p>
              </div>
            </div>
          </div>

          {/* PRE-CONSTRUCTION SERVICES */}
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-[#976759]">
              Pre-Construction Services
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="/preconstruction.webp"
                alt="Pre-Construction"
                className="rounded-xl w-full md:w-1/2 object-cover"
              />
              <p className="text-gray-300 leading-relaxed md:w-1/2">
                Our pre-construction services support general contractors in
                streamlining project planning, reducing turnaround time, and improving
                predictability. Through advanced 3D, 4D, and 5D construction simulations,
                we help teams visualize, schedule, and budget with precision —
                before ground is even broken.
              </p>
            </div>

            {/* PRE-CONSTRUCTION GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 hover:border-yellow-400/50 transition-all">
                <h4 className="text-[#5f8b98] font-semibold mb-2">1. Bid Document Management</h4>
                <p className="text-gray-300">
                  We help organize and manage bid packages efficiently, ensuring all
                  documentation is complete, clear, and ready for accurate pricing.
                </p>
              </div>
              <div className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 hover:border-yellow-400/50 transition-all">
                <h4 className="text-[#5f8b98] font-semibold mb-2">2. Bid Analysis</h4>
                <p className="text-gray-300">
                  We assist in reviewing and comparing subcontractor bids to identify
                  best value, flag inconsistencies, and ensure alignment with goals.
                </p>
              </div>
              <div className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 hover:border-yellow-400/50 transition-all">
                <h4 className="text-[#5f8b98] font-semibold mb-2">3. Project Scope Review</h4>
                <p className="text-gray-300">
                  We assess project scopes to identify gaps, overlaps, or risks —
                  reducing surprises during construction and improving clarity.
                </p>
              </div>
              <div className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 hover:border-yellow-400/50 transition-all md:col-span-1">
                <h4 className="text-[#5f8b98] font-semibold mb-2">4. Detailed Quantity Take-Off</h4>
                <p className="text-gray-300">
                  We quantify materials accurately, helping contractors with better
                  cost estimation, resource planning, and procurement.
                </p>
              </div>
              <div className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 hover:border-yellow-400/50 transition-all md:col-span-2">
                <h4 className="text-[#5f8b98] font-semibold mb-2">5. Constructability Analysis</h4>
                <p className="text-gray-300">
                  Our experts evaluate design feasibility and identify potential
                  challenges early, offering practical solutions to mitigate risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "subcontractors",
      title: "Sub-Contractors",
      short: "Tools that enhance accuracy and profitability for every trade.",
      details: (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-10"
        >
          {/* INTRO */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#976759]">
              Solutions for Subcontractors
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="/preconstruction.webp"
                alt="Subcontractors"
                className="rounded-xl w-full md:w-1/2 object-cover"
              />
              <p className="text-gray-300 leading-relaxed md:w-1/2">
                At <span className="text-yellow-400 font-semibold">D2E Construction</span>,
                we understand the vital role subcontractors play in delivering
                successful construction projects. That’s why we offer solutions tailored
                to support your work — from clear documentation to advanced coordination
                tools — so you can focus on doing what you do best. Our services are
                designed to streamline your workflows, reduce on-site conflicts, and
                keep projects running on schedule.
              </p>
            </div>
          </div>

          {/* BIM SERVICES */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-3xl font-semibold text-[#976759]">BIM Services</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="/bim-subcontractors.webp"
                alt="BIM Services for Subcontractors"
                className="rounded-xl w-full md:w-1/2 object-cover"
              />
              <p className="text-gray-300 leading-relaxed md:w-1/2">
                At D2E Construction, we support MEP subcontractors by delivering
                cutting-edge BIM modeling and visualization services that elevate your
                work and streamline collaboration. Our team combines deep industry
                knowledge with advanced digital tools to help you deliver your scope
                with confidence, precision, and speed — building stronger client
                relationships in the process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "1. BIM Modeling",
                  desc: "We create detailed, trade-specific 3D models that help MEP subcontractors visualize systems, optimize layouts, and reduce on-site errors.",
                },
                {
                  title: "2. BIM Coordination",
                  desc: "Our coordination ensures your systems integrate seamlessly with other disciplines — detecting clashes early for smoother execution.",
                },
                {
                  title: "3. BIM Visualization",
                  desc: "We deliver high-quality visualizations and walkthroughs to help clients understand layouts, identify issues, and build confidence.",
                },
              ].map((box, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 hover:border-yellow-400/50 transition-all"
                >
                  <h4 className="text-[#5f8b98] font-semibold mb-2">{box.title}</h4>
                  <p className="text-gray-300">{box.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* PRE-CONSTRUCTION SERVICES */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-3xl font-semibold text-[#976759]">
              Pre-Construction Services
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="/preconstruction-sub.webp"
                alt="Preconstruction Subcontractors"
                className="rounded-xl w-full md:w-1/2 object-cover"
              />
              <p className="text-gray-300 leading-relaxed md:w-1/2">
                We partner with clients to help meet pre-construction and business
                development goals through expert estimating and planning support.
                Our services provide deeper insight into design, budget, and scope —
                setting the foundation for success from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "1. Bid Document Management",
                  desc: "We organize and prepare all bid documentation, ensuring your submissions are clear, complete, and competitive.",
                },
                {
                  title: "2. Bid Analysis",
                  desc: "We assist in analyzing incoming bids to identify the most cost-effective and technically sound options.",
                },
                {
                  title: "3. Project Scope Review",
                  desc: "We review scopes to identify potential gaps or overlaps early — so you enter execution with full confidence.",
                },
                {
                  title: "4. Detailed Quantity Take-Off",
                  desc: "We deliver accurate, discipline-specific quantity take-offs for precise cost estimation and procurement planning.",
                },
              ].map((box, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 hover:border-yellow-400/50 transition-all"
                >
                  <h4 className="text-[#5f8b98] font-semibold mb-2">{box.title}</h4>
                  <p className="text-gray-300">{box.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ),
    },
  ];

  return (
    <section id="solution" className="relative sm:h-screen   bg-[#0a0a0a] text-white sm:flex  overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      {/* LEFT SIDEBAR */}
      <div className="sm:w-[25%]   bg-white sm:flex sm:flex-col  justify-center p-8 sm:border-b-8 sm:border-r sm:border-l-8 sm:rounded-bl-8 border-amber-700 sm-h-screen sm:h-screen sticky top-0">
        <h3 className="text-2xl  font-bold text-[#976759] mb-8 text-center">
          Solutions
        </h3>
        <div className="flex sm:flex-col gap-6">
          {solutions.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveCard(item.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`cursor-pointer p-5 rounded-xl border transition-all ${activeCard === item.id
                  ? "bg-yellow-500/10 border-[#5f8b98]"
                  : "bg-gray-900 border-gray-700 hover:border-yellow-400/60"
                }`}
            >
              <h4
                className={`font-semibold text-lg mb-2 ${activeCard === item.id ? "text-[#5f8b98]" : "text-white"
                  }`}
              >
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm">{item.short}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}

      <div className="sm:w-[75%] w-full  sm:border-8 rounded-r-none relative border-amber-700 sm:border-t-0 sm:border-l-0 p-12 overflow-y-auto max-h-screen">
        <AnimatePresence mode="wait">
          {solutions.map(
            (item) =>
              activeCard === item.id && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-10"
                >
                  {item.details}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
