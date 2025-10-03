"use client";
import {useState} from 'react';

export default function NewItem() {
      const [quantity, setQuantity] = useState(1);

    function incrementQuantity() {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
        else {
            button.disabled = true;
        }
    }

    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        else {
            button.disabled = true;
        }
    }

  return (
    <main className="flex items-center text-center p-6">
        <div className="flex items-center gap-2 bg-white rounded-[10px] p-4 shadow-lg mt-6 size-[10px,10px]">
            <span className="mx-2 text-5xl font-bold mb-4 text-black rounded-[10p]">{quantity}</span>
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