import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState, useEffect,ref } from "react";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import { Controller, Scene } from "react-scrollmagic";
import AboutImageSequence from "../AboutSequence";

const About = () => {
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
          <Navbar blackColor={true}/>
          <Controller>
            <Scene duration="10000" triggerHook="onLeave" pin>
              {progress => (
                <div style={{ height: "100vh", position: "relative" }}>
                  <AboutImageSequence ref={ref} progress={progress} />
                </div>
              )}
            </Scene>
          </Controller>
          <Footer />
        </div>
      )}
    </div>
  );
};
export default About;
