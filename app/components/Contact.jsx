"use client";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ import style
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ track submission state
  return (
    <section
      id="contact"
      className="relative min-h-screen text-white px-6 md:px-20 py-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 -z-10"
        style={{ backgroundImage: "url('/background4.jpg')" }}
      />
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#976759] mb-4">
          Contact Us
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We’re here to help you turn your construction vision into reality.
          Whether you’re planning a new build or need support with ongoing projects,
          our team is just a message away.
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* CONTACT FORM */}
        <motion.form
          onSubmit={async (e) => {
            e.preventDefault();
             setIsSubmitting(true); 
            const form = e.target;
            const data = {
              name: form.name.value,
              email: form.email.value,
              subject: form.subject.value,
              message: form.message.value,
            };

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });
  
              const result = await res.json();
              if (result.success) {
                toast.success("✅ Your message has been sent successfully!");
                form.reset();
              } else {
  
                toast.error("❌ Something went wrong. Please try again.", {
                  transition: Bounce,
                });
              }
              
            } catch (error) {
                        toast.error("⚠️ Network error. Please try again.", {
                transition: Bounce,
              });
            } finally {
              setIsSubmitting(false); 
            }


          }}
          className="space-y-5 bg-gray-900/40 p-8 rounded-2xl border border-yellow-500/10 shadow-lg backdrop-blur-md"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name <span className="text-yellow-400">*</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email <span className="text-yellow-400">*</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message <span className="text-gray-500 text-xs">(optional)</span>
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              className="w-full bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
            ></textarea>
          </div>

           <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 
              ${
                isSubmitting
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-[#5f8b98] hover:bg-blue-400 text-black"
              }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </motion.form>


        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl border border-yellow-500/10 shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107747.63547298982!2d79.07251014999999!3d21.16108585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1762494729935!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      {/* GET IN TOUCH SECTION */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
    </section>
  );
}
