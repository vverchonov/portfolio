"use client";
import { MotionConfig, motion } from "framer-motion";

export default function PageHolder({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div style={{zIndex:2147483647}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <main className="m-auto w-11/12 md:w-6/12 bg-white mb-3 rounded-lg p-4 z-50">
          {children}
        </main>
      </motion.div>
    </MotionConfig>
  );
}
