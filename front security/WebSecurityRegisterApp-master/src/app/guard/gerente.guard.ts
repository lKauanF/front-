import {CanActivateFn, Router} from '@angular/router';
import {AuthServiceService} from "../service/auth-service.service";
import {inject} from "@angular/core";

export const gerenteGuard: CanActivateFn = (route, state) => {
  const authService: AuthServiceService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isGerente()) {  // Verifica se está autenticado e se é gerente
    return true;
  } else {
    router.navigate(['/login']);  // Redireciona para a página de login se não for gerente
    return false;
  }
}
