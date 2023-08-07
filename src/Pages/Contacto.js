import React from "react";
import styles from "./Contacto.module.css";

const Contacto = () => {
  return (
    <div name="Contacto" className={styles.contact}>
      <h2>Contacto</h2>
      <form
        className={styles.form}
        method="POST"
        action="https://getform.io/f/3f773918-1d3c-4386-b62d-d3d4e5256f7a"
      >
        <label htmlFor="Nombre">Nombre</label>
        <input id="Nombre" name="Nombre" className={styles.Input}></input>
        <label htmlFor="Email">Email</label>
        <input
          id="Email"
          name="Email"
          type="Email"
          className={styles.Input}
        ></input>
        <label>Mensaje</label>
        <textarea id="Mensaje" className={styles.textArea}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;