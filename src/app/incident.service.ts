import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Incident} from './Interface/Incident';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  apiRoot = 'http://localhost:8086/learn/api/incidents';
  incidents: Incident[];

  constructor(private http: HttpClient) {
  }

  async getAll(): Promise<any[]> {
    return await this.http.get<Incident[]>('http://localhost:8086/learn/api/incidents').toPromise();
  }

  add(value: Incident): Observable<Incident[]> {
    return this.http.post<any[]>('http://localhost:8086/learn/api/incidents', value);
  }

  getOne(id: number): Observable<Incident> {
    return this.http.get<Incident>(`${this.apiRoot}/${id}`);
  }
  deleteIncident(id: number): Observable<Incident>{
    return this.http.delete<Incident>(`${this.apiRoot}/${id}`);
  }
}
