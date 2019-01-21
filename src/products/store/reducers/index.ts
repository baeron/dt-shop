import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCategories from './categories.reduser';

export interface ProductsState {
    categories: fromCategories.CategoryState;
}

export const reducers: ActionReducerMap<ProductsState> = {
    categories: fromCategories.reducer,
};


export const getCategoriesState = createFeatureSelector<ProductsState>('products');

export const getCategoryState = createSelector(getCategoriesState, (state: ProductsState) => state.categories);

export const getAllCategories = createSelector(getCategoryState, fromCategories.getCategories);
export const getCategoriesLoaded = createSelector(getCategoryState, fromCategories.getCategoriesLoaded);
export const getAllCategoriesLoading = createSelector(getCategoryState, fromCategories.getCategoriesLoading);
