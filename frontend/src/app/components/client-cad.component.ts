import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client.model';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'client-cad',
  templateUrl: './client-cad.component.html',
})
export class ClientCadComponent implements OnInit, AfterViewInit {

  id: string = null;
  routerSub: any;

  submited = false;
  message = null;
  error = false;
  
  form = this.initForm();

  constructor(private fb: FormBuilder, private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routerSub = this.route.params.subscribe((params) => {
			this.id = params['id'];
		});
  }

  initForm(client?) {
    return this.fb.group({      
      code:  [client && client.code ? client.code : '', [Validators.required]],
      name: [client && client.name ? client.name : '', [Validators.required]],
      address:  [client && client.address ? client.address : '', [Validators.required]],
      telephone:  [client && client.telephone ? client.telephone : '', [Validators.required]],
      status:  [client && client.status ? client.status : '', [Validators.required]],
      birthDate:  [client && client.birthDate ? moment(client.birthDate).format('MM/DD/YYYY') : '', [Validators.required]],
    });
  }

	ngAfterViewInit() {

    if(this.id) {
      this.clientService.getById(this.id)
      .subscribe(
        data => {
          this.form = this.initForm(data);
        },
        error =>  {
          this.message = error;
        }
      );
    }
  }

  onSubmit() {
    this.submited = true;

    if (this.form.valid) {
      const client: Client = this.form.value;

      if (this.id) {
        this.update(client);
      } else {
        this.create(client);
      }
    }
  }

  update(client: Client) {
    this.clientService.update(this.id, client)
    .subscribe(
      data => {
        this.submited = false;
        this.message = 'Client successfully updated.';
      },
      error =>  {
        this.message = error;
      }
    );
  }

  create(client: Client) {
      this.clientService.save(client)
      .subscribe(
        data => {
          this.form.reset();
          this.submited = false;
          this.message = 'Client successfully created.';
        },
        error =>  {
          this.message = error;
        }
      );
  }
}