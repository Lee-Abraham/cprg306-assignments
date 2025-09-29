import ItemList from './item-list';
//Should not be using Item here since its already used on ItemList
// import Item from './item';

export default function Page() {
  return (
    <main className="flex flex-col items-center text-center p-6">
      <h1 className="text-5xl font-bold mb-4">Shopping List</h1>
      <ItemList/>
    </main>
  );
}
