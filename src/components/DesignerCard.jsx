import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import InstaImg from "../assets/Insta.jpg";
import BehanceImg from "../assets/Behance.jpg";
import BlogImg from "../assets/Blog.jpg";

import {useState} from "react";
import DesignerModal from "./DesignerModal";
import Modal from "@mui/material/Modal";


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

const DesignerCard = ({ title, data, index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full mb-8">
      <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full rounded-[20px] "
        onClick={handleOpen}
      >
        <div className="h-[2rem] text-3xl mb-4 font-['Hack-Bold']">{title}</div>
        <div className="md:w-3/4 sm:w-1/5">
          <img className="designer-card" src={data.Image_Color} />
          
        </div>
      </motion.div>
      </Tilt>
      <div className="mt-4 text-xl font-['Pretendard-SemiBold']">
            {data.Name_kor}
          </div>
          <div className="mt-1 text-xl font-['Pretendard-SemiBold']">
            {data.Name_eng}
          </div>
          <div className="mt-1 text-xs font-['Pretendard-Regular'] opacity-50">
            {data.Role}
          </div>
          <div className="mt-1 flex flex-row text-xs font-['Pretendard-Medium'] opacity-50">
            Email
            <div className="font-['Pretendard-Regular'] ml-4">{data.Email}</div>
          </div>
          <div className="mt-1 flex flex-row text-xs font-['Pretendard-Medium'] opacity-50">
            Link
            <div className="ml-5 flex flex-row">
              {data.Link_insta === "" ? null : (
                <img
                  className="w-4 mr-1 opacity-100 fill-[#535353]"
                  src={InstaImg}
                />
              )}
              {data.Link_Behance === "" ? null : (
                <img
                  className="w-4 mr-1 opacity-100 fill-[#535353]"
                  src={BehanceImg}
                />
              )}
              {data.Link_Blog === "" ? null : (
                <img
                  className="w-4 mr-1 opacity-100 fill-[#535353]"
                  src={BlogImg}
                />
              )}
            </div>
          </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <DesignerModal handleClose={handleClose} data={data}/>
      </Modal>
    </div>
  );
};

export default DesignerCard;
