import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import { FullPage, Slide } from "react-full-page";
import { Button } from "@mui/base";

const Visit = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
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
        <div className="relative z-0 bg-[#101010]">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar blackColor={true} />
            
              <FullPage>
                <Slide>
                <section className="relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center">
                  <div className="text-[#FFFFFF] font-[Hack-Regular] text-6xl">Kudos on your stellar <br/>graduation showcase</div>
                  <div className="text-[#FFFFFF] font-[Pretendard-Regular] text-l my-11">1년 동안 졸업전시를 준비하며 고생했을 소중한 사람에게 축하의 메시지를 전달해 보세요.</div>
                  <Button className="mt-11 font-[Hack-Regular] text-2xl bg-[#FFF16F] p-2 px-3 rounded-3xl ">Start</Button>
                </section>
                  
                </Slide>
                <Slide>
                <section className=" bg-[#101010] relative flex flex-col h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 justify-center items-center">
                  <div className="text-[#FFFFFF] font-[Hack-Bold] text-2xl">받는 사람의 이름이 무엇인가요? </div>
                  <input className="text-[#FFFFFF] text-center text-2xl m-8 p-6 w-1/4 h-11 bg-[#101010] border-[#FFFFFF] border-2 rounded-3xl" onChange={onChange} value={name}/>
                  <Button className="mt-11 font-[Hack-Regular] text-2xl bg-[#FFF16F] p-2 px-3 rounded-3xl ">Next</Button>
                  </section>
                </Slide>
                <Slide>
                  <div>3</div>
                </Slide>
                <Slide>
                  <div>4</div>
                </Slide>
              </FullPage>
          </div>
        </div>
      )}
    </div>
  );
};
export default Visit;
