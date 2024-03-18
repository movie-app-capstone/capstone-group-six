import Wrapper from '../assets/wrappers/Navbar';
import Logo from "./Logo.jsx";
import {FaAlignLeft} from "react-icons/all.js";

const NavBar = () => {
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
    )
};
export default NavBar;
