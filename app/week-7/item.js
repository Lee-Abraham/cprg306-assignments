export default function Item({ item }) {
  const { name, quantity, category } = item;

  return (
    <li className="list-none bg-gray-800 border-2 border-gray-700 rounded-md p-3 cursor-pointer mt-3 text-left text-white">
      <p className="text-2xl font-bold">{name}</p>
      <p className="text-lg">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
