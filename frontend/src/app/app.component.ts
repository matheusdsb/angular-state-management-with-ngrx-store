import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './models/client.model';
import { Store, select } from '@ngrx/store';
import * as fromClient from './reducers/client.reducer';
import { selectAllClients, selectCurrentClient } from './selectors/client.selectors';
import { loadClients, loadClient, deleteClient } from './actions/client.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud Teste';

  clients$: Observable<Client[]>;
  currentClient$: Observable<Client>;
  client: Client;

  constructor(private store: Store<fromClient.State>) {
    this.clients$ = store.select(selectAllClients);
    this.currentClient$ = store.select(selectCurrentClient);
  }

  ngOnInit() {
    this.store.dispatch(loadClients(null));
  }

  load(client) {
    this.store.dispatch(loadClient({ client }));
  }

  delete(id) {
    this.store.dispatch(deleteClient({ id }));
  }

  new() {
    this.store.dispatch(loadClient(null));
  }
}
