import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })


export class CentersService {
    constructor(private http: HttpClient) { }

    getCenters(): Observable<any> {
        return  this.http.get('/centers');
    }

    getIndividualCollectionSheet(): Observable<any> {
        return  this.http.get('/individualCollectionSheet');
    }

    getCollectionSheet(): Observable<any> {
        return  this.http.get('/collectionSheet');
    }

}
