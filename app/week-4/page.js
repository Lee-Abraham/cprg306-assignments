"use client";
import NewItem from './new-item';
import {useState} from 'react';

export default function Page() {
    const [quantity, setQuantity] = useState(1);

    function incrementQuantity() {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
        else {
            alert("Quantity cannot be more than 20");
        }
    }

    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        else {
            alert("Quantity cannot be less than 1");
        }
    }

  return (
    <main className="flex flex-col items-center text-center p-6">
        <NewItem />
                <div className="flex flex-col items-center gap-2 bg-white">
                        <span className="mx-2 text-5xl font-bold mb-4 text-black">{quantity}</span>
                        <div className="flex gap-2">
                                <button
                                    className="inc-button text-xl font-bold mb-4 rounded-[10px] bg-green-600 text-black px-4 py-2 transition-colors duration-200 hover:bg-[#006400]"
                                    onClick={incrementQuantity}
                                >
                                    Increase
                                </button>
                                <button
                                    className="dec-button text-xl font-bold mb-4 rounded-[10px] bg-red-600 text-black px-4 py-2 transition-colors duration-200 hover:bg-[#660000]"
                                    onClick={decrementQuantity}
                                >
                                    Decrease
                                </button>
                        </div>
                </div>
    </main>
  );
}

