import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <motion.div
        className="flex justify-center gap-3 mb-16 relative items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Horizontal Line Behind */}
        <div className="absolute  w-22   mt-8.5 mr-[727px]  rotate-145 h-[1px] bg-[#E3E3E3] top-1/2 transform -translate-y-1/2 z-0" />
        <div className="absolute w-24   mt-7 mr-[734px]  rotate-145 h-[1px] bg-[#E3E3E3] top-1/2 transform -translate-y-1/2 z-0" />

        <div className="absolute w-3xl  h-[1px] ml-28 bg-[#E3E3E3] top-1/2 transform -translate-y-1/2 z-0" />
        <div className="absolute w-3xl h-[1px] ml-28 mt-2 bg-[#E3E3E3] top-1/2 transform -translate-y-1/2 z-0" />
        <div className="absolute w-32 mt-14  mr-[940px]  h-[1px] bg-[#E3E3E3] top-1/2 transform -translate-y-1/2 z-0" />
        <div className="absolute w-32 mt-15 mr-[928px]  h-[1px] bg-[#E3E3E3] top-1/2 transform -translate-y-1/2 z-0" />

        {/* Buttons */}
        <button className="relative z-10 px-4 py-2 bg-white text-gray-600 text-[15px] rounded-full font-medium shadow-sm">
          What's new?
        </button>
        <button className="relative z-10 px-4 py-2 bg-white text-gray-600 text-[15px] rounded-full font-medium shadow-sm flex items-center gap-1">
          Introducing Workforce
          <span className="text-lg">→</span>
        </button>
      </motion.div>

      <div className="text-center relative py-12 max-w-[920px] mx-auto">
        <motion.div
          className="absolute left-[5%] top-[35%] w-[180px] h-[90px] border-2 border-[#e6e6fa] border-t-0 border-r-0 rounded-bl-[200px] origin-[50%_0] pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.div
          className="absolute left-[2%] top-[25%] w-[56px] h-[56px] bg-[#6c5ce7] rounded-full flex items-center justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            x: { duration: 0.8, delay: 0.2 },
            opacity: { duration: 0.8, delay: 0.2 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/636cad09a1159553a45e8ba1/65e3f5bd99bab6d0ff49f3a8_avatar-1.svg"
            alt="Robot"
            className="w-8 h-8"
          />
        </motion.div>

        <motion.h1
          className="text-[56px] font-bold text-[#1a1a1a] mb-6 leading-[1.15]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build teams of <span className="text-[#6c5ce7]">AI agents</span> that
          <br />
          deliver human-quality work
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 max-w-[600px] mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ops teams can build and manage an entire AI workforce in one powerful
          visual platform.
        </motion.p>

        <div className="flex gap-3 justify-center mb-12">
          <motion.button
            className="px-6 py-3 rounded-lg text-[15px] font-medium bg-[#6c5ce7] text-white shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Try for free
          </motion.button>
          <motion.button
            className="px-6 py-3 rounded-lg text-[15px] font-medium bg-white text-gray-700 shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Request a demo
          </motion.button>
        </div>

        <div className="flex gap-3 justify-center">
          <motion.button
            className="px-4 py-2 bg-white text-[15px] text-gray-600 rounded-full font-medium shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Getting started
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-white text-[15px] text-gray-600 rounded-full font-medium shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            AI Agents
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-white text-[15px] text-gray-600 rounded-full font-medium shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            AI Tools
          </motion.button>
        </div>

        <motion.div
          className="absolute right-[5%] bottom-[35%] w-[180px] h-[90px] border-2 border-[#e6e6fa] border-t-0 border-r-0 rounded-bl-[200px] origin-[50%_0] pointer-events-none rotate-[150deg]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.div
          className="absolute right-[2%] bottom-[25%] w-[56px] h-[56px] bg-[#6c5ce7] rounded-full flex items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, 10, 0],
          }}
          transition={{
            x: { duration: 0.8, delay: 0.2 },
            opacity: { duration: 0.8, delay: 0.2 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/636cad09a1159553a45e8ba1/65e3f5bd99bab6d0ff49f3a8_avatar-1.svg"
            alt="Robot"
            className="w-8 h-8"
          />
        </motion.div>
      </div>
    </>
  );
}
