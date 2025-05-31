import { Persona } from './persona';
import { Rol } from './rol';

export class Empleado extends Persona {
  public password: string = '';
  public roles: Rol[] = [new Rol()];

  constructor(init?: Partial<Empleado>) {
    super(init);
    if (init) {
      Object.assign(this, { ...init, roles: undefined });
      this.roles = init?.roles?.map((r) => new Rol(r)) || [];
    }
  }
}

export interface EmpleadosResponse {
  message: string;
  total: number;
  data: Empleado[];
}

export interface EmpleadoResponse {
  message: string;
  data: Empleado[];
}
