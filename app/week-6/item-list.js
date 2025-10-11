"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let items = [...itemsData];

  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  const groupedItems = items.reduce((groups, item) => {
    const category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  });

  for (const category in groupedItems) {
    groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="w-full max-w-3xl mx-auto text-white">
      <div className="flex justify-center gap-4 mb-10">
        <button
          className={`px-6 py-2 rounded-md font-semibold transition duration-200 ${
            sortBy === "name"
              ? "bg-amber-800 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-6 py-2 rounded-md font-semibold transition duration-200 ${
            sortBy === "category"
              ? "bg-amber-800 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
        <button
          className={`px-6 py-2 rounded-md font-semibold transition duration-200 ${
            sortBy === "grouped"
              ? "bg-amber-800 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => setSortBy("grouped")}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "grouped" ? (
        Object.keys(groupedItems)
          .sort()
          .map((category) => (
            <section key={category} className="mb-8">
              <h2 className="text-2xl font-bold capitalize mb-4 border-b-2 border-amber-500 pb-1">
                {category}
              </h2>
              <ul className="space-y-3">
                {groupedItems[category].map((item) => (
                  <Item item={item} key={item.id} />
                ))}
              </ul>
            </section>
          ))
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
