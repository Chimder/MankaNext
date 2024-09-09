import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type shortMankaType = {
  img: string;
  name: string;
  lastCapter: number;
};
interface lastView {
  name: string;
  mankaView: Required<shortMankaType[]>;
}

const initialState: lastView = {
  name: "",
  mankaView: [],
};

export const LastViewSlice = createSlice({
  name: "LastView",
  initialState,
  reducers: {
    setLastView(state, { payload }: PayloadAction<shortMankaType>) {
      const include = state.mankaView.find(
        (manka) => manka.name === payload.name,
      );
      if (include) {
        include.lastCapter = payload.lastCapter;
      } else state.mankaView.push(payload);
    },
    deleteLastView(state, { payload }: PayloadAction<string>) {
      state.mankaView = state.mankaView.filter(
        (manka) => manka.name !== payload,
      );
    },
  },
});

export const { setLastView, deleteLastView } = LastViewSlice.actions;

export default LastViewSlice.reducer;
