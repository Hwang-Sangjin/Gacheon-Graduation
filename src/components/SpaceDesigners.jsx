import DesignerCard from "./DesignerCard";
import Footer from "../components/Footer";
import DesignerVideo from "./DesignerVideo";
import { SpaceDesignersData, DesignersData } from "../constants";

const SpaceDesigners = () => {
  return (
    <div className="mt-10 flex  flex-wrap gap-7">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {SpaceDesignersData.map((name, index) => {
          if (name === " ") return <DesignerVideo />;
          return name === "KimGeonRyeong" ? (
            <DesignerCard
              title="All_Prompts"
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

export default SpaceDesigners;
