import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newItem = { id, name, image: `${image}?=${id}`, balance: 0 };

    onAddFriend(newItem);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <span>Friend Name</span>
      <input
        type="text"
        placeholder=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span>Image Url</span>
      <input
        type="text"
        placeholder=""
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
