import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Amigo } from '../models/amigo';

@Injectable({
  providedIn: 'root'
})
export class AmigosService {
    url_api = 'http://127.0.0.1:3000/api/amigos';
  constructor(private http: HttpClient) { }

  getAmigos(): Observable<any>{
    return this.http.get(this.url_api);
}
postAmigos(amigo: Amigo): Observable<any>{
    return this.http.post(this.url_api, amigo);
}
getAmigo(id: string): Observable<any>{
    return this.http.get(`${this.url_api}/${id}`)
}
putAmigo(id: string, amigo: Amigo): Observable<any>{
    return this.http.put(`${this.url_api}/${id}`, amigo)
}
deleteAmigo(id: string):Observable<any>{
    return this.http.delete(`${this.url_api}/${id}`)
}
}
