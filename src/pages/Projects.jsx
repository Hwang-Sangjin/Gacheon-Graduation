import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
const Projects = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <section className="relative w-full h-screen mx-auto">
          <div
            className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
          >
            <motion.div variants={textVariant()}>
              <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Projects;
