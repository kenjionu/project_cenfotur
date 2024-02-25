import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../../core/respositories/user.respository';
import { User } from '../../core/models/user.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepositoryImpl } from '../../infraestructure/repositories/user.repository.impl';
import { UserService } from '../../infraestructure/services/user/user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, map, takeUntil } from 'rxjs';
UserRepository
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [UserService,
    {
      provide: UserRepository, useClass: UserRepositoryImpl
    }

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  users: any;
  loginForm: FormGroup = new FormGroup({
    username_email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  constructor(private userRepository: UserRepository, private formBuilder: FormBuilder) {
  }



  ngOnInit(){
  }
  login(): void {
    // console.log(this.loginForm.value)
    this.userRepository.Login(this.loginForm.value)
    .pipe(
      takeUntil(this.users),
      map(res => this.users = res ));
      catchError((err, caught) => caught)


    // .subscribe({
    //   next: (user: User) => {
    //     this.users = user;
    //   },
    //   error: (error) => {
    //     console.error('Error al cargar las tareas:', error);
    //   },
    // });
  }
}
