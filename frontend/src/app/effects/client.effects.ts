import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ClientService } from '../services/client.service';
import * as fromCLient from '../actions/client.actions';
import { Client } from '../models/client.model';

@Injectable()
export class ClientEffects {

  loadClients$ = createEffect(() => this.actions$.pipe(
    ofType('[Clients] Load List'),
    mergeMap(() => this.clientService.getAll()
      .pipe(
        map(clients => fromCLient.addClients({ clients })),
        catchError(() => of({ type: '[Clients API] Clients Loaded Error' }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) { }
}
