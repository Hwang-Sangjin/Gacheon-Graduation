import { useNavigate } from "react-router-dom";
import Back_White from "../assets/back_1.png";
import Back_Gray from "../assets/back_2.png";

const PersonalHeader = ({ IsBlack }) => {
  const navigate = useNavigate();

  return IsBlack ? (
    <div className="absolute">
      <img onClick={() => navigate(-1)} src={Back_Gray} />
    </div>
  ) : (
    <div className="absolute">
      <img onClick={() => navigate(-1)} src={Back_White} />
    </div>
  );
};

export default PersonalHeader;
