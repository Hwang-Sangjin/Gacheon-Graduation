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
  console.log(data.Image_Project_Product);
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="relative rounded-2xl shadow flex flex-row  justify-center items-center"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <img className="w-full" src={data.Image_Modal} />
      <Tilt className="absolute left-[51%] top-[62%] w-[20%]">
        <img src={data.Image_Project_Product} />
      </Tilt>
      {data.Image_Project_Product === "" ? (
        <Tilt className="absolute left-[51%] top-[62%] w-[20%]">
          <img src={data.Image_Project_Space} />
        </Tilt>
      ) : (
        <Tilt className="absolute left-[75%] top-[62%] w-[20%]">
          <img src={data.Image_Project_Space} />
        </Tilt>
      )}
    </motion.div>
  );
};

export default DesignerModal;
