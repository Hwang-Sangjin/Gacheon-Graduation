import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import DesignerVideoSRC from "../assets/motion.mp4";

const ProjectVideoCard = () => {
  return (
    <div className="w-full mb-8">
      <motion.div
        variants={fadeIn("right", "spring", 5 * 0.5, 0.75)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-3/4 h-[50%] relative text-center"
      >
        <video className="w-full h-[160%] object-scale-down" muted autoPlay>
          <source className=" " src={DesignerVideoSRC} type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
};

export default ProjectVideoCard;
