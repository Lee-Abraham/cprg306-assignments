"use client";
import NewItem from './new-item';
import {useState} from 'react';

export default function Page() {
    const [quantity, setQuantity] = useState(1);

    function incrementQuantity() {
        if (quantity <= 20) {
            setQuantity(quantity + 1);
        }
        else {
            alert("Quantity cannot be more than 20");
        }
    }

    function decrementQuantity() {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
        else {
            alert("Quantity cannot be less than 1");
        }
    }

  return (
    <main className="flex flex-col items-center text-center p-6">
        <NewItem />
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <span className="mx-2">{quantity}</span>
            <div>
                <button style={{borderRadius: "10px", backgroundColor: "green", margin: "10px"}} onClick={incrementQuantity}>Increase</button>
                <button style={{borderRadius: "10px", backgroundColor: "red", margin: "10px"}} onClick={decrementQuantity}>Decrease</button>
            </div>
        </div>
    </main>
  );
}

