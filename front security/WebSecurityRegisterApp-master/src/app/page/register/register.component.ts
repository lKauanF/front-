import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {Router} from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import {User} from "../../model/User";
import {AuthServiceService} from "../../service/auth-service.service";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Necessário se o componente usar diretivas de roteamento
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatToolbarModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  users: User = {
    username: '',
    password: '',
    role: '',
    active: true
  }

  constructor(private _authService: AuthServiceService, private _router: Router) {}

  onSubmit(myForm: NgForm) {
    const { username, password, role } = this.users; // Extrair os atributos do formulário
    const isRegistered = this._authService.register(username, password, role);

    if (isRegistered) {
      console.log('Usuário registrado com sucesso', username,","+ password,","+ role);

      // Exibir mensagem de sucesso ou redirecionar
      alert('Usuário registrado com sucesso!');
      myForm.reset(); // Reseta o formulário
    } else {
      console.error('Erro: Usuário já existe');
      alert('Erro: Usuário já existe. Escolha outro nome de usuário.');
    }

    // Atualizar a lista de usuários (opcional, caso seja necessário exibir em outro lugar)
    //this.users = this._authService.getUsers();
  }
}
