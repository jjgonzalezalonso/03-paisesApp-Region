import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private fields: string = 'name,capital,flags,population,cca2';

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }?fields=${this.fields}`;
    //const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }
  
  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }?fields=${this.fields}`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }

  buscarRegion(termino: string):Observable<Country[]>{
    const url=`${this.apiUrl}/region/${termino}?fields=${this.fields}`;
    return this.http.get<Country[]>(url);
  }

}
