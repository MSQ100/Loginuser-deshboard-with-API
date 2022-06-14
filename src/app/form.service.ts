import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private httpclient:HttpClient, 
    private router: Router,
    private http:HttpClient) { }
  postlogin():Observable<any>{
    return this.httpclient.post("http://hmaapi.kilobytetech.com/auth/login",{});
  }
  
  loginform(user: User) {
    if (user.Email_id !== '' && user.password !== '' &&
      user.Email_id !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/loginform']);
  }

  //image api calling here
  postfile(caption:string, fileToUpload:File){
const endpoint= "http://...../UploadImage";
const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http.post(endpoint, formData);
  }
  
  }
