import { createSlice } from "@reduxjs/toolkit";

const toduSlice = createSlice({
  name: "todu",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((val) => val.value !== action.payload.value);
    },
    deleteAll(state, action) {
      return [];
    },
    edit(state, action) {
      const updatedState = state.map((itm, idx) => {
        if (idx === action.payload.id) {
          return action.payload;
        }
        return itm;
      });
      return [...updatedState];
    },
  },
});
export const { add, remove, deleteAll, edit } = toduSlice.actions;
export default toduSlice.reducer;
