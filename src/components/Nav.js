import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate} from 'react-router-dom'

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }
  
  useEffect(() => {
      window.addEventListener("scroll", transitionNavBar)
      return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])
  
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history("/")}
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix logo"
        />
        <img
          onClick={() => history("/profile")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
