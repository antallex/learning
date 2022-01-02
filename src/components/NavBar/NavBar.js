import { NavLink } from "react-router-dom";
import Logo from "../../images/svg/logo_blue.svg";
import SubmitButtonNav from "../Buttons/Submit/SubmitButtonNav";

function NavBar() {
  return (
    // SHOULD USE STICKY OR STH --> ALL ITEMS NEED MARGIN TOP ....
    <div className="sticky top-0 w-full z-10">
      <div className="w-full h-auto px-5 shadow-md shadow-surface-dark bg-surface-dark text-center items-center flex justify-between">
        <div>
          <NavLink to="/">
            <img alt='logo' src={Logo} className=" w-14 mt-3" />
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to="/home"
            className="text-on-surface-dark text-md mx-4 hover:text-primary-dark"
          >
            Stable
          </NavLink>
          <NavLink
            to="/sandbox"
            className="text-on-surface-dark text-md mx-4 hover:text-primary-dark"
          >
            Sandbox
          </NavLink>
        </div>
        <div>
          <SubmitButtonNav to='/' text='Home'/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
