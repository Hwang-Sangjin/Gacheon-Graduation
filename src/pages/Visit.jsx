import { Navbar } from "../components/index";
import { motion, AnimatePresence, usePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState, useEffect, useRef, useCallback } from "react";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import { FullPage, Slide } from "react-full-page";
import { Button } from "@mui/base";
import { IconImages, VisitCardIamge } from "../constants";
import VisitorLoadingSrc from "../assets/visitor_loading.mp4";
import VisitorCardTitleImage from "../assets/VisitorCardTitle.png";
import { toPng } from "html-to-image";
import download from "downloadjs";
import VisitText from "../assets/visit_Image/Visit_Text.png";
import CardBottom from "../assets/visit_Image/Card_Bottom.png";
import SmallHeader from "../components/SmallHeader";
import { gsap } from "gsap";

const DesignerName = {
  KimGeonRyeong: "김건령",
  KimGoEun: "김고은",
  KimDongJun: "김동준",
  KimYaeJu: "김예주",
  KimYunHa: "김윤하",
  KimJiHwan: "김지환",
  NamMinJi: "남민지",
  ParkChangMin: "박창민",
  BakSeungEun: "백승은",
  SeoAReum: "서아름",
  ShinDongYeop: "신동엽",
  ShinJiWoo: "신지우",
  SimMinSeop: "심민섭",
  AnMyoungJi: "안명지",
  YangJiWon: "양지원",
  YangHyeSeon: "양혜선",
  WonHanJu: "원한주",
  YooDongJae: "유동재",
  YuAJung: "유아정",
  YuJiHui: "유지희",
  LeeJongWon: "이종원",
  LeeHongKyu: "이홍규",
  JangSeoJin: "장서진",
  JunSeWon: "전세원",
  JuYoonWoo: "주윤우",
  ChoiDaIn: "최다인",
  ChoiJaeHo: "최재호",
  HwangJuHyeok: "황주혁",
  HongDongYoung: "홍동영",
  KwonJiHye: "권지혜",
  KimMinJi: "김민지",
  KimSeRyung: "김세령",
  NamHyoMin: "남효민",
  ParkChangZun: "박창준",
  SeoHeeJu: "서희주",
  OhGaYoung: "오가영",
  YooJaeHyun: "유재현",
  LeeMinYoung: "이민영",
  LeeSoYun: "이소윤",
  LeeYuJin: "이유진",
  LimJungHa: "임정하",
  ImJinJu: "임진주",
};

const Visit = () => {
  const [level, setLevel] = useState(1);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(IconImages[0]);
  const [message1, setMessage1] = useState(" ");
  const [message2, setMessage2] = useState(" ");
  const [message3, setMessage3] = useState(" ");
  const [randomIndex, setRandomIndex] = useState(0);
  const [selectedDesigner, setSelectedDesigner] = useState("KimGeonRyeong");
  const [visitorCardSrc, setVisitorCardSrc] = useState(
    VisitCardIamge["KimGeonRyeong"][0]
  );

  const CardImage = useRef();

  const Page = () => {
    const ref = useRef(null);
    const [isPresent, safeToRemove] = usePresence();

    useEffect(() => {
      if (!isPresent) {
        gsap.to(ref.current, {
          opacity: 0,
          onComplete: () => safeToRemove?.(),
        });
      }
    }, [isPresent, safeToRemove]);

    return (
      <AnimatePresence>
        {level === 1 ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
            className="bg-visit relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
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
              onClick={() => nextPage()}
              className="mt-11 font-[Hack-Regular] text-2xl bg-[#FFF16F] p-2 px-3 rounded-3xl "
            >
              Start
            </Button>
          </motion.span>
        ) : level === 2 ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
            className=" bg-visit relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
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
              onClick={() => nextPage()}
              className="mt-11 font-[Hack-Regular] text-2xl bg-[#FFF16F] p-2 px-3 rounded-3xl "
            >
              Next
            </Button>
          </motion.span>
        ) : level === 3 ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
            className=" bg-visit relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
          >
            <div className="text-[#FFFFFF] font-[Pretendard-SemiBold] text-[29px]">
              축하의 아이콘을 선택해 주세요.
            </div>
            <div className="w-3/4 grid grid-cols-11 m-11">
              {IconImages.map((e) => {
                return (
                  <img
                    onClick={() => {
                      setSelectedIcon(e);
                      nextPage();
                    }}
                    className="m-3"
                    src={e}
                  />
                );
              })}
            </div>
          </motion.span>
        ) : level === 4 ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
            className=" bg-visit relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
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
              onClick={() => nextPage()}
              className="mt-11 font-[Hack-Regular] text-2xl bg-[#FFF16F] p-2 px-3 rounded-3xl "
            >
              Next
            </Button>
          </motion.span>
        ) : level === 5 ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
            className=" bg-visit relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center"
          >
            <div className="text-[#FFFFFF] font-[Pretendard-SemiBold] text-[29px]">
              {name}님을 위한 축하카드를 만드는 중이에요.
            </div>
            <video
              className="w-50%"
              muted
              autoPlay
              onEnded={() => nextPage()}
              src={VisitorLoadingSrc}
            />
          </motion.span>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
            className={`bg-${randomIndex} justify-evenly relative flex  flex-row h-screen  sm:px-2 px-2 w-full  py-5 fixed top-0  items-center`}
          >
            <div className="flex items-center flex-col grow">
              <div className="flex flex-1 text-[#FFFFFF] font-[Hack-Bold] text-3xl">
                {name}님을 위한 축하카드
              </div>
              <img className="m-5" src={VisitText} />
              <div className="flex flex-row">
                <button
                  className="mx-8 my-20 border-2 border-[#FFFFFF] text-[#FFFFFF] font-[Hack-Bold] text-2xl py-2 px-5 rounded-full font-extrabold"
                  onClick={() => resetPage()}
                >
                  다시하기
                </button>
                <button
                  className="mx-8 my-20 bg-[#FFF16F]  font-[Hack-Bold] text-2xl py-2 px-5 rounded-full font-extrabold"
                  onClick={onButtonClick}
                >
                  이미지 저장
                </button>
              </div>
            </div>

            <div className="flex justify-center grow" ref={CardImage}>
              <div className="flex relative">
                {visitorCardSrc && (
                  <img className="flex h-auto max-w-lg" src={visitorCardSrc} />
                )}
                <div className="flex flex-row absolute p-11 justify-end w-full">
                  <div className="text-[#000000] font-[Pretendard-Bold] text-2xl">
                    {DesignerName[`${selectedDesigner}`]}
                  </div>
                </div>
                <div className="flex flex-col w-full absolute text-[#000000] font-[Pretendard-Bold]  text-2xl top-[70%] items-center">
                  <div className="my-4 h-5">{message1}</div>
                  <div className="my-4 h-5">{message2}</div>
                  <div className="my-4 h-5">{message3}</div>
                </div>
              </div>
            </div>
          </motion.span>
        )}
      </AnimatePresence>
    );
  };

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

  const nextPage = () => {
    setLevel((prev) => prev + 1);
  };
  const resetPage = () => {
    setLevel(1);
  };

  const getRandomInt = () => {
    const randomFloat = Math.random();
    const randomInt = Math.floor(randomFloat * 8);
    return randomInt;
  };

  const onButtonClick = useCallback(() => {
    if (CardImage.current === null) {
      return;
    }

    toPng(CardImage.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Gacheon-Gradutation-Visit-Card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [CardImage]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    setRandomIndex(parseInt(getRandomInt()));
  }, []);

  useEffect(() => {
    const Icon_Src_string = selectedIcon.toString().split("/");
    setSelectedDesigner(Icon_Src_string[4]);
  }, [selectedIcon]);

  useEffect(() => {
    if (selectedDesigner !== undefined) {
      setVisitorCardSrc(
        VisitCardIamge[`${selectedDesigner}`][`${randomIndex}`]
      );
    }
  }, [selectedDesigner]);

  useEffect(() => {
    if (selectedDesigner !== undefined) {
      setVisitorCardSrc(
        VisitCardIamge[`${selectedDesigner}`][`${randomIndex}`]
      );
    }
  }, [randomIndex]);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="relative z-0 bg-[#101010]">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar blackColor={true} />
            <Page />
          </div>
        </div>
      )}
    </div>
  );
};
export default Visit;
