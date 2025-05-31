import { Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Location } from '@angular/common'; // Para regresar a la página anterior
import Swal from 'sweetalert2';
import { EmpleadoService } from '../../services/empleado.service';
import { Rol } from '../../models/rol';

@Component({
  selector: 'form-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-empleado.component.html',
  styleUrl: './form-empleado.component.css',
})
export class FormEmpleadoComponent {
  empleado: Empleado;
  isEditing: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private empleadoService: EmpleadoService
  ) {
    const navigation = this.router.getCurrentNavigation();

    if (navigation?.extras.state?.['empleado']) {
      this.empleado = { ...navigation.extras.state['empleado'] };

      // Asegurar que roles exista y tenga al menos un rol
      if (!this.empleado.roles || this.empleado.roles.length === 0) {
        this.empleado.roles = [new Rol()];
      }

      this.isEditing = true;
    } else {
      this.empleado = new Empleado();
    }
  }

  onSubmit(empleadoForm: NgForm): void {
    if (empleadoForm.valid) {
      Swal.fire({
        title: 'Estás seguro de guardar los cambios?',
        icon: 'warning',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          // Convertir id a string
          const empleadoModified = {
            ...this.empleado,
            id: String(this.empleado.id),
            telefono: String(this.empleado.telefono),
            password: '12345', // Asignar una contraseña por defecto
            role: this.empleado.roles[0].nombre,
          };

          const request$ = this.isEditing
            ? this.empleadoService.updateEmpleado(empleadoModified)
            : this.empleadoService.createEmpleado(empleadoModified);

          request$.subscribe({
            next: () => {
              Swal.fire('Guardado!', '', 'success');
              empleadoForm.resetForm();
              this.goBack();
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
  }

  goBack(): void {
    // Previene que el formulario se envíe
    this.location.back(); // Regresa a la página anterior
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.empleado =
        this.router.getCurrentNavigation()?.extras.state!['empleado'];
    } else {
      this.empleado = new Empleado();
    }
  }
}
