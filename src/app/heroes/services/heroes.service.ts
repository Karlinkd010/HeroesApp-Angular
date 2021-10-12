import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) {}
   getHeroes(): Observable<Heroes[]>{
    return this.http.get<Heroes[]>("http://localhost:3000/heroes");
  }
}
