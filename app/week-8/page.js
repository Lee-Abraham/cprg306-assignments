"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function cleanItemName(name) {
    // Remove emojis
    const noEmojis = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
      ""
    );
    const noQuantities = noEmojis.split(",")[0];
    return noQuantities.trim().toLowerCase();
  }

  // Handle selecting an item from the list
  function handleItemSelect(item) {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  }

  // Add a new item to the list
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="flex flex-col items-center text-center p-6">
      <h1 className="text-5xl font-bold mb-6 text-yellow-500">Shopping List</h1>
      <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-6xl">
        <div className="flex flex-col items-center w-full md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2 bg-gray-100 p-6 rounded-lg">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
