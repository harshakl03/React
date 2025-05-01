import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckin() {
  const query = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, loading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} is successfully checked in`);
      query.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: (err) => {
      toast.error("Error in checking in");
      console.log(err);
    },
  });

  return { checkin, isCheckingIn };
}
