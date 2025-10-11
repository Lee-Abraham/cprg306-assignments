export default function Item({ item }) {
  const { name, quantity, category } = item;

  return (
    <main>
      <ul>
        <li className="bg-amber-800 text-white border-2 border-amber-600 rounded-md p-4 hover:bg-amber-600 transition duration-200">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-md">Quantity: {quantity}</p>
          <p className="text-md capitalize">Category: {category}</p>
        </li>
      </ul>
    </main>
  );
}
