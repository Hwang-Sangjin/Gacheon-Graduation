import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

import {useState} from "react";




const ProjectCard = ({  type, data, index }) => {
  const [text, setText] = useState(false);


  console.log(type,data)

  return (
    
    <Tilt className="w-full mb-10">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full rounded-[20px]"
        whileHover={() => setText(true)}
        onHoverEnd={()=> setText(false)}
      >
        <div className="w-3/4 w-1/5 relative text-center">
            {type==="product"? 
            <img className="project-card w-full h-full" src={data.Image_Product} />: 
            <img className="project-card w-full h-full" src={data.Image_Space} />}
            {text? <div className="text-[#FFFFFF] text-2xl font-['Hack-Regular'] project-card-text">{type==="product"? data.Title_Product: data.TitleSpace}</div>:null}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
