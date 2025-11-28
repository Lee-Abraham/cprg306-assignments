"use client";

export default function Item({ item, onSelect, onDelete }) {
  const { name, quantity, category } = item;

  return (
    <li className="list-none bg-gray-800 border-2 border-gray-700 rounded-md p-3 mt-3 text-left text-white hover:bg-gray-700 transition flex justify-between items-center">
      <div
        onClick={() => onSelect && onSelect(item)}
        className="cursor-pointer"
      >
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-lg">
          Buy {quantity} in {category}
        </p>
      </div>

      <div className="ml-4">
        <button
          onClick={() => onDelete && onDelete(item.id)}
          className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
          title="Delete item"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
