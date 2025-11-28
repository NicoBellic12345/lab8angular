import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as ItemsActions from './items.actions';
import { ItemsService } from '../../services/items.service';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      switchMap(({ query }) =>
        this.itemsService.getItems(query).pipe(
          map((items) => ItemsActions.loadItemsSuccess({ items })),
          catchError((error) => of(ItemsActions.loadItemsFailure({ error: error.message })))
        )
      )
    )
  );

  loadItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItem),
      switchMap(({ id }) =>
        this.itemsService.getItemById(id).pipe(
          map((item) => ItemsActions.loadItemSuccess({ item })),
          catchError((error) => of(ItemsActions.loadItemFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private itemsService: ItemsService
  ) {}
}