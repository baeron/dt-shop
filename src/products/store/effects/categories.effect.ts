import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";

import * as categoryActions from "../actions/categories.actions";
import * as fromServices from "../../services";

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: fromServices.CategoryService
  ) {}

  @Effect()
  loadCategories$ = this.actions$.pipe(
    ofType(categoryActions.LOAD_CATEGORIES),
    switchMap(() => {
      return this.categoriesService.getCategories().pipe(
        map(
          categories => new categoryActions.LoadCategoriesSuccess(categories)
        ),
        catchError(error => of(new categoryActions.LoadCategoriesFail(error)))
      );
    })
  );
}
