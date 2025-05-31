import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AuthComponent } from './components/auth/auth.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { FormEmpleadoComponent } from './components/form-empleado/form-empleado.component';
import { ModuloEmpleadosComponent } from './components/modulo-empleados/modulo-empleados.component';
import { ModuloViajesComponent } from './components/modulo-viajes/modulo-viajes.component';
import { FormRutaComponent } from './components/form-ruta/form-ruta.component';
import { ModuloVehiculosComponent } from './components/modulo-vehiculos/modulo-vehiculos.component';
import { FormVehiculoComponent } from './components/form-vehiculo/form-vehiculo.component';
import { ModuloClientesComponent } from './components/modulo-clientes/modulo-clientes.component';
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';
import { PanelConductorComponent } from './components/panel-conductor/panel-conductor.component';
import { authGuard } from './guards/auth.guard';
import { ModuloFacturacionComponent } from './components/modulo-facturacion/modulo-facturacion.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio',
  },
  {
    path: 'inicio',
    component: HeroComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'admin',
    component: PanelAdminComponent,
    canActivate: [authGuard],
  },
  {
    path: 'empleados',
    component: ModuloEmpleadosComponent,
    canActivate: [authGuard],
  },
  {
    path: 'empleados/create',
    component: FormEmpleadoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'empleados/edit/:id',
    component: FormEmpleadoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'vehiculos',
    component: ModuloVehiculosComponent,
    canActivate: [authGuard],
  },
  {
    path: 'vehiculos/create',
    component: FormVehiculoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'vehiculos/edit/:id',
    component: FormVehiculoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'clientes',
    component: ModuloClientesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'clientes/create',
    component: FormClienteComponent,
    canActivate: [authGuard],
  },
  {
    path: 'clientes/edit/:id',
    component: FormClienteComponent,
    canActivate: [authGuard],
  },
  {
    path: 'viajes',
    component: ModuloViajesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'viajes/create',
    component: FormRutaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'viajes/edit/:id',
    component: FormRutaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'conductor',
    component: PanelConductorComponent,
    canActivate: [authGuard],
  },
  {
    path: 'facturacion',
    component: ModuloFacturacionComponent,
  },
];
