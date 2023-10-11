import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import DesignerNavbar from "../components/DesignerNavbar";
import { useState, useEffect } from "react";
import AllDesigners from "../components/AllDesigners";
import Committee from "../components/CommitteeDesigners";
import MainProduct from "../components/MainProductDesigners";
import SpaceDesigners from "../components/SpaceDesigners";

const Designers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <section className="relative h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 ">
          <div
            className={`px-12 relative inset-0 top-[120px]  mx-auto flex flex-col items-start gap-5`}
          >
            <motion.div variants={textVariant()}>
              <h2 className={`${styles.sectionHeadText}`}>Designers</h2>
              <p className={`${styles.sectionSubText} `}>
                2023 Gachon University Industrial Design Dept. Graduation
                Exhibition
              </p>
            </motion.div>
            <DesignerNavbar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            {selectedCategory === "All" ? (
              <AllDesigners />
            ) : selectedCategory === "Committee" ? (
              <Committee />
            ) : selectedCategory === "Product" ? (
              <MainProduct />
            ) : (
              <SpaceDesigners />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Designers;
