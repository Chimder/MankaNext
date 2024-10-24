import { setLastView, shortMankaType } from "../Store/Slices/last-view";
import { useAppDispatch } from "../Store/store";

const dispatch = useAppDispatch();

export const AddLastManka = (manka: shortMankaType) => {
  dispatch(setLastView(manka));
};
