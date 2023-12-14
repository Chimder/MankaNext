import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export interface tagSlice {
  genresTag: string[];
  langTag: string[];
  statusTag: string;
  sortTag: string;
  inputValue: string;
}

const initialState: tagSlice = {
  genresTag: [],
  langTag: [],
  statusTag: "",
  sortTag: "",
  inputValue: "",
};

export const tagSlice = createSlice({
  name: "Tags",
  initialState,
  reducers: {
    setGenresTag(state, { payload }: PayloadAction<string>) {
      const include = state.genresTag!.includes(payload);
      if (include) {
        state.genresTag = state.genresTag!.filter((tag) => tag !== payload);
      } else {
        state.genresTag!.push(payload);
      }
    },
    setLangTag(state, { payload }: PayloadAction<string>) {
      const include = state.langTag!.includes(payload);
      if (include) {
        state.langTag = state.langTag!.filter((tag) => tag !== payload);
      } else {
        state.langTag!.push(payload);
      }
    },
    setStatus(state, {payload}: PayloadAction<string>) {
      const currentTag = state.statusTag;
      const newTag = payload;

      state.statusTag = !currentTag || currentTag !== newTag ? newTag : "";
    },
    setSort(state, {payload}: PayloadAction<string>) {
      const currentTag = state.sortTag;
      const newTag = payload;

      state.sortTag = !currentTag || currentTag !== newTag ? newTag : "";
    },
    resetTag(state) {
      state.genresTag = [];
      state.langTag = [];
      state.sortTag = "";
      state.statusTag = "";
      state.inputValue = "";
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
  },
});

export const {
  setGenresTag,
  setLangTag,
  setSort,
  setStatus,
  resetTag,
  setInputValue,
} = tagSlice.actions;

export default tagSlice.reducer;
