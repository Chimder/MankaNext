import { setLastView, shortMankaType } from "../Store/Slices/lastView";
import { useAppDispatch } from "../Store/store";

const dispatch = useAppDispatch();

export const AddLastManka = (manka: shortMankaType) => {

  dispatch(setLastView(manka));
};
