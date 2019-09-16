import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientCadComponent } from './components/client-cad.component';
import { ClientListComponent } from './components/client-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { ExportService } from './services/export.service';
import { EffectsModule } from '@ngrx/effects';
import { ClientEffects } from './effects/client.effects';
import { StoreModule } from '@ngrx/store';
import * as fromClient from './reducers/client.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ClientCadComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ 'clients': fromClient.reducer }),
    EffectsModule.forRoot([ClientEffects])
  ],
  providers: [ClientService, ExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
