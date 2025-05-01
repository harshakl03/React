import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="bg-yellow-500 px-4 py-6 border-b border-stone-300 flex items-center justify-between">
      <Link
        to="/"
        className="tracking-widest font-semibold text-base sm:text-xl"
      >
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
