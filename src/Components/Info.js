import React from "react";
import styles from "./Info.module.css";

const Info = ({ text }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <div className={styles.infoBorder}></div>
    </div>
  );
};

export default Info;