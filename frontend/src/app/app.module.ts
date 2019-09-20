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
import { reducers } from './index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { ToastrEffects } from './effects/toastr.effects';

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
    StoreModule.forRoot(reducers),
    ToastrModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([ClientEffects, ToastrEffects])
  ],
  providers: [ClientService, ExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
