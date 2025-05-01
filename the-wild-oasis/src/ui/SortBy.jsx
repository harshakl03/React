import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  const currentValue = searchParams.get("sortBy") || "";

  return (
    <Select value={currentValue} onChange={handleChange} options={options} />
  );
}
