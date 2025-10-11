import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 py-10 px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
}
