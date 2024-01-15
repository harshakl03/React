import React, { useState } from "react";

export default function PaymentEach({ coffee, addTotal }) {
  const [curCount, setCurCount] = useState(0);
  const [submit, setSubmit] = useState(false);
  const curCost = curCount * coffee.cost;

  function handleSubmit(e) {
    e.preventDefault();
    if (!curCost) return;
    addTotal(curCost, submit);
    setSubmit((p) => !p);
    if (submit) setCurCount(0);
  }

  return (
    <form className="pay-each" onSubmit={handleSubmit}>
      <h4>
        Cost of {coffee.id} is ${coffee.cost}*
      </h4>
      <input
        type="text"
        size="5"
        disabled={submit}
        value={curCount}
        onChange={(e) =>
          setCurCount(
            isNaN(Number(e.target.value))
              ? 0
              : Number(e.target.value) > 10
              ? curCount
              : Number(e.target.value)
          )
        }
      />
      <h4>={curCost}</h4>
      <button>{submit ? "❌" : "✅"}</button>
    </form>
  );
}
