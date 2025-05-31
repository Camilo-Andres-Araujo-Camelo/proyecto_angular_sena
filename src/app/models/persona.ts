export abstract class Persona {
  public id: string = '';
  public tipoDocumento: 'CC' | 'TI' | 'CE' | 'PA' = 'CC';
  public nombres: string = '';
  public apellidos: string = '';
  public fechaNacimiento: string = '';
  public sexo: 'M' | 'F' = 'M';
  public direccion: string = '';
  public telefono: string = '';
  public email: string = '';

  constructor(init?: Partial<Persona>) {
    Object.assign(this, init);
  }
}
