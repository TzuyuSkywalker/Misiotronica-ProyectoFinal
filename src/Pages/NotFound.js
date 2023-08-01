import React from "react";
import notFoundImage from "../assets/404.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img src={notFoundImage} alt="404 Not Found" className={styles.image} />
    </div>
  );
};

export default NotFound;