export default function Item({name, quantity, category}) {

  return (
    <main>
    <ul>
    <li className="list-none bg-amber-800 border-2 rounded-md p-2 hover:bg-amber-600 cursor-pointer mt-3 w-100">
      <p className="text-3xl font-bold text-start">{name} {quantity}</p>
      <p className="text-2xl text-start">This product is in {category}</p>
    </li>
    </ul>
    </main>
  );
}