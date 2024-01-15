import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selected, onBillSubmit }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidbyFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onBillSubmit(whoIsPaying === "user" ? paidbyFriend : -paidbyFriend);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>💸Split Bill with {selected.name}</h2>
      <label>💷Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>👦Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>😎{selected.name}'s Expense</label>
      <input type="text" disabled value={paidbyFriend} />
      <label>🤔Who is paying the bill??</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selected.name}</option>
      </select>
      <Button>Spilt Bill</Button>
    </form>
  );
}
