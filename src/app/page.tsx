"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* SVG background */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1280 800"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="g1" cx="60%" cy="30%" r="70%">
              <stop stopColor="#6366f1" stopOpacity="0.32" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="g2" cx="30%" cy="80%" r="92%">
              <stop stopColor="#22d3ee" stopOpacity="0.17" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="900" cy="220" r="380" fill="url(#g1)" />
          <circle cx="260" cy="670" r="310" fill="url(#g2)" />
        </svg>
      </div>
      {/* Foreground content */}
      <motion.div
        className="z-10 flex flex-col items-center justify-center text-center w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-sky-400 to-emerald-400 mb-4 drop-shadow-lg">
          Unlock Smart <span className="whitespace-nowrap">Marketing Insights</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-100 max-w-2xl mx-auto mb-8">
          Track growth, boost conversions, and visualize your campaigns—all in a beautiful, AI-powered dashboard that feels like magic.
        </p>
        <MotionLink
          href="/overview"
          className="btn text-lg px-8 py-3 bg-gradient-to-r from-indigo-500 to-emerald-400 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
          whileTap={{ scale: 0.93 }}
          style={{ textDecoration: "none" }}
        >
          🚀 Go To Dashboard
        </MotionLink>
      </motion.div>
    </div>
  );
}
