import React, { useState } from "react";
import Coffee from "./Coffee";

export default function CoffeeItems({ coffeeItems }) {
  const [selected, setSelected] = useState(0);

  function handleSelected(id) {
    setSelected(selected !== id ? id : 0);
  }
  return (
    <div className="coffee">
      {coffeeItems.map((coffee) => (
        <Coffee name={coffee} selected={selected} onSelect={handleSelected} />
      ))}
    </div>
  );
}
