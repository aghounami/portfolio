import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import '../global.css'
import { MeteorsDemo } from "../components/button/mouvebutton/mouveComponent";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
      once: true,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className="text-center flex justify-center items-center"
      id="home"
    >
      <MeteorsDemo />
    </motion.div>
  );
}
