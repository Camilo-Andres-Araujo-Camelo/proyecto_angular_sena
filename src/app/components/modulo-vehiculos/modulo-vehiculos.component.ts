import { Component } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modulo-vehiculos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './modulo-vehiculos.component.html',
  styleUrl: './modulo-vehiculos.component.css',
})
export class ModuloVehiculosComponent {
  vehiculos: Vehiculo[] = [];

  constructor(private router: Router, private location: Location) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.vehiculos =
        this.router.getCurrentNavigation()?.extras.state!['vehiculos'];
    }
  }

  onSelectedVehiculo(vehiculo: Vehiculo): void {
    this.router.navigate([`/vehiculos/edit/${vehiculo.placa}`], {
      state: { vehiculo },
    });
  }

  onRemoveVehiculo(placa: string): void {
    console.log(placa);
    Swal.fire({
      title: 'Confirma eliminación?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.vehiculos = this.vehiculos.filter((v) => v.placa !== placa);

        Swal.fire({
          title: 'Eliminado!',
          text: 'El elemento ha sido eliminado',
          icon: 'success',
        });
      }
    });
  }

  goBack(): void {
    this.location.back(); // Regresa a la página anterior
  }
}
