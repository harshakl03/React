import Button from "./Button";

export default function Friend({ friend, onSelectFriend, selectedFriend }) {
  return (
    <li className={selectedFriend?.id === friend.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance === 0 && <p>You are {friend.name} are even</p>}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you $({friend.balance})
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You owes $({Math.abs(friend.balance)}) to {friend.name}
        </p>
      )}
      <Button onclick={() => onSelectFriend(friend)}>
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}
