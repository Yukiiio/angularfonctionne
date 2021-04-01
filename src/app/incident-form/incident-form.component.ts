import { Component, OnInit } from '@angular/core';
import {IncidentService} from '../incident.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit {

  incidentForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private incidentService: IncidentService, private route: Router) {
    this.incidentForm = fb.group({
      titre: fb.control('', Validators.required),
      email: fb.control('', Validators.required),
      description: fb.control('', Validators.required),
      level: fb.control('', Validators.required),
      type: fb.control('', Validators.required),
      progress: fb.control('', Validators.required),
      open: fb.control('', Validators.required),
      dateCreation: fb.control('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.formSubmitted = true;
    if (this.incidentForm.valid) {
      const incidObj = this.incidentForm.value;
      this.incidentService.add(incidObj).subscribe(r => this.route.navigate(['/incidents']));
      console.log('Données du formulaire', this.incidentForm.value);
    }
  }

}
