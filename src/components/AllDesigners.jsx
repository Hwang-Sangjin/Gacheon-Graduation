import DesignerCard from "./DesignerCard";
import { motion, AnimatePresence } from "framer-motion";
import { AllDesignersData, DesignersData } from "../constants";
import React, { useState } from "react";

const AllDesigners = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4
      }
    }
  };

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
              onClick={() => setModalIsOpen(true)}
            />
          ) : (
            <DesignerCard title="" data={DesignersData[name]} onClick={() => {
              setModalIsOpen(true)
            }} index={index} />
          );
        })}
        <AnimatePresence>
        {modalIsOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="modal-overlay"
          >
            <motion.div
              className="modal"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Modal Title</h5>
              </div>
              <div className="modal-content">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                fringilla.
              </div>
              <div className="modal-footer">
                <button
                  className="modal-button"
                  onClick={() => setModalIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};

export default AllDesigners;
