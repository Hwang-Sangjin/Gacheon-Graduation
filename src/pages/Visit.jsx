import { Navbar } from "../components/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";

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
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <section className="relative h-screen sm:px-2 px-2 w-full  py-5 fixed top-0 ">
              <div
                className={`px-2 sm:px-12 relative inset-0 top-[120px]  mx-auto flex flex-col items-start gap-5`}
              >
                <motion.div variants={textVariant()}>
                  <h2 className="text-black font-black text-[60px]">Visit</h2>
                </motion.div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};
export default Visit;
