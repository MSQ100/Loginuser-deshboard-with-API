import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../form.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
name:any;
isLoggedIn$!:Observable<boolean>

  constructor(private formservice:FormService, private route:ActivatedRoute) { }

  ngOnInit(){
    this.isLoggedIn$=this.formservice.isLoggedIn;
  }
onLogout() {
  this.formservice.logout();
}
}
