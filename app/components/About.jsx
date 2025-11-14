"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      id: 1,
      title: "Integrity & Trust",
      desc: "We believe in transparency, honesty, and accountability. Our clients trust us because we deliver what we promise — every time.",
      icon: "/Trust.png",
    },
    {
      id: 2,
      title: "Innovation in Construction",
      desc: "We embrace technology and modern construction practices to enhance efficiency, accuracy, and sustainability in every project.",
      icon: "/innovation.png",
    },
    {
      id: 3,
      title: "Quality & Precision",
      desc: "Every detail matters. From concept to completion, we maintain the highest standards to ensure durable and flawless results.",
      icon: "/Quality.png",
    },
    {
      id: 4,
      title: "Collaboration & Partnership",
      desc: "We work as an extension of our clients’ teams — understanding their goals, adapting to challenges, and achieving shared success together.",
      icon: "/teamwork.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -8,
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(255, 215, 0, 0.15)",
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };


  return (

    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="min-h-screen text-white py-20 px-10 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0                                                                "
        style={{ backgroundImage: "url('/background2.png')" }}
      />

      {/* HERO / INTRO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl mx-auto text-center mb-20"
      >
        <h1 className="text-5xl font-bold text-black mb-6">
          About D2E Construction
        </h1>
        <p className="text-gray-800 text-lg leading-relaxed">
          D2E Construction is more than just a construction company — we are a
          trusted partner committed to transforming visions into structures that
          inspire. With a focus on precision, technology, and collaboration, we
          bring expertise to every project we undertake. From residential
          developments to large-scale commercial builds, our mission is to
          deliver excellence through innovation and integrity.
        </p>
      </motion.div>

      {/* OUR MISSION SECTION */}
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#976759] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our mission is to redefine construction by blending craftsmanship
            with cutting-edge digital solutions. We aim to deliver projects that
            exceed expectations — on time, on budget, and with uncompromised
            quality. Through collaboration and innovation, we empower clients,
            architects, and engineers to build smarter, safer, and stronger.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg"
        >
          <Image src="/mission.png" alt="Our Mission" fill className="object-cover" />
        </motion.div>
      </div>

      {/* OUR VISION SECTION */}
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg order-1 md:order-none"
        >
          <Image src="/structural.png" alt="Our Vision" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#976759] mb-6">
            Our Vision
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We envision a future where construction is more connected, digital,
            and sustainable. Our goal is to become a benchmark of excellence —
            where design meets technology, and innovation drives progress. We
            strive to be the partner of choice for clients who value reliability,
            transparency, and results that last.
          </p>
        </motion.div>
      </div>

      {/* CLIENTS & TESTIMONIALS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 m-16  items-center">
        {/* LEFT — OUR CLIENTS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#976759] mb-4">Our Clients</h2>
          <p className="text-gray-800 text-sm leading-relaxed max-w-sm">
            We proudly work with individuals, builders, and organizations who trust our quality and commitment. Our relationships are built on reliability, transparency, and results.
          </p>
        </motion.div>


        {/* RIGHT — TESTIMONIAL SLIDER (TEXT ONLY) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#5f8b98] mb-4">Testimonials</h2>
          <div className="overflow-hidden relative h-20">
            <motion.div
              animate={{ y: [0, -80, -160, -240, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="flex flex-col gap-6 text-sm text-gray-800"
            >
              <span>“Professional, fast, and reliable. D2E Construction delivers exactly what they promise.”</span>
              <span>“Their quality and precision are unmatched. Highly recommended.”</span>
              <span>“From planning to execution, the entire process was smooth and transparent.”</span>
              <span>“Amazing work ethic — they treat every project with utmost importance.”</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* END CLIENTS & TESTIMONIALS */}

      {/* CORE VALUES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-[#5f8b98] mb-10">
          Our Core Values
        </h2>
        <p className="text-gray-800 leading-relaxed text-lg max-w-3xl mx-auto mb-16">
          Every project we deliver is guided by our core values — principles that
          define how we work, collaborate, and build trust. These values form the
          foundation of our success and our lasting relationships with clients
          and partners.
        </p>
      </motion.div>

      {/* VALUES GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto py-12"
      >
        {values.map((v) => (
          <motion.div
            key={v.id}
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#0b0b0b] border border-[#2a2a2a] rounded-2xl p-8 text-center 
                     shadow-md hover:border-yellow-500/50 transition-all duration-300 
                     backdrop-blur-sm"
          >
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src={v.icon}
                alt={v.title}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#976759] mb-3 tracking-wide">
              {v.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* TRUSTED PARTNER SECTION */}
      <div className="max-w-5xl mx-auto text-center mt-28">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#5f8b98] mb-6"
        >
          Building Trust. Designing the Future.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-800 text-lg leading-relaxed"
        >
          At D2E Construction, we don’t just construct buildings — we build
          relationships. Our reputation as a trusted partner in construction and
          design is founded on consistent delivery, honest communication, and a
          shared passion for excellence. Together, we’re shaping spaces that
          stand the test of time.
        </motion.p>
      </div>
    </motion.section>
  );
}
