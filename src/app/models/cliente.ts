import { Persona } from './persona';

export class Cliente extends Persona {
  public fechaRegistro: string = '';

  constructor(init?: Partial<Cliente>) {
    super(init);
    this.fechaRegistro =
      init?.fechaRegistro || new Date().toISOString().split('T')[0];
  }
}

export interface ClientesResponse {
  message: string;
  total: number;
  data: Cliente[];
}

export interface ClienteResponse {
  message: string;
  data: Cliente[];
}
