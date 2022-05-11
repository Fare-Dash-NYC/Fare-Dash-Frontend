import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./navbar";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/login" activeStyle>
            login
          </NavLink>
          <NavLink to="/explore" activeStyle>
            explore
          </NavLink>
          <NavLink to="/signup" activeStyle>
            signup
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;