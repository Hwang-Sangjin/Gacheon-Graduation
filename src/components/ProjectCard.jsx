import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProjectCard = ({ type, data, index, name }) => {
  const [text, setText] = useState(false);
  const navigate = useNavigate();
  return (
    <Tilt className="w-full mb-10 mr-20">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full rounded-[20px]"
        whileHover={() => setText(true)}
        onHoverEnd={() => setText(false)}
      >
        <div className="md:w-[90%] sm:w-1/7  relative text-center">
          {type === "product" ? (
            <img
              className="project-card w-full h-full"
              src={text ? data.Image_Product_Hover : data.Image_Product}
              onClick={() => {
                navigate(`/${name}Product`);
              }}
            />
          ) : (
            <img
              className="project-card w-full h-full"
              src={text ? data.Image_Space_Hover : data.Image_Space}
              onClick={() => {
                navigate(`/${name}Space`);
              }}
            />
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
