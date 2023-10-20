import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from'@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm:any;
constructor(private fb:FormBuilder,private router:Router){}

ngOnInit(){
  this.loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pass:['',[Validators.required,Validators.minLength(6)]]
      })
}

get(name:any){
  return this.loginForm.get(name);
}
loginSubmit():void{
  if(this.loginForm.valid){
 console.log(this.loginForm.value);
 this.router.navigate(['dashboard']);
  }
}

}
