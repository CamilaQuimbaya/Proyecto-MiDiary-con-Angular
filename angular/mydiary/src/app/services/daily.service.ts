import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Daily } from '../models/daily';

@Injectable({
    providedIn: 'root'
})
export class DailyService {
    url_api = 'http://127.0.0.1:3000/api/daily';


    constructor(private http: HttpClient) { }

    getDailies(): Observable<any>{
        return this.http.get(this.url_api);
    }
    postDailies(daily: Daily): Observable<any>{
        return this.http.post(this.url_api, daily);
    }
    getDaily(id: string): Observable<any>{
        return this.http.get(`${this.url_api}/${id}`)
    }
    putDaily(id: string, daily: Daily): Observable<any>{
        return this.http.put(`${this.url_api}/${id}`, daily)
    }
    deleteDaily(id: string):Observable<any>{
        return this.http.delete(`${this.url_api}/${id}`)
    }
}
