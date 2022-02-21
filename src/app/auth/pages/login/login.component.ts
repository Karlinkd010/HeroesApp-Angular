import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{

  auth!:AuthService;

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }

  login(){
    this.authService.login()
      .subscribe(resp=>{
        // this.auth=res;
        console.log(resp);

        if(resp!=null){
          this.router.navigate(['./heroes']);
        }
        
      })
    // 
  }
  

}
