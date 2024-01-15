import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      if (state.balance < action.payload) return;
      state.balance -= action.payload;
    },
    loanRequest: {
      prepare(loan, purpose) {
        return { payload: { loan, purpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.balance += action.payload.loan;
        state.loan += action.payload.loan;
        state.loanPurpose = action.payload.purpose;
      },
    },
    loanPaid(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

export const { withdraw, loanRequest, loanPaid } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/currencyConverting" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();

    dispatch({ type: "account/deposit", payload: data.rates.USD });
  };
}

export default accountSlice.reducer;

/*
export default function accountReducer(state = initialAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/loanRequest":
      return {
        ...state,
        balance: state.balance + action.payload.loan,
        loan: action.payload.loan,
        loanPurpose: action.payload.loanPurpose,
      };
    case "account/loanPaid":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    case "account/currencyConverting":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}



export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function loanRequest(loan, loanPurpose) {
  return { type: "account/loanRequest", payload: { loan, loanPurpose } };
}

export function loanPaid() {
  return { type: "account/loanPaid" };
}
*/
