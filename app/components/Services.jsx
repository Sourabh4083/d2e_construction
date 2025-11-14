"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";


const services = [
  {
    id: "bim",
    title: "BIM Services",
    short:
      "Building Information Modeling for intelligent 3D coordination and visualization.",
    details:
      "Our BIM (Building Information Modeling) services bring design, construction, and operation together in a digital environment. We help visualize, coordinate, and optimize every detail before construction begins, ensuring efficiency and accuracy.",
  },
  {
    id: "preconstruction",
    title: "Pre-Construction Services",
    short: "Cost estimation, planning, and scheduling with strategic insight.",
    details:
      "From early-stage estimation to procurement planning, our pre-construction experts help you minimize risks and optimize resources before you break ground.",
  },
  {
    id: "engineering",
    title: "Project Engineering Services",
    short:
      "Technical and structural engineering for flawless project execution.",
    details:
      "We provide complete engineering support, from concept validation to site supervision, ensuring every element of your design is structurally sound and efficiently delivered.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[1]);
  const [activePreBox, setActivePreBox] = useState(null);
  const serviceSectionRef = useRef(null);

  const openPDF = (pdfPath) => window.open(pdfPath, "_blank");

  return (
    <section id="services" className="h-screen  bg-[#0a0a0a] text-white flex overflow-hidden relative">
      {/* 🎨 Animated Grid Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* LEFT (Scrollable 75%) */}
      <div className="w-[75%]  overflow-y-auto sm:border-8 sm:border-[#41b0ce] sm:border-r-0 sm:border-t-0 h-full sm:p-12 p-4 relative scrollbar-thin scrollbar-thumb-yellow-600/60 scrollbar-track-gray-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl relative z-10"
          >
            {/* BIM SERVICES */}
            {activeService.id === "bim" && (
              <div className="flex flex-col  gap-10 sm:px-18">

                <h2 className="sm:text-5xl text-2xl font-extrabold text-[#976759]">
                  BIM Services
                </h2>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Our BIM (Building Information Modeling) services bring design,
                  construction, and operation together in a digital environment.
                  We help visualize, coordinate, and optimize every detail
                  before construction begins, ensuring efficiency and accuracy.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-900/80 border border-yellow-500/40 rounded-xl p-6 shadow-md hover:shadow-yellow-500/30 transition">
                    <h3 className="sm:text-2xl text-xl font-semibold text-[#5f8b98] mb-2">
                      4D Simulation
                    </h3>
                    <p className="text-gray-300 sm:text-sm text-xs mb-4">
                      Connect 3D models to time-based data to visualize project
                      progress, sequencing, and scheduling in real time.
                    </p>
                    <button
                      onClick={() => openPDF("/4d-bim.pdf")}
                      className="bg-yellow-500 text-sm text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
                    >
                      See the Sample
                    </button>
                  </div>

                  <div className="bg-gray-900/80 border border-yellow-500/40 rounded-xl p-6 shadow-md hover:shadow-yellow-500/30 transition">
                    <h3 className="sm:text-2xl text-xl font-semibold text-[#5f8b98] mb-2">
                      MEP (Mechanical, Electrical, Plumbing)
                    </h3>
                    <p className="text-gray-300 sm:text-sm text-xs mb-4">
                      Our MEP BIM modeling helps design and coordinate complex
                      building systems, reducing conflicts and improving
                      efficiency.
                    </p>
                    <button
                      onClick={() => openPDF("/mep-bim.pdf")}
                      className="bg-yellow-500 text-sm text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
                    >
                      See the Sample
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* PRE-CONSTRUCTION SECTION */}
            {activeService.id === "preconstruction" && (
              <div ref={serviceSectionRef} className="flex flex-col gap-8 sm:px-18">
                <h2 className="sm:text-5xl text-2xl font-extrabold text-[#976759]">
                  Pre-Construction Services
                </h2>
                <p className="text-gray-300 sm:text-lg text-xs leading-relaxed">
                  From estimation to procurement planning, our pre-construction
                  experts help you minimize risks and optimize resources before
                  breaking ground.
                </p>

                {/* TWO BOXES */}
                <div className="sm:grid flex md:grid-cols-2 gap-6 sm:mt-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}

                    onClick={() => {
                      const newValue = activePreBox === "bim-visual" ? null : "bim-visual";
                      setActivePreBox(newValue);

                      if (newValue) {
                        setTimeout(() => {
                          serviceSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",   
                          });
                        }, 200);
                      }
                    }}
                    className={`cursor-pointer  gap-4 bg-gray-900/80 border rounded-xl p-2 sm:p-6 transition flex sm:flex-row flex-col justify-between items-center ${activePreBox === "bim-visual"
                      ? "border-yellow-500 shadow-yellow-500/30"
                      : "border-gray-700 hover:border-yellow-400/60"
                      }`}
                  >
                    <div>
                      <h3 className="sm:text-2xl font-semibold text-[#5f8b98] mb-2">
                        BIM Visualization
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        Immersive visualisation for smarter design decisions.
                      </p>
                    </div>

                    {/* Arrow (same behavior as your other cards) */}
                    <motion.span
                      animate={{ rotate: activePreBox === "bim-visual" ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-yellow-400 text-3xl font-bold ml-4"
                    >
                      →
                    </motion.span>
                  </motion.div>


                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}

                    onClick={() => {
                      const newValue = activePreBox === "quantity" ? null : "quantity";
                      setActivePreBox(newValue);

                      if (newValue) {
                        setTimeout(() => {
                          serviceSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",   
                          });
                        }, 200);
                      }
                    }}

                    className={`cursor-pointer bg-gray-900/80 border rounded-xl sm:p-6 p-2 transition flex sm:flex-row flex-col justify-between items-center ${activePreBox === "quantity"
                      ? "border-yellow-500 shadow-yellow-500/30"
                      : "border-gray-700 hover:border-yellow-400/60"
                      }`}
                  >
                    <div>
                      <h3 className="sm:text-2xl  font-semibold text-[#5f8b98] mb-2">
                        Precise Quantity Takeoffs
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        Generate accurate material and cost estimates.
                      </p>
                    </div>

                    {/* Rotating Arrow */}
                    <motion.span
                      animate={{ rotate: activePreBox === "quantity" ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-yellow-400 text-3xl font-bold ml-4"
                    >
                      →
                    </motion.span>
                  </motion.div>

                </div>

                {/* DETAIL VIEW BELOW */}

                {activePreBox && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 p-6 border border-yellow-500/40 rounded-xl bg-gray-900/70"
                  >
                    {/* BIM VISUALIZATION DETAILS */}
                    {activePreBox === "bim-visual" && (
                      <div className="space-y-8">

                        <div>
                          <h3 className="text-3xl font-bold text-[#976759] mb-3">
                            Transforming Projects with Advanced BIM Visualisation
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            At D2E Construction, we offer advanced BIM
                            Visualisation services that bring clarity, precision,
                            and efficiency to every stage of your project.
                            Whether designing a new development or managing an
                            existing asset, our visualisation solutions help you
                            make smarter decisions faster. By transforming
                            complex data into intuitive 3D formats, we empower
                            stakeholders to understand spatial relationships,
                            detect clashes early, and explore design alternatives
                            in real time. From immersive walkthroughs and
                            high-quality renderings to virtual reality
                            integrations, our BIM Visualisation enhances
                            collaboration and reduces costly errors.
                          </p>
                        </div>

                        {/* THREE FEATURE CARDS */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                          {[
                            {
                              title: "3D BIM – Intelligent Design Representation",
                              text: [
                                "Identify and resolve design clashes early.",
                                "Improve coordination across disciplines.",
                                "Streamline documentation and drawing generation.",
                                "Communicate design intent through rich, interactive visual models.",
                              ],
                            },
                            {
                              title: "4D BIM – Construction Planning & Simulation",
                              text: [
                                "Visual construction sequencing and simulation.",
                                "Optimised scheduling and logistics planning.",
                                "Early detection of timeline conflicts.",
                                "Enhanced coordination with stakeholders.",
                              ],
                            },
                            {
                              title: "Scan to BIM – Reality Capture to Digital Twin",
                              text: [
                                "Renovation and retrofit planning.",
                                "Precise as-built documentation.",
                                "Clash-free integration with new design elements.",
                                "Long-term facility and asset management.",
                              ],
                            },
                          ].map((card, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ y: -5 }}
                              transition={{ duration: 0.3 }}
                              className="bg-gray-950/70 border border-yellow-600/40 rounded-xl p-6 shadow-md hover:shadow-yellow-500/20"
                            >
                              <h4 className="text-sm font-semibold text-[#976759] overflow-scroll mb-3">
                                {card.title}
                              </h4>
                              <ul className="text-gray-300 text-xs list-disc list-inside space-y-1">
                                {card.text.map((line, idx) => (
                                  <li key={idx}>{line}</li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* QUANTITY DETAILS */}
                    {activePreBox === "quantity" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                      >
                        {/* HEADER */}
                        <div className="space-y-8">

                          <div>
                            <h3 className="text-3xl font-bold text-[#976759] mb-3">
                              Precise Quantity Takeoff Services
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-base">
                              Accurate quantities are the foundation of effective cost estimation,
                              procurement, and project planning. At{" "}
                              <span className="text-yellow-400 font-semibold">d2E Construction</span>,
                              we specialize in Precise Quantity Takeoff services that leverage the
                              power of Building Information Modeling (BIM) to deliver detailed,
                              dependable data—helping you make informed decisions with confidence.
                              Our takeoff solutions provide comprehensive material breakdowns, labor
                              estimates, and cost projections tailored to your project’s scope and
                              complexity. By utilizing intelligent 3D models, we ensure all quantities
                              are derived directly from coordinated designs, significantly reducing
                              errors, omissions, and manual effort. Whether you’re preparing tenders,
                              managing budgets, or planning logistics, our accurate and transparent
                              data helps you stay on schedule and within budget—every time.
                            </p>
                          </div>
                        </div>


                        {/* GRID OF FEATURES */}
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
                          }}
                          className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                        >
                          {[
                            {
                              title: "Model-Based Quantity Extraction",
                              desc: "We extract quantities directly from coordinated BIM models, ensuring consistency and minimizing manual errors.",
                            },
                            {
                              title: "Discipline-Specific Takeoffs",
                              desc: "Whether it’s architectural finishes, structural elements, MEP components, or siteworks—we deliver quantities tailored to your trade requirements.",
                            },
                            {
                              title: "Customizable Reports",
                              desc: "Get takeoff data in the format that works best for you—Excel sheets, BOQ formats, or direct integration with cost management platforms.",
                            },
                            {
                              title: "Change Management",
                              desc: "We provide quick updates to quantities when design changes occur, helping you stay on top of project costs and timelines.",
                            },
                          ].map((box, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ y: -5, borderColor: "#facc15" }}
                              transition={{ duration: 0.3 }}
                              className="bg-gray-950/70 border border-yellow-600/30 rounded-xl p-6 shadow-md hover:shadow-yellow-500/20 transition"
                            >
                              <h4 className="text-xl font-semibold text-[#976759] mb-2">
                                {box.title}
                              </h4>
                              <p className="text-gray-300 text-sm leading-relaxed">{box.desc}</p>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>

            )}

            {/* DEFAULT FALLBACK */}
            {activeService.id === "engineering" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                ref={serviceSectionRef}
                className="space-y-10 sm:px-18"
              >
                {/* HEADER */}
                <div>
                  <h2 className="sm:text-5xl text-2xl font-extrabold text-[#976759] mb-4">
                    Project Engineering Services
                  </h2>
                  <p className="text-gray-300 sm:text-lg leading-relaxed max-w-3xl">
                    Our Project Engineering Services ensure every stage of your project is
                    technically precise, efficiently managed, and seamlessly executed. We
                    combine engineering expertise with modern project control systems to
                    maintain quality, communication, and coordination across teams.
                  </p>
                </div>

                {/* CARDS */}
                <div className="w-full max-w-6xl mx-auto mt-10">
                  <div className="sm:grid sm:grid-cols-1 flex overflow-y-auto md:grid-cols-3 gap-6">
                    {[
                      { id: "scope", title: "Generating Project Scopes" },
                      { id: "rfi", title: "RFI Management" },
                      { id: "change", title: "Change Comparison Analysis" },
                    ].map((card) => (
                      <motion.div
                        key={card.id}
                        onClick={() => {
                          const newValue = activePreBox === card.id ? null : card.id;
                          setActivePreBox(newValue);

                          if (newValue) {
                            setTimeout(() => {
                              serviceSectionRef.current?.scrollIntoView({
                                behavior: "smooth",
                                block: "center",  
                              });
                            }, 200);
                          }
                        }}

                        whileHover={{ y: -4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`cursor-pointer p-6 rounded-xl border transition-all shadow-md flex  flex-col justify-between items-center ${activePreBox === card.id
                          ? "border-yellow-500 bg-yellow-500/10 shadow-yellow-500/20"
                          : "border-gray-800 bg-gray-950/60 hover:border-yellow-400/60"
                          }`}
                      >
                        <h4
                          className={`font-semibold text-xs sm:text-lg md:text-xl ${activePreBox === card.id ? "text-yellow-400" : "text-white"
                            }`}
                        >
                          {card.title}
                        </h4>
                        <motion.span
                          animate={{ rotate: activePreBox === card.id ? 90 : 0 }} 
                          transition={{ duration: 0.3 }}
                          className="text-yellow-400 text-2xl font-bold"
                        >
                          →
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>


                {/* DETAILS SECTION */}
                <AnimatePresence mode="wait">
                  {activePreBox && (
                    <motion.div
                      key={activePreBox}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6 }}
                      className="overflow-hidden mt-8 bg-gray-900/60 border border-yellow-600/30 rounded-xl p-2 sm:p-8 shadow-inner"
                    >
                      {activePreBox === "scope" && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="space-y-12 bg-gradient-to-br from-[#0b0b0b] to-[#111] sm:p-10 rounded-2xl border border-yellow-500/10 shadow-md"
                        >
                          {/* TITLE + CONTENT */}
                          <div className="space-y-6 text-center">
                            <h3 className="sm:text-3xl md:text-4xl font-bold text-[#976759]">
                              Comprehensive Project Scope Structuring
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-lg leading-relaxed max-w-4xl mx-auto">
                              At <span className="text-yellow-400 font-semibold">D2E Construction</span>, we specialize in
                              developing clear, concise, and comprehensive project scopes that form
                              the backbone of successful engineering execution. Our approach combines
                              technical expertise with deep industry insight to define every aspect of
                              your project — from objectives and deliverables to timelines, resources,
                              and risk considerations.
                            </p>
                            <p className="text-gray-400 text-xs sm:text-base leading-relaxed max-w-4xl mx-auto">
                              Whether you’re initiating a new build, an upgrade, or an expansion, we
                              ensure all project stakeholders are aligned from day one. A
                              well-structured scope minimizes ambiguity, prevents delays, controls
                              costs, and ensures smooth execution from design through to
                              commissioning.
                            </p>
                          </div>

                          {/* SUBTITLE */}
                          <h4 className="sm:text-2xl font-semibold text-[#976759] text-center mt-12">
                            What We Deliver
                          </h4>

                          {/* GRID BOXES */}
                          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                            {[
                              {
                                title: "Detailed Requirements Definition",
                                desc: "We gather and analyze all technical, operational, and regulatory requirements to build a complete and actionable project roadmap.",
                              },
                              {
                                title: "Feasibility & Risk Analysis",
                                desc: "By evaluating constraints and identifying potential risks early, we help mitigate challenges before they escalate.",
                              },
                              {
                                title: "Technical Scope Statements",
                                desc: "Our experts craft precise documentation that outlines system boundaries, specifications, and quality benchmarks.",
                              },
                              {
                                title: "Multi-Disciplinary Integration",
                                desc: "We synchronize civil, mechanical, electrical, and instrumentation teams to ensure cohesive and conflict-free project execution.",
                              },
                            ].map((item, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ scale: 1.03, backgroundColor: "#1a1a1a" }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="bg-gray-900/70 border border-yellow-500/20 rounded-xl p-6 shadow-sm hover:shadow-yellow-500/10 transition"
                              >
                                <h5 className="sm:text-xl font-semibold text-[#5f8b98] mb-2">
                                  {item.title}
                                </h5>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}


                      {/* Placeholder for other cards */}
                      {activePreBox === "rfi" && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="space-y-12 bg-gradient-to-br from-[#0b0b0b] to-[#111] sm:p-10 p-2 rounded-2xl border border-yellow-500/10 shadow-md"
                        >
                          {/* TITLE + CONTENT */}
                          <div className="space-y-6 text-center">
                            <h3 className="sm:text-3xl md:text-4xl font-bold text-[#976759]">
                              Request for Information (RFI) Management
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-lg leading-relaxed max-w-4xl mx-auto">
                              In any complex engineering project, clarity is key — and that’s where{" "}
                              <span className="text-yellow-400 font-semibold">RFI (Request for Information)</span>{" "}
                              Management plays a critical role. At D2E Construction, we provide structured,
                              end-to-end RFI Management services to ensure timely clarification, accurate responses,
                              and full traceability throughout your project lifecycle.
                            </p>
                            <p className="text-gray-400 text-xs sm:text-base leading-relaxed max-w-4xl mx-auto">
                              Whether it’s resolving design ambiguities, addressing missing details, or seeking
                              technical clarification from stakeholders, our RFI process ensures that every
                              question is tracked, documented, and resolved promptly — preventing miscommunication,
                              delays, and cost overruns.
                            </p>
                          </div>

                          {/* SUBTITLE */}
                          <h4 className="sm:text-2xl text-xl font-semibold text-[#976759] text-center mt-12">
                            What We Do
                          </h4>

                          {/* GRID BOXES */}
                          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                            {[
                              {
                                title: "RFI Tracking & Documentation",
                                desc: "Every RFI is logged, categorized, and linked to the relevant drawings, specifications, or disciplines for full transparency and traceability.",
                              },
                              {
                                title: "Workflow Coordination",
                                desc: "We manage the entire communication chain — from contractor queries to design team responses — ensuring nothing slips through the cracks.",
                              },
                              {
                                title: "Turnaround Monitoring",
                                desc: "Our system monitors RFI response times, enforces accountability, and ensures that every clarification contributes to keeping the project on schedule.",
                              },
                              {
                                title: "Change Integration Support",
                                desc: "When RFIs lead to design or scope changes, we ensure they are properly reflected in documentation through a structured change control process.",
                              },
                            ].map((item, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ scale: 1.03, backgroundColor: "#1a1a1a" }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="bg-gray-900/70 border border-yellow-500/20 rounded-xl sm:p-6 p-2 shadow-sm hover:shadow-yellow-500/10 transition"
                              >
                                <h5 className="sm:text-sm font-semibold text-[#5f8b98] mb-2">
                                  {item.title}
                                </h5>
                                <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}


                      {activePreBox === "change" && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="space-y-12 bg-gradient-to-br from-[#0b0b0b] to-[#111] p-10 rounded-2xl border border-yellow-500/10 shadow-md"
                        >
                          {/* TITLE + CONTENT */}
                          <div className="space-y-6 text-center">
                            <h3 className="sm:text-3xl text-xl md:text-4xl font-bold text-[#976759]">
                              Comprehensive Change Comparison Analysis
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-lg leading-relaxed max-w-4xl mx-auto">
                              In complex engineering and construction projects, change is inevitable — but unmanaged change
                              can lead to delays, cost overruns, and scope creep. At{" "}
                              <span className="text-yellow-400 font-semibold">D2E Construction</span>, our Change Comparison
                              Analysis service provides a structured, analytical approach to tracking and evaluating design,
                              document, or scope changes across all project stages.
                            </p>
                            <p className="text-gray-400 text-xs sm:text-base leading-relaxed max-w-4xl mx-auto">
                              We methodically compare revisions, drawings, and technical documentation to identify what has
                              changed, assess its impact, and ensure every update is accurately reflected throughout the
                              project. This process empowers decision-makers to maintain alignment, reduce risk, and
                              ensure seamless coordination across disciplines.
                            </p>
                          </div>

                          {/* SUBTITLE */}
                          <h4 className="sm:text-2xl font-semibold text-[#976759] text-center mt-12">
                            What We Offer
                          </h4>

                          {/* GRID BOXES */}
                          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                            {[
                              {
                                title: "Document & Drawing Comparison",
                                desc: "Identify additions, deletions, or modifications between different versions of technical drawings or documentation with complete traceability.",
                              },
                              {
                                title: "Impact Analysis",
                                desc: "Evaluate how proposed or actual changes affect project scope, schedule, cost, procurement, and on-site execution phases.",
                              },
                              {
                                title: "Change Logs & Reporting",
                                desc: "Maintain detailed and audit-ready records of all project changes — including sources, timestamps, and responsible parties.",
                              },
                              {
                                title: "Integration with Change Control Process",
                                desc: "Ensure every approved change seamlessly feeds into the formal project management system for control and transparency.",
                              },
                            ].map((item, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ scale: 1.03, backgroundColor: "#1a1a1a" }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="bg-gray-900/70 border border-yellow-500/20 rounded-xl p-6 shadow-sm hover:shadow-yellow-500/10 transition"
                              >
                                <h5 className="sm:text-xl font-semibold text-[#5f8b98] mb-2">
                                  {item.title}
                                </h5>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}


                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT PANEL */}
      <div className="sm:w-[25%] w-[35%]  bg-white sm:border-b-8 flex sm:border-r-8 flex-col p-2 sm:p-4 sm:border-[#41b0ce] h-screen sticky top-0 z-20">
        <h3 className="sm:text-2xl font-bold text-[#976759] mb-4 text-center">
          Our Services
        </h3>

        <div className="flex flex-col gap-4 justify-between  sm:h-full">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => {
                setActiveService(service);
                setActivePreBox(null);
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer p-4 rounded-lg border transition-all flex flex-col justify-center ${activeService.id === service.id
                ? "bg-yellow-500/10 border-[#5f8b98]"
                : "bg-gray-900 border-gray-700 hover:border-yellow-400/60"
                }`}
            >
              <h4
                className={`font-semibold text-xs  sm:text-base mb-1 text-center ${activeService.id === service.id
                  ? "text-[#5f8b98]"
                  : "text-white"
                  }`}
              >
                {service.title}
              </h4>
              <p className="text-gray-400 text-xs text-center leading-snug">
                {service.short}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
