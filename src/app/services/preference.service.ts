import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preference } from '../models/preference.model';

const baseUrl = 'http://localhost:8080/api/preferences';

@Injectable({
  providedIn: 'root',
})
export class PreferenceService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Preference[]> {
    return this.http.get<Preference[]>(baseUrl);
  }

  get(id: any): Observable<Preference> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByPName(pname: any): Observable<Preference[]> {
    return this.http.get<Preference[]>(`${baseUrl}?pname=${pname}`);
  }
}
