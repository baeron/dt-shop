import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Category } from '../models/catregory.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  
  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`/api/categories`)
      .pipe(catchError(this.handleError));
  }

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

// ------------------  TODO check info about this method    -------------------//
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
// ---------------------------------------------------------------------------//
}
