import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{

  auth!:Auth;

  constructor(
    private router:Router,
    private authSegervice:AuthService
  ) { }

  login(){
    this.authSegervice.login()
      .subscribe(_auth=>{
        if(_auth.id){
          this.auth=_auth;
          this.router.navigate(['./heroes']);
        }
        
      })
    // 
  }
  

}
