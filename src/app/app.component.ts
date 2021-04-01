import { Component } from '@angular/core';
import {Incident} from './Interface/Incident';
import {IncidentService} from './incident.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvalAntoine';
}
