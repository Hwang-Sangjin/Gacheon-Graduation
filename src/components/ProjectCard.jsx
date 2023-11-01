import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

import {useState} from "react";




const ProjectCard = ({  type, data, index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(type,data)
  
  return (
    
    <Tilt className="w-full mb-8">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full rounded-[20px] "
        onClick={handleOpen}
      >
        
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
