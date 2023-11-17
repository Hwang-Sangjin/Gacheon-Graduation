import DesignerCard from "./DesignerCard";
import Footer from "../components/Footer";
import DesignerVideo from "./DesignerVideo";

import { CommitteeDesignersData, DesignersData } from "../constants";

const Committee = () => {
  return (
    <div className="mt-10 flex  flex-wrap gap-7">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {CommitteeDesignersData.map((name, index) => {
          if (name === " ") return <DesignerVideo />;
          if (name === "KimDongJun")
            return (
              <DesignerCard
                title="Committee Leader"
                data={DesignersData[name]}
                index={index}
              />
            );
          if (name === "LeeJongWon")
            return (
              <DesignerCard
                title="Committee Sub leader"
                data={DesignersData[name]}
                index={index}
              />
            );
          if (name === "ShinDongYeop")
            return (
              <DesignerCard
                title="Design TL"
                data={DesignersData[name]}
                index={index}
              />
            );
          if (name === "KimGoEun")
            return (
              <DesignerCard
                title="Design Team"
                data={DesignersData[name]}
                index={index}
              />
            );
          if (name === "SimMinSeop")
            return (
              <DesignerCard
                title="Exhibition TL"
                data={DesignersData[name]}
                index={index}
              />
            );
          if (name === "HwangJuHyeok")
            return (
              <DesignerCard
                title="Exhibition Team"
                data={DesignersData[name]}
                index={index}
              />
            );
          if (name === "AnMyoungJi")
            return (
              <DesignerCard
                title="Promotion TL"
                data={DesignersData[name]}
                index={index}
              />
            );
          if (name === "KimYaeJu")
            return (
              <DesignerCard
                title="Promotion team"
                data={DesignersData[name]}
                index={index}
              />
            );
          if (name === "JuYoonWoo")
            return (
              <DesignerCard
                title="Video TL"
                data={DesignersData[name]}
                index={index}
              />
            );
          if (name === "LimJungHa")
            return (
              <DesignerCard
                title="Information agent"
                data={DesignersData[name]}
                index={index}
              />
            );
          if (name === "KimJiHwan")
            return (
              <DesignerCard
                title="Tahnks to"
                data={DesignersData[name]}
                index={index}
              />
            );
          return (
            <DesignerCard title="" data={DesignersData[name]} index={index} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Committee;
