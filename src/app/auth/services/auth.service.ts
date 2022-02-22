import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:String=environment.baseUrl;
  private _auth: Auth | undefined;

  constructor(
    private http:HttpClient
  ) { }

  get auth(){
    return {...this._auth}
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
        .pipe(
          tap(auth=>this._auth=auth)
        );
  }
}
