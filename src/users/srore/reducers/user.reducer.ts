import { User } from "./../../models/user.model";

import * as fromUser from "../actions/user.action";

// tslint:disable-next-line:no-empty-interface
export interface UserState {
  // TODO: check in tutorial
}

export const initialState: UserState = {
  // TODO: check in tutorial};
};

export function reducer(
  state = initialState,
  action: fromUser.UserActions
): UserState {
  switch (action.type) {
    default:
      return state;
  }
}
