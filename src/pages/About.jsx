import { Navbar } from "../components/index";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState, useEffect, ref } from "react";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import { Controller, Scene } from "react-scrollmagic";
import AboutImageSequence from "../AboutSequence";
import { TypeAnimation } from "react-type-animation";
import { AboutCardData, AboutPictureImage } from "../constants";
import { Tilt } from "react-tilt";
import ReactCardFlip from "react-card-flip";
import About_1 from "../assets/about/About_1.png";
import About_2 from "../assets/about/About_2.png";

import About_4 from "../assets/about/about-3.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1,  transition: { duration: 0.3 }, y:0},
  hidden: { opacity: 0.8,  y: 300 },
};

const ServiceCard = ({ index, Title, Image, Text }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full  p-[1px] rounded-[20px] shadow-card"
    >
      <img
        src={Image}
        alt="web-development"
        className="w-full w-full object-contain"
      />
    </motion.div>
  </Tilt>
);
const ServiceCardBack = ({ index, Title, ImageBack, Text }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full  p-[1px] rounded-[20px] shadow-card"
    >
      <img
        src={ImageBack}
        alt="web-development"
        className="w-full w-full object-contain"
      />
    </motion.div>
  </Tilt>
);

const ImageCard = ({ imageSrc }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="flex flex-row flex-1 "
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <img className="flex flex-row flex-1 " src={imageSrc} />
    </motion.div>
  );
};

const About = () => {
  const [loading, setLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    console.log("!!!");
    setIsFlipped(!isFlipped);
  };

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
          <Navbar blackColor={true} />
          <Controller>
            <Scene duration="400%" triggerHook="onLeave" pin>
              {(progress) => (
                <div style={{ height: "100vh", position: "relative" }}>
                  <AboutImageSequence ref={ref} progress={progress} />
                </div>
              )}
            </Scene>
          </Controller>
          <div className="flex flex-row flex-1   bg-primary ">
            <ImageCard imageSrc={About_1} />
          </div>
          <video controls loop>
            <source
              className="flex flex-row flex-1 "
              src="./about_main.mp4"
              type="video/mp4"
            />
          </video>

          <div className="flex flex-row flex-1 bg-[#000000] ">
            <ImageCard imageSrc={About_2} />
          </div>
          <div className="px-12 mt-20 flex flex-wrap gap-12 justify-center align-center">
            {AboutCardData.map((service, index) => (
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                <div onClick={flipCard}>
                  <ServiceCard key={service.Title} index={index} {...service} />
                </div>
                <div onClick={flipCard}>
                  <ServiceCardBack
                    key={service.Title}
                    index={index}
                    {...service}
                    onClick={flipCard}
                  />
                </div>
              </ReactCardFlip>
            ))}
          </div>
          <video className="flex flex-row flex-1 " muted autoPlay loop>
            <source src="./about_gif.mp4" type="video/mp4" />
          </video>
          {AboutPictureImage.map((pic, index) => {
            return index === 7 ? (
              <div className="h-screen bg-[#000000] flex flex-col justify-center items-center">
                <Tilt className="w-2/3 flex-3">
                  <img src={pic} key={index} />
                </Tilt>
                <img className="mt-20" src={About_4} />
              </div>
            ) : (
              <ImageCard imageSrc={pic} key={index} />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default About;
