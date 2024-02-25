import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../core/models/user.model';
import { UserService } from '../services/user/user.service';
import { UserRepository } from '../../core/respositories/user.respository';
import { HomeComponent } from '../../features/home/home.component';

@Injectable({
 providedIn: HomeComponent,
})
export class UserRepositoryImpl implements UserRepository {
 constructor(private userService: UserService) {}


 Login(user: User): Observable<User> {
   return this.userService.Login(user);
 }
}
