import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import ProjectNavbar from "../components/ProjectNavbar";
import Footer from "../components/Footer";
import ProductProject from "../components/ProductProject";
import SpaceProject from "../components/SpaceProject";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Product");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar  blackColor={false}/>
            <section className="relative h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 ">
              <div
                className={`px-2 sm:px-12 relative inset-0 top-[120px]  mx-auto flex flex-col items-start gap-5`}
              >
                <motion.div variants={textVariant()}>
                  <h2 className="font-['Hack-Bold'] font-black text-[60px]">
                    Project
                  </h2>
                  <p className="text-[16px] text-secondary font-['Pretendard-Regular']">
                    {selectedCategory === "Product"
                      ? "제품 디자인 지도 교수님 - 강현석"
                      : "공간 디자인 지도 교수님 - 지환수"}
                  </p>
                </motion.div>
                <ProjectNavbar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                {selectedCategory === "Product" ? (
                  <ProductProject />
                ) : <SpaceProject/>
                }
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
export default Projects;
