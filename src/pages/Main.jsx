import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import Preloader from "../components/Preloader";
import { Controller, Scene } from "react-scrollmagic";

const Main = () => {


  return (
    <div className="relative z-0 bg-primary">
            <Preloader/>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <section className="relative h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 ">
          <div
            className={`px-2 sm:px-12 relative inset-0 top-[120px]  mx-auto flex flex-col items-start gap-5`}
          >
            <motion.div variants={textVariant()}>
              <h2 className="text-black font-black text-[60px]">Main</h2>
            </motion.div>
            <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
          {progress => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Main;
