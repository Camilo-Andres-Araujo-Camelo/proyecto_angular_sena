import { Cliente } from './cliente';
import { Tiquete } from './tiquete';

export class Factura {
  public id: number = 0;
  public fechaEmision: String = new Date().toLocaleString();
  public titular: Cliente = new Cliente();
  public tiquetes: Tiquete[] = [];
  public total: number = 0;

  constructor(init?: Partial<Factura>) {
    if (init) {
      Object.assign(this, init);
      this.titular = init?.titular ? new Cliente(init?.titular) : new Cliente();
      this.tiquetes = init?.tiquetes?.map((t) => new Tiquete(t)) || [];
    }
  }
}
