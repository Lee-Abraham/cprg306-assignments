"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import Link from "next/link";

import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  const router = useRouter();

  //Protects the page
  if (user === null) {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg text-gray-600">
          Please login to view the Shopping List.
        </p>
        <Link
          href="/week-9"
          className="mt-4 text-blue-600 underline hover:text-blue-800"
        >
          Go back to Login
        </Link>
      </main>
    );
  }

  // Helper to clean item name
  function cleanItemName(name) {
    const noEmojis = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
      ""
    );
    const noQuantities = noEmojis.split(",")[0];
    return noQuantities.trim().toLowerCase();
  }

  function handleItemSelect(item) {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  }

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="flex flex-col items-center text-center p-6">
      <h1 className="text-5xl font-bold mb-6 text-yellow-500">Shopping List</h1>
      <p className="text-gray-400 mb-6">
        Logged in as <span className="font-semibold">{user.email}</span>
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-6xl">
        <div className="flex flex-col items-center w-full md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex flex-col items-center w-full md:w-1/2 bg-gray-100 p-6 rounded-lg">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>

      <Link
        href="/week-9"
        className="mt-10 bg-amber-300 text-black p-3 rounded-3xl hover:bg-amber-400 hover:text-white"
      >
       Back to Home
      </Link>
    </main>
  );
}
