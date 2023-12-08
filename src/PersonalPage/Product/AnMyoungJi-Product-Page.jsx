import PersonalHeader from "../../components/PersonalHeader";

import AnMyoungJi_1 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_1.jpg";
import AnMyoungJi_2 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_2.jpg";
import AnMyoungJi_3 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_3.jpg";
import AnMyoungJi_4 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_4.jpg";
import AnMyoungJi_5 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_5.jpg";
import AnMyoungJi_6 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_6.jpg";
import AnMyoungJi_7 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_7.jpg";
import AnMyoungJi_8 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_8.jpg";
import AnMyoungJi_9 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_9.jpg";
import AnMyoungJi_10 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_10.jpg";
import AnMyoungJi_11 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_11.jpg";
import AnMyoungJi_12 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_12.jpg";
import AnMyoungJi_13 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_13.gif";
import AnMyoungJi_14 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_14.jpg";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Preloader from "../../components/Preloader";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.3 }, y: 0 },
  hidden: { opacity: 0.8, y: 300 },
};

const AnMyoungJiProductPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
        className="flex flex-row flex-1 w-full"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <img className="flex flex-row flex-1 " src={imageSrc} />
      </motion.div>
    );
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <PersonalHeader IsBlack={true}></PersonalHeader>
          <ImageCard imageSrc={AnMyoungJi_1} />
          <ImageCard imageSrc={AnMyoungJi_2} />
          <ImageCard imageSrc={AnMyoungJi_3} />
          <ImageCard imageSrc={AnMyoungJi_4} />
          <ImageCard imageSrc={AnMyoungJi_5} />
          <ImageCard imageSrc={AnMyoungJi_6} />
          <ImageCard imageSrc={AnMyoungJi_7} />
          <ImageCard imageSrc={AnMyoungJi_8} />
          <ImageCard imageSrc={AnMyoungJi_9} />
          <ImageCard imageSrc={AnMyoungJi_10} />
          <ImageCard imageSrc={AnMyoungJi_11} />
          <ImageCard imageSrc={AnMyoungJi_12} />
          <video className="flex flex-row flex-1 w-full" muted autoPlay loop>
            <source src={AnMyoungJi_13} type="video/mp4" />
          </video>
          <ImageCard imageSrc={AnMyoungJi_14} />
        </>
      )}
    </>
  );
};

export default AnMyoungJiProductPage;
