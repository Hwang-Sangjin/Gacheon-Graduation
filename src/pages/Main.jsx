import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import Preloader from "../components/Preloader";
import { Controller, Scene } from "react-scrollmagic";
import { useState, useEffect, ref } from "react";
import Footer from "../components/Footer";
import MainImageSequence from "../MainSequence";
import StarsCanvas from "../components/StarsCanvas";
import { slideIn } from "../utils/motion";
import EarthCanvas from "../components/Earth";
import { Canvas } from "react-three-fiber";
import { BoxGeometry, MeshStandardMaterial } from "three";
import Main3D from "../components/Main3D";
import MainTitle from "../assets/Main_Title.png";

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
        <div className="relative z-0 bg-[#000000] h-full">
          <Controller>
            <Scene
              className="scrollmagic-pin-spacer-main"
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
          <Navbar blackColor={true} />
          <div className="h-screen w-full justify-center items-center">
            <img src={MainTitle} />
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Main;
