import React from "react";

export default function Coffee({ name, selected, onSelect }) {
  return (
    <div className="coffee-items" onClick={() => onSelect(name.id)}>
      {selected === name.id ? (
        <p className="full">{name.description}</p>
      ) : (
        <>
          <h1 className="num">{name.id}</h1>
          <img src={name.img} alt={name.name} />
          <h3 className="name"> {name.name}</h3>
          <h3 className="cost">Cost:${name.cost}</h3>
        </>
      )}
    </div>
  );
}
