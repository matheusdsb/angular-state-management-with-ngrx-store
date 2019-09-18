import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() clientList;

  @Output() onLoad = new EventEmitter<Client>();
  @Output() onRemove = new EventEmitter<string>();
  @Output() onNew = new EventEmitter<string>();

  constructor(private store: Store<fromClient.State>, private exportService: ExportService) {
  }

  ngOnInit() {
  }

  load(client) {
    this.onLoad.emit(client);
  }

  remove(id) {
    this.onRemove.emit(id);
  }

  new() {
    this.onNew.emit();
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

  sort(field) {

  }
}
