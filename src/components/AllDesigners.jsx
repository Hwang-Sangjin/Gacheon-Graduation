import DesignerCard from "./DesignerCard"

import { AllDeisngersData,DesignersData } from "../constants"

const AllDesigners = () => {
    return(
        <div>
            
            <div className="mt-10 flex flex-wrap gap-7">
            {AllDeisngersData.map((name) => {
                console.log(DesignersData[name])
                return (
                    name==="KimGeonRyeong"?
                    <DesignerCard title="All_Prompts" data={DesignersData[name]}/> :
                    <DesignerCard title="" data={DesignersData[name]}/>
                )
            })}
                
            </div>
            
        </div>
    )
}

export default AllDesigners