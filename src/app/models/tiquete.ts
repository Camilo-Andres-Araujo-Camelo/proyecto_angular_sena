import { Cliente } from './cliente';

export class Tiquete {
  public id: number = 0;
  public fechaCompra: string = '';
  public pasajero: Cliente = new Cliente();
  public numeroSilla: number = 0;

  constructor(init?: Partial<Tiquete>) {
    if (init) {
      Object.assign(this, { ...init, pasajero: undefined });
      this.pasajero = init?.pasajero
        ? new Cliente(init?.pasajero)
        : new Cliente();
    }
  }
}
