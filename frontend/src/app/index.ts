import * as fromClients from './reducers/client.reducer';
import * as fromToastr from './reducers/toastr.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    clients: fromClients.State;
    toastr: fromToastr.State;
}

export const reducers: ActionReducerMap<AppState> = {
    clients: fromClients.reducer,
    toastr: fromToastr.reducer
}