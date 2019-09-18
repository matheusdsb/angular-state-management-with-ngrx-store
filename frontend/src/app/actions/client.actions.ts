import { createAction, props } from '@ngrx/store';
import { EntityMap, Comparer } from '@ngrx/entity';
import { Client } from '../models/client.model';

export const clientsLoaded = createAction('[Clients] Clients Loaded', props<{ clients: Client[] }>());
export const loadClients = createAction('[Clients] Load CLients', props<{ clients: Client[] }>());
export const saveClient = createAction('[Clients] Save Client', props<{ client: Client }>());
export const loadClient = createAction('[Clients] Load CLient', props<{ client: Client }>());
export const addClients = createAction('[Clients] Add Clients', props<{ clients: Client[] }>());
export const addClient = createAction('[Clients] Add Client', props<{ client: Client }>());
export const updateClient = createAction('[Clients] Update Client', props<{ client: Client }>());
export const clientUpdated = createAction('[Clients] Client Updated', props<{ client: Client }>());
export const mapClients = createAction('[Clients] Map Clients', props<{ entityMap: EntityMap<Client> }>());
export const deleteClient = createAction('[Clients] Delete Client', props<{ id: string }>());
export const clientDeleted = createAction('[Clients] Client Deleted', props<{ id: string }>());
export const sortClients = createAction('[Clients] Sort CLients', props<{ sorter: Comparer<Client> }>());
