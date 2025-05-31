import { Component } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import Swal from 'sweetalert2';
import { SharingDataService } from '../../services/sharingData.service';

@Component({
  selector: 'form-vehiculo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-vehiculo.component.html',
  styleUrl: './form-vehiculo.component.css',
})
export class FormVehiculoComponent {
  vehiculo: Vehiculo;
  conductores: Empleado[] = [];

  constructor(
    private router: Router,
    private location: Location,
    private empleadoService: EmpleadoService,
    private sharingDataService: SharingDataService
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.vehiculo = {
        ...this.router.getCurrentNavigation()?.extras.state!['vehiculo'],
      };
      console.log(this.vehiculo);
    } else {
      this.vehiculo = new Vehiculo();
    }
    // this.empleadoService.findAll().subscribe((empleados: Empleado[]) => {
    //   this.conductores = empleados.filter((e) =>
    //     e.roles.some((r) => r.nombre === 'Conductor')
    //   );
    // });
  }

  onSubmit(vehiculoForm: NgForm): void {
    if (vehiculoForm.valid) {
      //! Emitir vehiculo - Ejemplo
      // this.sharingDataService.newUserEventEmitter.emit(this.user);
      console.log(this.vehiculo);
    }
    Swal.fire({
      title: 'Estás seguro de guardar los cambios?',
      icon: 'warning',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.sharingDataService.newVehiculoEventEmitter.emit(this.vehiculo);
        Swal.fire('Guardado!', '', 'success');
        vehiculoForm.reset();
        vehiculoForm.resetForm();
        this.goBack();
      }
    });
  }

  goBack(): void {
    this.location.back(); // Regresa a la página anterior
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.vehiculo =
        this.router.getCurrentNavigation()?.extras.state!['vehiculo'];
    } else {
      this.vehiculo = new Vehiculo();
    }
  }
}
