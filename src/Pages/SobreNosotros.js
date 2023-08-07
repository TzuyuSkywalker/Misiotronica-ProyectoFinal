import React from "react";
import styles from "./SobreNosotros.module.css";
import Info from "../Components/Info";

const SobreNosotros = () => {
  const info = [
    {
      text: "En nuestra tienda online encontrarás todo lo que necesitas en el mundo de la electrónica.",
      id: 1,
    },
    {
      text: "Ofrecemos una amplia variedad de productos de alta calidad, desde componentes y accesorios hasta equipos y herramientas especializadas.",
      id: 2,
    },
    {
      text: " Ya sea que seas un aficionado o un profesional en el mundo de la electrónica, estamos aquí para ayudarte en cada paso del camino.",
      id: 3,
    },
    {
      text: "Explora nuestra amplia selección de productos en nuestra tienda en línea y siéntete libre de contactarnos si necesitas ayuda o asesoramiento.",
      id: 4,
    },
  ];

  return (
    <div name="SobreNosotros" className={styles.sobreNosotros}>
      <h2 className={styles.tittle}>Sobre Nosotros</h2>
      {info.map((x) => (
        <Info key={x.id} text={x.text} info={x.id} />
      ))}
    </div>
  );
};

export default SobreNosotros;