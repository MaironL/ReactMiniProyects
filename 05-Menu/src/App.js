import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categories = ["all", ...new Set(items.map((item) => item.category))];

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((items) => items.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
