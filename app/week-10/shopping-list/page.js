"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../../_utils/auth-context";
import { getItems, addItem } from "../shopping-list/shopping-list-service";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) window.location.href = "/week10";
  }, [user]);

  useEffect(() => {
    async function load() {
      if (!user) return;
      const data = await getItems(user.uid);
      setItems(data);
    }
    load();
  }, [user]);

  async function handleAddItem(item) {
    const id = await addItem(user.uid, item);
    setItems((prev) => [...prev, { id, ...item }]);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="rounded-lg p-6" style={{ backgroundColor: "#071226" }}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

              <NewItem onAddItem={handleAddItem} />

              <ItemList
                items={items}
                onItemSelect={(item) => setSelectedItemName(item.name || item)}
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-lg font-semibold mb-2">Meal Ideas</h2>

              <div
                className="rounded-md p-4"
                style={{ backgroundColor: "#0f1724", minHeight: 260 }}
              >
                <MealIdeas ingredient={selectedItemName} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-80 bg-black" />
    </main>
  );
}
