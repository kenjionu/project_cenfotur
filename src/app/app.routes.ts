import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RecoverPasswordComponent } from './features/recover-password/recover-password.component';
import { SelectPanelComponent } from './features/auth/select-panel/select-panel.component';
import { authGuard } from './features/auth/auth.guard';

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
    },
    {
      path: 'auth',
      // canActivateChild: [authGuard],
      children: [
        {
          path: 'select-panel',
          component: SelectPanelComponent
        }
      ]
    },
];
