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
      className="relative rounded-2xl shadow dark:bg-gray-700 flex flex-row"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <img src={data.Image_Full} className="w-80"></img>
      <div className="flex flex-col rounded-2xl w-80 bg-[#FFF16F]">
        <div className="inline-flex rounded-xl justify-center m-4 px-7 w-12 font-['Pretendard-Medium'] bg-white">
          ICON
        </div>
        <div className="basis-1/2 ">
          <img src={data.Image_Icon} />
        </div>
        <div className="basis-1/2 flex justify-center content-center h-full">
          <img
            className="object-contain w-[80%]  h-[90%]"
            src={data.Image_Icon_Comment}
          />
        </div>
      </div>
      <div className="flex flex-col w-[40rem] ">
        {data.Image_Project_Product === "" &&
        data.Image_Project_Space === "" ? (
          <>
            <div className="basis-[100%] rounded-2xl bg-[#E4E4E4]">
              <div className="inline-flex rounded-xl justify-center m-4 px-7 w-21 font-['Pretendard-Medium'] bg-white">
                COMMENT
              </div>
              <div className="flex justify-center content-center  h-[70%]">
                <img
                  className="object-contain w-[80%]"
                  src={data.Image_Comment_Comment}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="basis-1/2 rounded-2xl bg-[#E4E4E4]">
              <div className="inline-flex rounded-xl justify-center m-4 px-5 w-21 font-['Pretendard-Medium'] bg-white">
                COMMENT
              </div>
              <div className="flex justify-center content-center h-[70%]">
                <img
                  className="object-contain w-[80%]"
                  src={data.Image_Comment_Comment}
                />
              </div>
            </div>
            <div className="basis-1/2 rounded-2xl  flex-col bg-[#BEBEBE]">
              <div className="inline-flex rounded-xl m-4 px-5 font-['Pretendard-Medium'] bg-white">
                PROJECT
              </div>
              <div className="inline-flex flex-row">
                <div className="basis-1/2 p-4">
                  <Tilt>
                    <img src={data.Image_Project_Product} />
                  </Tilt>
                  <div className="text-[#171717] text-lg font-['Pretendard-SemiBold'] mt-3">
                    {data.Title_Space}
                  </div>
                </div>
                <div className="basis-1/2 p-4">
                  <Tilt>
                    <img src={data.Image_Project_Space} />
                  </Tilt>
                  <div className="text-[#171717] text-lg font-['Pretendard-SemiBold'] mt-3">
                    {data.Title_Product}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default DesignerModal;
