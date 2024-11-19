import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAutenticado: boolean = this.getAuthStatus();
  private role: string | null = null;

  private users: User[] = [
];
  constructor(private router: Router) {
  }

  login(username: string, password: string) {
    if (username && password) {
      if (username === 'admin' && password === 'admin') {
        this.setAuthState(true, 'admin')
        this.router.navigate(['/dashboard']);
        return true;
      } else if (username === 'user' && password === 'user') {
        this.setAuthState(true, 'user')
        this.router.navigate(['/dashboard']);

        return true;
      }else if (username === 'gerente' && password === 'gerente') {
        this.setAuthState(true, 'gerente');
        localStorage.setItem('isGerente', 'true');
        this.router.navigate(['/dashboard']);
      }
        return true;
    }
    return false;
  }

  register(username: string, password: string, role: string): boolean {
    if (this.users.find((u) => u.username === username)) {
      return false; // Usuário já existe
    }
    const newUser: User = { username, password, role, active: true };
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users)); // Salvar no localStorage
    console.log('Lista de usuários atualizada:', this.users);
    return true;
  }
  logout(): void {
    this.isAutenticado = false;
    this.role = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  private setAuthState(authStatus: boolean, role: string): void {
    this.isAutenticado = authStatus;
    this.role = role;
    localStorage.setItem('authStatus', JSON.stringify(authStatus));
    localStorage.setItem('role', role);
  }

  private getAuthStatus(): boolean {
    return JSON.parse(localStorage.getItem('authStatus') || 'false');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }

  isGerente(): boolean {
    return localStorage.getItem('isGerente') === 'true';
  }

  isUser(): boolean {
    return this.getRole() === 'user';
  }
}
