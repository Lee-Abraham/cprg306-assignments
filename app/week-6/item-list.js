"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let items = [...itemsData];

  // SORT ITEMS
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  // GROUP BY CATEGORY
  const groupedItems =
    sortBy === "group"
      ? items.reduce((groups, item) => {
          const category = item.category;
          if (!groups[category]) {
            groups[category] = [];
          }
          groups[category].push(item);
          return groups;
        }, {})
      : null;

  return (
    <section className="flex flex-col items-center">
      {/* SORT BUTTONS */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            sortBy === "name"
              ? "bg-amber-800 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            sortBy === "category"
              ? "bg-amber-800 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            sortBy === "group"
              ? "bg-yellow-500 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* FOR LISTS OF THE ITEMS */}
      <div className="w-full max-w-xl">
        {sortBy === "group" ? (
          // Grouped View
          Object.keys(groupedItems)
            .sort()
            .map((category) => (
              <div
                key={category}
                className="mb-6 bg-white rounded-lg shadow p-4 pt-6 relative"
              >
                {/* CATEGORY NAME */}
                <h2 className=" capitalize absolute top-2 left-4 text-xs font-semibold text-blue-500 bg-white px-2 py-0.5 rounded">
                  {category}
                </h2>
                <ul>
                  {groupedItems[category]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <Item key={item.id} item={item} />
                    ))}
                </ul>
              </div>
            ))
        ) : (
          <ul>
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
