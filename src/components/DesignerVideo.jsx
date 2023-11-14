import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import DesignerVideoSRC from "../assets/designer_icon.mp4";

const DesignerVideo = () => {
  return (
    <div className="w-full mb-8">
      <Tilt>
        <motion.div
          variants={fadeIn("right", "spring", 5 * 0.5, 0.75)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full rounded-[20px] "
        >
          <video className="" muted autoPlay>
            <source
              className="w-full h-screen"
              src={DesignerVideoSRC}
              type="video/mp4"
            />
          </video>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default DesignerVideo;
