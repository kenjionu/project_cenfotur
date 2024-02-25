import { Observable } from 'rxjs';
import { User } from '../models/user.model';

export abstract class UserRepository {
//  abstract getUser(): Observable<User[]>;
 abstract Login(user: User): Observable<User>;
//  abstract updateTask(task: User): Observable<void>;
//  abstract deleteTask(id: number): Observable<void>;
}
