import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { ExportService } from '../services/export.service';
import { Store, props } from '@ngrx/store';
import * as fromClient from '../reducers/client.reducer';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent implements OnInit {

  fieldOrderBy: keyof Client = 'code';
  multiplierOrderBy: 1 | -1 = 1;

  /*clientList: Observable<any> = new Observable((ob) => {
    ob.next();
  });*/

  clientList;
  clients$: Observable<any> = this.store.select(state => state);

  //constructor(private store: Store<{ clients: Client[] }>,
  constructor(private store: Store<fromClient.State>,
    private clientService: ClientService, 
    private exportService: ExportService) { }

  loadList() {
   /* this.clientService.getAll()
      .subscribe(data => {
        this.clientList = new Observable((ob) => {
          ob.next(data ? data.sort((a, b) =>
            a[this.fieldOrderBy] > b[this.fieldOrderBy] ? 1 * this.multiplierOrderBy : -1 * this.multiplierOrderBy)
            : []
          );
        });
      },
      );*/
  }

  ngOnInit() {
    this.store.dispatch({ type: '[Clients] Load List' });
    console.log(this.store.select(fromClient.selectAllClients));
  }

  onRemove(id) {
    this.clientService.delete(id).subscribe(
      data => {
        this.loadList();
      },
      error => {
        console.error(error);
      }
    );
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
