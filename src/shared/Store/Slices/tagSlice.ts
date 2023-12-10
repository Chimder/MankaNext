import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface tagSlice {
  genresTag: string[];
  langTag: string[];
  statusTag: string[];
  sortTag: string[];
}

const initialState: tagSlice = {
  genresTag: [],
  langTag: [],
  statusTag: [],
  sortTag: [],
};

export const tagSlice = createSlice({
  name: "Tags",
  initialState,
  reducers: {
    setGenresTag(state, action: PayloadAction<string>) {
      const include = state.genresTag!.includes(action.payload);
      if (include) {
        state.genresTag = state.genresTag!.filter(
          (tag) => tag !== action.payload
        );
      } else {
        state.genresTag!.push(action.payload);
      }
    },
    setLangTag(state, action: PayloadAction<string>) {
      const include = state.langTag!.includes(action.payload);
      if (include) {
        state.langTag = state.langTag!.filter((tag) => tag !== action.payload);
      } else {
        state.langTag!.push(action.payload);
      }
    },
    setStatus(state, action: PayloadAction<string>) {
      const include = state.statusTag!.includes(action.payload);
      if (include) {
        state.statusTag = state.statusTag!.filter(
          (tag) => tag !== action.payload
        );
      } else {
        state.statusTag!.push(action.payload);
      }
    },
    setSort(state, action: PayloadAction<string>) {
      const include = state.sortTag!.includes(action.payload);
      if (include) {
        state.sortTag = state.sortTag!.filter((tag) => tag !== action.payload);
      } else {
        state.sortTag!.push(action.payload);
      }
    },
    deleteTag(state, action: PayloadAction<string>) {
      // const del = state.activeTag.filter((item) => item !== action.payload);
      // state.activeTag = del;
    },
  },
});

export const { setGenresTag, setLangTag, setSort, setStatus } =
  tagSlice.actions;

export default tagSlice.reducer;
