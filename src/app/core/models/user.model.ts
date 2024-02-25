export class User {
  constructor(
    public usuario_app_id: number,
    public correo: string,
    public celular: string,
    public contrasena: string,
    public fecha_nacimiento: string
  ) {}
 }
