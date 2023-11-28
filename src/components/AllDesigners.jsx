import DesignerCard from "./DesignerCard";
import { motion, AnimatePresence } from "framer-motion";
import { AllDesignersData, DesignersData } from "../constants";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Preloader from "./Preloader";
import Footer from "../components/Footer";
import DesignerVideo from "./DesignerVideo";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AllDesigners = () => {
  return (
    <div className="mt-10 flex  flex-wrap gap-7  m-auto justify-between">
      <div className="grid grid-cols-2 sm:grid-cols-4  m-auto justify-between">
        {AllDesignersData.map((name, index) => {
          if (name === " ") return <DesignerVideo />;
          return name === "KimGeonRyeong" ? (
            <DesignerCard
              title="All_Prompts"
              data={DesignersData[name]}
              index={index}
            />
          ) : (
            <DesignerCard title="" data={DesignersData[name]} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default AllDesigners;
