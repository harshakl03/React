import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalPrice } from "../cart/cartSlice";
import store from "../../store";
import { fetchAddress } from "../user/userSlice";
import { formatCurrency } from "../../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const {
    username,
    address,
    position,
    status: addressStatus,
    error,
  } = useSelector((state) => state.user);
  const status = useNavigation();
  const isSubmitting = status.state === "submitting";
  const errorData = useActionData();
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();
  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;
  const total = totalPrice + priorityPrice;
  const isLoading = addressStatus === "loading";

  return (
    <div className="mt-8">
      <h2 className="mb-10 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            defaultValue={username}
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className={`sm:basis-40 ${errorData?.phone ? "sm:pb-8" : ""}`}>
            Phone number
          </label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {errorData?.phone && (
              <p className="mt-2 rounded-md bg-red-200 p-1 text-xs text-red-600">
                {errorData.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow ">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              defaultValue={address}
              disabled={isLoading}
            />
            {error && (
              <p className="mt-2 rounded-md bg-red-200 p-1 text-xs text-red-600">
                {error}
              </p>
            )}
          </div>

          {!position.latitude && !position.longitude && (
            <Button
              type="small"
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchAddress());
              }}
            >
              Get address
            </Button>
          )}
        </div>

        <div className="mb-4 flex gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="transistion-all h-6 w-6 px-4 py-2 accent-yellow-400 duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting
              ? "Placing Order"
              : `Order now for ${formatCurrency(total)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(data.phone))
    errors.phone =
      "Please provide us your phone number so we may contact you for further process.";
  if (Object.keys(errors).length > 0) return errors;

  store.dispatch(clearCart());

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
