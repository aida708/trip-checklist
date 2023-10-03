import React, { useState } from "react";

export default function Form({ onAddItems }) {
  const [descripition, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); //to prevent the refresh of the pag
  }

  if (!descripition) return;
  const newItem = { descripition, quantity, packed: false, id: Date.now() };
  console.log(newItem);

  onAddItems(newItem);

  setDescription("");
  setQuantity(1);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?😍 </h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={descripition}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
