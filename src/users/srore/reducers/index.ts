import { ActionReducerMap } from "@ngrx/store";

import * as fromUser from "";

export interface UserState {
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<UserState> = {
  user: fromUser.reducer
};
