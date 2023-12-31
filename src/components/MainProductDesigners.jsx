import DesignerCard from "./DesignerCard";
import Footer from "../components/Footer";

import { ProductDesignersData, DesignersData } from "../constants";

const MainProduct = () => {
  return (
    <div className="mt-10 flex  flex-wrap gap-7">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {ProductDesignersData.map((name, index) => {
          if (name === " ") return;
          return name === "KimGeonRyeong" ? (
            <DesignerCard
              title="Main_Product"
              data={DesignersData[name]}
              index={index}
            />
          ) : (
            <DesignerCard title="" data={DesignersData[name]} index={index} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MainProduct;
