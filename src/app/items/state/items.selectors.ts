import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemsState } from './items.reducer';

export const selectItemsState = createFeatureSelector<ItemsState>('items');

export const selectAllItems = createSelector(
  selectItemsState,
  (state) => state.items
);

export const selectItemsLoading = createSelector(
  selectItemsState,
  (state) => state.loading
);

export const selectItemsError = createSelector(
  selectItemsState,
  (state) => state.error
);

export const selectSelectedItem = createSelector(
  selectItemsState,
  (state) => state.selectedItem
);

export const selectItemDetailsLoading = createSelector(
  selectItemsState,
  (state) => state.detailsLoading
);

export const selectItemDetailsError = createSelector(
  selectItemsState,
  (state) => state.detailsError
);