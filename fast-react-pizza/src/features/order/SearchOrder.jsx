import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuerty] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuerty("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order by #"
        value={query}
        onChange={(e) => setQuerty(e.target.value)}
        className="w-60 rounded-full bg-yellow-200 px-4 py-2 transition-all duration-300 placeholder:text-stone-700 focus:w-64 focus:outline-none focus:ring focus:ring-yellow-600 focus:placeholder:text-stone-500  md:w-72 md:focus:w-96"
      />
    </form>
  );
}
