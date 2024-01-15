export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding your travel list</em>
      </footer>
    );

  const numList = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / numList) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are good to go"
          : `You have ${numList} items in your list. You have packed ${packed}(
        ${percentage}%)`}
      </em>
    </footer>
  );
}
