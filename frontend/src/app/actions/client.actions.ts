import { createAction, props } from '@ngrx/store';
import { Update, EntityMap } from '@ngrx/entity';
import { Client } from '../models/client.model';

export const loadClients = createAction('[Client/API] Load Clients', props<{ clients: Client[] }>());
export const addClients = createAction('[Client/API] Add Clients', props<{ clients: Client[] }>());
export const addClient = createAction('[Client/API] Add Client', props<{ client: Client }>());
export const mapClients = createAction('[Client/API] Map Clients', props<{ entityMap: EntityMap<Client> }>());
export const deleteClient = createAction('[Client/API] Delete Client', props<{ id: string }>());
