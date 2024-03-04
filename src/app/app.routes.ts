import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RecoverPasswordComponent } from './features/recover-password/recover-password.component';
import { SelectPanelComponent } from './features/auth/select-panel/select-panel.component';
import { authGuard } from './features/auth/auth.guard';
import path from 'path';
import { AdminFeaturesComponent } from './features/auth/admin-features/admin-features.component';
import { PanelComponent } from './features/auth/admin-features/panel/panel.component';
import { InterestingSitesComponent } from './features/auth/admin-features/interesting-sites/interesting-sites.component';
import { UsersComponent } from './features/auth/admin-features/users/users.component';
import { SpamComponent } from './features/auth/admin-features/spam/spam.component';
import { ClaimsComponent } from './features/auth/admin-features/claims/claims.component';
import { ConfigComponent } from './features/auth/admin-features/config/config.component';
import { RoutesComponent } from './features/auth/admin-features/routes/routes.component';

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
          component: SelectPanelComponent,

        },
        {
          path: 'admin-features',
          component: AdminFeaturesComponent,
          children: [
            {
              path: '',
              redirectTo: 'panel',
              pathMatch: 'full',
            },
            {
              path: 'panel',
              component: PanelComponent,
            },
            {
              path: 'routes',
              component: RoutesComponent,
            },
            {
              path: 'interesting-sites',
              component: InterestingSitesComponent
            },
            {
              path: 'user',
              component: UsersComponent
            },
            {
              path: 'spam',
              component: SpamComponent
            },
            {
              path: 'claims',
              component: ClaimsComponent
            },
            {
              path: 'config',
              component: ConfigComponent
            },
          ]

        }
      ],

    },
];
