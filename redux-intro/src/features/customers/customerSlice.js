import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createAccount: {
      prepare(fullname, natID) {
        return {
          payload: { fullname, natID, createdAt: new Date().toISOString() },
        };
      },
      reducer(state, action) {
        state.fullname = action.payload.fullname;
        state.nationalId = action.payload.natID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateFullname(state, action) {
      state.fullname = action.payload;
    },
  },
});

export const { createAccount, updateFullname } = customerSlice.actions;

export default customerSlice.reducer;
// export default function customerReducer(state = initialState, action) {
//   switch (action.type) {
//     case "customer/createAccount":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationalId: action.payload.nationalId,
//         createdAt: new Date().toISOString(),
//       };
//     case "customer/updateFullname":
//       return {
//         ...state,
//         fullname: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export function createAccount(fullname, nationalId) {
//   return { type: "customer/createAccount", payload: { fullname, nationalId } };
// }

// export function updateFullname(fullname) {
//   return { type: "customer/updateFullname", payload: fullname };
// }
