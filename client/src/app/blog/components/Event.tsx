"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <main className="flex items-center justify-center min-h-screen  text-green-600 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-lg w-full animate-pulse"
      >
        {/* Logo or Blog Name */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 "
        >
          Our News section is Coming Soon 🚀
        </motion.h1>

        <p className="text-lg text-green-600 mb-6">
          We’re working hard to bring you amazing content. Stay tuned!
        </p>

     
        {/* Email Subscription - you can add it later here */}
      </motion.div>
    </main>
  );
}
