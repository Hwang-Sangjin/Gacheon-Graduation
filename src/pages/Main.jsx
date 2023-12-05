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
import MainTitle from "../assets/Main_Title.png";
import { MainAllDesigners, DesignersData } from "../constants";
import { Tilt } from "react-tilt";

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
          <Navbar blackColor={true} />
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
          <div className="h-full w-full justify-center items-center">
            <img className="m-auto block mt-20" src={MainTitle} />
            <div className="grid grid-cols-2 sm:grid-cols-4 m-20 mx-48">
              {MainAllDesigners.map((e) => {
                return (
                  <div className="items-center justify-center flex flex-col border-2">
                    <Tilt>
                      <img
                        className="grayscale hover:grayscale-0 hover:scale-110 "
                        src={DesignersData[`${e}`].Image_Icon}
                      />
                    </Tilt>
                    <div className="text-[#ffffff] font-[Pretendard-Regular] mb-11">
                      {DesignersData[`${e}`].Name_eng}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer blackColor={true} Visit={false} />
        </div>
      )}
    </div>
  );
};
export default Main;
