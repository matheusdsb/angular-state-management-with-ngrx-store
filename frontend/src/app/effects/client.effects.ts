import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, } from 'rxjs/operators';
import { Actions, createEffect, ofType, } from '@ngrx/effects';
import { ClientService } from '../services/client.service';
import * as clientActions from '../actions/client.actions';
import * as toastrActions from '../actions/toastr.actions';

@Injectable()
export class ClientEffects {

  loadClients$ = createEffect(() => this.actions$.pipe(
    ofType(clientActions.loadClients),
    mergeMap(() => this.clientService.getAll()
      .pipe(
        map(clients => clientActions.clientsLoaded({ clients })),
        catchError(() => of({ type: '[Clients API] Clients Loaded Error' }))
      )
    )
  ));

  saveClient$ = createEffect(() => this.actions$.pipe(
    ofType(clientActions.saveClient),
    mergeMap(({ client }) => this.clientService.save(client)
      .pipe(
        map(data => clientActions.addClient({ client: data })),
      )
    ),
  ));

  updateClient$ = createEffect(() => this.actions$.pipe(
    ofType(clientActions.updateClient),
    mergeMap(({ client }) => this.clientService.update(client._id, client)
      .pipe(
        map(() => clientActions.clientUpdated({ client })),
      )
    ),
  ));

  deletelient$ = createEffect(() => this.actions$.pipe(
    ofType(clientActions.deleteClient),
    mergeMap(({ id }) => this.clientService.delete(id)
      .pipe(
        map(() => clientActions.clientDeleted({ id }))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) { }
}
