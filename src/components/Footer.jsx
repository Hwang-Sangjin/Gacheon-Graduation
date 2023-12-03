import FooterImage from "../assets/FooterImage.jpg";
import FooterBlackImage from "../assets/FooterBlackImage.png";

const Footer = ({ blackColor, Visit }) => {
  return blackColor ? (
    Visit ? (
      <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-[#101010]   md:flex md:items-center md:justify-center md:p-6 ">
        <img className="w-64" src={FooterBlackImage} />
      </footer>
    ) : (
      <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-[#000000]    md:flex md:items-center md:justify-center md:p-6  ">
        <img className="w-64" src={FooterBlackImage} />
      </footer>
    )
  ) : (
    <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-[#ffffff]    md:flex md:items-center md:justify-center md:p-6 ">
      <img className="w-64" src={FooterImage} />
    </footer>
  );
};

export default Footer;
