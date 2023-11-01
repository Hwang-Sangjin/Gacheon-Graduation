import FooterImage from "../assets/FooterImage.jpg";

const Footer = () => {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white  border-gray-200 shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <img className="w-64" src={FooterImage} />
    </footer>
  );
};

export default Footer;
