import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import Preloader from "../components/Preloader";
import { Controller, Scene } from "react-scrollmagic";
import { useState, useEffect, ref } from "react";
import Footer from "../components/Footer";
import ImageSequence from "../sequence";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false)

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
        <div className="relative z-0 bg-[#101010]">
          {done?<Navbar/>:null}
          <Controller>
            <Scene duration="10000" triggerHook="onLeave" pin>
              {progress => (
                <div style={{ height: "100vh", position: "relative" }}>
                  <ImageSequence ref={ref} progress={progress} />
                </div>
              )}
            </Scene>
          </Controller>
        </div>
      )}
      
    </div>
  );
};
export default Main;
