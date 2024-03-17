import { Link } from "react-router-dom";
import {arrow} from "../assets/icons";


const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center"> {text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain"/>
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center  py-4 px-8 text-black mx-5 bounce">
      Hi, I am <span className="font-semibold">Vincent </span> <span className="wave" role="img" aria-labelledby="wave"> 👋 </span> 
      <br />
      A Software Engineer from China 🇨🇳
    </h1>
  ),
  2: <InfoBox text="Work Experience" link="/about" btnText={"Learn More"} />,
  3: <InfoBox text="Projects" link="/projects" btnText={"Visit"}/>,
  4: <InfoBox text="Contact Me" link="/contact" btnText={"Let's talk"}/>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
