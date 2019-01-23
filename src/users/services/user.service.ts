import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable, pipe, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { User } from "../models/user.model";

const USER_URL = "http://localhost:3000/users";

@Injectable({
  providedIn: "root"
})

export class UserService {
constructor( private http: HttpClient) {}

private _authenticated = false;

registerUser(user: User): Observable<any> {
return this.http
.post<User>(USER_URL, user)
.pipe(
tap(_ => console.log("user was created")),
catchError(this.handleError("registerNewUser", [])));
}

// FIXME: NEED GET USER PROFILE BY AUTHTOKEN but now oo dummy data get it by ID
getUserProfile(user: User) {

}

/*
// FIXME: CHANGE AFTER ADD REAL BACK END
public authenticate(email: string, password: string): Observable<User> {
  if (email === "user@user.com" && password === "user123") {
    this._authenticated = true;
    return Observable.of(
      {
        "id": 111,
        "email": "example@example.com",
        "password": "example123",
        "token": "firstToken"
      }
    );
  }
  return Observable.throw(new Error("Invalid email or password"));
}

public authenticated(): Observable<boolean> {
  return Observable.of(this._authenticated);
}

public authenticatedUser(): Observable<User> {
  return Observable.of(
    {
      "id": 111,
      "email": "example@example.com",
      "password": "example123",
      "token": "firstToken"
    }
  );
}

public signout(): Observable<boolean> {
  // Normally you would do an HTTP request sign end the session
  // but, let's just return an observable of true.
  this._authenticated = false;
  return Observable.of(true);
}
*/

storeUserData(token: string) {
  localStorage.setItem('dt-shop_token', token);
}

private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
