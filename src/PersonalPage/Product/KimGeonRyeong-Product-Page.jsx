import PersonalHeader from "../../components/PersonalHeader";

import KimGeonRyeong_1 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_1.jpg";
import KimGeonRyeong_2 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_2.mp4";
import KimGeonRyeong_3 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_3.jpg";
import KimGeonRyeong_4 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_4.jpg";
import KimGeonRyeong_5 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_5.jpg";
import KimGeonRyeong_6 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_6.jpg";
import KimGeonRyeong_7 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_7.jpg";
import KimGeonRyeong_8 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_8.jpg";
import KimGeonRyeong_9 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_9.jpg";
import KimGeonRyeong_10 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_10.jpg";
import KimGeonRyeong_11 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_11.jpg";
import KimGeonRyeong_12 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_12.jpg";
import KimGeonRyeong_13 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_13.jpg";
import KimGeonRyeong_14 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_14.jpg";
import KimGeonRyeong_15 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_15.gif";
import KimGeonRyeong_16 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_16.jpg";
import KimGeonRyeong_17 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_17.jpg";
import KimGeonRyeong_18 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_18.jpg";
import KimGeonRyeong_19 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_19.jpg";
import KimGeonRyeong_20 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_20.gif";
import KimGeonRyeong_21 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_21.jpg";
import KimGeonRyeong_22 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_22.gif";
import KimGeonRyeong_23 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_23.jpg";
import KimGeonRyeong_24 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_24.jpg";
import KimGeonRyeong_25 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_25.jpg";
import KimGeonRyeong_26 from "../../assets/product/KimGeonRyeong/KimGeonRyeong_Product_26.jpg";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Preloader from "../../components/Preloader";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.3 }, y: 0 },
  hidden: { opacity: 0.8, y: 300 },
};

const KimGeonRyeongProductPage = () => {
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
          <ImageCard imageSrc={KimGeonRyeong_1} />
          <video className="flex flex-row flex-1 w-full" controls loop>
            <source src={KimGeonRyeong_2} type="video/mp4" />
          </video>
          <ImageCard imageSrc={KimGeonRyeong_3} />
          <ImageCard imageSrc={KimGeonRyeong_4} />
          <ImageCard imageSrc={KimGeonRyeong_5} />
          <ImageCard imageSrc={KimGeonRyeong_6} />
          <ImageCard imageSrc={KimGeonRyeong_7} />
          <ImageCard imageSrc={KimGeonRyeong_8} />
          <ImageCard imageSrc={KimGeonRyeong_9} />
          <ImageCard imageSrc={KimGeonRyeong_10} />
          <ImageCard imageSrc={KimGeonRyeong_11} />
          <ImageCard imageSrc={KimGeonRyeong_12} />
          <ImageCard imageSrc={KimGeonRyeong_13} />
          <ImageCard imageSrc={KimGeonRyeong_14} />
          <video className="flex flex-row flex-1 w-full" muted autoPlay loop>
            <source src={KimGeonRyeong_15} type="video/mp4" />
          </video>
          <ImageCard imageSrc={KimGeonRyeong_16} />
          <ImageCard imageSrc={KimGeonRyeong_17} />
          <ImageCard imageSrc={KimGeonRyeong_18} />
          <ImageCard imageSrc={KimGeonRyeong_19} />
          <video className="flex flex-row flex-1 w-full" muted autoPlay loop>
            <source src={KimGeonRyeong_20} type="video/mp4" />
          </video>
          <ImageCard imageSrc={KimGeonRyeong_21} />
          <video className="flex flex-row flex-1 w-full" muted autoPlay loop>
            <source src={KimGeonRyeong_22} type="video/mp4" />
          </video>
          <ImageCard imageSrc={KimGeonRyeong_23} />
          <ImageCard imageSrc={KimGeonRyeong_24} />
          <ImageCard imageSrc={KimGeonRyeong_25} />
          <ImageCard imageSrc={KimGeonRyeong_26} />
        </>
      )}
    </>
  );
};

export default KimGeonRyeongProductPage;
