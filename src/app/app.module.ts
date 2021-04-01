import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailIncidentComponent } from './detail-incident/detail-incident.component';
import { ListIncidentComponent } from './list-incident/list-incident.component';
import { HttpClientModule } from '@angular/common/http';
import { IncidentComponent } from './incident/incident.component';
import { MenuComponent } from './menu/menu.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DetailIncidentComponent,
    ListIncidentComponent,
    IncidentComponent,
    MenuComponent,
    IncidentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
