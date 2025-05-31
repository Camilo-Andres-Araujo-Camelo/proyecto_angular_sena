import { Ciudad } from './ciudad';

export class Ruta {
  public id: number = 0;
  public origen: Ciudad = new Ciudad();
  public destino: Ciudad = new Ciudad();
  public precio: number = 0;

  constructor(init?: Partial<Ruta>) {
    Object.assign(this, init);
  }
}
