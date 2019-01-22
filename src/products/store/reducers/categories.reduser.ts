import { CategoryState } from "./categories.reduser";
import { Category } from "./../../models/catregory.model";
import * as fromCategory from "../actions/categories.actions";

export interface CategoryState {
  entities: { [id: number]: Category };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CategoryState = {
  entities: {},
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
      const categories = action.payload;
      const entities = categories.reduce(
        // tslint:disable-next-line:no-shadowed-variable
        (entities: { [id: number]: Category }, category: Category) => {
          return {
            ...entities,
            [category.id]: category
          };
        },
        {
          ...state.entities
        }
      );
      return { ...state, loading: false, loaded: true, entities };
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
export const getCategoriesEntities = (state: CategoryState) => state.entities;
