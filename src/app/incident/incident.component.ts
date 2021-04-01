import {Component, Input, OnInit, Output} from '@angular/core';
import {Incident} from '../Interface/Incident';
// @ts-ignore
import EventEmitter = require('node:events');

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  @Input()
  incident: Incident;
  constructor() { }

  ngOnInit(): void {
  }


}
