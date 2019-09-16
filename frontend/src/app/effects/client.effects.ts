import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { ClientService } from '../services/client.service';
import * as clientActions from '../actions/client.actions';

@Injectable()
export class ClientEffects {

  loadClients$ = createEffect(() => this.actions$.pipe(
    //ofType('[Clients] Load List'),
    ofType(clientActions.loadClients),
    mergeMap(() => this.clientService.getAll()
      .pipe(
        map(clients => clientActions.clientsLoaded({ clients })),
        catchError(() => of({ type: '[Clients API] Clients Loaded Error' }))
      ))
  )
  );

  /*@Effect() loadClients$ = this.dataPersistence.fetch(clientActions.loadClients, {
    run: (action: '[Clients] Load CLients', state: fromClient.State) => {
      return this.clientService.getAll().pipe(
        map((res: Client[]) => clientActions.clientsLoaded({ clients: res }))
      );
    },
    onError: () => {}
  });*/

  constructor(
    private actions$: Actions,
    // private dataPersistence: DataPersistence<fromClient.State>,
    private clientService: ClientService
  ) { }
}
