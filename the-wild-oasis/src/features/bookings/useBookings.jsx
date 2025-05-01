import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/globalConstants";

export default function useBookings() {
  const query = useQueryClient();
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("status");
  const sortedValue = searchParams.get("sortBy") || "startDate-desc";
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue, method: "eq" };

  const [field, order] = sortedValue.split("-");
  const sortBy = { field, order };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //PRE-FETCHING
  const PageCount = Math.ceil(count / PAGE_SIZE);

  if (page > 1)
    query.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  if (page < PageCount)
    query.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  return { isLoading, bookings, count };
}
