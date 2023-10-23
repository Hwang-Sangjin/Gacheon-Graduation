import DesignerCard from "./DesignerCard";

import { CommitteeDesignersData, DesignersData } from "../constants";

const Committee = () => {
  return (
    <div className="mt-10 flex  flex-wrap gap-7">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {CommitteeDesignersData.map((name, index) => {
          if (name === " ") return;
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
    </div>
  );
};

export default Committee;
