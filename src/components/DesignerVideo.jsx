import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import DesignerVideoSRC from "../assets/motion.mp4";

const DesignerVideo = () => {
  return (
    <div className="w-full h-full mb-8">
      <motion.div
        variants={fadeIn("right", "spring", 5 * 0.5, 0.75)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-4/5 rounded-[20px] mt-12"
      >
        <video className="" muted autoPlay>
          <source
            className="w-full h-screen"
            src={DesignerVideoSRC}
            type="video/mp4"
          />
        </video>
      </motion.div>
    </div>
  );
};

export default DesignerVideo;
