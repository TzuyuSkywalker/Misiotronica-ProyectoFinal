import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/scrollPosition";
import logo from "../assets/misiologo.png";

const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  const links = [
    {
      id: 1,
      link: "/",
      text: "Home",
    },
    {
      id: 2,
      link: "/SobreNosotros",
      text: "Sobre Nosotros",
    },
    {
      id: 3,
      link: "/Ventas",
      text: "Ventas",
    },
    {
      id: 4,
      link: "/Contacto",
      text: "Contacto",
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
      {!navBarOpen && (
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo de Misiotronica" className={styles.logo} />
          <p className={styles.logoText}>
            Misiotronica | Componentes electronicos
          </p>
        </div>
      )}
      {!navBarOpen && windowDimension.width < 800 ? (
        <IoMenuOutline
          color="#000000"
          onClick={() => setNavBarOpen(!navBarOpen)}
          size={25}
        />
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineCloseCircle
            onClick={() => setNavBarOpen(!navBarOpen)}
            color="#000000"
            size={25}
          />
        )
      )}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link, text }) => (
            <div key={id}>
              <NavLink
                to={link}
                onClick={() => setNavBarOpen(false)}
                className={styles.navLink}
                activeclassname={styles.activeNavLink}
                key={id}
              >
                {text}
              </NavLink>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map(({ link, id, text }) => (
            <div key={id}>
              <NavLink
                to={link}
                onClick={() => setNavBarOpen(false)}
                className={styles.navLink}
                activeclassname={styles.activeNavLink}
                key={id}
              >
                {text}
              </NavLink>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;