// import { TaskDTO } from '@infraestructure/dto/task.dto';
// import { userDTO } from '../../infraestructure/dto/user.dto';
import { authDTO } from '../../infraestructure/dto/auth.dto';
import { userDTO } from '../../infraestructure/dto/user.dto';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';

// import { Task } from '../models/task.model';

export class AuthMapper {
 static fromDomainToApi(apiUser: authDTO): Auth {
   return {
     username: apiUser.username,
     password: apiUser.password,
   };
 }



 static fromApiToDomain(domainUser: Auth): authDTO {
   return {
    username: domainUser.username,
    password: domainUser.password,
   };
 }
}
