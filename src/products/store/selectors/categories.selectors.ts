import { Category } from "./../../models/catregory.model";
import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromCategories from "../reducers/categories.reduser";

export const getCategoryState = createSelector(
  fromFeature.getCategoriesState,
  (state: fromFeature.ProductsState) => state.categories
);

export const getCategoriesEntities = createSelector(
  getCategoryState,
  fromCategories.getCategoriesEntities
);

export const getSelectedCategory = createSelector(
  getCategoriesEntities,
  fromRoot.getRouterState,
  (entities, router): Category => {
    return router.state && entities[router.state.params.categoryId];
  }
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
