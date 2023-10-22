import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
const DesignerCard = ({ title, data, index }) => {
  return (
    <Tilt className=" w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full rounded-[20px] "
      >
        <div className="h-[2rem] text-3xl mb-4">{title}</div>
        <div className="md:w-3/4 sm:w-1/5">
          <img className="designer-card" src={data.Image_Color} />
          <div className="mt-2">{data.Name_kor}</div>
          <div>{data.Name_eng}</div>
          <div  className="text-xs">{data.Role}</div>
          <div>Email {data.Email}</div>
          <div>Link {data.Name_kor}</div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default DesignerCard;
