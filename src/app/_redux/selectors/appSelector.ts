import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@models/dataModel";
import { selectSelf } from "@redux/selectors/selfStateSelector";

export const selectApp = createSelector(selectSelf, (state: RootState) => state.app);
