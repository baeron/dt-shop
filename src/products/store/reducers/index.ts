import {
  ActionReducerMap,
  createFeatureSelector
} from "@ngrx/store";

import * as fromCategories from "./categories.reduser";

export interface ProductsState {
  categories: fromCategories.CategoryState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  categories: fromCategories.reducer
};

export const getCategoriesState = createFeatureSelector<ProductsState>(
  "products"
);

/*
export const getCategoryState = createSelector(
  getCategoriesState,
  (state: ProductsState) => state.categories
);

export const getCategoriesEntities = createSelector(
  getCategoryState,
  fromCategories.getCategoriesEntities
);

export const getAllCategories = createSelector(
  getCategoriesEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getCategoriesLoaded = createSelector(
  getCategoryState,
  fromCategories.getCategoriesLoaded
);

export const getAllCategoriesLoading = createSelector(
  getCategoryState,
  fromCategories.getCategoriesLoading
);
*/
