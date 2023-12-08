import PersonalHeader from "../../components/PersonalHeader";

import AnMyoungJi_1 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_1.jpg";
import AnMyoungJi_2 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_2.jpg";
import AnMyoungJi_3 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_3.jpg";
import AnMyoungJi_4 from "../../assets/product/AnMyoungJi/AnMyoungJi_Product_4.jpg";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.3 }, y: 0 },
  hidden: { opacity: 0.8, y: 300 },
};

const AnMyoungJiProductPage = () => {
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

  return (
    <>
      <PersonalHeader IsBlack={true}></PersonalHeader>
      <ImageCard imageSrc={AnMyoungJi_1} />
      <ImageCard imageSrc={AnMyoungJi_2} />
      <ImageCard imageSrc={AnMyoungJi_3} />
      <ImageCard imageSrc={AnMyoungJi_4} />
    </>
  );
};

export default AnMyoungJiProductPage;
