import logo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="the name logo" />
      <p className="mt-3">Journalism Without Fear or Favour</p>
      <h3 className="font-bold mt-3">{moment().format("dddd, MMMM D, YYYY")}</h3>
        <div className="flex bg-[#DDDDDD] p-2">
        <button className="btn btn-error rounded-none text-white ">
          Latest
        </button>
        <Marquee className="font-bold">
          I can be a React component, multiple React components, or just some
          text.Some more txt would look professional. you can add some more links here
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
