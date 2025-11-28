import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { itemsReducer } from './items/state/items.reducer';
import { ItemsEffects } from './items/state/items.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ 
      items: itemsReducer 
    }),
    provideEffects([ItemsEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
};