"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function incrementQuantity() {
    if (quantity < 20) setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
      name,
      quantity,
      category: category.toLowerCase(),
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <main className="flex justify-center items-center">
      <div className="bg-white rounded-[10px] p-10 shadow-lg mt-6 border-black w-full max-w-md">
        <form onSubmit={handleSubmit} className="text-black">
          <input
            type="text"
            id="name"
            placeholder="Item Name"
            className="w-full border rounded-[10px] mb-4 p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-[10px] mb-4 p-2"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>

          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              type="button"
              onClick={decrementQuantity}
              disabled={quantity === 1}
              className={`font-bold rounded-[10px] px-4 py-2 ${
                quantity === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 text-black hover:bg-[#660000]"
              }`}
            >
              -
            </button>

            <span className="text-2xl font-bold text-black border p-2 rounded-[10px] w-12 text-center">
              {quantity}
            </span>

            <button
              type="button"
              onClick={incrementQuantity}
              disabled={quantity === 20}
              className={`font-bold rounded-[10px] px-4 py-2 ${
                quantity === 20
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 text-black hover:bg-[#006400]"
              }`}
            >
              +
            </button>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-[10px] transition"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
