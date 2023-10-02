import React from "react";

export default function PackingList() {
  const initialItems = [
    { id: 1, descripition: "Passports", quantity: 2, packed: true },
    { id: 2, descripition: "Jacket", quantity: 2, packed: false },
    { id: 3, descripition: " Socks", quantity: 2, packed: false },
    { id: 4, descripition: "Charger", quantity: 2, packed: false },
  ];

  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.descripition}
      </span>
      <button>❌</button>
    </li>
  );
}
