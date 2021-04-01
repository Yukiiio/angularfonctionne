import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIncidentComponent} from './list-incident/list-incident.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { DetailIncidentComponent} from './detail-incident/detail-incident.component';
import {IncidentFormComponent} from './incident-form/incident-form.component';


const routes: Routes = [
  {path: 'incidents', component: ListIncidentComponent},
  {path: 'add', component: IncidentFormComponent},
  {path: 'incidents/:id', component: DetailIncidentComponent},
  {path: '', redirectTo: '/incidents', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
