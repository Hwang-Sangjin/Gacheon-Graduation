import PersonalHeader from "../../components/PersonalHeader";

import KimGoEun_1 from "../../assets/product/KimGoEun/KimGoEun_Product_1.jpg";
import KimGoEun_2 from "../../assets/product/KimGoEun/KimGoEun_Product_2.jpg";
import KimGoEun_3 from "../../assets/product/KimGoEun/KimGoEun_Product_3.jpg";
import KimGoEun_4 from "../../assets/product/KimGoEun/KimGoEun_Product_4.jpg";
import KimGoEun_5 from "../../assets/product/KimGoEun/KimGoEun_Product_5.jpg";
import KimGoEun_6 from "../../assets/product/KimGoEun/KimGoEun_Product_6.jpg";
import KimGoEun_7 from "../../assets/product/KimGoEun/KimGoEun_Product_7.jpg";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Preloader from "../../components/Preloader";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.3 }, y: 0 },
  hidden: { opacity: 0.8, y: 300 },
};

const KimGoEunProductPage = () => {
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
          <ImageCard imageSrc={KimGoEun_1} />
          <ImageCard imageSrc={KimGoEun_2} />
          <ImageCard imageSrc={KimGoEun_3} />
          <ImageCard imageSrc={KimGoEun_4} />
          <ImageCard imageSrc={KimGoEun_5} />
          <ImageCard imageSrc={KimGoEun_6} />
          <ImageCard imageSrc={KimGoEun_7} />
        </>
      )}
    </>
  );
};

export default KimGoEunProductPage;
