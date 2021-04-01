import { Component, OnInit } from '@angular/core';
import {Incident} from '../Interface/Incident';
import {IncidentService} from '../incident.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-incident',
  templateUrl: './detail-incident.component.html',
  styleUrls: ['./detail-incident.component.css']
})
export class DetailIncidentComponent implements OnInit {

  incident: Incident;

  constructor(private vs: IncidentService, private route: ActivatedRoute, private service: IncidentService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vs.getOne(id).subscribe( i => {
      this.incident = i;
    } );
  }

  delete(): void {
   /* this.vs.deleteIncident(this.incident.id).subscribe(r => this.route.(['/incident'])); */

  }
}
