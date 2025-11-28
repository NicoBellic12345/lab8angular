import { createReducer, on } from '@ngrx/store';
import { Item } from '../../models/item.model';
import * as ItemsActions from './items.actions';

export interface ItemsState {
  items: Item[];
  selectedItem: Item | null;
  loading: boolean;
  detailsLoading: boolean;
  error: string | null;
  detailsError: string | null;
}

export const initialState: ItemsState = {
  items: [],
  selectedItem: null,
  loading: false,
  detailsLoading: false,
  error: null,
  detailsError: null
};

export const itemsReducer = createReducer(
  initialState,
  
  // Load Items
  on(ItemsActions.loadItems, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ItemsActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
    loading: false
  })),
  on(ItemsActions.loadItemsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  
  // Load Item
  on(ItemsActions.loadItem, (state) => ({
    ...state,
    detailsLoading: true,
    detailsError: null
  })),
  on(ItemsActions.loadItemSuccess, (state, { item }) => ({
    ...state,
    selectedItem: item,
    detailsLoading: false
  })),
  on(ItemsActions.loadItemFailure, (state, { error }) => ({
    ...state,
    detailsError: error,
    detailsLoading: false
  }))
);