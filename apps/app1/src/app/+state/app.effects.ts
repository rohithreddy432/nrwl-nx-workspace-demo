import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { AppState } from './app.interfaces';
import { LoadData, DataLoaded } from './app.actions';

@Injectable()
export class AppEffects {
  @Effect()
  public loadData = this.dataPersistence.fetch('LOAD_DATA', {
    run: (action: LoadData, state: AppState) => {
      return {
        type: 'DATA_LOADED',
        payload: {}
      };
    },

    onError: (action: LoadData, error) => {
      console.error('Error', error);
    }
  });

  constructor(private actions: Actions, private dataPersistence: DataPersistence<AppState>) {}
}
