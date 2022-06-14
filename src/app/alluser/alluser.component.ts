import { Component, OnInit } from '@angular/core';
import { Allclient } from './alluser.model';
import { HttpClient } from '@angular/common/http';
import { AllService } from './all.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {

  users:Allclient[]=[];   // array name that contains values.
  constructor(private httpclient:HttpClient, 
    private allservice:AllService, private router:Router) { }

  ngOnInit(): void {
    this.tableDataget(); // this is taking  return service from baseurl.and use with service look below 
  }

  // service receive here
  tableDataget(){
    this.allservice.getall().subscribe(data=>{
      this.users=data;
    })
  }
}
