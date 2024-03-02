import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../../core/respositories/user.respository';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepositoryImpl } from '../../infraestructure/repositories/user.repository.impl';
import { UserService } from '../../infraestructure/services/user/user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, map, takeUntil } from 'rxjs';
import { Router } from '@angular/router';


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
    remember: new FormControl('')
  });

  constructor(private userRepository: UserRepository, private router: Router) {
  }



  ngOnInit(){
  }
  login(): void {
    console.log(this.loginForm.value)
    this.router.navigate(['/auth/select-panel'])

    // this.userRepository.Login(this.loginForm.value)
    // .pipe(
    //   takeUntil(this.users),
    //   map(res => {
    //     // this.redirectSelectPanel(res)
    //   }));
    //   catchError((err, caught) => caught)

  }

  // redirectSelectPanel(user: any){

  // }
}
