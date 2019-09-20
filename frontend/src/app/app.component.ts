import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './models/client.model';
import { Store, select } from '@ngrx/store';
import * as fromClient from './reducers/client.reducer';
import { selectAllClients, selectCurrentClient, selectSortedClients } from './selectors/client.selectors';
import { loadClients, loadClient, deleteClient, sortClients } from './actions/client.actions';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private store: Store<fromClient.State>, private toastr: ToastrService) {
    this.clients$ = store.select(selectAllClients);
    this.currentClient$ = store.select(selectCurrentClient);
  }

  ngOnInit() {
    this.store.dispatch(loadClients(null));
    //this.toastr.success('OK', 'Toastr fun!');
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

  sort(field) {
    this.store.dispatch(sortClients({ field }));
    this.clients$ = this.store.select(selectSortedClients);
  }
}
