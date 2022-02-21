import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:String=environment.baseUrl;

  constructor(
    private http:HttpClient
  ) { }

  login(){
    return this.http.get(`${this.baseUrl}/usuarios/1`);
  }
}
