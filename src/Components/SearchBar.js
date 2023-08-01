import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Buscar..." />
      <button type="button">Buscar</button>
    </div>
  );
};

export default SearchBar;