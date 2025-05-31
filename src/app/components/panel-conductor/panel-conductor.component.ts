import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-panel-conductor',
  standalone: true,
  imports: [],
  templateUrl: './panel-conductor.component.html',
  styleUrl: './panel-conductor.component.css',
})
export class PanelConductorComponent implements OnInit {
  conductor: Empleado = new Empleado();

  constructor(private router: Router) {}
  ngOnInit(): void {
    // Verificar si hay datos en el state de la navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['empleado']) {
      this.conductor = Object.assign(
        new Empleado(),
        navigation.extras.state['empleado']
      );
      sessionStorage.setItem('empleado', JSON.stringify(this.conductor));
    } else {
      // Si no hay datos en state, recuperar desde sessionStorage
      const storedEmpleado = sessionStorage.getItem('empleado');
      if (storedEmpleado) {
        this.conductor = Object.assign(
          new Empleado(),
          JSON.parse(storedEmpleado)
        );
      }
    }
    console.log('Conductor en ngOnInit:', this.conductor);
  }
}
