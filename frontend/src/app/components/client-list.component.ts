import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { ExportService } from '../services/export.service';
import { Store, props } from '@ngrx/store';
import * as fromClient from '../reducers/client.reducer';
import { map } from 'rxjs/operators';
import { selectAllClients } from '../selectors/client.selectors';
import { loadClients } from '../actions/client.actions';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent implements OnInit {

  fieldOrderBy: keyof Client = 'code';
  multiplierOrderBy: 1 | -1 = 1;

  clientList;

  clients$: Observable<Client[]>;

  constructor(private store: Store<fromClient.State>, private exportService: ExportService) {
    this.clients$ = store.select(selectAllClients);
  }

  ngOnInit() {
    this.store.dispatch(loadClients(null));
  }

  onRemove(id) {
    /*this.clientService.delete(id).subscribe(
      data => {
        this.loadList();
      },
      error => {
        console.error(error);
      }
    );*/
  }

  export() {

    /*const jsonArray: Client[] = [];

    this.clientList.forEach(element => {
      element.forEach(c => jsonArray.push(c));
    });

    this.exportService.exportExcel(jsonArray, 'clients');*/
  }

  orderBy(field: keyof Client) {

    /*if (field !== this.fieldOrderBy) {
      this.fieldOrderBy = field;
      this.multiplierOrderBy = 1;
    } else {
      this.multiplierOrderBy *= -1;
    }

    this.fieldOrderBy = field;
    this.loadList();*/
  }
}
