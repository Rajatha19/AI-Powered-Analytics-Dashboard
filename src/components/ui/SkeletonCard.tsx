"use client";
import { motion } from "framer-motion";

export default function SkeletonCard() {
  return (
    <motion.div
      className="h-28 w-full bg-gray-200 dark:bg-gray-700 rounded"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
}
