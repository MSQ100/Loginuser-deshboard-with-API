import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './alluser/adduser/adduser.component';
import { AlluserComponent } from './alluser/alluser.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
{path:'',component:HomeComponent,canActivate:[AuthGuard]},
{path:'loginform', component:LoginformComponent},
{path:'navbar', component:NavbarComponent},
{path:'navbar/:id', component:LoginformComponent},
{path:'alluser', component:AlluserComponent},
{path:'home/:id', component:AlluserComponent},
{path:'adduser',component:AdduserComponent},
{path:'alluser/:id', component:AdduserComponent},

{path:'**', redirectTo:''},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
