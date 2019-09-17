import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Client } from '../models/client.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as ClientActions from '../actions/client.actions';

export interface State extends EntityState<Client> {
    selectedClientId: string | null;
}

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>({
    selectId: selectClientId,
    sortComparer: sortByName,
});

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
    selectedClientId: null,
});

const clientReducer = createReducer(
    initialState,
    on(ClientActions.addClient, (state, { client }) => {
        return adapter.addOne(client, state);
    }),
    on(ClientActions.addClients, (state, { clients }) => {
        return adapter.addMany(clients, state);
    }),
    on(ClientActions.clientsLoaded, (state, { clients }) => {
        return adapter.addAll(clients, state);
    }),
    on(ClientActions.mapClients, (state, { entityMap }) => {
        return adapter.map(entityMap, state);
    }),
    on(ClientActions.deleteClient, (state, { id }) => {
        return adapter.removeOne(id, state);
    }),
    on(ClientActions.loadClient, (state, { client }) => {
        state.selectedClientId = client._id;
        return state;
    })
);

export function reducer(state: State | undefined, action: Action) {
    return clientReducer(state, action);
}

export function selectClientId(c: Client): string {
    return c._id;
}

export function sortByName(a: Client, b: Client): number {
    return a.name.localeCompare(b.name);
}

export const getSelectedClientId = (state: State) => state.selectedClientId;

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectClientIds = selectIds;

// select the dictionary of client entities
export const selectClientEntities = selectEntities;

// select the array of clients
export const selectAllClients = selectAll;

// select the total client count
export const selectClientTotal = selectTotal;




