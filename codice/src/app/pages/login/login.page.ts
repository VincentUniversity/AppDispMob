import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validationUserMessage={
    email:[
      {type:'required', message: 'Inserire un indirizzo email'},
      {type:'pattern', message: 'L\'indirizzo email non rispecchia un formato valido. Riprova'}
    ],
    password:[
      {type: 'required', message:'Inserire una password'},
      {type: 'minLength', message:'La password dev\'essere almeno di 5 caratteri'}
    ]
  };

  validationFormUser: FormGroup;

  constructor(private nav: NavController, public formBuilder: FormBuilder, public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  gotoSignupPage(){
    this.nav.navigateForward(['signup']);
  }

  LoginUser(value){
    console.log("Am logged in");
    try {
      this.authService.loginFireauth(value).then( resp=>{
        console.log(resp);
        this.router.navigate(['tabs']);
      })
    } catch (error) {
      console.log(error)
    }
   
  }
}
