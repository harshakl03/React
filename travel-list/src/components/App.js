import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((c) => [...c, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((curItems) => curItems.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you wanna delete all the list items???"
    );
    if (confirm) setItems([]);
  }

  function handleToggleItem(id) {
    setItems((curItems) =>
      curItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={handleAddItem} />
      <PackingList
        items={items}
        deleteItem={handleDeleteItem}
        toggleItem={handleToggleItem}
        clearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
