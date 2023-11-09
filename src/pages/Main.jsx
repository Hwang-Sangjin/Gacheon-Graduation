import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import Preloader from "../components/Preloader";
import { Controller, Scene } from "react-scrollmagic";
import { useState, useEffect, ref } from "react";
import Footer from "../components/Footer";
import MainImageSequence from "../MainSequence";

const Main = () => {
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
        <div className="relative z-0 bg-[#000000]">
          <Controller>
            <Scene
              duration="10000"
              triggerHook="onLeave"
              pin={{ pushFollowers: false }}
            >
              {(progress) => (
                <div style={{ height: "100vh", position: "relative" }}>
                  <MainImageSequence ref={ref} progress={progress} />
                </div>
              )}
            </Scene>
          </Controller>
          <Navbar />
        </div>
      )}
    </div>
  );
};
export default Main;
