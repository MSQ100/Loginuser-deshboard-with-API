import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Allclient } from './alluser.model';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  baseURL="https://jsonplaceholder.typicode.com/users";
  constructor(private httpclient:HttpClient) { }

getall():Observable<Allclient[]>{
  return this.httpclient.get<Allclient[]>(`${this.baseURL}`);
}

//add user data into table
addnewuser(newuser?:Allclient):Observable<Object>{
return this.httpclient.post<Object>(`${this.baseURL}`,newuser); //api we need.
}
}
