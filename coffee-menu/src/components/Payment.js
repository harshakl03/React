import React, { useState } from "react";
import PaymentEach from "./PaymentEach";

export default function Payment({ coffeeItems }) {
  const [total, setTotal] = useState(0);

  function handleTotal(value, submit) {
    if (!submit) setTotal((p) => p + value);
    else setTotal((p) => p - value);
  }

  return (
    <div className="payment">
      <h2 className="heading">PAYMENT</h2>
      <h4>You can book Max 10 in Each</h4>
      {coffeeItems.map((coffee) => (
        <PaymentEach coffee={coffee} addTotal={handleTotal} />
      ))}
      <h3 className="pay-btn">TOTAL=${total}</h3>
    </div>
  );
}
