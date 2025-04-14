import { motion } from "framer-motion";

export default function TemplateSection() {
  return (
    <section className="mt-20 bg-white rounded-2xl shadow-sm p-8 relative opacity-10 hover:opacity-100 transition-opacity duration-300 overflow-hidden max-w-[920px] mx-auto">
      <div className="flex items-center gap-2 mb-8 p-2 bg-gray-50 rounded-lg w-fit">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          📝
        </motion.span>
        <h2 className="text-[15px] font-medium text-gray-900 m-0">
          Template Gallery
        </h2>
      </div>

      <motion.h2
        className="text-3xl font-semibold text-gray-900 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ⚡ Supercharge your operations with AI Agents
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          className="bg-gray-50 p-6 rounded-xl cursor-pointer relative group transition-all duration-300 z-0"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Popup message with background blur */}
          <div className="absolute top-60 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md text-gray-800 text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300 shadow-md">
            Start with one of our pre-made agent templates for an easy,
            personalized setup.
          </div>

          <div className="w-12 h-12 rounded-xl bg-[#6c5ce7] flex items-center justify-center text-2xl mb-4">
            🔍
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Apla, the Prospect Researcher
          </h3>
          <p className="text-[15px] text-gray-600 mb-4">
            Prepare detailed and nuanced research for every account.
          </p>
          <motion.button
            className="flex items-center gap-2 text-[#6c5ce7] text-[15px] font-medium"
            whileHover={{ x: 5 }}
          >
            Get started <span>→</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-6 rounded-xl cursor-pointer relative group"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="w-12 h-12 rounded-xl bg-[#00b894] flex items-center justify-center text-2xl mb-4">
            📧
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Lima, the Lifecycle Marketer
              </h3>
              <p className="text-[15px] text-gray-600 mb-4">
                Send high-quality hyper-personalized emails, to boost activation
                rates
              </p>
              <motion.button
                className="flex items-center gap-2 text-[#6c5ce7] text-[15px] font-medium"
                whileHover={{ x: 5 }}
              >
                Get started <span>→</span>
              </motion.button>
            </div>
            <span className="px-3 py-1 bg-[#e6fff0] text-[#00875a] rounded-full text-xs font-medium">
              Recommended
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="I want an agent that..."
          className="w-full p-4 border border-gray-200 rounded-lg text-[15px] mb-4 focus:outline-none focus:border-[#6c5ce7]"
        />
        <div className="text-[13px] text-gray-600 mb-3">Some ideas for you</div>
        <div className="flex gap-2 flex-wrap">
          <motion.button
            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[13px] text-gray-600 whitespace-nowrap hover:bg-gray-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Identify stalled deals for re-engagement
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[13px] text-gray-600 whitespace-nowrap hover:bg-gray-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Automate onboarding tasks
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[13px] text-gray-600 whitespace-nowrap hover:bg-gray-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Identify common ticket trends
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[13px] text-gray-600 whitespace-nowrap hover:bg-gray-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Automate security incident response
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
