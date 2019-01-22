import { User } from "./../../models/user.model";
import { Action } from "@ngrx/store";

export const AUTHENTICATE = "[User] User Autenticate";
export const AUTHENTICATE_SUCCESS = "[User] User Autenticate Success";

export const AUTHENTICATED_ERROR = "[User] User Autenticated with Error";
export const AUTHENTICATED_SUCCESS = "[User] User Autenticateed Successfull";

export const SIGN_UP = "[User] User Sign Up";
export const SIGN_UP_ERROR = "[User] User Sign Up Error";

export const SIGN_OUT_ERROR = "[User] User Sign Out Error";
export const SIGN_OUT_SUCCESS = "[User] User Sign Out Success";

export class Autenticate implements Action {
  readonly type = AUTHENTICATE;
}

export class AutenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;
  constructor(public payload: any) {} // FIXME: Check type ANY
}

export class AutenticatedError implements Action {
  readonly type = AUTHENTICATED_ERROR;
  constructor(public payload: any) {} // FIXME: Check type ANY
}

export class AutenticateedSuccess implements Action {
  readonly type = AUTHENTICATED_SUCCESS;
  constructor(public payload: any) {} // FIXME: Check type ANY
}

export class SignUp implements Action {
  readonly type = SIGN_UP;
}

export class SignUpError implements Action {
  readonly type = SIGN_UP_ERROR;
  constructor(public payload: any) {} // FIXME: Check type ANY
}

export class SignOutError implements Action {
  readonly type = SIGN_OUT_ERROR;
  constructor(public payload: any) {} // FIXME: Check type ANY
}

export class SignOutSuccess implements Action {
  readonly type = SIGN_OUT_SUCCESS;
}

// action types
export type UserActions =
  | Autenticate
  | AutenticateSuccess
  | AutenticatedError
  | AutenticateedSuccess
  | SignUp
  | SignUpError
  | SignOutError
  | SignOutSuccess;
