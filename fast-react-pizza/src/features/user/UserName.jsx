import { useSelector } from "react-redux";

export default function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return;

  return (
    <div className=" hidden text-base font-semibold sm:text-xl md:block">
      {username}
    </div>
  );
}
