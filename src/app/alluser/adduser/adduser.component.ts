import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { Allclient } from '../alluser.model';
import { HttpClient } from '@angular/common/http';
import { File } from './image.model';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  //selectedFile:File=null;

  users:Allclient = new Allclient();
  constructor(private allservice:AllService, private httpclient:HttpClient) { }

  ngOnInit(): void {
  }
  addusers(){
    console.log(this.users);
    this.allservice.addnewuser(this.users)
    .subscribe();
  }

 

//   //file uploading 
//   onFileSelected(event:any){
// this.selectedFile=<File>event.target.files[0];
//   }

  // onUpload(){
  //   const filedata=new FormData();
  //   filedata.append('image',this.selectedFile,this.selectedFile.name);
  //   this.httpclient.post('https://localhost:4200/api/Values', filedata)
  //   .subscribe(res=>{
  //     console.log(res);
  //   })
  // }
}
