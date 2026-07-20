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
    convertCurrency(state) {
      state.isLoading = true;
    },
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.balance += action.payload.amount;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
      },
    },
    payLoan(state) {
      if (state.loan === 0) return;

      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch) {
    dispatch({ type: "account/convertCurrency" });

    const data = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`,
    );
    const convertedAmount = await data.json();

    dispatch({ type: "account/deposit", payload: convertedAmount.rates.USD });
  };
}

export default accountSlice.reducer;
// export default function accountReducer(state = initialState, action) {
//   switch (action.type) {
//     case "account/convertCurrency":
//       return { ...state, isLoading: true };
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         balance: state.balance + action.payload.amount,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };
//     case "account/payLoan":
//       if (state.loan === 0) return state;
//       return {
//         ...state,
//         balance: state.balance - state.loan,
//         loan: 0,
//         loanPurpose: "",
//       };
//     default:
//       return state;
//   }
// }

// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch) {
//     dispatch({ type: "account/convertCurrency" });

//     const data = await fetch(
//       `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`,
//     );
//     const convertedAmount = await data.json();

//     dispatch({ type: "account/deposit", payload: convertedAmount.rates.USD });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return { type: "account/requestLoan", payload: { amount, purpose } };
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }
