// import { TaskDTO } from '@infraestructure/dto/task.dto';
import { userDTO } from '../../infraestructure/dto/user.dto';
import { User } from '../models/user.model';
// import { Task } from '../models/task.model';

export class UserMapper {
 static fromApiToDomain(apiUser: userDTO): User {
   return {
     usuario_app_id: apiUser.usuario_app_id,
     correo: apiUser.correo,
     celular: apiUser.celular,
     contrasena: apiUser.contrasena,
     fecha_nacimiento: apiUser.fecha_nacimiento,
   };
 }




 static fromDomainToApi(domainUser: User): userDTO {
   return {
    usuario_app_id: domainUser.usuario_app_id,
    correo: domainUser.correo,
    celular: domainUser.celular,
    contrasena: domainUser.contrasena,
    fecha_nacimiento: domainUser.fecha_nacimiento,
   };
 }
}
