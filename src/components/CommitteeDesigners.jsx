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
          if (name ==="KimDongJun")
          return(
            <DesignerCard
              title="Committee Leader"
              data={DesignersData[name]}
              index={index}
            />
            )
          if(name ==="LeeJongWon")
          return(
            <DesignerCard
              title="Committee Sub leader"
              data={DesignersData[name]}
              index={index}
            />
            
            )
          
            
            return(
              <DesignerCard title="" data={DesignersData[name]} index={index} />
            )
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Committee;
