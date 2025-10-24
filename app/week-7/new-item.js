"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  function incrementQuantity() {
    if (quantity < 20) setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: Date.now().toString(),
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm bg-black p-4 rounded-md shadow-md"
    >
      {/* NAME OF THE ITEM */}
      <input
        type="text"
        id="name"
        placeholder="Item Name"
        className="w-full mb-4 p-2 rounded-md bg-white text-black border"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* FOR QUANTITY + CATEGORY ROW */}
      <div className="flex gap-3 mb-4 items-center">
        {/* FOR QUANTITY CONTROL */}
        <div className="flex items-center gap-1">
          {/* FOR THE NUMBER BOX */}
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-10 h-10 text-center font-bold text-black border border-gray-400 rounded-md bg-white"
          />

          {/* DECREMENT BUTTON */}
          <button
            type="button"
            onClick={decrementQuantity}
            disabled={quantity === 1}
            className={`w-10 h-10 rounded-md text-white text-lg font-bold ${
              quantity === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
            }`}
          >
            −
          </button>

          {/* INCREMENT BUTTON */}
          <button
            type="button"
            onClick={incrementQuantity}
            disabled={quantity === 20}
            className={`w-10 h-10 rounded-md text-white text-lg font-bold ${
              quantity === 20
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
            }`}
          >
            +
          </button>
        </div>

        {/* CATEGORY SELECT */}
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 bg-white text-black p-2 rounded-md border border-gray-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* ADD ITEM BUTTON */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
      >
        Add Item
      </button>
    </form>
  );
}
