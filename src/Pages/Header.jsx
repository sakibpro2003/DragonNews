import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img className="" src={logo} alt="the name logo" />
            <p>Journalism Without Fear or Favour</p>
            <h3 className="font-bold">{moment().format("dddd, MMMM D, YYYY")}</h3>
        </div>
    );
};

export default Header;