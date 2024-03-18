
import Wrapper from "../assets/wrappers/Navbar.js";
import {FaAlignLeft} from "react-icons/all.js";
import Logo from "./Logo.jsx";

const NavLinks = () => {
        return (
            <Wrapper>
              <div className={"nav-center"}>
                <button type={'button'} className={'toggle-btn'}>
                    <FaAlignLeft />
                </button>
              <div>
                <Logo />
                <h4 className={'logo-text'}>Dashboard</h4>
              </div>

            </div>
            </Wrapper>
        );
};
export default NavLinks;
