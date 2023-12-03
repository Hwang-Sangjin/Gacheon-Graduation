import { useNavigate } from "react-router-dom";
import Back_White from "../assets/back_1.png";
import Back_Gray from "../assets/back_2.png";

const PersonalHeader = ({ IsBlack }) => {
  const navigate = useNavigate();

  return IsBlack ? (
    <div onClick={() => navigate(-1)}>
      <img src={Back_Gray} />
    </div>
  ) : (
    <div onClick={() => navigate(-1)}>
      <img src={Back_White} />
    </div>
  );
};

export default PersonalHeader;
