"use client";
import {useState} from 'react';

export default function NewItem() {
    // State to hold the quantity value
      const [quantity, setQuantity] = useState(1);

    // Function to handle incrementing the quantity
    function incrementQuantity() {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
        else {
            button.disabled = true;
        }
    }

    // Function to handle decrementing the quantity
    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        else {
            button.disabled = true;
        }
    }

// Render the component
  return (
    <main className="items-center text-center p-6">
        <div className="flex items-center gap-2 bg-white rounded-[10px] p-4 shadow-lg mt-6 size-[10px,10px]">
            <p className="mx-2 text-5xl font-bold mb-4 text-black rounded-[10p]">{quantity}</p>
            <div className="flex gap-2 px-4">
                <button className=" text-xl font-bold mb-4 rounded-[10px] bg-green-600 text-black px-4 py-2 transition-colors duration-200 hover:bg-[#006400]" onClick={incrementQuantity}>
                    +
                </button>
                <button className="text-xl font-bold mb-4 rounded-[10px] bg-red-600 text-black px-4 py-2 transition-colors duration-200 hover:bg-[#660000]" onClick={decrementQuantity}>
                    -
                </button>
            </div>
        </div>
    </main>
  );
}