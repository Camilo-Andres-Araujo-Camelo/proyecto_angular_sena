export class Rol {
  public id: number = 0;
  public nombre: string = '';

  constructor(init?: Partial<Rol>) {
    Object.assign(this, init);
  }
}
