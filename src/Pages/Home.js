import React from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import backgroundImage from "../assets/LogoHome.png";

const Home = () => {
  return (
    <div
      name="Home"
      className={styles.home}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.tittleContainer}></div>
      <div className={styles.callToActionContainer}>
        <NavLink
          to={"Contacto"}
          smooth
          duration={500}
          className={styles.callToAction}
          activeClassName={styles.activeNavLink}
        >
          Obtener Asesoramiento
        </NavLink>
        <NavLink
          to={"Contacto"}
          smooth
          duration={500}
          className={styles.callToAction}
          activeClassName={styles.activeNavLink}
        >
          Pedir un Presupuesto
        </NavLink>
      </div>
    </div>
  );
};

export default Home;