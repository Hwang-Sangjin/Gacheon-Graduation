import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import { FullPage, Slide } from "react-full-page";

const Visit = () => {
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
        <div className="relative z-0 bg-[#101010]">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar blackColor={true} />
            <section className="relative h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 ">
              <FullPage>
                <Slide>
                  <div>1</div>
                </Slide>
                <Slide>
                  <div>2</div>
                </Slide>
                <Slide>
                  <div>3</div>
                </Slide>
                <Slide>
                  <div>4</div>
                </Slide>
              </FullPage>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
export default Visit;
