import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuService, MenuItem } from './menu.service';

// Адаптируем MenuItem к Item interface
export interface Item extends MenuItem {
  inStock?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  constructor(private menuService: MenuService) {}

  getItems(query?: string): Observable<Item[]> {
    return this.menuService.getItems(query).pipe(
      map(menuItems => menuItems as Item[])
    );
  }

  getItemById(id: string | number): Observable<Item> {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    return this.menuService.getItemById(numericId).pipe(
      map(menuItem => {
        if (!menuItem) {
          throw new Error(`Item with id ${id} not found`);
        }
        return menuItem as Item;
      })
    );
  }
}