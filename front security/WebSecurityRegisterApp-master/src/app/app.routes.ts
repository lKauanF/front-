import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {LoginComponent} from "./page/login/login.component";
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {AdmComponent} from "./page/adm/adm.component";
import {ProfileComponent} from "./page/profile/profile.component";
import {UserComponent} from "./page/user/user.component";
import {authGuard} from "./guard/auth.guard";
import {adminGuard} from "./guard/admin.guard";
import {gerenteGuard} from "./guard/gerente.guard";
import {GerenteComponent} from "./page/gerente/gerente.component";
import {RegisterComponent} from "./page/register/register.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  {path: 'admin', component: AdmComponent, canActivate: [adminGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
  {path: 'user', component: UserComponent, canActivate: [authGuard]},
  {path: 'gerente', component: GerenteComponent, canActivate: [gerenteGuard]},

];
