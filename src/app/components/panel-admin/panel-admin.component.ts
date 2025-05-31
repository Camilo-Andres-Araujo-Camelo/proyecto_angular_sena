import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';
import { SharingDataService } from '../../services/sharingData.service';

@Component({
  selector: 'panel-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.css',
})
export class PanelAdminComponent implements OnInit {
  title: string = 'Panel Administrador';
  // empleados: Empleado[] = [];
  vehiculos: Vehiculo[] = [];
  viajes: number[] = [];

  constructor(
    private vehiculoService: VehiculoService,
    private sharingDataService: SharingDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.vehiculos =
        this.router.getCurrentNavigation()?.extras.state!['vehiculos'];
    } else {
      this.vehiculoService.findAll().subscribe((vehiculos: Vehiculo[]) => {
        this.vehiculos = vehiculos;
      });
    }

    this.addVehiculo();
  }

  addVehiculo(): void {
    this.sharingDataService.newVehiculoEventEmitter.subscribe((vehiculo) => {
      if (vehiculo.placa.length > 0) {
        this.vehiculos = this.vehiculos.map((currentVehi) => {
          if (currentVehi.placa === vehiculo.placa) {
            currentVehi = { ...vehiculo };
          }
          return currentVehi;
        });
      } else {
        this.vehiculos = [...this.vehiculos, { ...vehiculo }];
      }
      this.router.navigate(['/vehiculos'], {
        state: { vehiculos: this.vehiculos },
      });
    });
  }

  goEmpleados(): void {
    this.router.navigate([`/empleados`]);
  }

  goClientes(): void {
    this.router.navigate([`/clientes`]);
  }

  goVehiculos(): void {
    this.router.navigate([`/vehiculos`], {
      state: { vehiculos: [...this.vehiculos] },
    });
  }

  goViajes(): void {
    this.router.navigate([`/viajes`], {
      state: { vehiculos: [...this.viajes] },
    });
  }
}
