import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RecoverPasswordComponent } from './features/recover-password/recover-password.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'recover',
        component: RecoverPasswordComponent
    }
];
