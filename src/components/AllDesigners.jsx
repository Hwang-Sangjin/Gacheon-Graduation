import DesignerCard from "./DesignerCard";

import { AllDeisngersData, DesignersData } from "../constants";

const AllDesigners = () => {
  return (
    <div className="mt-10 flex  flex-wrap gap-7">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {AllDeisngersData.map((name) => {
          if (name === " ") return;
          return name === "KimGeonRyeong" ? (
            <DesignerCard title="All_Prompts" data={DesignersData[name]} />
          ) : (
            <DesignerCard title="" data={DesignersData[name]} />
          );
        })}
      </div>
    </div>
  );
};

export default AllDesigners;
