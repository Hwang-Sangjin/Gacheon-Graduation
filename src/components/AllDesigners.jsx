import DesignerCard from "./DesignerCard";
import { motion, AnimatePresence } from "framer-motion";
import { AllDesignersData, DesignersData } from "../constants";
import React, { useState } from "react";
import Modal from "./DesignerModal";

const AllDesigners = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const close = () => setModalIsOpen(false);
  const open = () => setModalIsOpen(true);

  return (
    <div className="mt-10 flex  flex-wrap gap-7">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {AllDesignersData.map((name, index) => {
          if (name === " ") return;
          return name === "KimGeonRyeong" ? (
            <DesignerCard
              title="All_Prompts"
              data={DesignersData[name]}
              index={index}
              onClick={() => (modalIsOpen? close(): open())}
            />
          ) : (
            <DesignerCard title="" data={DesignersData[name]} onClick={() => (modalIsOpen? close(): open())} index={index} />
          );
        })}
       {modalIsOpen && <Modal modalIsOpen={modalIsOpen} handleClose={close}/>}
      </div>
    </div>
  );
};

export default AllDesigners;
