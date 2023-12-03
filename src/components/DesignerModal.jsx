import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { ProductData } from "../constants";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const DesignerModal = ({ data }) => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="relative rounded-2xl shadow flex flex-row w-[70%]"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <img src={data.Image_Modal} />
      <Tilt className="absolute left-[51%] top-[62%] w-[20%]">
        <img src={data.Image_Project_Product} />
      </Tilt>
      <Tilt className="absolute left-[75%] top-[62%] w-[20%]">
        <img src={data.Image_Project_Space} />
      </Tilt>
    </motion.div>
  );
};

export default DesignerModal;
