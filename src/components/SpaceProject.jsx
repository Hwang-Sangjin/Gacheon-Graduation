
import { motion, AnimatePresence } from "framer-motion";
import {  ProjectData, SpaceData } from "../constants";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Footer from "../components/Footer";

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

const SpaceProject = () => {
  return (
    <div className="mt-10 flex  flex-wrap gap-7">
      <div className="grid grid-cols-2 sm:grid-cols-4">
      {SpaceData.map((name, index) => {
          if (name === " ") return;
          return <ProjectCard type="space" data={ProjectData[name]} />
        })}
      </div>
      <Footer />
    </div>
  );
};

export default SpaceProject;
