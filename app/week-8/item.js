"use client";

export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;

  return (
    <li
      onClick={() => onSelect && onSelect(name)}
      className="list-none bg-gray-800 border-2 border-gray-700 rounded-md p-3 cursor-pointer mt-3 text-left text-white hover:bg-gray-700 transition"
    >
      <p className="text-2xl font-bold">{name}</p>
      <p className="text-lg">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
