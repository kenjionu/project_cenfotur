import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { TaskMapper } from '@core/mappers/task.mapper';
// import { Task } from '@core/models/task.model';
// import { TaskDTO } from '@infraestructure/dto/task.dto';
import { Observable, map } from 'rxjs';
import { Auth } from '../../../core/models/auth.model';
import { AuthMapper } from '../../../core/mappers/auth.mappers';
import { authDTO } from '../../dto/auth.dto';

// import { userDTO } from '../../dto/user.dto';
// import { User } from '../../../core/models/user.model';
// import { UserMapper } from '../../../core/mappers/user.mappers';

@Injectable({
 providedIn: 'root',
})
export class UserService {
 private apiUrl = 'http://localhost:3001/users';

 constructor(private http: HttpClient) {}


 Login(auth: Auth): Observable<Auth> {
   const apiTask = AuthMapper.fromDomainToApi(auth);
   return this.http
     .post<authDTO>(this.apiUrl, apiTask)
     .pipe(map(AuthMapper.fromApiToDomain));
 }

}
