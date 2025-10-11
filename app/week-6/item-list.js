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
