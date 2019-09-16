import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCadComponent } from './components/client-cad.component';
import { ClientListComponent } from './components/client-list.component';

const routes: Routes = [
  { path: 'client/cad', component: ClientCadComponent },
  { path: 'client/cad/:id', component: ClientCadComponent },
  { path: 'client/list', component: ClientListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
