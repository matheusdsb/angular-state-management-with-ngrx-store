import * as fromClients from './reducers/client.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    clients: fromClients.State;
}

export const reducers: ActionReducerMap<AppState> = {
    clients: fromClients.reducer
}