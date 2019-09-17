import { createAction, props } from '@ngrx/store';
import { Update, EntityMap } from '@ngrx/entity';
import { Client } from '../models/client.model';

export const clientsLoaded = createAction('[Clients] Clients Loaded', props<{ clients: Client[] }>());
export const loadClients = createAction('[Clients] Load CLients', props<{ clients: Client[] }>());
export const loadClient = createAction('[Clients] Load CLient', props<{ client: Client }>());
export const addClients = createAction('[Clients] Add Clients', props<{ clients: Client[] }>());
export const addClient = createAction('[Clients] Add Client', props<{ client: Client }>());
export const updateClient = createAction('[Clients] Update Client', props<{ client: Client }>());
export const mapClients = createAction('[Clients] Map Clients', props<{ entityMap: EntityMap<Client> }>());
export const deleteClient = createAction('[Clients] Delete Client', props<{ id: string }>());
