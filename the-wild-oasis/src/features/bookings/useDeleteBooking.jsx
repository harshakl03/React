import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useDeleteBooking() {
  const query = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success("Booking deleted successfully");
      query.invalidateQueries({ active: true });
    },
    onError: () => toast.error("Error in deleting cabin"),
  });

  return { isDeleting, deleteBooking };
}
