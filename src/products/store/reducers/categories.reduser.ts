import { Category } from "./../../models/catregory.model";
import * as fromCategory from "../actions/categories.actions";

export interface CategoryState {
  data: Category[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: CategoryState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromCategory.CategoriesActions
): CategoryState {
  switch (action.type) {
    case fromCategory.LOAD_CATEGORIES: {
      return {
        ...state,
        loading: true
      };
    }

    case fromCategory.LOAD_CATEGORIES_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case fromCategory.LOAD_CATEGORIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    default:
      return state;
  }
}

export const getCategoriesLoading = (state: CategoryState) => state.loading;
export const getCategoriesLoaded = (state: CategoryState) => state.loaded;
export const getCategories = (state: CategoryState) => state.data;
