import FooterImage from "../assets/FooterImage.jpg";
import FooterBlackImage from "../assets/FooterBlackImage.png";

const Footer = ({ blackColor, Visit }) => {
  return blackColor ? (
    Visit ? (
      <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-[#101010]  border-gray-200 shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <img className="w-64" src={FooterBlackImage} />
      </footer>
    ) : (
      <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-black  border-gray-200 shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <img className="w-64" src={FooterBlackImage} />
      </footer>
    )
  ) : (
    <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white  border-gray-200 shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <img className="w-64" src={FooterImage} />
    </footer>
  );
};

export default Footer;
