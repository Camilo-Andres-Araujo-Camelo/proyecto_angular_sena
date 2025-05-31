import { EventEmitter, Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { Vehiculo } from '../models/vehiculo';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class SharingDataService {
  private _empleadoEventEmitter: EventEmitter<Empleado> = new EventEmitter();
  private _vehiculoEventEmitter: EventEmitter<Vehiculo> = new EventEmitter();
  private _clienteEventEmitter: EventEmitter<Cliente> = new EventEmitter();
  private _handlerLoginEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  // Se emite en el update del form-empleado
  // Se escucha en el addUser del panel-admin
  get newEmpleadoEventEmitter(): EventEmitter<Empleado> {
    return this._empleadoEventEmitter;
  }

  // Se emite en el update del form-vehiculo
  // Se escucha en el addVehiculo del panel-admin
  get newVehiculoEventEmitter(): EventEmitter<Vehiculo> {
    return this._vehiculoEventEmitter;
  }

  // Se emite en el update del form-cliente
  // Se escucha en el addCliente del panel-admin
  get newClienteEventEmitter(): EventEmitter<Cliente> {
    return this._clienteEventEmitter;
  }

  // Se emite en el onLogin del auth.component
  // Se escucha en el handlerLogin del auth.component
  get handlerLoginEventEmitter(): EventEmitter<any> {
    return this._handlerLoginEventEmitter;
  }
}
