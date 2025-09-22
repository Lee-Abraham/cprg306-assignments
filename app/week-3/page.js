// app/week-3/page.js
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col items-center text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
