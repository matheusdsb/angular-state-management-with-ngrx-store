import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { ClientService } from '../services/client.service';
import * as clientActions from '../actions/client.actions';
import { Client } from '../models/client.model';

@Injectable()
export class ClientEffects {

  loadClients$ = createEffect(() => this.actions$.pipe(
    ofType(clientActions.loadClients),
    mergeMap(() => this.clientService.getAll()
      .pipe(
        map(clients => clientActions.clientsLoaded({ clients })),
        catchError(() => of({ type: '[Clients API] Clients Loaded Error' }))
      ))
  )
  );

  saveClient$ = createEffect(() => this.actions$.pipe(
    ofType('[Clients] Save'),
    switchMap((action: '[Clients] Save') =>
      this.clientService.save(action.payload as Client)
      .pipe(
        map((client: Client) => clientActions.addClient({client}))
      )
    )
  ));

  updateClient$ = createEffect(() => this.actions$.pipe(
    ofType('[Clients] Update'),
    switchMap((action: '[Clients] Update') =>
      this.clientService.update(action.payload._id, action.payload)
      .pipe(
        map((client: Client) => clientActions.updateClient({client}))
      )
    )
  ));  

  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) { }
}
