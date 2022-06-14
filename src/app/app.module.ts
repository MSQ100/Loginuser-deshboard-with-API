
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormService } from './form.service';
import { AuthGuard } from './auth.guard';
import { AlluserComponent } from './alluser/alluser.component';
import { AdduserComponent } from './alluser/adduser/adduser.component';

@NgModule({
  declarations: [AppComponent, 
    HeaderComponent, 
    HomeComponent, 
    LoginformComponent, 
    NavbarComponent, 
    AlluserComponent,
     AdduserComponent,  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FormService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
   