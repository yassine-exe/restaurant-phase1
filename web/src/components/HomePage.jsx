"use client";

import { useState } from "react";
import { menuItems } from "@/data/menu.mjs";
import { searchMenu } from "@/lib/menu.mjs";
import styles from "./HomePage.module.css";

export default function HomePage() {
const [query, setQuery] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

const dishes = searchMenu(menuItems, query).filter(
  (item) => selectedCategory === "All" || item.category === selectedCategory
);

  return (
    <main id="home" className={styles.page}>
      <section className={styles.hero} aria-labelledby="welcome-title">
        <p className={styles.eyebrow}>OLIVE TABLE RESTAURANT</p>

        <h1 id="welcome-title" className={styles.title}>
          Good food.
          <span>Great moments.</span>
        </h1>

        <p className={styles.intro}>
          Freshly prepared favorites, simple ingredients,
          and something delicious for everyone.
        </p>

        <a href="#menu" className={styles.menuLink}>
          Explore our menu
        </a>
      </section>

      <section id="menu" className={styles.menu} aria-labelledby="menu-title">
        <div className={styles.menuTop}>
          <div>
            <p className={styles.eyebrow}>FROM OUR KITCHEN</p>
            <h2 id="menu-title" className={styles.sectionTitle}>
              Find your favorite.
            </h2>
          </div>

          <div className={styles.searchBox}>
            <label htmlFor="menu-search">Search the menu</label>
            <input
              id="menu-search"
              className={styles.searchInput}
              type="search"
              placeholder="Pizza, burger, pasta..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-describedby="menu-results"
            />
          </div>
        </div>

        <div
  className={styles.filters}
  role="group"
  aria-label="Filter menu by category"
>
  {categories.map((category) => (
    <button
      key={category}
      type="button"
      className={styles.filterButton}
      aria-pressed={selectedCategory === category}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  ))}
</div>

        <p id="menu-results" className={styles.resultCount} role="status">
          {dishes.length} {dishes.length === 1 ? "dish" : "dishes"} available
        </p>

        <div className={styles.grid}>
          {dishes.map((item) => (
            <article key={item.id} className={styles.card}>
              <span className={styles.category}>{item.category}</span>
              <h3>{item.name}</h3>
              <p className={styles.description}>{item.description}</p>
              <strong className={styles.price}>{item.price} EGP</strong>
            </article>
          ))}
        </div>

        {dishes.length === 0 && (
          <p className={styles.empty}>
            No matching dishes. Try another search.
          </p>
        )}
      </section>
    </main>
  );
}
