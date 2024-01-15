import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootStore = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(thunk))
);
