import { Github, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import "gradient.css";

export default function ComingSoonLanding() {
  useEffect(() => {
    document.documentElement.classList.add("animated-gradient-bg");
    return () => document.documentElement.classList.remove("animated-gradient-bg");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
      <div className="absolute top-10 text-center">
        <div className="text-3xl font-bold tracking-wide">YourLogo</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl mt-20"
      >
        <h1 className="text-5xl font-semibold tracking-wide mb-4">Something Great Is Coming</h1>
        <p className="text-gray-300 mb-12 text-lg">
          We're working hard behind the scenes. Our full experience will be launching soon.
        </p>

        <div className="flex justify-center gap-6 text-gray-300 text-3xl mb-10">
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
            <Twitter size={28} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            <Instagram size={28} />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-white transition-colors">
            <Github size={28} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white focus:outline-none w-64"
          />
          <button className="px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-200 transition">
            Notify Me
          </button>
        </div>
      </motion.div>

      <footer className="absolute bottom-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}