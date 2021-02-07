import React, { useState  , useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../imgs/logo.png";
import { motion , useAnimation } from "framer-motion";
import { Fade , TitleAnim} from '../animation';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const controls = useAnimation();
  useEffect(() => {
    if (toggle) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [toggle]);

  const Humberger = () => {
    return (
      <div
        id={toggle ? "open-humberger" : ""}
        className="navigation__humberger"
        onClick={() => setToggle(!toggle)}
      >
        <span
          style={{transition: "all .75s ease-in-out", transform: toggle ? "rotate(45deg)" : "rotate(0)" }}
        ></span>
        <span
          style={{transition: "all .75s ease-in-out", backgroundColor: toggle ? "transparent" : "#242f51" }}
        ></span>
        <span
          style={{transition: "all .75s ease-in-out", transform: toggle ? "rotate(-45deg)" : "rotate(0)" }}
        ></span>
      </div>
    );
  };
  const NavList = () => (
    <>
      <ul  variants={Fade} animate={controls} initial="hidden" className={`navigation__list ${toggle && "open"}`}>
        <motion.li  variants={TitleAnim}  className="navigation-item" onClick={() => setToggle(false)}>
          <NavLink exact to="/" className="navigation__list--link ">
            home
          </NavLink>
        </motion.li>
        <motion.li variants={TitleAnim} className="navigation-item" onClick={() => setToggle(false)}>
          <a href="/#projects" className="navigation__list--link ">
            projects
          </a>
        </motion.li>
        <motion.li variants={TitleAnim} className="navigation-item" onClick={() => setToggle(false)}>
          <NavLink to="/contact" className="navigation__list--link ">
            contact
          </NavLink>
        </motion.li>
      </ul>
    </>
  );
  return (
    <header className="header">
      <a href="/">
        <div className="header__logo">
          <img src={logo} alt="logo" className="header__logo-logo" />
          <h3>ITGC</h3>
        </div>
      </a>
      <nav className="navigation">
        <NavList />
      </nav>
      <Humberger />
    </header>
  );
};

export default Header;
