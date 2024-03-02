import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss'
})
export class RecoverPasswordComponent {
formSubmit: boolean = false;
recoverForm: FormGroup = new FormGroup({
  username_email: new FormControl('',[Validators.email, Validators.required])
});

  recoverUser(){
    this.formSubmit = true;
    console.log('test')
  }

  comeBack(back: boolean){
    this.formSubmit = back;
  }
}
