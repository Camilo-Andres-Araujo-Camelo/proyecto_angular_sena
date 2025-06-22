import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://api-proyecto-sena-opcr.onrender.com/api/auth/login'; // URL del servicio de autenticación
  private _token: string | undefined;
  private _user: any = {
    isAuth: false,
    isAdmin: false,
    isSecretario: false,
    isConductor: false,
    user: undefined,
  };

  constructor(private http: HttpClient) {}

  loginUser({ email, password }: any): Observable<any> {
    return this.http.post<any>(this.url, { email, password });
  }

  logout() {
    this._token = undefined;
    this._user = {
      isAuth: false,
      isAdmin: false,
      user: undefined,
    };
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('token');
    this.sesionActivaSubject.next(false); //* Notificar cambio en login state
  }

  get token(): string {
    if (this._token != undefined) {
      return this._token;
    } else if (sessionStorage.getItem('token') != null) {
      this._token = JSON.parse(sessionStorage.getItem('token') || '{}');
    }
    return this._token!;
  }

  set token(token: string) {
    this._token = token;
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  get user(): any {
    if (this._user.isAuth) {
      return this._user;
    } else if (sessionStorage.getItem('login') != null) {
      this._user = JSON.parse(sessionStorage.getItem('login') || '{}');
      return this._user;
    }
  }

  set user(user: any) {
    this._user = user;
    sessionStorage.setItem('login', JSON.stringify(user));
    this.sesionActivaSubject.next(true); //* Notificar cambio en login state
  }

  getPayload(token: string) {
    if (token != null) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }

  private sesionActivaSubject = new BehaviorSubject<boolean>(
    this.verificarSesion()
  );

  verificarSesion(): boolean {
    const login = JSON.parse(sessionStorage.getItem('login') || '{}');
    return login.isAuth;
  }

  sesionActiva$ = this.sesionActivaSubject.asObservable(); // Observable para escuchar cambios
}
