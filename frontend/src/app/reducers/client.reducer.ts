import { EntityState, EntityAdapter, createEntityAdapter, EntityMap, Comparer } from '@ngrx/entity';
import { Client } from '../models/client.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as ClientActions from '../actions/client.actions';

export interface State extends EntityState<Client> {
    selectedClientId: string | null;
    sorterField: string | null;
    sorterMutipliier: number | null;
}

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>({
    selectId: selectClientId,
    sortComparer: sortByName,
});

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
    selectedClientId: null,
    sorterField: 'name',
    sorterMutipliier: 1,
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
    on(ClientActions.clientDeleted, (state, { id }) => {
        return adapter.removeOne(id, state);
    }),
    on(ClientActions.clientUpdated, (state, { client }) => {
        return adapter.upsertOne(client, state);
    }),
    on(ClientActions.loadClient, (state, { client }) => {
        return Object.assign({}, state, { selectedClientId: client ? client._id : null });
    }),
    on(ClientActions.sortClients, (state, { field }) => {

        if (field === state.sorterField) {
            state.sorterMutipliier *= -1;
        } else {
            state.sorterField = field;
            state.sorterMutipliier = 1;
        }

        return Object.assign({}, state, state);
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

export function sortByCode(a: Client, b: Client): number {
    return a.code === b.code ? 0 : (a.code > b.code ? 1 : -1);
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




