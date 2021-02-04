import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICountry } from '../models/country';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class CountriesService {
    private countriesUrl: string =  `${environment.baseUrl.url}${environment.country.url}`;

    constructor(private http: HttpClient){}

    getCountries(): Observable<ICountry>{
        return this.http.get<ICountry>(this.countriesUrl);
    }
}