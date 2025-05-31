import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Empleado, EmpleadosResponse } from '../../models/empleado';
import { Location } from '@angular/common'; // Para regresar a la página anterior
import { EmpleadoService } from '../../services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modulo-empleados',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './modulo-empleados.component.html',
  styleUrl: './modulo-empleados.component.css',
})
export class ModuloEmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  login = JSON.parse(sessionStorage.getItem('login') || '{}');

  constructor(
    private router: Router,
    private location: Location,
    private empleadoService: EmpleadoService
  ) {}

  ngOnInit(): void {
    this.empleadoService.findAll().subscribe((empleados: EmpleadosResponse) => {
      this.empleados = empleados.data;
      console.log(empleados);
    });
  }

  onRemoveEmpleado(id: string): void {
    if (!this.login.isAdmin) {
      Swal.fire({
        title: 'Error - Acceso denegado',
        text: 'No tienes permiso para acceder a este recurso',
        icon: 'error',
      });
      return;
    }

    Swal.fire({
      title: 'Confirma eliminación?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.deleteEmpleado(id).subscribe({
          next: () => {
            this.empleados = this.empleados.filter((e) => e.id !== id);
            Swal.fire({
              title: 'Eliminado!',
              text: 'El elemento ha sido eliminado',
              icon: 'success',
            });
          },
          error: (err: any) => {
            if (err.status === 403) {
              Swal.fire({
                title: `Error - ${err.error.error}`,
                text: err.error.message,
                icon: 'error',
              });
              return;
            } else {
              Swal.fire({
                title: `Error`,
                text: 'Ocurrió un error al eliminar el empleado. Intentelo más tarde.',
                icon: 'error',
              });
              return;
            }
          },
        });
      }
    });
  }

  onSelectedEmpleado(empleado: Empleado): void {
    if (this.login.isAdmin) {
      this.router.navigate([`/empleados/edit/${empleado.id}`], {
        state: { empleado },
      });
    } else {
      Swal.fire({
        title: 'Error - Acceso denegado',
        text: 'No tienes permiso para acceder a este recurso',
        icon: 'error',
      });
    }
  }

  onRegistrarEmpleado() {
    if (this.login.isAdmin) {
      this.router.navigate(['/empleados/create']);
    } else {
      Swal.fire({
        title: 'Error - Acceso denegado',
        text: 'No tienes permiso para acceder a este recurso',
        icon: 'error',
      });
    }
  }

  goBack(): void {
    this.location.back(); // Regresa a la página anterior
  }
}
