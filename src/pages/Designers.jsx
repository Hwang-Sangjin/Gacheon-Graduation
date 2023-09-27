import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import DesignerNavbar from "../components/DesignerNavbar";
import { useState, useEffect } from "react";

const Designers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <section className="relative w-full h-screen mx-auto">
          <div
            className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-5`}
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
          </div>
        </section>
      </div>
    </div>
  );
};
export default Designers;
