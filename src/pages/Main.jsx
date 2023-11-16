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
import { useFBX } from "@react-three/drei";

const Main = () => {
  const [loading, setLoading] = useState(false);

  const fbx = useFBX("./FBX/KimDongJun/KimDongJun_model.fbx");

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
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="main-canvas"
          >
            <Canvas>
              <ambientLight intensity={0.1} />
              <directionalLight color="red" position={[0, 0, 5]} />
              <primitive object={fbx} />
            </Canvas>
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default Main;
