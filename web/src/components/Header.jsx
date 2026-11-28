"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#home" className={styles.brand} onClick={closeMenu}>
          Olive Table
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="main-navigation"
          className={`${styles.navigation} ${
            menuOpen ? styles.navigationOpen : ""
          }`}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}