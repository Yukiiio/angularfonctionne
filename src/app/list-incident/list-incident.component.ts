import { Component, OnInit } from '@angular/core';
import {IncidentService} from '../incident.service';
import {Incident} from '../Interface/Incident';
import {fromEvent, interval, Observable, of} from 'rxjs';
import {mergeMap, map, concatMap, mergeAll, concatAll, combineAll, scan, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-list-incident',
  templateUrl: './list-incident.component.html',
  styleUrls: ['./list-incident.component.css']
})
export class ListIncidentComponent implements OnInit {
  incidentChoisi: Incident;
  incidents: Incident[];

  constructor(private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.incidentService.getAll().then( v => this.incidents = v);
  }
  getIncidentDetail($event): void {
    this.incidentChoisi = $event;
  }

}
