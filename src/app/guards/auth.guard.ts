import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const empleadoAuth = sessionStorage.getItem('login');
  // Solo deja pasar si hay sesión y está autenticado
  if (!empleadoAuth) return false;

  const empleado = JSON.parse(empleadoAuth);

  return empleado.isAuth === true;
};
