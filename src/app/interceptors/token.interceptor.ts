import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token;
  const rutasProtegidas = [
    { url: '/api/empleados', methods: ['POST', 'PUT', 'DELETE', 'GET'] },
    { url: '/api/clientes', methods: ['POST', 'PUT', 'DELETE', 'GET'] },
  ];

  // Peticiones que requieren token: POST, PUT, DELETE a /api/empleados
  const necesitaToken = rutasProtegidas.some(
    (ruta) =>
      req.url.includes(ruta.url) &&
      ruta.methods.includes(req.method.toUpperCase())
  );

  if (necesitaToken && token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(authReq);
  }
  return next(req);
};
