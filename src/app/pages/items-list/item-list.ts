
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';
import * as ItemsActions from '../state/items.actions';
import * as ItemsSelectors from '../state/items.selectors';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html'
})
export class ItemsListComponent implements OnInit {
  items$: Observable<Item[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.items$ = this.store.select(ItemsSelectors.selectAllItems);
    this.loading$ = this.store.select(ItemsSelectors.selectItemsLoading);
    this.error$ = this.store.select(ItemsSelectors.selectItemsError);
  }

  ngOnInit() {
    this.store.dispatch(ItemsActions.loadItems());
  }

  searchItems(query: string) {
    this.store.dispatch(ItemsActions.loadItems({ query }));
  }
}