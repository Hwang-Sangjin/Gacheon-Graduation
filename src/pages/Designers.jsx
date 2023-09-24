
import {
    Navbar,
  } from "../components/index"
  import { motion } from "framer-motion";
  import { fadeIn, textVariant } from "../utils/motion";
  import { styles } from "../styles";
const Designers = () => {
    return ( 
        <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText}`}>Designers</h2>
            </motion.div>
        </div>
      </div>
    )
}
export default Designers
