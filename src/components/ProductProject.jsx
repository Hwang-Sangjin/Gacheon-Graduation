import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData, ProductData } from "../constants";
import React, { useLayoutEffect, useState } from "react";
import DesignerVideo from "./DesignerVideo";
import Footer from "../components/Footer";
import ProjectVideoCard from "./ProjectVideoCard";
import { useNavigate } from "react-router-dom";

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

const ProductProject = () => {
  let images = [];
  const hoverImgPreload = () => {
    ProductData.map((e, i) => {
      images[i] = new Image();
      images.src = ProjectData[e];
    });
  };

  useLayoutEffect(() => {
    hoverImgPreload();
  }, []);

  return (
    <div className="mt-10 flex  flex-wrap gap-7">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {ProductData.map((name, index) => {
          if (name === " ") return <ProjectVideoCard />;
          return (
            <ProjectCard name={name} type="product" data={ProjectData[name]} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ProductProject;
