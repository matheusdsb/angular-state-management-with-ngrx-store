import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCLient from '../reducers/client.reducer'
import { State } from '../reducers/client.reducer';

export const selectClientsState = createFeatureSelector<fromCLient.State>('clients');
export const selectAllClients = createSelector(selectClientsState, fromCLient.selectAllClients);
