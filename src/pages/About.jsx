import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState, useEffect,ref } from "react";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import { Controller, Scene } from "react-scrollmagic";
import AboutImageSequence from "../AboutSequence";
import { TypeAnimation } from "react-type-animation";
import { AboutCardData } from "../constants";
import { Tilt } from "react-tilt";
import ReactCardFlip from "react-card-flip";


const spring = {
  type: "spring",
  stiffness: 300,
  damping: 40,
}

const About1 = () => {
  return (
    <TypeAnimation
      sequence={[
        "준비가 된 상태 (狀態)", // Types 'One'
        2000, // Waits 1s
        () => {

        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
};
const About2 = () => {
  return (
    <TypeAnimation
      sequence={[
        "Steps of Prompt", // Types 'One'
        2000, // Waits 1s
        () => {

        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
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

const About = () => {
  const [loading, setLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () =>{
    console.log("!!!")
    setIsFlipped(!isFlipped)
  }

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
          <Navbar blackColor={true}/>
          <Controller>
            <Scene duration="9000" triggerHook="onLeave" pin >
              {progress => (
                <div style={{ height: "100vh", position: "relative" }}>
                  <AboutImageSequence ref={ref} progress={progress} />
                </div>
              )}
            </Scene>
          </Controller>
          <div className="flex flex-row flex-1 py-[200px] 0 p-10 bg-primary ">
          <motion.div variants={textVariant()} className="text-[#000000] text-[45.65px] font-['Pretendard-Bold'] basis-1/3">
              <About1 />
          </motion.div>
          <motion.p
          variants={fadeIn("", "", 0.1, 1)}  className="basis-2/3 font-['Pretendard-SemiBold']">
            프롬프트 시스템은 반복되는 입력, 기록, 출력의 세 가지 단계로 이루어져 있습니다. 졸업생 개개인은 자신의 프롬프트에 따라 값을 입력하고 문제를 발견하며 해결과정을 자세히 기록합니다. 마지막으로 완성되는 결과물은 각 프롬프트가 도출한 독특한 값으로 출력됩니다.
            <br/>
            <br/>
            프롬프트란 운영체제의 명령 창에서 사용자의 입력을 받아들일 때 사용되는 용어로, 입력된 명령은 수행되는 과정을 모두 기록한 후 과정이 완료되면 그 결과물이 출력됩니다.

          </motion.p>
            
          </div>
          <video muted autoPlay loop>
            <source src="./about_main.mp4" type="video/mp4" />
        </video>

        <div className="flex flex-row flex-1 py-[200px] p-10 bg-[#000000] ">
            <h1 className="text-[#FFFFFF] text-[45.65px] font-['Pretendard-Bold'] basis-1/3">
              <About2/>
            </h1>
            <div className="basis-2/3 font-['Pretendard-SemiBold'] text-[#FFFFFF]">
            가천대학교 산업디자인과의 2023년 졸업전시 prompt는 42명의 학생들이 새로운 입력값을 활용하여 4년 동안의 과정을 기록한 결과물을 선보이며, 각자의 프롬프트에 새로운 입력을 받아들일 준비가 된 상태임을 선보이는 가천대학교 산업디자인과의 2023년도 졸업전시입니다.
            <br/>
            <br/>
            저희는 개인의 고유한 출력값을 아이콘으로 상징화하여 각 학생들이 뛰어난 아이디어와 디자인 능력을 집약한 표현으로, 새로운 시각을 담아보았습니다.

              </div>
          </div>
          <div className="px-12 mt-20 flex flex-wrap gap-12 justify-center align-center">
            {AboutCardData.map((service, index) => (
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                <div onClick={flipCard}>
                <ServiceCard key={service.Title} index={index} {...service} />
                </div>
                <div onClick={flipCard}> 
                <ServiceCardBack key={service.Title} index={index} {...service} onClick={flipCard}/>
                </div>
                
              </ReactCardFlip>
              
            ))}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};
export default About;
