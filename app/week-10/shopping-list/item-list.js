"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  // SORT ITEMS
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <section className="flex flex-col items-center w-full max-w-xl">
      {/* SORT BUTTONS */}
      <div className="flex gap-3 mt-6 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            sortBy === "name"
              ? "bg-yellow-500 text-black"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            sortBy === "category"
              ? "bg-yellow-500 text-black"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* LIST OF ITEMS */}
      <ul className="w-full space-y-4">
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>
    </section>
  );
}
