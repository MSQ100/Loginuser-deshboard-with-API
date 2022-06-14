
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[FormService]
})
export class HomeComponent implements OnInit {

  
 
  constructor(private router:Router,
    private formservice:FormService) { }

  ngOnInit() {
  }

 

 

  OnSubmit(Caption:any,Image:any){
  
  }
}
