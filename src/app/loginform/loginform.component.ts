import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  login: User[] = [];
  LoginForm!: FormGroup;
  private LoginFormSubmitAttempt!: boolean;
  constructor(private fb: FormBuilder, private formservice: FormService,
    private router: Router,
    private httpclient: HttpClient) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      Email_id: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    //api object use here
    this.formservice.postlogin().subscribe(response=>{
      this.login=response;
    })
  }
    isFieldInvalid(field: string) {
    return (
      (!this.LoginForm.get(field)?.valid && this.LoginForm.get(field)?.
        touched)
      ||
      (this.LoginForm.get(field)?.untouched && this.LoginFormSubmitAttempt)
    );
  }

  submit() {
    const Email_id= this.LoginForm.value.Email_id;
    const password=this.LoginForm.value.password;
    console.log(Email_id, password)
    this.formservice.postlogin()
    .subscribe(response =>{
      console.log(response);
    })
    
    console.log(JSON.stringify(this.LoginForm.value));
    if (this.LoginForm.valid) {
      this.formservice.loginform(this.LoginForm.value);
      
    }
    this.LoginFormSubmitAttempt = true;
  }
}
