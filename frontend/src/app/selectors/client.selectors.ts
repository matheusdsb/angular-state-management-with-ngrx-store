import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCLient from '../reducers/client.reducer';
import { Client } from '../models/client.model';

export const selectClientsState = createFeatureSelector<fromCLient.State>('clients');

const emptyClient: Client = {
    _id: '',
    name: '',
    code: 0,
    address: '',
    telephone: '',
    status: '',
    birthDate: new Date(),
    __v: ''
}

export const selectAllClients = createSelector(selectClientsState, fromCLient.selectAllClients);
export const selectClientId = createSelector(selectClientsState, fromCLient.getSelectedClientId);
export const selectClientEntities = createSelector(selectClientsState, fromCLient.selectClientEntities);
export const selectCurrentClient = createSelector(
    selectClientEntities,
    selectClientId,
    (clientEntities, clientId) => clientId ? clientEntities[clientId] : emptyClient
);
