import React from "react";
import styles from "./Ventas.module.css";
import componente1 from "../assets/componente1.png";
import componente2 from "../assets/componente2.png";
import componente3 from "../assets/componente3.png";
import componente4 from "../assets/componente4.png";
import componente5 from "../assets/componente5.png";
import componente6 from "../assets/componente6.png";
import SearchBar from "../Components/SearchBar.js"

const Ventas = () => {
  const electronics = [
    {
      id: 1,
      title: "Placa Uno R3 Atmega 328 Smd Usb - Unoelectro",
      image: componente1,
      price: "5937 $",
    },
    {
      id: 2,
      title: "Carga Electronica Digital Fantasma 30v 10a 60w Test Baterias",
      image: componente2,
      price: "26871 $",
    },
    {
      id: 3,
      title: "Nodemcu Esp32 Wifi +bluetooth 4.2 Iot Wroom Esp32s Arduino",
      image: componente3,
      price: "4984 $",
    },
    {
      id: 4,
      title: "Lcd Ardu Full Graphic Impresora 3d Display Mega Ramps Sd",
      image: componente4,
      price: "10280 $",
    },
    {
      id: 5,
      title: "Modulo Display 4 Digitos Tm1637 Rojo Arduino Hobbytronica",
      image: componente5,
      price: "1974 $",
    },
    {
      id: 6,
      title: "Nodemcu Wifi Esp8266 Lua Gpio Pwm I2c Uart Arduino Ch340 Hob",
      image: componente6,
      price: "2745 $",
    },
  ];

  return (
    <div name="Ventas" className={styles.ventas}>
      <SearchBar/>
      <h2 className={styles.tittle}>Productos en Venta</h2>
      <div className={styles.cardContainer}>
        <div className={styles.row}>
          {electronics.slice(0, 3).map((electronic) => (
            <div key={electronic.id} className={styles.item}>
              <div className={styles.card}>
                <img src={electronic.image} alt={electronic.title} />
              </div>
              <h3>{electronic.title}</h3>
              <button className={styles.comprarButton}>
                Comprar: {electronic.price}
              </button>
            </div>
          ))}
        </div>
        <div className={styles.row}>
          {electronics.slice(3, 6).map((electronic) => (
            <div key={electronic.id} className={styles.item}>
              <div className={styles.card}>
                <img src={electronic.image} alt={electronic.title} />
              </div>
              <h3>{electronic.title}</h3>
              <button className={styles.comprarButton}>
                Comprar: {electronic.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ventas;