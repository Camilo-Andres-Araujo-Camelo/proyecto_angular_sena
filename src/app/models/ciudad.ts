export class Ciudad {
  public id: number = 0;
  public nombre: string = '';
  public lat: number = 0;
  public lng: number = 0;

  constructor(init?: Partial<Ciudad>) {
    Object.assign(this, init);
  }
}
