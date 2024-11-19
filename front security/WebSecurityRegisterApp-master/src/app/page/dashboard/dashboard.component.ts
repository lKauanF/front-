import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  constructor(private _router: Router, private _service: AuthServiceService) {
  }

  user(){
    this._router.navigate(['/user']);
  }

  adm() {
    this._router.navigate(['/admin']);
  }

  profile(){
    this._router.navigate(['/profile']);
  }

  gerente(){
    this._router.navigate(['/gerente']);
  }

  logout(){
    this._service.logout();
  }
}
