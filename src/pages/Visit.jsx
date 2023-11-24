import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState, useEffect, useRef } from "react";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import { FullPage, Slide } from "react-full-page";
import { Button } from "@mui/base";
import { IconImages, VisitCardIamge } from "../constants";
import VisitorLoadingSrc from "../assets/visitor_loading.mp4";
import VisitorCardTitleImage from "../assets/VisitorCardTitle.png";

const Visit = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(IconImages[0]);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [randomIndex, setRandomIndex] = useState(0);
  const [selectedDesigner, setSelectedDesigner] = useState("");
  const [visitorCardSrc, setVisitorCardSrc] = useState(
    VisitCardIamge["KimGeonRyeong"][0]
  );

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMessage1 = (e) => {
    setMessage1(e.target.value);
  };
  const onChangeMessage2 = (e) => {
    setMessage2(e.target.value);
  };
  const onChangeMessage3 = (e) => {
    setMessage3(e.target.value);
  };

  const scrollHandler = (eleRef) => {
    window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
  };

  const getRandomInt = () => {
    const randomFloat = Math.random();
    const randomInt = Math.floor(randomFloat * 8);
    return randomInt;
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    setRandomIndex(getRandomInt());
  }, []);

  useEffect(() => {
    const Icon_Src_string = selectedIcon.toString().split("/");
    setSelectedDesigner(Icon_Src_string[4]);
  }, [selectedIcon]);

  useEffect(() => {
    console.log(selectedDesigner);
  }, [selectedDesigner]);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="relative z-0 bg-[#101010]">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar blackColor={true} />
            <section
              ref={section1}
              className="relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
            >
              <div className="text-[#FFFFFF] font-[Hack-Regular] text-6xl">
                Kudos on your stellar <br />
                graduation showcase
              </div>
              <div className="text-[#FFFFFF] font-[Pretendard-Regular] text-l my-11">
                1년 동안 졸업전시를 준비하며 고생했을 소중한 사람에게 축하의
                메시지를 전달해 보세요.
              </div>
              <Button
                onClick={() => scrollHandler(section2)}
                className="mt-11 font-[Hack-Regular] text-2xl bg-[#FFF16F] p-2 px-3 rounded-3xl "
              >
                Start
              </Button>
            </section>
            <section
              ref={section2}
              className=" bg-[#101010] relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
            >
              <div className="text-[#FFFFFF] font-[Hack-Bold] text-2xl">
                받는 사람의 이름이 무엇인가요?{" "}
              </div>
              <input
                className="text-[#FFFFFF] text-center text-2xl m-8 p-6 w-1/4 h-11 bg-[#101010] border-[#FFFFFF] border-2 rounded-3xl"
                onChange={onChangeName}
                value={name}
              />
              <Button
                onClick={() => scrollHandler(section3)}
                className="mt-11 font-[Hack-Regular] text-2xl bg-[#FFF16F] p-2 px-3 rounded-3xl "
              >
                Next
              </Button>
            </section>
            <section
              ref={section3}
              className=" bg-[#101010] relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
            >
              <div className="text-[#FFFFFF] font-[Hack-Bold] text-2xl">
                축하의 아이콘을 선택해 주세요.
              </div>
              <div className="w-3/4 grid grid-cols-11 m-11">
                {IconImages.map((e) => {
                  return (
                    <img
                      onClick={() => {
                        setSelectedIcon(e);
                        scrollHandler(section4);
                      }}
                      className="m-3"
                      src={e}
                    />
                  );
                })}
              </div>
            </section>
            <section
              ref={section4}
              className=" bg-[#101010] relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
            >
              <div className="text-[#FFFFFF] font-[Hack-Bold] text-2xl">
                응원 메시지를 작성해 주세요.
              </div>
              <input
                className="text-[#FFFFFF] text-center text-2xl m-3 p-8 w-1/2 max-w-lg min-w-[30%] h-11 bg-[#101010] border-[#FFFFFF] border-b-2 "
                onChange={onChangeMessage1}
                value={message1}
              />
              <input
                className="text-[#FFFFFF] text-center text-2xl m-3 p-8 w-1/2 min-w-[30%] max-w-lg h-11 bg-[#101010] border-[#FFFFFF] border-b-2"
                onChange={onChangeMessage2}
                value={message2}
              />
              <input
                className="text-[#FFFFFF] text-center text-2xl m-3 p-8 w-1/2 min-w-[30%] max-w-lg h-11 bg-[#101010] border-[#FFFFFF] border-b-2"
                onChange={onChangeMessage3}
                value={message3}
              />
              <Button
                onClick={() => scrollHandler(section5)}
                className="mt-11 font-[Hack-Regular] text-2xl bg-[#FFF16F] p-2 px-3 rounded-3xl "
              >
                Next
              </Button>
            </section>
            <section
              ref={section5}
              className=" bg-[#000000] relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
            >
              <div className="text-[#FFFFFF] font-[Hack-Bold] text-2xl">
                {name}님을 위한 축하카드를 만드는 중이에요.
              </div>
              <video muted autoPlay loop src={VisitorLoadingSrc} />
            </section>
            <section
              ref={section6}
              className=" bg-[#101010] relative flex flex-row h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
            >
              <div className="flex flex-1 text-[#FFFFFF] font-[Hack-Bold] text-2xl">
                {name}님을 위한 축하카드
              </div>
              <img className="flex flex-1 w-1/2" src={visitorCardSrc} />
              <div className="flex flex-row absolute">
                <img src={VisitorCardTitleImage} />
                <div>{selectedDesigner}</div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
export default Visit;
