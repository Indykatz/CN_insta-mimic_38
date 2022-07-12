import { Link } from "react-router-dom";
import { NavbarContainer, NavbarItems } from "../css/Navbar.styled";
//
const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <Link to="/">
          <NavbarItems>Home</NavbarItems>
        </Link>
        <Link to="/Photos">
          <NavbarItems>Photos</NavbarItems>
        </Link>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;

// <div class=NavbarContainer>