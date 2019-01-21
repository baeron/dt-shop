import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable, pipe, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { Category } from "../models/catregory.model";

const CATEGORY = "http://localhost:3000/categories";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  /*
  getCategories(): Observable<any> {
    // tslint:disable-next-line:no-debugger
    debugger;
    return this.http.get(CATEGORY).pipe(catchError(this.handleError));
  }
  */

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(CATEGORY).pipe(
      tap(_ => console.log("fetched categories")),
      catchError(this.handleError("getCategories", []))
    );
  }

  getCategoryById(categoryId: number): Observable<any> {
    return this.http.get<Category>(CATEGORY + "/" + categoryId).pipe(
      tap(_ => console.log("fetched categories")),
      catchError(this.handleError("getCategories", []))
    );
  }

  /*
  createCategory(payload: Category): Observable<Category> {
    return this.http
      .post<Category>(`/api/categories`, payload)
      .pipe(catchError(this.handleError));
  }

  updateCategory(payload: Category): Observable<Category> {
    return this.http
      .put<Category>(`/api/categories/${payload.id}`, payload)
      .pipe(catchError(this.handleError));
  }

  removeCategory(payload: Category): Observable<Category> {
    return this.http
      .delete<any>(`/api/pizzas/${payload.id}`)
      .pipe(catchError(this.handleError));
  }
  */

  // ------------------  TODO check info about this method    -------------------//
  /*
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
  */
  // ---------------------------------------------------------------------------//

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
