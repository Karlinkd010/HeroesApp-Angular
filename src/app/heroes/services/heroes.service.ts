import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroes } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: String=environment.baseUrl;

  constructor(private http:HttpClient) {}

  getHeroes(): Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`);
  }
  getHeroePorId(id: string):Observable<Heroes>{
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${id}`);
  }
  getSugerencia(termino: string):Observable<Heroes>{
    return this.http.get<Heroes>(`${this.baseUrl}/heroes?q=${termino}&limit=6`);
  }
  addHeroe(heroe:Heroes): Observable<Heroes>{
    return this.http.post<Heroes>(`${this.baseUrl}/heroes`,heroe);
  }
  updateHeroe(heroe:Heroes): Observable<Heroes>{
    return this.http.put<Heroes>(`${this.baseUrl}/heroes/${heroe.id}`,heroe);
  }
  deleteHeroe(id:string): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }
}
