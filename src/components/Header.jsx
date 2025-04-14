import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold">Relevance AI</span>
      </div>
      <nav className="flex gap-8 items-center">
        <a className="text-[15px] text-gray-600 font-medium hover:text-[#6c5ce7] cursor-pointer">
          Product
        </a>
        <a className="text-[15px] text-gray-600 font-medium hover:text-[#6c5ce7] cursor-pointer">
          Function
        </a>
        <a className="text-[15px] text-gray-600 font-medium hover:text-[#6c5ce7] cursor-pointer">
          Agents
        </a>
        <a className="text-[15px] text-gray-600 font-medium hover:text-[#6c5ce7] cursor-pointer">
          Resources
        </a>
        <a className="text-[15px] text-gray-600 font-medium hover:text-[#6c5ce7] cursor-pointer">
          Enterprise
        </a>
        <a className="text-[15px] text-gray-600 font-medium hover:text-[#6c5ce7] cursor-pointer">
          Pricing
        </a>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-5 py-2 text-[15px] rounded-lg font-medium text-gray-700"
        >
          Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-5 py-2 text-[15px] rounded-lg font-medium bg-[#6c5ce7] text-white"
        >
          Sign Up
        </motion.button>
      </nav>
    </header>
  );
}
