"use client";
import {useState} from 'react';

export default function NewItem() {
      const [quantity, setQuantity] = useState(1);
      const [name, setName] = useState("");
      const [category, setCategory] = useState("Produce");

    // Function to handle incrementing the quantity
    function incrementQuantity() {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    // Function to handle decrementing the quantity
    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    //submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        let item = [name, quantity, category]
        console.log(item);
        alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

// Render the component
  return (
    <main className="flex justify-center items-center">
        <div className="  bg-white rounded-[10px] p-10 shadow-lg mt-6  border-black h-50">
        <div className='text-black'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Item Name: </label>
                <input className='border rounded-[10px] m-2 p-2' type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor='category'>Category: </label>
                <select className='border rounded-[10px] m-2 p-2' id='category' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value='Produce'>Produce</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Bakery'>Bakery</option>
                    <option value='Frozen Foods'>Frozen Foods</option>
                    <option value='Canned Goods'>Canned Goods</option>
                    <option value='Dry Goods'>Dry Goods</option>
                    <option value='Beverages'>Beverages</option>
                    <option value='Snacks'>Snacks</option>
                    <option value='Household'>Household</option>
                    <option value='Other'>Other</option>
                </select>
                <div className="flex items-center gap-2 z-0 absolute">
                <label className="w-24">Quantity:</label>
                <button type='button' className="font-bold rounded-[10px] bg-red-600 text-black px-4 py-2 hover:bg-[#660000]" onClick={decrementQuantity} disabled={quantity == 1}>-</button>
                <span className="text-2xl font-bold text-black border p-2 rounded-[10px] w-12 text-center">{quantity}</span>
                <button type="button" className="font-bold rounded-[10px] bg-green-600 text-black px-4 py-2 hover:bg-[#006400]" onClick={incrementQuantity} disabled={quantity == 20}>+</button>
            </div>
                <div className='z-0 absolute ml-84 mb-20'>
                <button type='submit' className='border m-2 w-50 text-black p-2 rounded-[10px] hover:bg-blue-400'>
                    Add Item
                </button>
                </div>
            </form>
            </div>
        </div>
    </main>
  );
}

