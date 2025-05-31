import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../../models/empleado';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Rol } from '../../models/rol';
import { AuthService } from '../../services/auth.service';
import { SharingDataService } from '../../services/sharingData.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  empleado: Empleado;
  empleados: Empleado[] = [];
  roles: Rol[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private sharingDataService: SharingDataService
  ) {
    this.empleado = new Empleado();
  }

  ngOnInit(): void {
    this.handlerLogin();
  }

  onLogin() {
    if (!this.empleado.email?.trim() || !this.empleado.password?.trim()) {
      Swal.fire(
        'Error de validacion',
        'Email y Contraseña requeridos!',
        'error'
      );
      return;
    } else {
      this.sharingDataService.handlerLoginEventEmitter.emit({
        email: this.empleado.email,
        password: this.empleado.password,
      });
    }
  }

  handlerLogin() {
    this.sharingDataService.handlerLoginEventEmitter.subscribe(
      ({ email, password }) => {
        this.authService.loginUser({ email, password }).subscribe({
          next: (response) => {
            const token = response.token;
            const payload = this.authService.getPayload(token);

            const login = {
              isAuth: true,
              isAdmin: payload.role === 'Administrador',
              isSecretario: payload.role === 'Secretario',
              isConductor: payload.role === 'Conductor',
            };

            // Guardar en servicio y sessionStorage para que el guard lo use
            this.authService.token = token;
            this.authService.user = login;

            // Navegación condicional
            if (login.isAdmin || login.isSecretario) {
              this.router.navigate(['/admin']);
            } else if (login.isConductor) {
              this.router.navigate(['/conductor']);
            }
          },
          error: (error) => {
            if (error.status === 400) {
              Swal.fire('Error en el Login', error.error.message, 'error');
            } else {
              throw error;
            }
          },
        });
      }
    );
  }
}
