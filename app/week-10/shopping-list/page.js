"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import {
  getItems,
  addItem as addItemService,
  deleteItem as deleteItemService,
} from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  // load items for current user
  async function loadItems(uid) {
    if (!uid) {
      setItems([]);
      return;
    }
    const results = await getItems(uid);
    setItems(results);
  }

  useEffect(() => {
    if (user?.uid) {
      loadItems(user.uid);
    } else {
      setItems([]);
    }
  }, [user?.uid]);

  // handle add item - optimistic update
  async function handleAddItem(item) {
    if (!user?.uid) {
      console.error("No user logged in");
      return;
    }

    // show item immediately with a temporary ID
    const tempId = Date.now().toString();
    const optimisticItem = { id: tempId, ...item };
    setItems((prev) => [...prev, optimisticItem]);

    try {
      // write to Firestore
      const newId = await addItemService(user.uid, item);

      // replace tempId with real Firestore ID
      setItems((prev) =>
        prev.map((i) => (i.id === tempId ? { ...i, id: newId } : i))
      );
    } catch (err) {
      console.error("Failed to add item:", err);
      // rollback if Firestore fails
      setItems((prev) => prev.filter((i) => i.id !== tempId));
    }
  }

  // delete item - optimistic update
  async function handleDeleteItem(itemId) {
    if (!user?.uid) return;

    // remove immediately from local state
    setItems((prev) => prev.filter((i) => i.id !== itemId));

    // clear selection if it matched deleted item
    if (selectedIngredient) {
      const deletedItem = items.find((it) => it.id === itemId);
      if (deletedItem && deletedItem.name === selectedIngredient) {
        setSelectedIngredient("");
      }
    }

    try {
      await deleteItemService(user.uid, itemId);
    } catch (err) {
      console.error("Failed to delete item:", err);
      // rollback if Firestore fails (re-add item)
      await loadItems(user.uid);
    }
  }

  function handleSelectItem(item) {
    setSelectedIngredient(item.name || "");
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Your Shopping List
      </h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList
        items={items}
        onItemSelect={handleSelectItem}
        onItemDelete={handleDeleteItem}
      />

      <div className="mt-8">
        <MealIdeas ingredient={selectedIngredient} />
      </div>
    </main>
  );
}
